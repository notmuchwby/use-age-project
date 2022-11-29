import { useState } from "react"
import List from "./List"
import ErrorWindow from "./ErrorWindow"

const Input = (props) => {
    const [userName, setUserName] = useState('')
    const [age, setAge] =  useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [errorMessageStatus, setErrorMessageStatus] = useState(false)

    const submitData = (event) => {
        event.preventDefault()
        if(userName === '' && age === '') {
            setErrorMessage('Please enter a valid username and age (non-empty values)')
            setErrorMessageStatus(true)
        } else if(userName === '') {
            setErrorMessage('Please enter a username')
            setErrorMessageStatus(true)
        } else if(age === '') {
            setErrorMessage('Please enter an age')
            setErrorMessageStatus(true)
        } else if(parseInt(age) < 0) { 
            setErrorMessage('Please enter a valid age (age > 0)')
            setErrorMessageStatus(true)
        }else {         
            const newPeople = {
                userName: userName,
                age: age,
                id: Math.random()
            }
            props.setPeople((prevPeople) => {
                return [...prevPeople, newPeople]
            })
            console.log(props.people)
            setUserName('')
            setAge('')
        }    
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    return (
       <div>
        <form onSubmit={submitData}>
            <div>
                <label>
                    Username
                </label>
                
                <input type="text" value={userName} onChange={userNameChangeHandler}/>
            </div>
            <div>
                <label>
                    Age(Years)
                </label>
                
                <input type="text" value={age} onChange={ageChangeHandler}/>
            </div>
            <button type="submit">Submit</button>
        </form> 
        <List people={props.people} setPeople={props.setPeople}/>
        <ErrorWindow errorMessage={errorMessage} errorMessageStatus={errorMessageStatus} setErrorMessageStatus={setErrorMessageStatus}/>
       </div>
    )
}

export default Input