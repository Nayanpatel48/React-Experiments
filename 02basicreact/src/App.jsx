import Chai from "./Chai"
import Greet from "./Greet"
//here we have to import the `Chai` as well as `Greet` function to use it

//here just because we are creating a component using vite it stricty tells us to name the
//file with .jsx

//In best practices of vite we should name the function with capital letter `Chai` not `chai`

//injecting javaScript in the `App function`

function App() {
  return (
    <>
      <Chai/>
      <Greet/>
    </>
  )
}

export default App