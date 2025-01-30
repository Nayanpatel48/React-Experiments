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

## 