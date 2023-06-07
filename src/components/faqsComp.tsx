import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import {FaqsData} from "../data/data"
import PlusIcon from "../imgs/plus_icon.svg"

const Faqs = () => {
    return(
        <Box className="faq" sx={{
            padding:{
                xs: "0 18px",
                md: "0 24px",
                lg: "0 100px"
            },
            marginBottom: {
                xs: "92px",
                sm: "107px",
                lg: "113px"
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
                    sm: "68px",
                    lg: "87px"
                }
            }}>
                FAQ’s
            </Typography>
            {
                FaqsData.map((faq) => {
                    return(
                        <Accordion sx={{
                            boxShadow: "none",
                            marginBottom: "0px"
                        }}>
                            <AccordionSummary
                            expandIcon={<img src={PlusIcon} alt="" />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                                padding: " 15px 0px",
                                marginBottom: "15px",
                                borderBottom: "1px solid #BCBCBC"
                            }}
                            >
                            <Typography sx={{
                                fontWeight: 500,
                                fontSize: {
                                    xs: "17px",
                                    sm: "18px",
                                    lg: "22px"
                                }
                            }}>
                                {faq.title}
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{
                                paddingRight: "0px", 
                                paddingLeft: "0px",
                                fontSize: "16px",
                                color: "#737373"
                                }}>
                                <Typography>{faq.content}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </Box>
    )
}

export default Faqs;