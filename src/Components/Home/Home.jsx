import React from 'react'
import Banner from './Banner'
import NavBar from './TopProductsNav'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import MidSection from './MidSection'
import ProductStrip from './ProductStrip'




function Home() {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <div>
            <NavBar />
            <Container maxWidth="xl">
                <Banner />
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "82%" }}>
                        <ProductStrip timer = {true} title = "Deal of the Day"/>
                    </Box>
                    <Box sx={{ background: "white", padding: "5px", margin: "12px 0 0 10px" }}>
                        <img src={adURL} style={{ width: "250px", height: "343px" }} />
                    </Box>
                </Box>
                <MidSection/>
                <ProductStrip title = "Blockbuster Deals" timer = {false}/>
                <ProductStrip title = "Trending deals" timer = {false}/>
                <ProductStrip title = "Great offers on first purchase" timer = {false}/>
                <ProductStrip title = "Top Deals" timer = {false}/>
                {/* <Test/> */}
            </Container>
        </div>
    )
}

export default Home

