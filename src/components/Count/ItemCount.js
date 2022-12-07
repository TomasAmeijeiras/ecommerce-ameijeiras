import { useState } from "react"

const Counter = ({initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < stock) {
      setCount (count + 1)
    }
  }

  const decrement = () => {
    if (count <= stock) {
      setCount (count - 1)
    }
  }

  const reset = () => {
    setCount(initial)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => increment()}>Sumar</button>
      <button onClick={() => decrement()}>Restar</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => onAdd()}>Agregar al Carrito</button>
    </div>
  )
}

export default Counter