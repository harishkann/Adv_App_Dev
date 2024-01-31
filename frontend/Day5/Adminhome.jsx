// import React from 'react'
import Header from "./Header"
import ButtonContainer from "./ButtonContainer"
import List from "./List"

const Adminhome = () => {
  return (
    <div style={containerStyle}>
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <center> <ButtonContainer></ButtonContainer></center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <List></List>
    </div>
  );
};

// CSS styles
const containerStyle = {
  background: 'linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100% )', // Replace the colors as per your preference
  backgroundColor: '#f0f0f0', // Fallback background color
  // Add other styles as needed
};
//background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
export default Adminhome;
