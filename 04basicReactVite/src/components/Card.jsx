import React from 'react'

// function Card(props) {

//we can destructure props as follows suing {}
    function Card(
        {userName='Unknown',title='visit me'}
    ) {
    //const {} = props
    //console.log(props)
    //We can pass the objects to the elements like <Card/> using props

    //After passing userName into the <Cards/> component we can access it using props 
    //by writting `props.userName`
    //Display : Nayan
    //console.log(props.userName)

    //we can directly user the userName now
    console.log(userName)

    //it will return the card
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        {/* image link is copied */}
        <h1>{userName}</h1>
          <img
            src="https://images.pexels.com/photos/15258473/pexels-photo-15258473/free-photo-of-woman-walking-with-hands-in-pockets.jpeg"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                {/* if there is no title passed to the props it will show alternative text which is 'visit me' */}
              {/* {title || 'visit me'} */}
              {title}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
          </p>
        </div>
    )
}
export default Card