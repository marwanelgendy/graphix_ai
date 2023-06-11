import { Box, Card, CardContent, ImageListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { HowItWork } from "../data/data"
import howItWork from '../imgs/howItWork.jpg'
const HowItWorkComp = () => {
    
    return (
        <Box sx={{
            padding: {
                xs: "48px 18px",
                md: "68px 24px",
                lg: "100px"
            },
            marginBottom: {
                xs: "42px",
                md: "68px",
                lg: "105px"
            },
            backgroundColor : "#F6F6FF"
        }}>
            <Typography sx={{
                textAlign: "center",
                fontWeight: 600,
                fontSize: {
                    xs: "25px",
                    sm: "35px",
                    lg: "45px"
                },
                marginBottom: {
                    xs: "45px",
                    lg: "95px"
                }
            }}>
                How it Works
            </Typography>

            {
                HowItWork.map((item, index) => {
                    return (
                        <Box key={index}>
                            {
                                index % 2 == 0 ?
                                    (<Stack
                                        sx={{
                                            marginBottom: {
                                                xs: "40px",
                                                sm: "50px",
                                                lg: "68px"
                                            }
                                        }}
                                        direction={{
                                            xs: 'column',
                                            md: 'row'
                                        }}
                                        justifyContent={'space-between'}
                                        alignItems={'stretch'}
                                        >

                                        <ImageListItem sx={{
                                            backgroundColor: "#D9D9D9",
                                            flexBasis: {
                                                md: "45%"
                                            },
                                            height: {
                                                xs: "224px",
                                                md: "auto"
                                            }
                                        }}>
                                            <img src={howItWork} alt="" />
                                        </ImageListItem>

                                        <Box sx={{
                                            padding: {
                                                xs: "30px 0px",
                                                md: "60px 0px"
                                            },
                                            flexBasis: {
                                                md: "45%"
                                            },
                                        }}>
                                            <Typography sx={{
                                                color: "#2B2B2B",
                                                fontWeight: 600,
                                                fontSize: {
                                                    xs: "20px",
                                                    md: "30px"
                                                },
                                                marginBottom: {
                                                    xs: "11px",
                                                    sm: "16px",
                                                    lg: "27px"
                                                }
                                            }}>
                                                {item.title}
                                            </Typography>
                                            <Typography sx={{
                                                color: "#737373",
                                                fontSize: {
                                                    xs: "16px",
                                                    md: "18px"
                                                },
                                                maxWidth: "530px"
                                            }}>
                                                {item.body}
                                            </Typography>
                                        </Box>
                                    </Stack>)
                                    :
                                    (<Stack
                                        sx={{
                                            marginBottom: {
                                                xs: "40px",
                                                sm: "50px",
                                                lg: "68px"
                                            }
                                        }}
                                        direction={{
                                            xs: 'column',
                                            md: 'row-reverse'
                                        }}
                                        justifyContent={'space-between'}
                                        alignItems={'stretch'}>

                                        <ImageListItem sx={{
                                            backgroundColor: "#D9D9D9",
                                            flexBasis: {
                                                md: "45%"
                                            },
                                            height: {
                                                xs: "224px",
                                                md: "auto"
                                            }
                                        }}>
                                            <img src={howItWork} alt="" />
                                        </ImageListItem>

                                        <Box sx={{
                                            padding: {
                                                xs: "30px 0px",
                                                md: "60px 0px"
                                            },
                                            flexBasis: {
                                                md: "45%"
                                            },
                                        }}>
                                            <Typography sx={{
                                                color: "#2B2B2B",
                                                fontWeight: 600,
                                                fontSize: {
                                                    xs: "20px",
                                                    md: "30px"
                                                },
                                                marginBottom: {
                                                    xs: "11px",
                                                    sm: "16px",
                                                    lg: "27px"
                                                }
                                            }}>
                                                {item.title}
                                            </Typography>
                                            <Typography sx={{
                                                color: "#737373",
                                                fontSize: {
                                                    xs: "16px",
                                                    md: "18px"
                                                },
                                                maxWidth: "530px"
                                            }}>
                                                {item.body}
                                            </Typography>
                                        </Box>
                                    </Stack>)
                            }
                        </Box>

                    )
                })
            }
        </Box>
    )
}

export default HowItWorkComp