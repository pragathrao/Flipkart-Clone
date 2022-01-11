import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton';
import SearchBar from './Search';

const HeadBar = styled(AppBar)`
    background: "#2874f0";
    height: 55px;
        & .MuiToolbar-regular {
            min-height: 55px;
        }
`;

const Img = styled("img")`
    width: 75px;

`;
const SubImg = styled("img")`
    width: 10px;
    margin-left: 4px;
    height: 10px;
`;

const BoxDiv = styled(Box)`
    display: flex;
`
const BoxP = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-Decoration: none;
 `

function Header() {
    const Logo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const SubLogo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <div>
            <HeadBar elevation = {0}>
                <Toolbar>
                    <BoxP>
                <Link style ={{color:"inherit", textDecoration:"none"}} to = "/">
                        <Img src={Logo} />
                        <BoxDiv>
                            <Typography
                                sx={{ fontSize: "12px", fontStyle: "italic" }}>
                                Explore <span style = {{color:"#ffe500"}}> Plus </span>
                            </Typography>
                            <SubImg src={SubLogo} />
                        </BoxDiv>
                        </Link>
                    </BoxP>
                    <SearchBar />
                    <HeaderButton/>
                </Toolbar>
            </HeadBar>
        </div>
    )
}

export default Header
