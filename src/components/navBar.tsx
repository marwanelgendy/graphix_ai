import React, { useState } from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import { red } from "@mui/material/colors";
import DrawerComp from "./drawerComp";
// import DrawerComp from "./Drawer";
const NavBar = () => {

    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <React.Fragment>
            <AppBar sx={{ background: "transparent", boxShadow: "none" , paddingTop:'30px' }} style={{position : 'relative'}}>
                <Toolbar sx={{padding :{
                    xs : "0px 20px",
                    md: "0px 50px"
                }}}>
                    <Typography sx={{ fontSize: "25px", color: "#5727E7", fontWeight: 600 }}>GraphixAi</Typography>
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