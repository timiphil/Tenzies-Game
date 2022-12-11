import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faDiceOne, faDiceTwo, faDiceThree , faDiceFour , faDiceFive , faDiceSix} from '@fortawesome/free-solid-svg-icons'
// import { counter } from "@fortawesome/fontawesome-svg-core"



export default function Die(props) {
    // function renderingDice() {
    //     if (props.value === 1) {
    //         return faDiceOne
    //     } else if (props.value === 2) {
    //         return faDiceTwo
    //     } else if (props.value === 3) {
    //         return faDiceThree
    //     } else if (props.value === 4) {
    //         return faDiceFour
    //     } else if (props.value === 5) {
    //         return faDiceFive
    //     } else {
    //         return faDiceSix
    //     }
    // }

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white" 
    }
    return (
        <div 
            className="die-face" 
            style={styles} 
            onClick={props.holdDice}
            >
                {/* <FontAwesomeIcon className="dice-icon" icon={renderingDice()} /> */}
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}