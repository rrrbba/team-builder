import React from 'react';


const Members = props => {
    return(
        <>
        {props.members.map(member => (
            <div className = "eachMember" key = {member.id}>
                <p>Name: {member.name}</p>
                <p>Email: {member.email}</p>
                <p>Role: {member.role}</p>
            </div>
        ))}
        </>
    )
};

export default Members;