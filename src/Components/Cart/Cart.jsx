import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


function Cart() {
    return (
        <Container>
            <Box sx = {{margin: "85px 130px 0px 0px "}}> 
            <h1>MyCart</h1>
            </Box>
            <Box>
                <Box> 
                <img src = {'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'}/>
                </Box>
                <Typography>FOXTER Analog Watch - For Men</Typography>
            </Box>
        </Container>
        
            
        
    )
}

export default Cart
