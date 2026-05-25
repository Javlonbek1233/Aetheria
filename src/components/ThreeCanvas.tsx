import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Dimensions
    let width = container.clientWidth || 600;
    let height = container.clientHeight || 600;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup - orthographic or high depth perspective
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // 3. Renderer with alpha (transparent background) and antialias
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Geometry - a dense sphere for vertex morphing
    const geometry = new THREE.IcosahedronGeometry(1.8, 64);

    // Save original position vector list for reference morph offsets
    const positions = geometry.attributes.position;
    const originalPositions = positions.clone();

    // 5. Material - Chrome/holographic fluid metallic shader simulation
    // Using MeshPhysicalMaterial for ultimate light dispersion (clearcoat + metalness + transmission)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x181824,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.3,
      ior: 1.5,
      thickness: 1.0,
      flatShading: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 6. Lights
    // Main key white light
    const mainLight = new THREE.DirectionalLight(0xffffff, 5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    // Cyan accent light
    const cyanLight = new THREE.PointLight(0x06b6d4, 15, 50);
    cyanLight.position.set(-4, 3, -1);
    scene.add(cyanLight);

    // Violet accent light
    const violetLight = new THREE.PointLight(0x8b5cf6, 25, 50);
    violetLight.position.set(4, -3, 2);
    scene.add(violetLight);

    // Soft yellow fill light from below
    const yellowLight = new THREE.PointLight(0xf59e0b, 10, 50);
    yellowLight.position.set(-1, -4, 3);
    scene.add(yellowLight);

    // Minimal Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Mouse interactive target
    let targetX = 0;
    let targetY = 0;
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalizing cursor coordinates -0.5 to +0.5
      mouse.x = (e.clientX / window.innerWidth) - 0.5;
      mouse.y = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      const time = clock.getElapsedTime() * 0.8;

      // Morphing computation: CPU vertex noise animation (fluid wave)
      const positionAttr = geometry.attributes.position;
      const count = positionAttr.count;

      for (let i = 0; i < count; i++) {
        const x = originalPositions.getX(i);
        const y = originalPositions.getY(i);
        const z = originalPositions.getZ(i);

        // Simple wave equations simulating high quality fluid 3D noise
        const waveX = Math.sin(x * 1.5 + time) * 0.12;
        const waveY = Math.cos(y * 1.5 + time * 1.2) * 0.12;
        const waveZ = Math.sin(z * 1.8 + time * 1.5) * 0.12;

        // Apply deformation along the normals (which is radial for a sphere)
        const factor = 1.0 + waveX + waveY + waveZ;

        positionAttr.setXYZ(i, x * factor, y * factor, z * factor);
      }

      positionAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      // Smooth horizontal/vertical swivel towards active mouse position (magnetic follow)
      targetX = mouse.x * 1.8;
      targetY = -mouse.y * 1.8;

      mesh.rotation.y += 0.004;
      mesh.rotation.x += 0.002;

      mesh.position.x += (targetX - mesh.position.x) * 0.05;
      mesh.position.y += (targetY - mesh.position.y) * 0.05;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Responsive scaling with ResizeObserver for true accuracy
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width || entry.target.clientWidth;
        height = entry.contentRect.height || entry.target.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      data-cursor="drag"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
