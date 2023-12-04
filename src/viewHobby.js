import { Grid, TextField } from "@mui/material";
import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewHobby = () => {

    const [hobbyName,setHobbyName]=useState([])

     useEffect(() => {
    axios.get('http://localhost:8082/')
      .then((res) => setHobbyName(res.data)) // Assuming that the response has a 'data' property
      .catch((err) => console.error(err));
  }, []);

    console.log(hobbyName);
    return ( 
        <div>
           
            <table>
                <thead>
                    <tr>
                        <th>userName</th>
                        <th>HobbyName</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    hobbyName.map((data,i)=>(
                        <tr key={i}>
                            <td>{data.userName}</td>
                            <td>{data.hobbyName}</td>
                            <td>
                                <button>Update</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )) 
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default ViewHobby;