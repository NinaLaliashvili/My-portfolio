import React, { useState, useEffect } from "react";
import bugImage from "../Images/bbug.png";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../CustomLoader/CustomLoader";

function Bug({ onCatch }) {
  const [position, setPosition] = useState({
    left: Math.random() * window.innerWidth,
    top: Math.random() * window.innerHeight,
  });
  const navigate = useNavigate();
  const [direction, setDirection] = useState(Math.random() * 360);
  const [speed, setSpeed] = useState(5 + Math.random() * 15);
  const [bugSize, setBugSize] = useState(40 + Math.random() * 20);
  const [opacity, setOpacity] = useState(0.7 + Math.random() * 0.3);
  const [showLoader, setShowLoader] = useState(false);

  const handleBugClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      navigate("/secret");
      setShowLoader(false);
      if (onCatch) onCatch();
    }, 3000);
  };

  useEffect(() => {
    const changeDirection = () => {
      const newDirection = direction + (Math.random() * 90 - 45);
      setDirection(newDirection);
    };

    const randomizeSpeed = () => setSpeed(2 + Math.random() * 6);
    const randomizeSize = () => setBugSize(40 + Math.random() * 20);
    const randomizeOpacity = () => setOpacity(0.7 + Math.random() * 0.3);

    let movementInterval;
    const startMoving = () => {
      movementInterval = setInterval(() => {
        const newX = position.left + Math.cos(direction) * speed;
        const newY = position.top + Math.sin(direction) * speed;

        if (
          newX < 0 ||
          newX > window.innerWidth ||
          newY < 0 ||
          newY > window.innerHeight
        ) {
          setDirection((direction + 180) % 360);
          changeDirection();
        } else {
          setPosition({
            left: newX,
            top: newY,
          });
        }
      }, 50);
    };
    const stopMoving = () => clearInterval(movementInterval);
    const toggleMovement = () => {
      if (movementInterval) {
        stopMoving();
      } else {
        startMoving();
      }
    };

    startMoving();

    const directionChangeInterval = setInterval(
      changeDirection,
      1000 + Math.random() * 3000
    );
    const speedChangeInterval = setInterval(randomizeSpeed, 5000);
    const sizeChangeInterval = setInterval(randomizeSize, 7000);
    const opacityChangeInterval = setInterval(randomizeOpacity, 6000);
    const movementToggleInterval = setInterval(
      toggleMovement,
      3000 + Math.random() * 7000
    );

    return () => {
      clearInterval(movementInterval);
      clearInterval(directionChangeInterval);
      clearInterval(speedChangeInterval);
      clearInterval(sizeChangeInterval);
      clearInterval(opacityChangeInterval);
      clearInterval(movementToggleInterval);
    };
  }, [position, direction]);

  return (
    <>
      {showLoader && <CustomLoader />}
      <img
        src={bugImage}
        alt="Bug"
        style={{
          position: "fixed",
          left: `${position.left}px`,
          top: `${position.top}px`,
          width: `${bugSize}px`,
          opacity: opacity,
          cursor: "pointer",
        }}
        onClick={handleBugClick}
      />
    </>
  );
}

export default Bug;
