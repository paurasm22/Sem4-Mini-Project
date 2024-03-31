import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from '../Pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from '../Pages/Student'
import Faculty from '../Pages/Faculty'
import FacultyRoutes from '../../Routes/Facultyroutes'
import Defaulter from '../Pages/Defaulter'
// import FacultyRoutes from '../../Routes/FacultyRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/faculty/*' element={<FacultyRoutes />}>
          {/* <Route index element={<FacultyRoutes />} /> */}
        </Route>
      <Route path='/student/:username' element={<Student/>}/>
     
    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
