import { Container, styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { MainBox, Text } from '../Styled/Styled.jsx'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { products } from '../Constants/data.js';
import ImageBox from './ImageBox.jsx';

const LeftBox = styled(Box)`
    min-width: 40%;
    margin-top: 60px;


`
const RightBox = styled(Box)`
    margin-top: 60px;

`


const OfferText = styled(Typography)`
margin-top: 10px;
font-size: 12px;

`

const OfferIcon = styled(LocalOfferIcon)`
    font-size: 14px;
    margin-right: 12px;
    color: #00cc00
`

const DetailsBox = styled(Box)({
    fontSize: "14px",
    verticalAlign: "baseline",
    '& > *': {
        fontSize: 14,
        marginTop: 12
    }

})


function ProductDetail({ match }) {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const Product = products.find((product) => product.id === match.params.id)

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    return (
        <Container maxWidth="xl" sx={{ background: "white", height: "100vh" }}>
            <MainBox display={"flex"} margin={"55px 0px 55px 0px"}>
                <LeftBox>
                   <ImageBox image = {Product. detailUrl}/>
                </LeftBox>
                <RightBox>
                    <Text variant='h4' fontWeight="800" margin="0 0 10px 0" >{Product.title.longTitle}</Text>
                    <Text variant='subtitle1' color="#878787">8 Ratings and 3 Reviews
                        <span>
                            <img src={fassured} style={{ width: "77px", marginLeft: "10px" }} />
                        </span>
                    </Text>
                    <Text>
                        <span style={{ fontSize: "28px", fontWeight: "800" }}>{Product.price.cost}₹</span> &nbsp;&nbsp;&nbsp;
                        <span style={{ color: "#878787" }}><strike>{Product.price.mrp}₹</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: "#388E3c" }}>{Product.price.discount} off</span>
                    </Text>
                    <Text>Available offers</Text>
                    <DetailsBox>
                        <OfferText ><OfferIcon />Special Price Get extra 12% off (price inclusive of discount)T&C </OfferText>
                        <OfferText ><OfferIcon /> Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*Know More</OfferText>
                        <OfferText ><OfferIcon /> Partner OfferGet upto ₹500 off on Select FurnitureKnow More</OfferText>
                        <OfferText ><OfferIcon />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</OfferText>
                    </DetailsBox>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ color: "#878787" }}> Delivery </TableCell>
                                <TableCell > {date.toDateString()} </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "#878787" }} >Warranty</TableCell>
                                <TableCell> No Warranty</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ color: "#878787" }}>Seller</TableCell>
                                <TableCell>
                                    <span>SuperComNet</span>
                                    <Typography>GST Invoice Available</Typography>
                                    <Typography>14 Day Return Policy</Typography>
                                    <Typography>View More Sellers Starting from ₹300 </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>
                                    <img src={sellerURL} style= {{width: "390px"}} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Description</TableCell>
                                <TableCell>{Product.description}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </RightBox>
            </MainBox>
        </Container>
    )
}

export default ProductDetail

