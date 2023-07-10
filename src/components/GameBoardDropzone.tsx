import './styles/GameBoardDropzone.css';

interface DropzoneProps {
  activeColumn: number | null;
  handleMouseEnter: (id: number) => void;
  handleMouseLeave: () => void;
}


export const GameBoardDropzone = ({ 
  activeColumn, 
  handleMouseEnter, 
  handleMouseLeave 
}: DropzoneProps) => {
  const dropzoneDivs = [];

  for (let i = 0; i < 7; i++) {
    const div = <div 
      key={i}
      className={`dropzone-${i} ${activeColumn === i ? 'active' : ''}`}
      onMouseEnter={() => handleMouseEnter(i)}
      ></div>

      dropzoneDivs.push(div);
  }
  return (
    <div className='drop-zone' onMouseLeave={handleMouseLeave}>
      {dropzoneDivs}
    </div>
  )
}