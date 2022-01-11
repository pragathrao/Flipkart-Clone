import { Box, styled } from '@mui/system'
import React from 'react'
import { ImageURL } from "../Constants/data"

const MidBox = styled(Box)`
    display: flex;
    flex-direction: row;
    margin: 20px 0px;
    justify-content: space-between;
 `


function MidSection() {
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';


    return (
        <>
        <MidBox>
            {ImageURL.map((image) => (
                <img src={image} style = {{width: "33%", }} />
            ))}
        </MidBox>
        <img src={coronaURL} style = {{ width: "100%"}}/>


        </>



    )
}

export default MidSection
