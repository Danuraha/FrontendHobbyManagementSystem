import React, { useState } from "react";
import './Login.css'; 


function Login() {
    const [password,setPassword] =useState('');
    const [username,setusername] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submitted',username,password);
    };
  return (
  
    <div className="login-page"> 
  
    <div className="login-container">
      

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><b>User Name</b></label>
          <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}/>
        </div>

       

        <div className="form-group">
          <label><b>Password</b></label>
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>

        <div className="forgot">forgot password?</div>
        <div>
            <button type="submit"><b>Log In</b></button>
        </div>

<div className="buttom">Don't have an Account?  SignUp</div>
      </form>
    </div>
    </div>
  );
}

export default Login;
