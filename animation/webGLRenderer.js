import React, { useEffect, useRef } from 'react';

function WebGLRenderer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a WebGL context and set up your shader program here
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');


    // Render your scene here

  }, []);

  return <canvas ref={canvasRef} width={400} height={400} />;
}

export default WebGLRenderer;