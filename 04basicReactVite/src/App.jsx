import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //creating an object in order to pass it into <Card/>
  let myObject = {
    userName : "Nayan",
    age : 20
  }

  //Creating array in order to pass it into <Card>
  let myArr = [
    1,2,3,4
  ]
  return (
    //here <></> is called as fragments
    <>
      <h1>Hello Winter</h1>

      {/* whatever you pass here will be there filled in the props */}
      {/* WE just have to pass the values in the form of variables in the props just as we have 
      passed myObject  */}
      {/* Similar way we pass can pass the array as we passed `myObject` prevously */}
      {/* <Card channel='chai aur code' someObject={myObject} someArr={myArr}/> */}


      {/* We've passed userName to the below card */}
      {/* Now since we've `passed` the userName to the card it should use it? */}
      <Card userName='Nayan' title='Unify'/>
      <Card userName='hello' title='Simplify'/>
    </>
  )
}

export default App
