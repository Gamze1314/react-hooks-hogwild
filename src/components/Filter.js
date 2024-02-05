// sibling of HogsContainer
//Allow the user to filter the hogs that are greased
//Allow the user to sort the hogs based on name or weight

import React from "react";
import { Button } from 'semantic-ui-react'
import hogs from '../porkers_data'
import HogsContainer from "./HogsContainer";


function Filter({showGreasedOnes ,filteredHogs}){


    function handleClick() {
        showGreasedOnes()
    }

    return (
        <Button onClick={() => handleClick()} style={{color: 'pink'}}>{filteredHogs ? "Show all" : "Show greased piggies 😯"}</Button>

)
}


export default Filter