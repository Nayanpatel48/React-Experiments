import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

//there is no need to export this `MyApp` function cause it is in the main file where it is being used
//unlike `Chai` function which is there in another file called `Chai.jsx` so it needs to be exported

function MyApp(){
    return(
        <div>
            <h1>My app!</h1>
        </div>
    )
}

//whatever you write in the MyApp(){ } will be `parsed`in the code like this 

// const ReactElement = {
//     //type shows the type of attribute
//     type : 'a',
//     props: {
//         href : "https://google.com",
//         target : "_blank"
//     }, //is a object
//     children : "Click me to visit Google"
// }

const anotherElement = (
    <a href="http://google.com" target='_blank'>google</a>
)

const ReatctElement = React.createElement(
    'a',
    {href : 'https://google.com',
    target : '_blannk'}, 
    'click me to visit google'
)

createRoot(document.getElementById('root'))
.render(
    <>
    <App />
    {/* ReatctElement */}
    </>
)
