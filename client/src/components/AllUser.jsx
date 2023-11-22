import {Button, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material"
import { deleteUser, getUser } from "../service/api"
import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
 

const TableStyle=styled(Table)`
  width:90%;
  margin:50px auto 0 auto;

`











const AllUser = () => {
const [users,setUser]=useState([])

  useEffect(()=>{
   getAllUser()
},[])

const getAllUser=async()=>{
 const resp= await getUser()
 setUser(resp.data);
}
 const TableRowStyle=styled(TableRow)`
   background:#636060;
   & > th{
    font-size:20px;
    color:#fff;
   }
 `
let count=1;



const deleteUserDetails=async(id)=>{
  await deleteUser(id)
  getAllUser();
}

  return (
    <>
       <TableStyle>
          <TableHead>
              <TableRowStyle>
                  <TableCell>id</TableCell>
                  <TableCell>name</TableCell>
                  <TableCell>username</TableCell>
                  <TableCell>email</TableCell>
                  <TableCell>phone</TableCell>
                  <TableCell>Action</TableCell>
              </TableRowStyle>
          </TableHead>
          <TableBody>
             {
              users.map((user)=>{
                    return (
                      <>
                        <TableRow  key={user._id}>
                          <TableCell>{count++}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                            <Button variant="contained" style={{marginLeft:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant="contained" color="warning" style={{marginLeft:10}} onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                          </TableCell>
                        </TableRow>
                      </>
                    );
              })
             }
          </TableBody>
       </TableStyle> 
    </>
  )
}

export default AllUser
