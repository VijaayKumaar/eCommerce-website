import React, { useState, useContext } from 'react'
import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material';

import { authenticateSignup ,authenticateLogin} from '../../service/api';

import { DataContext } from '../../context/Dataprovider';

const Dialogstyed = styled(Box)
  ({
    height: "90vh",
    width: "100%",
   
  })

  const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  width: 35%;
  height: 93%;
  padding: 45px 35px;
  & > p, & > h5 {
      color: #FFFFFF;
      font-weight: 600
  }
`;

  const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div, & > button, & > p {
      margin-top: 20px;
  }
`;



const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;


const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`


const accountInitialValues = {
  login: {
      view: 'login',
      heading: 'Login',
      subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
      view: 'signup',
      heading: "Looks like you're new here",
      subHeading: 'Signup to get started'
  }
}


const signupValue={
  firstname:"",
  lastname:"",
  username:"",
  email:"",
  password:"",
  phone:""

}

const loginInitialValue ={
  username:"",
  password:'',

}


function LoginDilog({ open, setOpen }) {
    const [account , toggleaccount] =useState(accountInitialValues.login);
    const[Signup,setsignup]=useState(signupValue);
    const {setAcount}= useContext(DataContext);
    const [login ,setlogin] =useState(loginInitialValue)
    const [ error, showError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleaccount(accountInitialValues.login);
    showError(false);
  }

  const toggleSignUp=() =>{
toggleaccount(accountInitialValues.signup);
  }
  
const  inputchange=(e)=>
{
  setsignup({...Signup,[e.target.name]:e.target.value});


}

const  usersignup= async()=>{
    let respose=await authenticateSignup(Signup);
    if(!respose) return;
    handleClose();
    setAcount(Signup.firstname);
}


const OnValuechange =(e)=>{
  setlogin({...login,[e.target.name]: e.target.value})
}

// const  loginuser= async()=>{
//    let respose =await authenticateLogin(login);
//    console.log(respose);
//    if(!respose.status === 200){
//     handleClose();
//     setAcount(respose.data.data.firstname);
//    }else{

//    }
//   }
const loginUser = async() => {
  let response = await authenticateLogin(login);
  if(!response) 
      showError(true);
  else {
      showError(false);
      handleClose();
      setAcount(login.username);
  }
}


  return (

    <Dialog open={open} onClose={handleClose}>
      <Dialogstyed>
     <Box style={{display:"flex", height:"100%"}}>   
     <Image> 
       <Typography variant="h5">{account.heading}</Typography>
       <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
    </Image>
 

{/* if true then open login from */}
  {
         account.view ==='login'?
        <Wrapper>
          <TextField variant='standard' onChange={(e)=> OnValuechange(e)} name='username' label=" Enter username" />
        {error && <Error>please Enter vaild username password</Error> }
          <TextField variant='standard' onChange={(e)=>OnValuechange(e)} name='password' label="Enter Password" />
          <Text> By contnuing you agree to filpkart's terms of use and Privecy Policy.</Text>
           <LoginButton onClick={()=>loginUser()}>LOGIN</LoginButton>
          <Typography style={{textAlign:"center"}}>OR</Typography>
          <RequestOTP>Request OTP</RequestOTP>
          <CreateAccount onClick={()=>toggleSignUp()}>New to filpkart? Create an account </CreateAccount>
      </Wrapper>


    :
 
       <Wrapper>
          <TextField variant='standard'onChange={(e)=>inputchange(e)} name='firstname' label="Enter FirstName" />
          <TextField variant='standard'onChange={(e)=>inputchange(e)}name='lastname' label="Enter Lastname" />
          <TextField variant='standard'onChange={(e)=>inputchange(e)}name='username' label="Enter Username" />
          <TextField variant='standard'onChange={(e)=>inputchange(e)}name='email' label="Enter Email" />
          <TextField variant='standard'onChange={(e)=>inputchange(e)}name='password' label="Enter Password" />
          <TextField variant='standard'onChange={(e)=>inputchange(e)}name='phone' label="Enter Phone" />
         
          <LoginButton onClick={()=>usersignup()}>Continue</LoginButton>
         
      </Wrapper>
    }

    
    
     </Box>
      </Dialogstyed>
    </Dialog>
  )
}

export default LoginDilog