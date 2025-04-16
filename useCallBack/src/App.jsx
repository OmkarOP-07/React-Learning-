import { useCallback, useState , useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setcount1] = useState(0)

  const [adjective, setadjective] = useState(0)

  // const getAdjective = () => {
  //   return "another" + count;
  // }
  const getAdjective = useCallback(
    () => {
       return "another" + count ;
    },
    [count1],
  )// we are freezing this function here 
  
  return (
    <>
      <div>
        <Navbar adjective={"Good"} getAdjective = {getAdjective} />
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Hello, Omkar</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={()=> setcount1((count1) => count1 + 1 )}>
          Change Me
        </button>
      </div>
    </>
  )
}

export default App
