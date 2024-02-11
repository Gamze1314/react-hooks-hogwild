// sibling of HogsContainer
//Allow the user to filter the hogs that are greased

import React from "react";
import { Button } from 'semantic-ui-react'


function Filter({showGreasedOnes ,filteredHogs}){


    function handleClick() {
        showGreasedOnes()
    }

    return (
        <Button onClick={() => handleClick()} style={{color: 'pink'}}>{filteredHogs ? "Show all" : "Show greased piggies 😯"}</Button>

)
}


export default Filter