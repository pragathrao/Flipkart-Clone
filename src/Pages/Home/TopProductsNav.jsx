import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { navData } from '../../Components/Constants/data.js'
import { MainBox } from '../../Components/Styled/Styled.jsx'

const SubBox = styled(Box)`
    text-align: center;
    padding: 12px 8px;
`

const Img = styled("img")`
 width: 64px;
`

function NavBar() {
    return (
        <div style ={{ background: "white", boxShadow: "0 1px 1px 0 rgb(0 0 0 / 16%)"}}>
            <MainBox display = {"flex"} justifyContent = {"Space-between"} margin = {"55px 130px 0"} >
                {navData.map((data) => (
                    <SubBox>
                        <Img src={data.url} />
                        <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>{data.text}</Typography>
                    </SubBox>
                ))}
            </MainBox>
        </div>
    )
}

export default NavBar
