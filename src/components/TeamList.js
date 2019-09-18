import React, { useState } from 'react';


const TeamList = props => {

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: '' 
    })

    const handleChanges = event => {

        setMember({
            ...member,
            [event.target.name]: event.target.value
        })
    }

    const submitMember = event => {
        event.preventDefault();

        props.addNewMember(member);

        setMember({
            name: "",
            email: "",
            role: ""
        });
    }

    return(

        <div className = "input">
        <form onSubmit = {submitMember}>
            
            <label htmlFor = "name">Name: </label>
            <input
            id = "name"
            type = "text"
            name = "name"
            onChange = {handleChanges}
            value = {member.name}
            />
            
            <label htmlFor = "email">Email: </label>
            <input
            id = "email"
            type = "text"
            name = "email"
            onChange = {handleChanges}
            value = {member.email}
            />

            <label htmlFor = "role">Role: </label>
            <input
            id = "role"
            type = "text"
            name = "role"
            onChange = {handleChanges}
            value = {member.role}
            />

            <button type = "submit">Add Member</button>

        </form>
        </div>
    )

};

export default TeamList