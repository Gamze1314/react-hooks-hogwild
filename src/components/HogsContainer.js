import React, { useState } from 'react'
import hogs from "../porkers_data";
import HogDetails from './HogDetails';
import HogTile from './HogTile';

function HogsContainer( { hogs }) {


    const mappedHogs = hogs.map((hog) => {
  
        return (
        <HogTile 
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        image={hog.image}
        medalStatus={hog["highest medal achieved"]}
        />
      )})

    return (
        <div className="ui grid container">
        {mappedHogs}
        </div>
    );
}


export default HogsContainer
