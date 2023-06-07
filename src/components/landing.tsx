import { Box, Typography , Button } from "@mui/material";
import React from "react";

const Landing = () => {
    return (

        <Box sx={{
            textAlign: 'center',
            margin: {
                xs: "50px 0px",
                md: "100px 0px"
            }
        }}>
            <Typography sx={{
                color: "#2B2B2B",
                fontWeight: 600,
                fontSize: {
                    xs: "40px",
                    sm: "50px",
                    md: "64px"
                }
            }}>
                Translate your
            </Typography>
            <Typography sx={{
                color: "#2B2B2B",
                fontWeight: 600,
                fontSize: {
                    xs: "40px",
                    sm: "50px",
                    md: "64px"
                }
            }}
            >
                videos
                <Typography variant="overline" sx={{
                    color: "#5727E7",
                    textTransform: 'none',
                    fontWeight: 600,
                    marginLeft: {
                        md: "8px"
                    },
                    fontSize: {
                        xs: "40px",
                        sm: "50px",
                        md: "64px"
                    }
                }}>with AI</Typography>
            </Typography>

            <Typography sx={{
                fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "21px"
                },
                margin: "18px auto 33px auto",
                width: {
                    xs : "80%",
                    sm: "100%"
                }
            }}>Make your content multilingual in seconds and reach people worldwide
            </Typography>

            <Button sx={{
                fontSize: "14px",
                fontWeight: 700,
                padding: "18px 58px",
                lineHeight: "normal",
                borderRadius : "13px"
            }}

                style={{ backgroundColor: "#5727E7" }}
                variant="contained" color="secondary">
                Get Started
            </Button>
        </Box>

    )
}

export default Landing;