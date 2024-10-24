import { useState } from 'react'
import './App.css'

function App() {
  let[counter,setcounter]=useState(15)
  const addvalue=()=>{
    if(counter+1<=20){
      counter=counter+1
      console.log('clicked',counter);
      setcounter(counter)
    }
  }

  const removevalue=()=>{
    if(counter>=1){
      setcounter(counter-1)
    }
  }
  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value : {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br />
    <br />
    <button onClick={removevalue}>Remove value </button>
    </>
  )
}

export default App
