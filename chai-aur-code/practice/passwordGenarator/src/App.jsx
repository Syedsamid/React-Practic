import React, { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState
    (false);
  const [charAllowed, setCharAllowed] = useState
    (false)
  const [password, setPassword] = useState("")

  const generatepwd = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword]);

  // useCallback Hook we want the react to remember out function in its memore/catch and when i executed the function again, execution all the part of the function previously used.

  // Syntax useCallBack (function, dependencies(an array[]));
  // inside dependencies array we pass stateHook variable

  const ggeneratepwd = () => {

  }

  return (

    <>
      {/* <h1 className='text-4xl text-center pt-5 text-white'>Password Generator</h1> */}

      <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 my-8 bg-gray-800
    text-orange-500">
        <h1 className='text-white text-center
        my-3'>Password  Generator</h1>
        <div className="flex shadow rounded-lg 
        overflow-hidden mb-4">
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button
            className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
            
          </div>

        </div>
      </div>

    </>
  )
}

export default App









// import React, { useState, useEffect, useCallback } from 'react';
// import './App.css';

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState('');

//   const generatePassword = useCallback(() => {
//     let pass = '';
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     if (numberAllowed) str += '0123456789';
//     if (charAllowed) str += '!@#$%^&*()_+~';

//     for (let i = 0; i < length; i++) {
//       const char = Math.floor(Math.random() * str.length);
//       pass += str.charAt(char);
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed]);

//   useEffect(() => {
//     generatePassword();
//   }, [length, numberAllowed, charAllowed, generatePassword]);

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(password);
//     alert('Password copied to clipboard!');
//   };

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500">
//         <h1 className="text-white text-center my-3">Password Generator</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//           />
//           <button
//             onClick={copyToClipboard}
//             className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-600 transition-colors"
//           >
//             Copy
//           </button>
//         </div>
//         <div className="flex flex-col gap-2">
//           <div className="flex items-center gap-2">
//             <input
//               type="range"
//               min={6}
//               max={50}
//               value={length}
//               onChange={(e) => setLength(parseInt(e.target.value))}
//             />
//             <label className="text-white">Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={numberAllowed}
//               onChange={() => setNumberAllowed((prev) => !prev)}
//             />
//             <label className="text-white">Include Numbers</label>
//           </div>
//           <div className="flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={charAllowed}
//               onChange={() => setCharAllowed((prev) => !prev)}
//             />
//             <label className="text-white">Include Special Characters</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;