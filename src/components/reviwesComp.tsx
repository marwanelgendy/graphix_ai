import {
    Box, Card, CardContent, ImageListItem, Stack, Typography, useMediaQuery,
    useTheme,
} from '@mui/material'
import React from 'react'
import { Reviews } from "../data/data"
import avatar1 from "../imgs/avatar1.svg"

const ReviewsComp = () => {

    const length = Reviews.length
    const ReviewPart1 = Reviews.slice(0, length / 2)
    const ReviewPart2 = Reviews.slice(length / 2, length)

    return (
        <Box sx={{

            padding: {
                xs: "0 18px",
                md: "0 24px",
                lg: "0 100px"
            },
            marginBottom: {
                xs: "42px",
                md: "68px",
                lg: "105px"
            }
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
                    lg: "64px"
                }
            }}>
                Reviews
            </Typography>


            <Box className='scroll-bar' sx={{
                width: "100%",
                overflowX: "scroll"
            }}>
                <Box className="slider-animation" sx={{
                    paddingY: "30px",
                    borderTop: "1px solid #00000040",
                    display: 'inline-flex',
                    position : 'relative',
                    transition : '.3s',
                }}>
                    {
                        ReviewPart1.map((item, index) => {
                            return (
                                <Box key={index}>
                                    {
                                        index == 0 ?

                                            (<Box  sx={{
                                                width:{
                                                    xs : "370px",
                                                    sm:"473px"
                                                },
                                                paddingY: "10px",
                                                paddingRight:{
                                                    xs: "15px",
                                                    sm: "45px"
                                                }
                                            }}>
                                                <Stack direction={'row'} alignItems={'center'} sx={{
                                                    marginBottom: "15px"
                                                }}>
                                                    <ImageListItem sx={{
                                                        marginRight: "17px"
                                                    }}>
                                                        <img src={item.avatar} alt="" />
                                                    </ImageListItem>
                                                    <Box>
                                                        <Typography sx={{
                                                            color: "#2B2B2B",
                                                            fontWeight: 600,
                                                            fontSize: "18px",
                                                            marginBottom: "5px"
                                                        }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography>
                                                            {item.position}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                                <Typography sx={{ color: "#737373" }}>
                                                    {item.review}
                                                </Typography>
                                            </Box>)

                                            :

                                            (<Box  sx={{
                                                width:{
                                                    xs : "370px",
                                                    sm:"473px"
                                                },
                                                paddingY : "10px",
                                                paddingX : {
                                                    xs : "15px",
                                                    sm : "45px"
                                                },
                                                borderLeft: "1px solid #00000040"

                                            }}>
                                                <Stack direction={'row'} alignItems={'center'} sx={{
                                                    marginBottom: "15px"
                                                }}>
                                                    <ImageListItem sx={{
                                                        marginRight: "17px"
                                                    }}>
                                                        <img src={item.avatar} alt="" />
                                                    </ImageListItem>
                                                    <Box>
                                                        <Typography sx={{
                                                            color: "#2B2B2B",
                                                            fontWeight: 600,
                                                            fontSize: "18px",
                                                            marginBottom: "5px"
                                                        }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography>
                                                            {item.position}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                                <Typography sx={{ color: "#737373" }}>
                                                    {item.review}
                                                </Typography>
                                            </Box>)
                                    }
                                </Box>
                            )
                        })
                    }
                </Box>

                <Box className="slider-animation" sx={{
                    paddingY: "30px",
                    paddingLeft: {
                        xs : "0px",
                        sm : "60px"
                    },
                    borderTop: "1px solid #00000040",
                    display: 'inline-flex',
                    position : 'relative',
                    transition : '.3s',
                    left : '0',
                }}>
                    {
                        ReviewPart2.map((item, index) => {
                            return (
                                <Box key={index}>
                                    {
                                        index == 0 ?

                                            (<Box sx={{
                                                width:{
                                                    xs : "370px",
                                                    sm:"473px"
                                                },
                                                paddingY: "10px",
                                                paddingRight:{
                                                    xs : "15px",
                                                    sm : "45px"
                                                }
                                            }}>
                                                <Stack direction={'row'} alignItems={'center'} sx={{
                                                    marginBottom: "15px"
                                                }}>
                                                    <ImageListItem sx={{
                                                        marginRight: "17px"
                                                    }}>
                                                        <img src={item.avatar} alt="" />
                                                    </ImageListItem>
                                                    <Box>
                                                        <Typography sx={{
                                                            color: "#2B2B2B",
                                                            fontWeight: 600,
                                                            fontSize: "18px",
                                                            marginBottom: "5px"
                                                        }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography>
                                                            {item.position}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                                <Typography sx={{ color: "#737373" }}>
                                                    {item.review}
                                                </Typography>
                                            </Box>)

                                            :

                                            (<Box sx={{
                                                width:{
                                                    xs : "370px",
                                                    sm:"473px"
                                                },
                                                paddingY : "10px",
                                                paddingX : {
                                                    xs : "15px",
                                                    sm : "45px"
                                                },
                                                borderLeft: "1px solid #00000040"

                                            }}>
                                                <Stack direction={'row'} alignItems={'center'} sx={{
                                                    marginBottom: "15px"
                                                }}>
                                                    <ImageListItem sx={{
                                                        marginRight: "17px"
                                                    }}>
                                                        <img src={item.avatar} alt="" />
                                                    </ImageListItem>
                                                    <Box>
                                                        <Typography sx={{
                                                            color: "#2B2B2B",
                                                            fontWeight: 600,
                                                            fontSize: "18px",
                                                            marginBottom: "5px"
                                                        }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography>
                                                            {item.position}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                                <Typography sx={{ color: "#737373" }}>
                                                    {item.review}
                                                </Typography>
                                            </Box>)
                                    }
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewsComp