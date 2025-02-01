'use client';
import React, { useState, useEffect  } from 'react';
import styles from '../css/MouseEffect.module.css';

const MouseEffect: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className={styles['cursor-circle']} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        <div className={styles['cursor-point']}></div>
      </div>
    );
  };


export default MouseEffect;
