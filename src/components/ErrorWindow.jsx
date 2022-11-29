import { useState } from "react"
import styles from './ErrorWindow.module.css'

const ErrorWindow = (props) => {
    const errorStatusHandler = () => {
        props.setErrorMessageStatus(false)
    }
    
    return (
        <div className={styles.error}>
            <div style={{visibility: props.errorMessageStatus ? 'visible' : 'hidden'}}>
                {props.errorMessage} 
                <button onClick={errorStatusHandler}>Okay</button>   
            </div>
        </div>
    )
}

export default ErrorWindow