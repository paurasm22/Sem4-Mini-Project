import React from 'react'
import { useParams } from 'react-router-dom'

const Stulist = () => {
  const {division} = useParams();
  return (
    <div>
    <h1>Stulist</h1>
    <p>Division: {division}</p> {/* Display the division */}
  </div>
  )
}

export default Stulist