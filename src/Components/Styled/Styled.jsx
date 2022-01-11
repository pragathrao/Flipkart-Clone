import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const MainBox = styled(Box)`
    display: ${(props) => props.display};
    margin: ${(props) => (props.margin)};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    padding: ${(props) => props.padding};
    background: ${(props) => props.background};
`;

export const Text = styled(Typography)`
    font-size: ${(props) => (props.fontSize)};
    margin: ${(props) => (props.margin)} ;
    font-weight: ${(props) => (props.fontWeight)};
    color: ${(props) => (props.color)} ;
`;
