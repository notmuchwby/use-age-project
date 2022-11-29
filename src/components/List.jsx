import { useState } from "react"
import styles from './List.module.css'

const List = (props) => {

    const removePersonHandler = (user) => {
        const deletedPeople = props.people.filter(person => person.userName !== user.userName)
        console.log(deletedPeople)
        props.setPeople(deletedPeople)
    }

    return (
        <div>
            <ul>
                {props.people.map(user => {
                return <div key={user.id} onClick={() => removePersonHandler(user)}>
                <li>{user.userName}</li>
                <li>{user.age}</li>
                </div>
                })}
            </ul>
        </div>
    )
}

export default List