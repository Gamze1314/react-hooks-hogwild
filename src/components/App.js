import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";
import Filter from "./Filter";
import Form from "./Form";
import Sort from "./Sort";


function App() {
  const [filteredHogs, setFilteredHogs] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [ showHogs , setShowHogs ] = useState(true)

  // Filterased hogs => passed down to Hogs Container to be rendered
  const greasedOnes = hogs.filter((hog) =>
    filteredHogs ? hog.greased === true : hog
  );

  // Conditionally choose between these two sorted arrays based on the sortBy state.
  let sortedHogs = greasedOnes;
  if (sortBy === 'Sort By Name') {
    sortedHogs = [...greasedOnes].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  } else if (sortBy === 'Sort By Weight') {
    sortedHogs = [...greasedOnes].sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />
      <Sort setSortBy={(selectedValue) => setSortBy(selectedValue)} />
      <Filter
        showGreasedOnes={() => setFilteredHogs(!filteredHogs)}
        filteredHogs={filteredHogs}
      />
      <Form />
      {showHogs ? <HogsContainer onPointerMove={() => setShowHogs(!showHogs)} onPointerLeave={() => (!showHogs)} hogs={sortedHogs} /> : null }
    </div>
  );
}

export default App;


