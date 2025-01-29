import {useState} from 'react';
//useState is the hook which will update UI in multiple places 

import './App.css'

function App() {
  //useState hook
  //we get two things from useState() in the array form
  //so baically setCounter is a function which will control the updation of counter varible
  //it is not necessary to name setCounter name can be superman also
  //We have did the syncing of state and UI
  let [counter, setCounter]=useState(0)


  const increaseValue = () =>{
    counter = counter + 1
    setCounter(counter)
    console.log("Value added", Math.random())
    console.log(counter)
  }

  const removeValue = () => {
    counter = 0
    setCounter(counter)
    console.log("Value added", Math.random())
    console.log(counter)
  }

  const decreseValue = () => {
    if((counter -1)<0){
      return
    }
    counter = counter - 1 
    setCounter(counter)
    console.log("Value added", Math.random())
    console.log(counter)
  }

  return (
    <>
      <h1>Winter is Here</h1>
      <h2>Counter value : {counter}</h2>

      <button 
      onClick={increaseValue}
      >Increase Value By 1:{counter}</button>
      
      <br/>

      <button
      onClick={removeValue}
      >Remove Value:{counter}</button>

      <br/>

      <button
      onClick={decreseValue}
      >Decrease Value By 1:{counter}</button>
    </>
  )
}

export default App