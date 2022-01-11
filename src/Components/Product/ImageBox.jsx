import { Box, Button } from '@mui/material'
import { styled } from '@mui/styles'
import React from 'react'

const LeftContainer = {
    padding: "40px 0px 0px 80px"

}

const Image = {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "90%"
}


function ImageBox({ image }) {

    const ActionButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    background:${(props) => (props.Background)};
    color: ${(props) => props.Color}
`
    return (
        <Box sx={LeftContainer}>
            <img src={image} style={Image} />


        </Box>
    )
}

export default ImageBox
