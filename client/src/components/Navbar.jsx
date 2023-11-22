import {AppBar, Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom';

const AppBarStyle=styled(AppBar)`
   background:#111111;
   
`
const toolbarStyle = {
    minHeight: '50px',
  };
  const Tabs=styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none;
  `


const Navbar = () => {
  return (
     <AppBarStyle position='static'>
        <Toolbar style={toolbarStyle}>
            <Tabs to='/'>Home</Tabs>
            <Tabs to='/adduser'>adduser</Tabs>
            <Tabs to='/alluser'>alluser</Tabs>
        </Toolbar>
     </AppBarStyle>
  )
}

export default Navbar
