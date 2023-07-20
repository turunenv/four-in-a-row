import './styles/ActiveDisk.css'

import { useEffect, useState } from 'react';

interface ActiveDiskProps {
  playerOneIsNext: boolean;
}

export const ActiveDisk = ({ playerOneIsNext, winner }: ActiveDiskProps) => {
  const [location, setLocation] = useState({ x: 400, y: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setLocation({ x: e.clientX - 28, y: e.clientY + 10 });
    }

    window.addEventListener('mousemove', handleMouseMove)

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