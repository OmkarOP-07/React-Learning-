import React, { useContext } from 'react'
import { counterContext } from '../../Context/Context'

const Components1 = () => {
    const count = useContext(counterContext)
  return (
    <div>
         <button>Count is {count}</button>       {/* Counter context is importred and used here} */}
    </div>
  )
}

export default Components1


