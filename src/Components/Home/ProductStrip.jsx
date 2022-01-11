import { Box, Button, Divider, Typography } from '@mui/material';
import { display } from '@mui/system';
import React from 'react'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import styled from 'styled-components';
import { products } from '../Constants/data';
import { MainBox } from '../Styled/Styled';

const ProductBox = styled("div")`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const TypoText = styled(Typography)`
font-size: 14px;
margin-top: 5px;
`
const Img = styled("img")`
height: 150px;
padding: 5px 15px;   
margin: auto;
`


function ProductStrip(props) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const timer = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return (<span style={{ color: "#7f7f7f", marginLeft: "10px" }}>{hours}:{minutes}:{seconds} Left</span>)
    }

    return (
        <MainBox margin={"12px 0px 0px 0px"} background={"white"}>
            <MainBox display={"flex"} alignItems={"center"} padding={"15px 20px"}>
                <Typography
                    sx={{
                        fontSize: "22px",
                        fontWeight: "600",
                        lineHeight: "32px"
                    }}>
                    {props.title}
                </Typography>
                {props.timer === true ?
                    <Box sx={{ display: "flex", alignContent: "cemter" }}>
                        <img src={timer} style={{ width: "24px", marginLeft: "10px" }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Box> : null}
                <Button
                    variant="contained"
                    sx={{
                        marginLeft: "auto",
                        background: "#2874f0",
                        borderRadius: "2px",
                        fontSize: "13px"
                    }}>View All</Button>
            </MainBox>
            <Divider />
            <Slider {...settings}>
                {products.map((products) => {
                    return (
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: "none" }}>
                            <Link to={`products/${products.id}`} style={{ textDecoration: "none" }}>
                                <Box textAlign="center" sx={{ padding: "25px 15px" }}>
                                    <Img src={products.url} draggable={false} />
                                    <TypoText style={{ fontWeight: "600", color: "#212121" }}>{products.title.shortTitle}</TypoText>
                                    <TypoText style={{ color: "green" }}>{products.discount}</TypoText>
                                    <TypoText style={{ color: "#212121" }}>{products.tagline}</TypoText>
                                </Box>
                            </Link>
                        </div>

                    )
                })}
            </Slider>
        </MainBox>

    );
}



export default ProductStrip
