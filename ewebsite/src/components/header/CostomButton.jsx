import { Box , Button,Typography  } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState ,useContext } from 'react'
import styled from '@emotion/styled';
import { DataContext } from '../../context/Dataprovider';
import Profile from './profile';
// componets
import LoginDilog from '../login/LoginDilog';
import { NavLink } from 'react-router-dom';



const Wapper = styled(Box) ({
   display:"flex",
   margin: "0 3% 0 auto"


})

const Stylecart = styled(Box) ({
    display:"flex",
    marginTop:"20px"
  
 
 
 })
 const LoginButton = styled(Button)(({ theme }) => ({
   color: '#2874f0',
   background: '#FFFFFF',
   textTransform: 'none',
   fontWeight: 600,
   borderRadius: 2,
   padding: '5px 40px',
   height: 32,
   boxShadow: 'none',
   margin:"20px",

}));


function CostomButton() {
   const [open , setOpen] =useState(false)
   const{ account , setAcount}= useContext(DataContext);
   const opneDialog =()=>{
      setOpen(true);
      // console.log({account});
      
   }
  return (
 <Wapper>


{
  
   account ? <Profile account={account}  setAcount={ setAcount}/>:
   
   <LoginButton variant='cotained'onClick={()=>opneDialog()} > login</LoginButton>

}
  
    <Typography style={{width: 130, margin:20}}> Become a seller</Typography> 
    <Typography style={{margin:20}}> More</Typography> 
 
 
    {/* <Stylecart>
  <NavLink to="/CartHistory" style={{ textDecoration: "none" }}>
    <ShoppingCartIcon />
    <Typography>Cart</Typography>
  </NavLink>
</Stylecart> */}

<Stylecart>
  <NavLink to="/CartHistory" style={{ textDecoration: "none", alignItems: "center", color: "white" }}>
    <ShoppingCartIcon style={{ color: "white" }} />
    <Typography style={{ textDecoration: "none" }}>Cart</Typography>
  </NavLink>
</Stylecart>


 
 <LoginDilog  open={open} setOpen={setOpen}/>
 
 </Wapper>



  )
}

export default CostomButton