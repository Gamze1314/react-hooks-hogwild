import React, { useState } from 'react'
import { Card , Image, Button , Checkbox , Divider } from 'semantic-ui-react'
import HogDetails from './HogDetails'

function HogTile({
    name,
    specialty,
    greased,
    weight ,
    image ,
    medalStatus
}) {

    const [ showDetails , setShowDetails ] = useState(false) 

    function handleClick(e){
      console.log(e)
        showDetails ? setShowDetails(false) : setShowDetails(true)

    }


  return (
    <Card className="ui eight wide column">
        <Card.Header>{name}</Card.Header>
        <Image src={image} alt="hog image"></Image>
        <Divider hidden>
        </Divider>
        {showDetails ? <HogDetails specialty={specialty} greased={greased} weight={weight} medalStatus={medalStatus} /> : null}
        <Button onClick={handleClick}>Show Hog Details</Button>
    </Card>
  )
}

// add HogDetails in the Card
export default HogTile
