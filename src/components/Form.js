import React from 'react'
import { Button , Checkbox } from 'semantic-ui-react'

function Form() {
  return (
    <div >
      Add a Piggy!
      <form className="form-container">
        <div className="form-group">
        <label htmlFor="name">Hog Name</label>
        <input 
        type="text" 
        name="name" 
        value="" 
        style={{ width: '300px', height: '25px' }}/>
        <br/>
        </div>
        
        <div className="form-group">
        <label htmlFor="greased">Greased?</label>
        <Checkbox></Checkbox>
        </div>
        
        <div className="form-group">
        <label htmlFor="weight">Weight</label>
        <input 
        type="text" 
        name="weight" 
        value="" 
        style={{ width: '300px', height: '25px' }}/>
        <br/>
        </div>

        <div className="form-group">
        <label htmlFor="medalStatus">Medal Status</label>
        <input 
        type="text" 
        name="medalStatus"
        value=""
        style={{ width: '300px', height: '25px' }}/>
        <br/>
        <Button style={{color: 'pink'}} type="submit">Add</Button>
        </div>
      </form>
    </div>
  );
}

export default Form
