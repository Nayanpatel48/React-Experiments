import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!~@#$%^&*(){}[]<>,.?";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }

    setPassword(pass);
    //console.log(password)
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <>
  <div className="w-full max-w-md mx-auto 
    shadow-md rounded-lg px-4 py-3
    my-8 text-orange-500 bg-gray-700">
    <h1 className="text-lg text-white my-3 text-center">Password Generator</h1>

    <div className="flex items-center">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 rounded-lg mr-2 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 readOnly"
        readOnly
        ref={passwordRef}
      />
      
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={copyPasswordToClipboard}
      >copy</button>

    </div>

    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className="flex item-center gap-x-1">
        <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
        <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  </div>
</>
  );
}

export default App;