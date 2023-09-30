import React from "react";
import { useState } from "react";



function App () {
    const [showMore , setShowMore] = useState(false) 
//   const setShowMoreBtn = () => {

//   }
  var text = `A Developer Hasan more info about me click... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam cupiditate dolore voluptas blanditiis adipisci rerum maxime tempora quisquam et! Totam aliquam a fuga. Quo modi sequi accusamus expedita pariatur, quisquam fugia...`
//   var text2 = text.split()
  

  let text2 = text.split(' ')
  return (
   <>
   <h1 style={{textAlign:'center', backgroundColor:'black', color:'white'}}>
    Show More Data
   </h1>
   <p>
    {showMore ? text : `${text2.slice(0,8).join(" ")}` }
    <span onClick={() => setShowMore (!showMore)} style={{color:'blue'}}>
      {showMore ? "ShowLess" :"ShowMore"}
    </span>
   </p>
   
   
      </>
  );
}

export default App;
