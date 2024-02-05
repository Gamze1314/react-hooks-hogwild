import React from 'react'
import hogs from '../porkers_data'
import { Card } from 'semantic-ui-react';

function HogDetails({
    specialty,
    greased,
    weight ,
    medalStatus
}) {


  return (
    <Card.Meta>
        <ul>
            <li style={{ backgroundColor: 'white', color: 'pink'}}>{specialty}</li>
            <li style={{backgroundColor: 'white', color: 'pink'}}>Greased Status : {greased ? "Y" : "N"}</li>
            <li style={{backgroundColor: 'white',color: 'pink'}}>{medalStatus}</li>
            <li style={{backgroundColor: 'white',color: 'pink'}}>{weight}</li>
        </ul>
    </Card.Meta>
  );
}

export default HogDetails

// render hog details once user clicks on hog tile
// onClick on div HogTile => pass callback function to the parent component to render details of hogs. 
// return div=> h1=> h2 => p for speciality,greased status, and weight 

// add on Click event on div 
// callback func => will handle the click event 
// return elements from the function 
// pass cb as a prop to parent component 