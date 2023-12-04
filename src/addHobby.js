import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
const  AddHobby= () => {
    const [userName,setUserName]=useState('')
const [hobbyName,setHobbyName]=useState('')


function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8082/create',{userName,hobbyName})
    .then(res=>{
        console.log(res);
     

    }).catch(err=>console.log(err));
}

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add Hobby</h2>
                <div>
                    <label>User</label>
                    <Input type="text" placeholder="Enter name" onChange={e=>setUserName(e.target.value)}/>
                    
                </div>

                <div>
                    <label>Hobby</label>
                    <Input type="text" placeholder="Enter hobby" onChange={e=>setHobbyName(e.target.value)} />
                    
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
 
export default AddHobby ;