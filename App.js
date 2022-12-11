import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
// import { layer } from "@fortawesome/fontawesome-svg-core"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    // const [count, setCount] = React.useState(0)
    // const [isActive, setIsActive] = React.useState(true);
    // const [seconds, setSeconds] = React.useState(0);
    // const [minutes , setMinutes] = React.useState(0)

    // let timer = []
    // React.useEffect(() => {
    //     if (isActive) {
    //         timer = setInterval(() => {
    //             setSeconds((seconds) => seconds + 1);
    //         }, 1000)
    //         if (seconds === 59) {
    //             setMinutes((minutes) => minutes + 1)
    //             setSeconds(0)
    //         }
    //     }
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [minutes, seconds])
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])
  
     function generateNewDie(){
        return {
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
      
    function rollDice() {
            if (!tenzies) {
                setDice(prevDice => prevDice.map(die => {
                return die.isHeld ?
                die :
                generateNewDie()
            }))
            // setCount(count + 1)
        } else {
            setTenzies(false)
            setDice(allNewDice())
            // setCount(0)
            // setSeconds(0)
            // setMinutes(0)
        } 
    }
    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => {
            return die.id === id ? 
            {...die, isHeld: !die.isHeld} : 
            die
        }))
    }
     
    const loadDice = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)} 
        />
    ))
    
    return (
        <main>
            {tenzies && <Confetti /> }
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {loadDice}
            </div>
            <button 
            className="roll-dice" 
            onClick={rollDice}
            >
            {tenzies ? "New Game" : "Roll"}
            </button>

            {/* <div className="roll-tracker">
                <h3> No Of Rolls : {count} </h3>
                <h3> Time :  {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h3>
            </div> */}

        </main>
    )
}