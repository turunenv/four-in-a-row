import './styles/ActiveDisk.css'

import { useEffect, useState } from 'react';

interface ActiveDiskProps {
  playerOneIsNext: boolean;
}

export const ActiveDisk = ({ playerOneIsNext, winner }: ActiveDiskProps) => {
  const [location, setLocation] = useState({ x: 400, y: 400 });

  const DISK_HEIGHT = 56;
  const DISK_WIDTH = 56;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log(`e.clientX: ${e.clientX}, vw: ${window.innerWidth}`)
      setLocation({ 
        x: Math.min(e.clientX - (DISK_HEIGHT / 2), window.innerWidth - DISK_WIDTH), 
        y: Math.min(e.clientY + 10, window.innerHeight - DISK_HEIGHT) 
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [])

  const style = {
    top: location.y,
    left: location.x,
    backgroundColor: playerOneIsNext ? 'red' : 'yellow',
  }
  
  
  return (
    <div className="active-disk" style={style}>
    </div>
  )
}