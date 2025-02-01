# Learnings:
# React foundation: Hooks, file structure, [article](https://github.com/acdlite/react-fiber-architecture), props, tailwind. then do projects...
## 03counter:

- Learned react hook named `useState()`
- Here is a brief example:

```javascript
  let [counter, setCounter]=useState(0)
```
* demo

https://github.com/user-attachments/assets/c5f61546-9f53-4bb2-88f2-41ceb5dfc22b

## Study react(interview perspective)

- `createRoot` creates DOM like tree.
- It will update only those parts which are updated in the UI.

- must read(interview, best article do not go on chatgpt): [article](https://github.com/acdlite/react-fiber-architecture)
- note : key features of react can be asked in interview.
- `Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM.`
- video for understanding: [chai aur code](https://youtu.be/MPCVGFvgVEQ?si=1P3xd_db7cMzFfhB)
- `Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."`

## 04TailwindProps

- props usage learned.
- we can make component which will return some HTML in this example which is `Card`. 
- The basic usage of `props` is that we can pass values like `variables`, `objects`, `arrays` etc accross
various components.

- demo:

https://github.com/user-attachments/assets/b28cf9d8-41a8-4bb9-8db1-96e9eac76d05

## 05bgChanger

- Easy project 
- used `useState()` hook and classic javaScript logic to make background color changer.
- below is demo:

https://github.com/user-attachments/assets/0352f268-307f-4c18-9914-4cd0bb369841

## 06PassGen

- For tracking length with default value 8, numberAllowed with default false, charAllowed with default value false, password we have "" as default & we used `useState()`.

- `useCallback` is a React Hook that lets you cache a function definition between re-renders.

```javaScript 
const cachedFn = useCallback(fn, dependencies)
```
- in above example we can write `normal function` as well as `call back` also.

- Learned `useEffect` is a React Hook that lets you synchronize a component with an external system.

```javaScript
useEffect(setup, dependencies?)
```
- `setup` us a call back & dependencies is the `array`
- Learned about `useRef` hook.
- `useRef` is a React Hook that lets you reference a value that’s not needed for rendering.

```javaScript
const ref = useRef(initialValue)
```
- By using a ref, you ensure that:

- ***You can store information between re-renders (unlike regular variables, which reset on every render).***
- ***Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).***
- ***The information is local to each copy of your component (unlike the variables outside, which are shared).***

- demo : 

https://github.com/user-attachments/assets/c65a0676-4229-43c6-aa41-d6fcb819a44d

## 07CurrancyConverter

- Learned `how to handle API`, `creating custom hook`.
- Custom hook name is `useCurrencyInfo()`. 
- New approach for `exporting element`.
- usage of `useId` hook
- `useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.

```javaScript
const id = useId()
```

```javaScript
import { useEffect, useState } from "react";

//hook ready
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    //API call
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;
```

- demo :

https://github.com/user-attachments/assets/22f77abd-0e65-4313-9334-4be41724e696

## 08ProfileProject

- Learned `react router` learned.
- `react router` is not part of core react it is third party library.



- demo:

https://github.com/user-attachments/assets/4587d07c-2918-4ed4-bf77-c8fa3135a8d8