import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Viewatt from '../sem4mini/Pages/Viewatt';
import Faculty from '../sem4mini/Pages/Faculty';
import Navigation from '../sem4mini/src/Components/Navigation';
import Defaulter from '../sem4mini/Pages/Defaulter';
import Stulist from '../sem4mini/Pages/Stulist';


function FacultyRoutes() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Faculty />} />
      <Route path="/viewatt" element={<Viewatt />} />
      <Route path="/defaulter" element={<Defaulter />} />
      <Route path="/stulist/:division" element={<Stulist />} />
    </Routes>
    </>
    
  );
}

export default FacultyRoutes;