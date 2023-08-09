import { Button, ButtonGroup } from "react-bootstrap"
import { useState } from "react"
const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <>
            <div className="d-flex flex-column">
                <ButtonGroup size="lg" className="mb-2">
                    <Button onClick={decrement}>-</Button>
                    <Button>{counter}</Button>
                    <Button onClick={increment}>+</Button>
                </ButtonGroup>
                <Button onClick={reset}>Reset</Button>
            </div>
        </>
    )
}
export default ItemCount
