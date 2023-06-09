import { Box, Card, CardContent, ImageListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import {Languages} from "../data/data"

const languagesComp = () => {
    return (
        <Box sx={{
            textAlign : "center",
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
                Languages We Translate
            </Typography>
            <Stack direction={"row"} justifyContent={"center"} flexWrap={"wrap"}>
                {Languages.map((language , index) => {
                    return(
                        <Card
                        key={index}
                        sx={{
                            boxShadow: "0px 0px 6px 0px #00000026",
                            borderRadius: "7px",
                            padding:{
                                xs: "13px 0 13px 13px",
                                lg: "16px 0 16px 9px"
                            },
                            margin:{
                                xs: "0 8px 10px 0",
                                sm: "0 13px 16px 0",
                                lg: "0 24px 24px 0"
                            },
                            flexBasis:{
                                xs: "45%",
                                md: "30%",
                                lg: "23%"
                            }
                            }}>
                            <CardContent sx={{display: "flex" , alignItems: "center"}}>
                                <ImageListItem sx={{marginRight: "16px"}}>
                                    <img src={language.path} alt="english_lang" />
                                </ImageListItem>
                                <Typography sx={{
                                    fontWeight: 500,
                                    fontSize:{
                                        xs: "16px",
                                        md: "18px",
                                        lg: "20px"
                                    }
                                }}>
                                    {language.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default languagesComp