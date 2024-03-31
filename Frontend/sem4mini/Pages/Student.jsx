import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Stunavigation from '../src/Components/Stunavigation';

const Student = () => {
  const { username } = useParams();

  const [rowData, setRowData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    fetch(`https://sheetdb.io/api/v1/gzhjvp5ta4bb8/search?IDS=${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setRowData(data[0]); // Set the first row of data
          console.log(data[0]); // Log the value to the console
          setError(null); // Clear any previous error
        } else {
          setRowData(null); // Reset row data
          setError('No data found');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      });
  };

  return (
    <>
    <Stunavigation></Stunavigation>
      <Box>
        <h1>Attendance Record of Student with ID: {username} </h1>
        <button  type="button" class="btn btn-primary" onClick={handleSearch}>View Defaulter's Data</button>
        {error && <p>{error}</p>}
        {rowData && (
          <StyledTable>
            <thead>
              <tr>
                <th>IDS</th>
                <th>SubA att</th>
                <th>SubA Total</th>
                <th>PercentageA</th>
                <th>SubB att</th>
                <th>SubB Total</th>
                <th>PercentageB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{rowData.IDS}</td>
                <td>{rowData['SubA att']}</td>
                <td>{rowData['SubA Total']}</td>
                <td>{rowData.PercentageA}</td>
                <td>{rowData['SubB att']}</td>
                <td>{rowData['SubB Total']}</td>
                <td>{rowData.PercentageB}</td>
              </tr>
            </tbody>
          </StyledTable>
        )}
      </Box>
    </>
  );
};

export default Student;

const Box = styled.div`
  height: 100vh;
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 10px;
    text-align: center;
  }

  button {
    width: 50%;
    margin: 20px auto;
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
  border: 5px solid #ddd;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    font-weight: 600;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f2f2f2;
  }
`;
