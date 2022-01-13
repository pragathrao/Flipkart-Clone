import { Box, Button } from '@mui/material'
import { styled } from '@mui/styles'
import React, { useContext } from 'react'
import { Context } from '../../Context/CartContext'

const LeftContainer = {
    padding: "40px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"

}

const Image = {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "85%"
}


function ImageBox(props) {

    const {addToCart} = useContext(Context)

    function AddToCart(id){
        addToCart(props.id)

    }



    const ActionButton = styled(Button)({
        width: "40%",
        borderRadius: "2px",
        height: "50px",
        background: (props) => `${(props.Background)}`,
        color: (props) => `${(props.Color)}`,
        margin: " 10px 20px 0px 0px"
    })


    return (
        <Box sx={LeftContainer}>
            <img src={props.image} style={props.Image} />
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <ActionButton Background="#ff9f00" Color="White" variant="contained" onClick ={AddToCart}>Add to Cart</ActionButton>
                <ActionButton Background="#fb641b" Color="White" variant="contained" >Buy Now</ActionButton>
            </Box>
        </Box>
    )
}

export default ImageBox
