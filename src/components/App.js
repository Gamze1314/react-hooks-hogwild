import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import Filter from "./Filter";
import Form from "./Form";
import HogTile from "./HogTile";

// render Form, sort buttons and filter buttons after Nav component.

function App() {

	const [ filteredHogs , setFilteredHogs ] = useState(false)
console.log(filteredHogs)
	 const greasedOnes = hogs.filter((hog) => filteredHogs ? hog.greased === true : hog)

	function showGreasedOnes(){
		setFilteredHogs(!filteredHogs)
	}

	return (
		<div className="App">
			<Nav />
			<Filter showGreasedOnes={showGreasedOnes} filteredHogs={filteredHogs} />
			<Form />
			<HogsContainer  hogs={greasedOnes} />
		</div>
	);
}

export default App;


