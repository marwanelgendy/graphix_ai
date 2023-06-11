import { Box, Card, CardContent, ImageListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import {Features} from "../data/data"

const featuersComp = () => {
    return (
        <Box sx={{
            
            padding:{
                xs: "0 18px",
                md: "0 24px",
                lg: "0 100px"
            },
            marginBottom:{
                xs: "42px",
                md: "68px",
                lg: "105px"
            }
        }}>
            <Typography sx={{
                textAlign: "center",
                fontWeight: 600,
                fontSize:{
                    xs: "25px",
                    sm: "35px",
                    lg: "45px"
                },
                marginBottom:{
                    xs: "45px",
                    lg: "64px"
                }
            }}>
                Features
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
                {Features.map((feature , index) =>{
                    return(
                        <Card sx={{
                            boxShadow: "0px 0px 7px 0px #0000003D",
                            borderRadius: "14px",
                            padding:{
                                xs: "32px 10px 24px 10px",
                                sm: "50px 16px 29px 16px",
                                lg: "71px 29px 31px 29px"
                            },
                            marginBottom:{
                                xs: "8px",
                                sm: "18px",
                                lg: "0"
                            },
                            flex:{
                                xs: "0 0 100%",
                                sm: "0 0 48%",
                                lg: "1 1 "
                            },
                            marginLeft :{
                                lg: "10px"
                            }
                        }}
                        key={index}
                        >
                            <CardContent>
                                <ImageListItem sx={{width:"52px" , height: "52px"}}>
                                    <img src={feature.path} alt="ai" />
                                </ImageListItem>
                                <Typography sx={{
                                    fontWeight: 600,
                                    fontSize:{
                                        xs: "19px",
                                        sm: "20px",
                                        lg: "22px"
                                    },
                                    margin:{
                                        xs: "17px 0 11px 0",
                                        sm: "11px 0 11px 0",
                                        lg: "11px 0 16px 0"
                                    }
                                }}>
                                    {feature.title}
                                </Typography>
                                <Typography sx={{
                                    color: "#737373",
                                    fontSize:{
                                        xs: "14px",
                                        sm: "15px",
                                        lg: "16px"
                                    }
                                }}>
                                    {feature.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
                
            </Stack>
        </Box>
    )
}

export default featuersComp