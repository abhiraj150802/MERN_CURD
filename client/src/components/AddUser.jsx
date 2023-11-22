import styled from '@emotion/styled'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import { addUser } from '../service/api'
import {useNavigate} from 'react-router-dom'



const Container=styled(FormGroup)`
       width:50%;
       margin: 5% auto 0 auto;
 & > div{
  margin-top:20px;
 }
`



const AddUser = () => {
   const navigateTo=useNavigate()

  const [user, setUser]=useState({
    name:"",
    username:"",
    email:"",
    phone:""

  })
  const HandleInput=(e)=>{
     const {name, value}=e.target;
     setUser({...user,[name]:value})
     console.log(user)
  }
 
  const AddUserDetails=async()=>{
      const response= await addUser(user)
      navigateTo('/alluser')
  }
  return (
    <Container>
    <Typography variant='h4'>Add User</Typography>
       <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>HandleInput(e)} name='name'/>
       </FormControl>
       <FormControl>
          <InputLabel>username</InputLabel>
          <Input onChange={(e)=>HandleInput(e)} name='username'/>
       </FormControl>
       <FormControl>
          <InputLabel>email</InputLabel>
          <Input onChange={(e)=>HandleInput(e)} name='email'/>
       </FormControl>
         <FormControl>
          <InputLabel>phone</InputLabel>
          <Input onChange={(e)=>HandleInput(e)} name='phone'/>
       </FormControl>
       <FormControl>
           <Button variant='contained' onClick={AddUserDetails}>Add user</Button>
       </FormControl>
    </Container>
  )
}

export default AddUser
