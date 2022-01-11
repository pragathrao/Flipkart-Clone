import { Badge, Button, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

const LoginButton = styled(Button)`
    background: white;
    color: #2874f0;
    text-transform: none;
    font-weight: 600;
    border-radius: 2px;
    padding: 5px 40px;
    margin-right: 50px;
    &:hover {
                 background: white;
  }                          
`

const ButtonBox = styled(Box)`
    margin: 0px 10% 0px auto;
    display: flex;
    align-items: center;
`

const IconBox = styled(Box)`
    display: flex;
`

function HeaderButton() {

    const [open, setOpen] = useState(false)

    function Popup() {
        setOpen(true)
    }


    return (
        <ButtonBox>
            <LoginButton variant="contained" onClick ={Popup}>Login</LoginButton>
            <Typography sx={{ marginRight: "50px" }}> More</Typography>
            <Link style ={{color:"inherit", textDecoration:"none"}} to = "/cart">
            <IconBox>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography sx={{ marginRight: "50px", marginLeft : "10px" }}  >Cart</Typography>
            </IconBox>
            </Link>
            <Login open = {open} setOpen ={setOpen}/>
        </ButtonBox >
    )
}

export default HeaderButton


