import React from "react";

import './App.css';
import Card from "./Card";

function App() {
 
  
  return (
    <div className="App">
      <div className="container">
       <Card 
        src={process.env.PUBLIC_URL + "/student.jpeg"} 
        title="Teacher Portal" 
        text="Click to go to teacher portal"
        link="/login"
        />
        <Card
        src={process.env.PUBLIC_URL + "/student.jpeg"} 
        title="Student Portal" 
        text="Click to go to Student portal"
        link="/studentlogin"
         />
      </div>
    </div>
   
  );
}

export default App;
