import './index.css';

import React , { useState } from 'react';


const isColor = (strColor) => {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}

function App(props) {


  function handleInput( event ) 
  {
    setcolor( event.target.value );
  }
   
  function handleColor( color , event )
  {
    if( isColor( color ) && color !== divcolor )
    {

      setdivcolor( color );
      setcount( count + 1 );
    } 
  }

    const [color, setcolor] = useState("color");
    const [count, setcount] = useState(0);
    const [divcolor , setdivcolor] = useState("color");

  return (
    <div >
      <input type="text" value= {color} onChange={ handleInput }  />
      <button  onClick = { () => { handleColor(color) } } >apply color</button>
      <p> {count} </p>
      <div className="colored-div" style={ { backgroundColor: divcolor } } ></div>
      
    </div>
  );
}

export default App;
