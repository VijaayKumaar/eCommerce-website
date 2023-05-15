import React from 'react'
import {AppBar, Toolbar, Box,styled } from "@mui/material";
import "./CostomButton"

import "./Header.css"
import Searchbar from './Searchbar';
import CostomButton from './CostomButton';
import { Link } from 'react-router-dom';
const StyledAppBar = styled(AppBar)({
    backgroundColor: 'blue', 
   



  })
  const StyledBox = styled(Link)({
    marginLeft: '12%',

  })

   function Header() {
    return (
      <StyledAppBar>
        <Toolbar>
          <StyledBox to='/'>
            {/* Add your content here */}
            <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="Flipkart" style={{ width:70}}/>
         

         
          </StyledBox>
          <Searchbar />  
          <Box>
          <CostomButton />
          </Box>

        </Toolbar>
        
      </StyledAppBar>
    );
    }

export default Header;