import React, { useState } from "react";
import {
    AppBar,
    Stack,
    Button,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    ImageListItem
} from "@mui/material";
import logo from '../imgs/logo.png'
import DrawerComp from "./drawerComp";
const NavBar = () => {

    const theme = useTheme();   
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <AppBar sx={{ background: "transparent", boxShadow: "none" , paddingTop:'30px' }} style={{position : 'relative'}}>
                <Toolbar sx={{padding :{
                    xs : "0px 20px",
                    md: "0px 50px"
                }}}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <ImageListItem sx={{
                            width : "72px"
                        }} >
                            <img style={{width : "100%"}} src={logo} alt="logo" />
                        </ImageListItem>
                        <Typography sx={{ fontSize: "25px", color: "#5727E7", fontWeight: 600 }}>GraphixAi</Typography>
                    </Stack>
                    {isMatch ? (
                        <>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                            <Button sx={{ 
                                fontSize: "14px", 
                                background: "#E9E9E9", 
                                color: "black", 
                                fontWeight: 700, 
                                marginLeft: "auto",
                                padding : "10px 45px",
                                lineHeight : "normal"
                                }}

                                style={{ backgroundColor: '#E9E9E9'}}
                                variant="contained">
                                Log In
                            </Button>
                            <Button sx={{ 
                                fontSize: "14px", 
                                fontWeight: 700, 
                                marginLeft: "10px",
                                padding : "10px 26px",
                                lineHeight : "normal" }} 
                                
                                style={{backgroundColor : "#5727E7"}}
                                variant="contained" color="secondary">
                                Get Started
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default NavBar;