import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addUser, editUser, getEditUser } from '../service/api'
import {useNavigate,useParams} from 'react-router-dom'



const Container=styled(FormGroup)`
       width:50%;
       margin: 5% auto 0 auto;
 & > div{
  margin-top:20px;
 }
`



const EditUser = () => {
   const navigateTo=useNavigate()
 const {id}=useParams();
 const [user, setUser]=useState({
    name:"",
    username:"",
    email:"",
    phone:""

  })

   useEffect(()=>{
    loadUserDetails()
   },[])

  const loadUserDetails=async()=>{
    let resp= await getEditUser(id)
    setUser(resp.data[0])
    
  }


  
  const HandleInput=(e)=>{
     const {name, value}=e.target;
     setUser({...user,[name]:value})
   
  }
 
  const editUserDetails=async()=>{
      const response= await editUser(user,id);
      navigateTo('/alluser')
    
  }
  return (
    <Container>
    <Typography variant='h4'>Edit User</Typography>
       <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>HandleInput(e)} name='name' value={user.name} />
       </FormControl>
       <FormControl>
          <InputLabel>username</InputLabel>
          <Input onChange={(e)=>HandleInput(e)} name='username' value={user.username} />
       </FormControl>
       <FormControl>
          <InputLabel>email</InputLabel>
          <Input onChange={(e)=>HandleInput(e)} name='email' value={user.email}/>
       </FormControl>
         <FormControl>
          <InputLabel>phone</InputLabel>
          <Input onChange={(e)=>HandleInput(e)} name='phone' value={user.phone} />
       </FormControl>
       <FormControl>
           <Button variant='contained' onClick={editUserDetails}>Edit user</Button>
       </FormControl>
    </Container>
  )
}

export default EditUser