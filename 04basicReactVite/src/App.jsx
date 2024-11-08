import Card from './components/Card'
import './App.css'

function App() {
  return (
    //here <></> is called as fragments
    <>
      {/* whatever you pass here will be there filled in the props */}
      {/* WE just have to pass the values in the form of variables in the props just as we have 
      passed myObject  */}
      {/* Similar way we pass can pass the array as we passed `myObject` prevously */}
      {/* <Card channel='chai aur code' someObject={myObject} someArr={myArr}/> */}


      {/* We've passed userName to the below card */}
      {/* Now since we've `passed` the userName to the card it should use it? */}
      <div className="grid items-center justify-center grid-cols-2">
        <div className="m-4">
          <Card userName='Nayan' title='Unify'/>
        </div>
        <div className="m-4"> 
          <Card userName='hello' title='Simplify'/>
        </div>
      </div>
    </>
  )
}

export default App
