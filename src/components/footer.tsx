import { Box, Divider, ImageListItem, Link, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import {FooterContent , FooterIcons } from "../data/data"

const Footer = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
    
    return (
        <Box sx={{
            background: "#5727E7",
            padding:{
                xs: "38px 18px 83px 18px",
                sm: "60px 23px 73px 23px",
                lg: "106px 100px 87px 100px"
            },
            color: "wihte"
        }}>
            <Stack sx={{
                justifyContent: "space-between",
                alignItems: "center"
            }}
            direction={"row"}
            >
                <Typography sx={{
                    fontWeight: 600,
                    fontSize:{
                        xs: "20px",
                        lg: "27px"
                    },
                    color: "white"
                }}>
                    GraphixAi
                </Typography>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    {FooterIcons.map((icon) =>{
                        return(
                            <ImageListItem sx={{
                                width:{
                                    xs: "24px",
                                    lg: "27px"
                                },
                                height:{
                                    xs: "24px",
                                    lg: "27px"
                                }
                            }}>
                                <img src={icon.path} alt={icon.path} />
                            </ImageListItem>
                        )
                    })}
                </Stack>
            </Stack>
            <Divider sx={{
                border: "1px solid #FFFFFF91", 
                margin: {
                    xs: "30px 0",
                    sm: "32px 0 46px 0",
                    lg: "48px 0 45px 0"
                }
            }}></Divider>
            <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
                <Box sx={{
                    color: "white",
                    flexBasis: {
                        xs: "50%",
                        sm: "30%"
                    }
                    }}>
                    <Typography sx={{fontWeight: 600, marginBottom: "18px"}}>Product</Typography>
                    <Stack spacing={2}>
                        {FooterContent.product.map((link) => {
                            return(
                                <Link sx={{
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color:  "white"
                                }}>
                                    {link}
                                </Link>
                            )
                        })}
                    </Stack>
                </Box>
                <Box sx={{
                    color: "white",
                    flexBasis: {
                        xs: "50%",
                        sm: "30%"
                    }
                    }}>
                    <Typography sx={{fontWeight: 600, marginBottom: "18px"}}>Company</Typography>
                    <Stack spacing={2}>
                        {FooterContent.company.map((link) => {
                            return(
                                <Link sx={{
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color:  "white"
                                }}>
                                    {link}
                                </Link>
                            )
                        })}
                    </Stack>
                </Box>

                <Stack sx={{
                    flexBasis:{
                        xs: "100%",
                        sm: "30%"
                    }
                }}>
                    {isMatch ? <Divider sx={{
                                border: "1px solid #FFFFFF91", 
                                margin: "30px 0",
                            }}></Divider> : "" }

                    <Box sx={{
                        color: "white",
                        }}>
                        <Typography sx={{fontWeight: 600, marginBottom: "18px"}}>Contact Us</Typography>
                        <Stack spacing={2}>
                            {FooterContent.conatct.map((link) => {
                                return(
                                    <Link sx={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        color:  "white"
                                    }}>
                                        {link}
                                    </Link>
                                )
                            })}
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Footer