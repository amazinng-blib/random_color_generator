import { useState } from 'react';
import './styles.css';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('green');

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    const rgb = `rgb(${r}, ${g}, ${b})`;

    setColor(rgb);
  };

  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: `${color ? color : 'var(--background-color)'}`,
      }}
    >
      <div className="container">
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === 'hex'
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="display-color">
        <p>{color}</p>
      </div>
    </div>
  );
};

export default RandomColor;
