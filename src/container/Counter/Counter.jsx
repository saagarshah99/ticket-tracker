import React, {useState} from 'react'
import "./Counter.scss"

const Counter = ({ numberOfTickets }) => {

    const [counter, setCounter] = useState(numberOfTickets)
    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        if(counter !== 0){
            setCounter(counter - 1);
        }
    }

    // "Amazon Superiority Complex Feature"
    // const handleFirings = event => {
    //     const getTotalTickets = event.target.value;

    // }


    return (
        <>
            <p>Tickets Completed:</p>
            <div className="counter">
                <button className="counter__button" onClick = {handleDecrement}>-</button>
                <div className="counter__p">
                    <p>{counter}</p>
                </div>
                <button className="counter__button" onClick = {handleIncrement}>+</button>
            </div>
        </>
    )
}

export default Counter
