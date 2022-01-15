import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, Grid, IconButton, Input } from '@mui/material';
import { Text } from '../../Components/Styled/Styled';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useContext } from 'react';
import { Context } from '../../Context/CartContext';



export default function CartItem(props) {

  const { removeFromCart } = useContext(Context)

  function RemoveCart() {
    removeFromCart(props.id)
  }
  console.log(props.id)
  // console.log(removeFromCart(props.id))


  return (
    <Box mb={2}>
      <Grid container direction="row" justifyContent="space-between" p={2}>
        <Grid item>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box mr={6}>
              <img src={props.Img} width="100px" />
            </Box>
            <Box>
              <Typography>{props.longTitle}</Typography>
              <Typography>{props.shortTitle}</Typography>
              <Typography>Seller: Happy</Typography>
              <Box>
                <Text>
                  <span style={{ fontSize: "28px", fontWeight: "800" }}>{props.Sellingprice}₹</span> &nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#878787" }}><strike>{props.CostPrice}₹</strike></span> &nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#388E3c" }}>{props.Discount} off</span>
                </Text>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item>
          <Typography>
            <span>Delivery By 12 June |</span>
            <span>Free</span>
          </Typography>
          <Box mt={1} sx={{ textAlign: "end" }}>
            <IconButton onClick={RemoveCart}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}