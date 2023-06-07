import { Accordion, AccordionDetails, AccordionSummary, Box, ImageListItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import {Cases} from "../data/data"
import {Link, Route, Routes} from "react-router-dom"

const UseCases = () =>{

    const theme = useTheme();
    const isMob = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Box className="cases" sx={{
            padding:{
                xs: "0 18px",
                md: "0 24px",
                lg: "0 100px"
            },
            marginBottom: {
                xs: "46px",
                sm: "68px",
                md: "102px"
            }
        }}>
            <Typography sx= {{
                textAlign: "center",
                fontWeight: 600,
                fontSize: {
                    xs: "25px",
                    sm: "35px",
                    lg: "45px"
                },
                marginBottom:{
                    xs: "45px",
                    sm: "39px",
                    lg: "68px"
                }
            }}>
                Use Cases
            </Typography>

            { 
                isMob &&  Cases.map((ele) => {
                    return(
                        <Accordion sx={{
                            boxShadow: "none",
                            marginBottom: "5px"
                        }}>
                            <AccordionSummary
                            expandIcon={<img src={ele.arrow} alt="" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                                padding: "10px 13px",
                                background: "#F6F6FF",
                                borderRadius: "7px"
                            }}
                            >
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: "19px"
                            }}>
                                {ele.title}
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                padding: '12px 0 0 0',
                                fontSize: "16px",
                                color: "#737373",
                                position: "relative"
                                }}>
                                <ImageListItem>
                                    <img src={ele.path} alt="" />
                                </ImageListItem>
                                <Box sx={{
                                        padding: "0 12px",
                                        position: "relative",
                                        top: "-88px",
                                        marginBottom: "-80px"
                                    }}>
                                        <Typography sx={{
                                            boxShadow: " 0px 0px 6px 0px #00000026",
                                            padding: "30px 18px",
                                            color: "#2B2B2B",
                                            borderRadius: "15px",
                                            backgroundColor: "white"
                                        }}>
                                            {ele.content}
                                        </Typography>
                                    </Box>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

            {
                !isMob && <Box>
                            <Stack direction={"row"} justifyContent={"center"}>
                                <Stack  sx={{
                                    marginRight: "20px",
                                    flexBasis:{
                                        sm: "25%",
                                        lg: "30%"
                                    }
                                    }}>
                                    {
                                        Cases.map((ele , index) => {
                                            return(
                                                <Link to={`/case${index+1}`} style={{"textDecoration": "none"}}>
                                                    <Stack 
                                                    direction={"row"}
                                                    alignItems={"center"}
                                                    justifyContent={"space-between"}
                                                    sx={{
                                                        marginBottom: "8px",
                                                        padding: "23px 13px",
                                                        background: "#F6F6FF",
                                                        borderRadius: "7px"
                                                    }}>
                                                        <Typography sx={{
                                                            fontSize: {
                                                                sm: "18p",
                                                                md: "20px",
                                                                lg: "22px"
                                                            },
                                                            fontWeight: 600,
                                                            textDecoration: "none !important",
                                                            color: "black"
                                                        }}>
                                                            {ele.title}
                                                        </Typography>
                                                        <ImageListItem><img src={ele.arrow} alt="" /></ImageListItem>
                                                    </Stack>
                                                </Link>
                                            )
                                        })
                                    }
                                </Stack>
                                <Routes>
                                    {
                                        Cases.map((ele , index) => {
                                            return(
                                                <Route 
                                                    path={`/case${index+1}`}
                                                    element={
                                                        <Stack 
                                                        direction={"row"}
                                                        sx={{
                                                            flexBasis:{
                                                                sm: '75%',
                                                                lg: "70%"
                                                            },
                                                        }}
                                                        >
                                                            <ImageListItem><img src={ele.path} alt="" style={{"width" : "auto"}}/></ImageListItem>
                                                            <Box sx={{
                                                                
                                                            }}>
                                                                <Typography sx={{
                                                                    boxShadow: " 0px 0px 6px 0px #00000026",
                                                                    padding: {
                                                                        sm: "40px 18px",
                                                                        lg: "64px 30px"
                                                                    },
                                                                    color: "#2B2B2B",
                                                                    borderRadius: "15px",
                                                                    backgroundColor: "white",
                                                                    fontSize:{
                                                                        sm: "15px",
                                                                        md: "18px"
                                                                    }
                                                                }}>
                                                                    {ele.content}
                                                                </Typography>
                                                            </Box>
                                                        </Stack>
                                                    }
                                                    />
                                            )
                                        })
                                    }
                                    
                                </Routes>
                            </Stack>
                        </Box>
            }
            
        </Box>
    )
}

export default UseCases;