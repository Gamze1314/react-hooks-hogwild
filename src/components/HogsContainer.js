import React, { useState } from 'react';
import HogTile from './HogTile';

function HogsContainer ({ hogs, onPointerMove , onPointerLeave }) {
  const [showHogs, setShowHogs] = useState(true);

  const handlePointerMove = () => {
    setShowHogs(false);
  };

  const handlePointerLeave = () => {
    setShowHogs(true);
  };

  const mappedHogs = hogs.map((hog) => (
    <HogTile
      key={hog.name}
      name={hog.name}
      specialty={hog.specialty}
      greased={hog.greased}
      weight={hog.weight}
      image={hog.image}
      medalStatus={hog["highest medal achieved"]}
    />
  ));

  return (
    <div
      className="ui grid container"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {showHogs && mappedHogs}
    </div>
  );
}

export default HogsContainer;