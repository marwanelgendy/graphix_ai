import {
    Box, ImageListItem, Stack, Typography, useMediaQuery,
} from '@mui/material'
import React from 'react'
import { Reviews } from "../data/data"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ReviewSection = () => {

    const length = Reviews.length
    const ReviewPart1 = Reviews.slice(0, length / 2)
    const ReviewPart2 = Reviews.slice(length / 2, length)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

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


            <Box>

                <Box sx={{
                    paddingY: "30px",
                    borderTop: "1px solid #00000040"
                }}
                >
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        removeArrowOnDeviceType={["mobile", "superLargeDesktop", "tablet", "desktop"]}
                        itemClass='carousel-item'
                    >
                        {
                            ReviewPart1.map((item, index) => {
                                return (
                                    <Box key={index}>
                                        {
                                            index == 0 ?

                                                (<Box>
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

                                                (<Box>
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
                    </Carousel>
                </Box>

                <Box
                    sx={{
                        paddingY: "30px",
                        paddingLeft: {
                            xs : "0px",
                            sm : "60px"
                        },
                        borderTop: "1px solid #00000040"
                    }}
                >
                    <Carousel 
                        responsive={responsive}
                        autoPlay={true}
                        removeArrowOnDeviceType={["mobile", "superLargeDesktop", "tablet", "desktop"]}
                        itemClass='carousel-item'
                    >
                        {
                            ReviewPart2.map((item, index) => {
                                return (
                                    <Box key={index}>
                                        {
                                            index == 0 ?

                                                (<Box>
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

                                                (<Box>
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
                    </Carousel>
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewSection