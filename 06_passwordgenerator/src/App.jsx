import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [pswd, setPswd] = useState("")
  

  const passwordRef = useRef(null);

  const pswdGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "_@";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPswd(pass);
  }, [length, numberAllowed, charAllowed, setPswd]);

  useEffect(() => {
    pswdGen();
  }, [length, numberAllowed, charAllowed, pswdGen]);

  const copyPswd = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(pswd);
  }, [pswd]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 mt-10">
        <h1 className="text-4xl text-center text-white mb-5">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pswd}
            readOnly
            className="outline-none w-full py-1 px-3"
            style={{ backgroundColor: "white" }}
            placeholder="Password"
            ref={passwordRef}
          />
          {pswd &&
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPswd}
          >
            Copy
          </button>}
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={0}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
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
