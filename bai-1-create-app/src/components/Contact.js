import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
// hook

export default function Contact() {

  // this.state = {name: 'test'} === name
  // setName === this.setState({name: newValue})

  const [name, setName] = useState("test");
  const [isRed, setIsRed] = useState(false);

  const onchangeName = (e) => {
    setName(e.target.value);
  }

  const updateColorText = () => {
    setIsRed(!isRed);
  }

  return (
    <div>
      <p style={{ "color": isRed ? "red" : "blue"}}> {name} </p>
     
      <TextField id="outlined-basic" onChange={onchangeName} value={name} label="Outlined" variant="outlined" />
      <Button onClick={updateColorText} variant="contained">click change color</Button>
    </div>
  )
}
