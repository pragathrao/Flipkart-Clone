import { Box, styled } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../Constants/data'

const Img = styled("img")`
    width: 100%;
    height: 280px;
`

const BannerBox = styled(Box)`

    padding-top: 10px;
`

function Banner() {
    return (
        <BannerBox>
            <Carousel
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps = {{
                    style: {
                        background: "white",
                        color: "#494949",
                        borderRadius: "0px",
                        margin: "0",
                    }
                }}
                >
                {
                    bannerData.map((image) => (
                        <Img src={image} />
                        ))
                    }
            </Carousel>
                    </BannerBox>
    )
}

export default Banner
