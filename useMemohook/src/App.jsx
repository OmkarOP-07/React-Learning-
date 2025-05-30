import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_,i)=>{
  return {
    index : i,
    isMagical : i===29_000_000
  }
})


function App() {
  const [count, setCount] = useState(0)
  const [numbers, setnumbers] = useState(nums)
  //const magical = numbers.find(item => item.isMagical)  // It computes the number every page rerender(***very dangerous***)
  const magical = useMemo(()=>numbers.find(item => item.isMagical),[numbers]) //It memoises the value after computation 
  return (
    <>
    <span>
      Magical no is {magical.index}
    </span>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>setCount((count)=>0)}>Click Me</button>
        <button onClick={() => {
          setCount((count) => count + 1)
          if(count == 5){
            setnumbers(
              new Array(10_000_000).fill(0).map((_,i)=>{
              return {
                index : i,
                isMagical : i===9_000_000
              }
            })
            )
          }
          
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
