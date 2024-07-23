import React, { useState, useEffect } from 'react';
import '../../css/cursor.scss'; // Make sure to create this CSS file or use your own

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div 
        className="image" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      />
    </div>
  );
};

export default Cursor;
