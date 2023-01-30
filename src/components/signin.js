import React,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import { useForm} from "react-hook-form";
import swal from 'sweetalert';


const Signin = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const {handleSubmit} = useForm({
    mode:'onTouched'
  });
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  })

  const handleLogin =async() =>{
    let result = await fetch('https://prime-video-api.onrender.com/login',{
      method:'post',
      body: JSON.stringify({email,password}),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    result = await result.json();
    console.warn(result);
    if(result.name){
      localStorage.setItem('user',JSON.stringify(result));
      swal("Login successfully",`Welcome Back to Prime Video ${result.name}`,"success");
      navigate('/');
    }else{
      swal("Login failed","credentials are not matched","error");
    }
  }

  const signup = () =>{
    navigate('./signup.js')
  }
  return (
    <>
      <div id="sign-logo">
        <img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video.png" alt="primevideo" />
      </div>
      <form onSubmit={handleSubmit(handleLogin)} method="post" className="form">
        <div className="container form-section">
          <div className="form-box">
            <h2 className="signin">Sign in</h2>
            <div className="form-group">
              <label htmlFor="emailormobile">Email or mobile number</label>
              <input
                type="text"
                className="form-control"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                name="email"
                placeholder="email or moblie"
              />
            </div>
            <div className="form-group">
              <label htmlFor="emialormobile">Password</label>
              <label id="forgotpass" htmlFor="forgotpass">
                <Link to="#">Forgot password ?</Link>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                placeholder="enter password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              name="signin"
              id="signin"
            >
              sign in
            </button>
            <p id="terms">
              By Continuing, You agree to the amazon{" "}
              <Link to="#">Conditions of Use and Privacy Notice.</Link>
            </p>
            <div className="a-divider a-divider-break">
              <h5>New to Amazon ?</h5>
            </div>
            <Link to="/signup">
              <button
                type="submit"
                className="btn btn-primary"
                id="signup"
                name="signup"
                onClick={()=>signup()}
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
