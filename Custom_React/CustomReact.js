//this function will add the `reactElement` into `container`
function customRender(reactElement, container){
    /*
    //step 1 : Create the element
    const domElement = document.createElement(reactElement.type)

    //step 2 : Inner HTML added to domElement we've just created
    domElement.innerHTML = reactElement.children;

    //step 3 : set attribute
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement);
    */

    //moduler code

   //step 1 : Create the element
   const domElement = document.createElement(reactElement.type)

   //step 2 : Inner HTML added to domElement we've just created
   domElement.innerHTML = reactElement.children;

   for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
   }

   container.appendChild(domElement)
}

const reactElement = {
    //type shows the type of attribute
    type : 'a',
    props: {
        href : "https://google.com",
        target : "_blank"
    }, //is a object
    children : "Click me to visit Google"
}

//we now just want that `React ` will the above element `reactElement` into the root
const mainContainer = document.querySelector('#root')

//It expects two thigs to be injected: what to inject?, where to inject?
customRender(reactElement, mainContainer)
//here we have injected `reactElement` into `mainContainer`


//i want to render the <a><a/> tag