import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

function SecondSecretPage() {
  const navigate = useNavigate();
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleLeave = () => {
    navigate("/");
  };

  return (
    <div
      ref={mountRef}
      style={{ height: "100vh", width: "100vw", position: "relative" }}
    >
      <button
        onClick={handleLeave}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "8px 16px",
          background: "rgba(255, 255, 255, 0.8)",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          zIndex: 1,
        }}
      >
        Leave
      </button>
    </div>
  );
}

export default SecondSecretPage;
