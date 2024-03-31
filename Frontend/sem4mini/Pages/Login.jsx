import React, { useState } from 'react'
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast ,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

  const navigate = useNavigate()
  const [value,setValue] = useState({
    username:"",
    password:""
  })
  const[empty,setEmpty] = useState()
   const handleInput=(event)=>{
    setValue({...value,[event.target.name]:event.target.value})
   }

   const handleSubmit=async(event)=>{
    console.log(value)
    setEmpty(" ")
    event.preventDefault()
    await axios.post("http://localhost:4000/login",value)
    .then((response)=>{
      console.log(response)
      // navigate('/faculty')
      

    })
    .catch((error)=>{
      console.log(error)
      console.log("Invalid creds")
      toast.error('Invalid Credentials ! ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    })
    const {username}=value
    const {password} = value
    console.log(username)
    console.log(password)
    await axios.get(`http://localhost:4000/login?username=${username}&password=${password}`)

    .then((res)=>{ 
      console.log(res.data[0].isfaluclty)
      console.log(username)
      console.log("in get")
      {res.data[0].isfaluclty?navigate('/faculty'):navigate(`/student/${username}`)}
    })
    .catch((error)=>{
      // console.log(error)
    })
   }

  return (

   <>
   <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition= "Bounce"
/>
   <Background>
   <Cardcontainer>
    <Cardcontents>
      <form action="">
      <label htmlFor="username"> Username</label>

    <input type="text" class="form-control" placeholder=" Enter Username" aria-label="Username" id='username' name='username' onChange={handleInput} value={value.username}/>

    <label htmlFor="password"> Password</label>

   <input type="text" class="form-control" placeholder=" Enter Password" aria-label="Username"id='password' name='password' onChange={handleInput} value={value.password}/>

   <button type="submit" class="btn btn-light" onClick={handleSubmit}  >Login</button>

      </form>
   


    </Cardcontents>

   </Cardcontainer>


   </Background>
   </>
  
   
    
  )
}

export default Login


const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: azure;
`

const Cardcontainer = styled.div`
   height: 500px; /* Adjust height as needed */
  width: 550px; /* Adjust width as needed */
  background-color: #10d6d3;
  margin: 0 auto;
  border-radius: 50px;
  position: relative;
  top: 50%;
  display: flex;
  flex-direction: column;
  transform: translateY(-50%);
  

`
const Cardcontents = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;

label{
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: 700;



}
input{
  margin-bottom: 20px;
  height: 50px;
  font-size: 22px;
}

button{
  height: 50px;
  border: black 2px solid;
  border-radius: 10px;
  width: 100%;
}
`