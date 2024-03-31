// import React from 'react'

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from '../src/Components/Navigation';
import { Outlet } from 'react-router-dom';
import FacultyRoutes from '../../Routes/Facultyroutes';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Faculty() {
  const navigate = useNavigate();

  const [value,setValue] = useState({
    year:"",
    department:"",
    division:"",
    subject:"",
    date:"",
    time:"",
  })

 const handleChange=()=>{
  setValue({...value,[event.target.name]:event.target.value})
 }
 const handleSubmit=()=>{
  console.log(value)
  navigate(`stulist/${value.division}`)
 }
  const [time, setTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const meridiem = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const currentTime = `${hours}:${minutes} ${meridiem}`;
      setTime(currentTime);
    };
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
     
      <Box>
       <h1>Take Attendance</h1>
        <Innerbox>
          <Table>
            <tr>
              <td><label htmlFor="year">Select Year </label></td>
              <td><div className="yeardropdown">
              <select name="year" id="dropdown" onChange={handleChange}>
                <option value="" disabled selected>Select Year</option>
                <option value="FE" disabled>FE</option>
                <option value="SE" >SE</option>
                <option value="TE" disabled>TE</option>
                <option value="BE" disabled>BE</option>
              </select>
            </div></td>
            </tr>
            <tr>
              <td> <label htmlFor="department">Select Department </label></td>
              <td> <div className="yeardropdown">
              <select name="department" id="dropdown" onChange={handleChange}>
                <option value="" disabled selected>Select Department</option>
                <option value="CE" disabled>Computer Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="EXTC" disabled>EXTC</option>
                <option value="AI-Ml" disabled>AI-Ml</option>
                <option value="AI-DS" disabled>AI-DS</option>
              </select>
            </div></td>
            </tr>
            <tr>
              <td> <label htmlFor="division">Select Division </label></td>
              <td><div className="yeardropdown">
              <select name="division" id="dropdown" onChange={handleChange}>
                <option value="" disabled selected>Select Division</option>
               <option value="a" >A</option>
               <option disabled value="b">B</option>
               <option value="c" disabled>C</option>
               <option value="d" disabled>D</option>
               <option value="e" disabled>E</option>
              </select>
            </div></td>
            </tr>
            <tr>
              <td> <label htmlFor="subject">Select Subject </label></td>
              <td><div className="yeardropdown">
              <select name="subject" id="dropdown" onChange={handleChange}>
                <option value="" disabled selected>Select Subject</option>
               <option value="A" >Subject A</option>
               <option value="B">Subject B</option>
               <option value="C" >Subject C</option>
               <option value="D" >Subject D</option>
               <option value="E" >Subject E</option>
              </select>
            </div></td>
            </tr>
            <tr>
              <td> <label htmlFor="date">Select Date of Lecture</label>
              </td>
              <td><input type="date" name="date" id="" onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="time"> Time of Lecture</label>
             </td>
              <td> <input type="text" value={time} name='time' readOnly onChange={handleChange}/></td>
            </tr>
            <tr>
              <td><label htmlFor="">Click on capture to open camera</label></td>
              <td><button  type="button" class="btn btn-primary" onClick={handleSubmit}>Capture</button ></td>
            </tr>

           
    
          </Table>
         


        </Innerbox>
       
       




      </Box>

    


  </div>
  )
}

export default Faculty

const Box = styled.div`
  height: 100vh;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .flex{
    display: flex;
    gap: 20px;
    /* justify-content: center; */
    align-items: center;
  }

  label{
    margin-left: 10px;
  }
  /* select,input{
    margin-left: 10px;
  } */
`


const Innerbox = styled.div`
  height: 50%;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
  border-radius: 20px;
  select,input:hover{
    cursor: pointer;
  }

 
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  tr {
    border-bottom: 1px solid #ccc;
  }

  td {
    padding: 0.5rem;
  }

  td + td {
    padding-left: 2rem; /* Adjust this value to increase the gap */
  }
`;