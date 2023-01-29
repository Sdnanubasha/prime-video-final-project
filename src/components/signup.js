import React,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";


const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { register,handleSubmit, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })
  const collectData = async () =>{
    console.log(name,email,password);
    let result = await fetch('https://prime-video-api.onrender.com/register',{
        method:'post',
        body: JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    if(result){
        navigate('/');
    }
  }
  const signin = () =>{
    navigate('./signin.js')
  }
  watch('password');
  return (
    <>
      <div id="sign-logo">
        <img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video.png" alt="primevideo" />
      </div>
      <form onSubmit={handleSubmit(collectData)} method="post" className="form">
        <div className="container form-signup-section">
          <div className="form-box">
            <h2 className="signin">Sign up</h2>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                placeholder="enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="email or moblie"
              />
            </div>
            <div className="form-group">
              <label htmlFor="emialormobile">Password</label>
              <input
                type="password"
                className={`form-control ${ errors.password &&
                "focus:border-red-500 focus:ring-red-500 border-red-500"}`}
                {...register("password", { required: 'Password is required',
                    minLength:{
                        value:8,
                        message:'Minimum Required length is 8'
                    },
                    maxLength: {
                        value: 20,
                        message: "Maximum Required length is 20",
                      },
                 })}
                name="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder="enter password"
              />
              {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="emialormobile">Re-enter Password</label>
              <input
                type="password"
                className={`form-control ${ errors.confirmPassword &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500"} `}
              {...register("confirmPassword", { required: 'confirm password is required',
              validate: (value) =>
              value === password || "The passwords do not match",
              })}
                name="confirmPassword"
                value={cpassword}
                onChange={(e)=>{setCpassword(e.target.value)}}
                placeholder="confirm password"
              />
            </div>
            {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}
            <p id="terms">
              By Continuing, You agree to the amazon{" "}
              <Link to="#">Conditions of Use and Privacy Notice.</Link>
            </p>
            <input id="terms" type="checkbox" />I agree to the amazon Conditions
            of Use and Privacy Notice.
            <button
              className="btn btn-primary"
              id="signin"
            >
              Create Account
            </button>
            <h4>
              Already have an Account ?{" "}
              <Link to="/signin" onClick={()=>signin()}>Login Here</Link>
            </h4>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
