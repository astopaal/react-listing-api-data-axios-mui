import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/UserList.css";
import UserDetail from "./UserDetail";

//https://randomuser.me/api/?results=10

const UserList = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="headCell">First Name</TableCell>
              <TableCell className="headCell" align="right">
                Last Name
              </TableCell>
              <TableCell className="headCell" align="right">
                Gender
              </TableCell>
              <TableCell className="headCell" align="right">
                Age
              </TableCell>
              <TableCell className="headCell" align="right">
                Country
              </TableCell>
              <TableCell className="headCell" align="right">
                State
              </TableCell>
              <TableCell className="headCell" align="right">
                City
              </TableCell>
              <TableCell className="headCell" align="right">
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.login.uuid}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => {
                  alert(
                    "Name : " + user.name.first + " " + user.name.last + "\n" + 
                    "Gender : " + user.gender + "\n" + "Age : " + user.dob.age + "\n" + 
                    "Phone : " + user.phone + "\n" + "Cell : " + user.cell + "\n" +
                    "Country : " + user.location.country + "\n" + "State : " + user.location.state + "\n" +
                    "City : " + user.location.city + "\n" + "Email : " + user.email + "\n" +
                    "Picture : " + user.picture.large
                  );
                }}
              >
                <TableCell component="th" scope="row">
                  {user.name.first}
                </TableCell>
                <TableCell align="right">{user.name.last}</TableCell>
                <TableCell align="right">{user.gender}</TableCell>
                <TableCell align="right">{user.dob.age}</TableCell>
                <TableCell align="right">{user.location.country}</TableCell>
                <TableCell align="right">{user.location.state}</TableCell>
                <TableCell align="right">{user.location.city}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
