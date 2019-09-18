import React, { useState } from 'react';
import TeamList from './components/TeamList';
import Members from './components/Members';
import styled from 'styled-components';
import './App.css';

const MemberPage = styled.div `
  background-color: lightblue;
  margin: auto 0;
`

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Rayven Burns", 
      email: "rayven.burns@gmail.com",
      role: "Student" 
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMembers([...members, newMember])
  }

  return(
    <MemberPage>
    <div className="App">
      <h1>Team Members</h1>

        <TeamList
        addNewMember = {addNewMember}
        />
      <div className = "listedMembers">
        <Members 
        members = {members}
        />
      </div>

    </div>
    </MemberPage>
  )

}

export default App;
