import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box, styled } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';


const LoginDialogContent = styled(DialogContent)`
    height: 63vh;
    width: 70vh;
    padding: 0px;
`
const LoginDialog = styled(Dialog)`
        & .kaWxti{
            max-width: unset;
            max-height: unset;
        }

`

const ImageBox = styled(Box)`
    background: url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png");
    height: 63vh;
    background-repeat: no-repeat;
    background-color: #2874f0;
    width: 40%;
    background-position: center 85% ;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const LoginBox = styled(Box)({
    padding: "35px",
    display: "flex",
    flexDirection: "column",
    flex: "1",
    '& > *': {
        marginTop: "20px"
    }



})


export const LoginButton = styled(Button)`
        margin-top: 20px;
        text-transform: none;
        background: #FB641B;
        color: white;
        height: 48px;
        border-radius: 2px;
        &:hover {
                 background: #FB641B;
  }                                               
`

function Login(props) {

    const [Login, setLogin] = useState(true)

    function Register() {
        setLogin(!Login)
    }


    function LoginClose() {
        props.setOpen(false)
        setLogin(true)
    }

    // const signUpUser = async () => {
    //     let response = await authenticateSignup();
    //     if (!response) {
    //         return
    //     }
    //     props.setOpen(false)
    // }

    return (
        <LoginDialog open={props.open} onClose={LoginClose}>
            <LoginDialogContent>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <ImageBox>
                        <div style={{ marginTop: "10vh", paddingLeft: "30px" }}>
                            <Typography sx={{ fontWeight: "600", color: "white" }} variant="h5">{Login === true ? "Login" : "Looks Like Your New Here"}</Typography>
                            <Typography sx={{ fontWeight: "500", color: "white", marginTop: "20px" }}>{Login === true ? "Get Access to Your Orders, Wishlist and Reccomendations" : "Sign up with your mobile number to get started"}</Typography>
                        </div>
                    </ImageBox>
                    {Login === true ?
                        <LoginBox>
                            <TextField name="Username" label="Enter Email/Mobile Number" variant="standard" />
                            <TextField name="Password" label="Enter Your Password" variant="standard" />
                            <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <LoginButton variant="contained">Login</LoginButton>
                            <Typography sx={{
                                color: '#878787',
                                textAlign: "center",
                                fontSize: "12"
                            }}>OR</Typography>
                            <Button sx={{
                                textTransform: 'none',
                                background: '#fff',
                                color: '#2874f0',
                                height: "48",
                                borderRadius: " 2",
                                boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
                            }}> Request OTP</Button>
                            <Typography onClick={Register} sx={{
                                margin: 'auto 0 5px 0',
                                textAlign: 'center',
                                color: '#2874f0',
                                fontWeight: 600,
                                fontSize: 14,
                                cursor: 'pointer'
                            }}>New to Flipkart? Create an account</Typography>
                        </LoginBox>
                        :
                        <LoginBox>
                            <TextField name="firstrname" label="Enter Email/Mobile Number" variant="standard" />
                            <TextField name="lastname" label="Enter Email/Mobile Number" variant="standard" />
                            <TextField name="userrname" label="Enter Email/Mobile Number" variant="standard" />
                            <TextField name="email" label="Enter Email/Mobile Number" variant="standard" />
                            <TextField name="Password" label="Enter Your Password" variant="standard" />
                            <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <LoginButton>Sign Up</LoginButton>
                            <Button sx={{
                                textTransform: 'none',
                                background: '#fff',
                                color: '#2874f0',
                                height: "48",
                                borderRadius: " 2",
                                boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
                            }} onClick={Register}> Existing User? Log In</Button>
                        </LoginBox>
                    }
                </Box>
            </LoginDialogContent>
        </LoginDialog>
    )
}

export default Login
