// import React, { useState } from 'react'

// function App() {

//   const [a, setA] = useState(10)

//   const changeA = ()=>{
//     console.log("works");
//     setA(20)
//   }
//   return (
//     <>
//     <h1>Value of a  is {a}</h1>
//     <button onClick={changeA}>Change A</button>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// function App() {

//   const [num, setNum] = useState("samid")

//   return (
//     <div>
//       <h3>Number is {num}</h3>
//       <button onClick={()=>{setNum(+10)}}>Increment</button>
//       <button onClick={()=>{setNum(-10)}}>Decrement</button>
//     </div>

//   )
// }

// export default App


// import React from 'react'

// function App() {
//   return (
//     <>
//     <h2  className='text-5xl bg-red-700 text-black'>Heloo samid</h2>
//     <h2>Hii syed</h2>
//     </>
//   )
// }

// export default App


import e from 'express'
import React, { useState } from 'react'

function App() {

const [username, setUsername] = useState('')

const submitHandler = (e)=>{
  e.preventDefault()

  console.log(username);
  setUsername('')
}

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        className='px-4 rounded py-3 text-xl m-5'
        type="text" placeholder='Enter you name'/>
        <button className='px-4 text-white py-3 m-6 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
      </form>
    </div>
  )
}


export default App