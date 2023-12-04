import { Input } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const  UpdateHobby= () => {
    const [userName,setUserName]=useState('')
const [hobbyName,setHobbyName]=useState('')
const {id}=useParams();


function handleSubmit(event) {
    event.preventDefault();
    axios.put('http://localhost:8082/update/'+id,{useName,HobbyName})
    .then(res=>{
        console.log(res);
      

    }).catch(err=>console.log(err));
}

    return (  
        <div>
            <form 
            onSubmit={handleSubmit }
            >
                <h2>UpdateHobby</h2>
                <div>
                    <label>UserName</label>
                    <Input type="text" placeholder="Enter name" 
                    onChange={e=>setUserName(e.target.value)}
                    />
                    
                </div>

                <div>
                    <label>Email</label>
                    <Input type="text" placeholder="Enter Hobby" 
                    onChange={e=>setHobbyName(e.target.value)} 
                    />
                    
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
 
export default UpdateHobby;