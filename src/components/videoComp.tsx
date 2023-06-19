import { Box, Typography, Stack, ImageListItem, Card, CardContent, CardMedia  } from "@mui/material";
import React, { useState } from "react";
import english from '../imgs/english.svg'
import spanish from '../imgs/spanish.svg'
import mandarin from '../imgs/mandarin.svg'
import playBtn from '../imgs/playBtn.svg'
import video from '../imgs/example.mp4'
import ReactPlayer from 'react-player'


const VideoComp = () => {

    const [language, setLanguage] = useState("English")

    const onSelectLanguage = (language: string) => {
        setLanguage(language)
    }

    return (
        <Stack sx={{
            padding: {
                xs: '0px 18px',
                sm: '0px 24px',
                lg: '0px 100px'
            },
            paddingBottom: '50px !important'
        }}
            spacing={2}
            direction={{
                xs: 'column',
                sm: 'row'
            }}

            alignItems={'center'}
        >
            <Box sx={{
                display: "flex",
                flexBasis: {
                    sm: '50%'
                },
                height: {
                    xs: "224px",
                    sm: 'auto'
                },
                borderRadius: '14px'
            }}
                justifyContent={'center'}
                alignItems={'center'}
            >
                {language == "English" && 
                    <ReactPlayer url={video} controls={true} class="react-player"  />
                }
                
                {language == "Spanish" && <ReactPlayer url={video} controls={true} class="react-player"  />}

                {language == "Mandarin" && <ReactPlayer url={video} controls={true} class="react-player"  />}
            </Box>
            <Box sx={{
                flexBasis : "55%",
            }}>
                <Card sx={{
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.2)",
                    borderRadius: "14px",
                    marginBottom: "24px",
                    padding: '16px 16px 24px 16px',
                    cursor : 'pointer'
                }}
                onClick={() => onSelectLanguage('English')}
                >
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <ImageListItem sx={{ marginRight: "20px" }}>
                            <img src={english} alt="english" />
                        </ImageListItem>
                        <Box>
                            <Typography sx={{
                                fontWeight: 500,
                                marginBottom: '5px',
                                fontSize: {
                                    xs: "17px",
                                    md: "20px"
                                }
                            }}>
                                English
                            </Typography>

                            <Typography sx={{
                                color: "#737373",
                                fontSize: {
                                    xs: "14px",
                                    md: "16px"
                                }

                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Typography>
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.2)",
                    borderRadius: "14px",
                    marginBottom: "24px",
                    padding: '16px 16px 24px 16px',
                    cursor : 'pointer'
                }}
                onClick={() => onSelectLanguage('Spanish')}
                >
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <ImageListItem sx={{ marginRight: "20px" }}>
                            <img src={spanish} alt="spanish" />
                        </ImageListItem>
                        <Box>
                            <Typography sx={{
                                fontWeight: 500,
                                marginBottom: '5px',
                                fontSize: {
                                    xs: "17px",
                                    md: "20px"
                                }
                            }}>
                                Spanish
                            </Typography>
                            <Typography sx={{
                                color: "#737373",
                                fontSize: {
                                    xs: "14px",
                                    md: "16px"
                                }
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Typography>
                        </Box>
                    </CardContent>
                </Card>

                <Card sx={{
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.2)",
                    borderRadius: "14px",
                    padding: '16px 16px 24px 16px',
                    cursor : 'pointer'
                }}
                onClick={() => onSelectLanguage('Mandarin')}
                >
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <ImageListItem sx={{ marginRight: "20px" }}>
                            <img src={mandarin} alt="mandarin" />
                        </ImageListItem>
                        <Box>
                            <Typography sx={{
                                fontWeight: 500,
                                marginBottom: '5px',
                                fontSize: {
                                    xs: "17px",
                                    md: "20px"
                                }
                            }}>
                                Mandarin
                            </Typography>
                            <Typography sx={{
                                color: "#737373",
                                fontSize: {
                                    xs: "14px",
                                    md: "16px"
                                }
                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    )
}

export default VideoComp;