// import React from 'react'

import React, { useState,useRef  } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from '../src/Components/Navigation';
import { Outlet } from 'react-router-dom';
// import FacultyRoutes from '../../Routes/Facultyroutes';
import styled from 'styled-components';
import axios from 'axios';

function Viewatt() {
  const iframeRef = useRef(null);
  const [link,setLink] = useState("")
  const [value, setValue] = useState({
    year: "",
    department: "",
    division: "",
    subject: "",
  });
 
  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    console.log(value);
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/viewatt", value);
      // console.log(response.data)
      setLink(response.data)
      console.log(link)
      scrollToIframe();
      ;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const scrollToIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
      <Box>
        <h1>Edit or View Attendance Records</h1>
        <Innerbox>
          <Table>
            <tbody>
              <tr>
                <td><label htmlFor="year">Select Year </label></td>
                <td>
                  <div className="yeardropdown">
                    <select name="year" id="dropdown" onChange={handleChange}>
                      <option value="" disabled selected>Select Year</option>
                      <option value="fe" disabled>FE</option>
                      <option value="se">SE</option>
                      <option value="te" disabled>TE</option>
                      <option value="be" disabled>BE</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td> <label htmlFor="department">Select Department </label></td>
                <td>
                  <div className="yeardropdown">
                    <select name="department" id="dropdown" onChange={handleChange}>
                      <option value="" disabled selected>Select Department</option>
                      <option value="CE" disabled>Computer Engineering</option>
                      <option value="it">Information Technology</option>
                      <option value="EXTC" disabled>EXTC</option>
                      <option value="AI-Ml" disabled>AI-Ml</option>
                      <option value="AI-DS" disabled>AI-DS</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td> <label htmlFor="division">Select Division </label></td>
                <td>
                  <div className="yeardropdown">
                    <select name="division" id="dropdown" onChange={handleChange}>
                      <option value="" disabled selected>Select Division</option>
                      <option value="a">A</option>
                      <option value="b">B</option>
                      <option value="c" disabled>C</option>
                      <option value="d" disabled>D</option>
                      <option value="e" disabled>E</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td> <label htmlFor="subject">Select Subject </label></td>
                <td>
                  <div className="yeardropdown">
                    <select name="subject" id="dropdown" onChange={handleChange}>
                      <option value="" disabled selected>Select Subject</option>
                      <option value="a">Subject A</option>
                      <option value="b">Subject B</option>
                      <option value="c">Subject C</option>
                      <option value="d">Subject D</option>
                      <option value="e">Subject E</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
              <td colSpan="2" style={{ textAlign: 'center' }}>
              <button   type="button" class="btn btn-primary" onClick={handleSubmit}>View Records</button>
</td>
              </tr>
            </tbody>
          </Table>
          
        </Innerbox>
       
      </Box>
      {link && (
          <IframeContainer ref={iframeRef}>
            <iframe src={link} title="Google Sheet" width="100%" height="100%"></iframe>
          </IframeContainer>
        )}
   
    </div>
  );
}

export default Viewatt;

const Box = styled.div`
  height: 100vh;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 

  .flex {
    display: flex;
    gap: 20px;
    /* justify-content: center; */
    align-items: center;
    
  }

  label {
    margin-left: 10px;
  }
`;

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
`;

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

const IframeContainer = styled.div`
  /* margin-top: 10px; */
  width: 100%;
  height: 100vh; /* Set the height to 100% of the viewport height */
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;