// sibling of Hog Container 
// return select tag with three options name and weight , all
// this will allow user to sort by name and weight 

import React from "react";
import { Dropdown } from 'semantic-ui-react';

function Sort( { setSortBy }) {
  const options = [
    { key: 'all', text: 'All', value: 'All' },
    { key: 'name', text: 'Sort By Name', value: 'Sort By Name' },
    { key: 'age', text: 'Sort By Weight', value: 'Sort By Weight' },
  ];

    const dropdownStyle = {
    width: '150px', // Adjust the width if needed
    height: '25px', // Adjust the height if needed
  };

    const dropdownContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8vh', // Set the height of the container
  };


// In Semantic UI React, the Dropdown component passes the selected value directly to the onChange handler without the need to access e.target.

function handleChange(event , data) {
  console.log(data.value)
  const selectedValue = data.value
  setSortBy(selectedValue)

}

  return (
    <div style={dropdownContainerStyle}>
      <Dropdown
        onChange={handleChange}
        placeholder='Select Sorting'
        fluid
        selection
        options={options}
        style={dropdownStyle}
      />
    </div>
  );
}

export default Sort;