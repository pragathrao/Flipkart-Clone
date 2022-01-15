import { Card, Container, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Context } from '../../Context/CartContext'
import CardItem from "./CartItem"
import CartTotal from './CartTotal'


function Cart() {

    const { cart } = useContext(Context)

    return (
        <Container maxWidth="xl">
            <Box sx={{ margin: "85px 130px 0px 0px" }}>
                <Grid container spacing={6}>
                    <Grid item sm={8} >
                        <Card sx={{ padding: "20px" }}>
                            <Typography>My Cart {cart.qty}</Typography>
                            <Divider />
                            {cart.map((prod) => {
                                return (
                                    <CardItem
                                        Img={prod.url}
                                        longTitle={prod.title.longTitle}
                                        shortTitle={prod.title.shortTitle}
                                        Sellingprice={prod.price.cost}
                                        CostPrice={prod.price.mrp}
                                        Discount={prod.price.discount}
                                        id={prod.id}
                                    />
                                )
                            })}
                        </Card>

                    </Grid>
                    <Grid item sm={4}>
                        <CartTotal />

                    </Grid>
                </Grid>
                {/* <img src = {'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'}/> */}
            </Box>
        </Container>



    )
}

export default Cart
