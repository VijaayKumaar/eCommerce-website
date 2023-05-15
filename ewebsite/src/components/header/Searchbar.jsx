import styled from '@emotion/styled';
import { InputBase ,Box , } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'



const Boxstyed = styled(Box)
({
  background:"white"  ,
  width:"38%",
  marginLeft:'10px',
  borderRadius:"4px",
  display:"flex"
})

const Inputstyed = styled(InputBase)
({
  width:"100%",
  fontSize:"unset",
  
})


const Search = styled(Box)
({
  color:"blue",
  padding:'5px'
})


function Searchbar() {
  return (


    <Boxstyed >
<Inputstyed   placeholder='Search for prodoucts , brand and more' />
<Search>
    <SearchIcon />
</Search>

</Boxstyed >
     
     
  )
}

export default Searchbar;