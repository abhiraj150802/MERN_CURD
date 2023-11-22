


import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AllUser from './components/AllUser'
import AddUser from './components/AddUser'
import HomePage from './components/HomePage'
import EditUser from './components/EditUser'







const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='/alluser'  element={<AllUser/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
     </BrowserRouter>      
    </div>
  )
}

export default App
