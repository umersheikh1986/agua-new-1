// components/PieChart3D.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PieChart3D = () => {
  const pieChartRef = useRef();

  useEffect(() => {
    const data = [
      { value: 40, color: 0xff5733 }, // Segment 1
      { value: 30, color: 0x33c7ff }, // Segment 2
      { value: 20, color: 0xff33d1 }, // Segment 3
      { value: 10, color: 0x75ff33 }, // Segment 4
    ];

    const total = data.reduce((sum, current) => sum + current.value, 0);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    pieChartRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Create the pie chart
    const radius = 2;
    const height = 0.5; // Thickness of the pie chart
    let startAngle = 0;

    data.forEach((segment) => {
      const endAngle = startAngle + (segment.value / total) * Math.PI * 2;
      const geometry = new THREE.CylinderGeometry(radius, radius, height, 32, 1, false, startAngle, endAngle - startAngle);
      const material = new THREE.MeshStandardMaterial({ color: segment.color });
      const slice = new THREE.Mesh(geometry, material);

      slice.rotation.x = Math.PI / 2; // Rotate to make it flat
      scene.add(slice);

      startAngle = endAngle;
    });

    const animate = () => {
      requestAnimationFrame(animate);

      // Optional: Rotate the pie chart for a 3D effect
      scene.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing the canvas when window size changes
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      pieChartRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={pieChartRef}></div>;
};

export default PieChart3D;
