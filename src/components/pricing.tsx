import { Box, Card, CardContent, Stack, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { PricingContent } from '../data/data'

const Pricing = () => {
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
            backgroundColor: "#F6F6FF"
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
                Pricing
            </Typography>

            <Stack
                direction={{xs : 'column' , md : 'row'}}
                justifyContent={'space-between'}
            >
                {
                    PricingContent.map(item => (
                        <Card sx={{
                            flexBasis : "32%",
                            boxShadow : "0px 0px 7px rgba(0, 0, 0, 0.24)",
                            borderRadius : "17px",
                            padding : "43px 27px 67px 27px",
                            marginBottom : {
                                xs: "20px",
                                md : "0px"
                            }
                        }}>
                            <CardContent>
                                <Typography sx={{
                                    color: "#2B2B2B",
                                    fontWeight: 600,
                                    fontSize: "15px",
                                    padding: "12px 29px",
                                    backgroundColor: item.color,
                                    width: 'fit-content',
                                    borderRadius: "30px",
                                    marginBottom: "18px"
                                }}>{item.type}</Typography>

                                <Typography sx={{ color: "#737373" }}>So you can see how incredible our tool is.</Typography>

                                <Divider sx={{
                                    border: "1px solid #00000026",
                                    margin: '22px 0px'
                                }}></Divider>

                                <Typography sx={{
                                    color: "#2B2B2B",
                                    fontWeight: 500,
                                    marginBottom: "24px"
                                }}>All Free features, plus:</Typography>

                                <List sx={{ padding: '0px' }}>
                                    {
                                        item.features.map(feature => (
                                            <ListItem sx={{ marginBottom: "12px", padding: "0px" }}>
                                                <ListItemIcon sx={{ minWidth: 'fit-content', marginRight: "10px" }}>
                                                    <DoneIcon sx={{ color: "#5727E7" }} />
                                                </ListItemIcon>
                                                <ListItemText sx={{ color: "#737373" }}>{feature}</ListItemText>
                                            </ListItem>
                                        ))
                                    }
                                </List>

                                <Divider sx={{
                                    border: "1px solid #00000026",
                                    margin: '60px 0px 14px 0px'
                                }}></Divider>

                                <Typography sx={{
                                    color: "#2B2B2B",
                                    fontWeight: 700,
                                    fontSize: '45px'
                                }}>
                                    {item.price}
                                    <Typography variant='overline' sx={{
                                        textTransform: 'lowercase',
                                        color: "#737373",
                                        fontSize: "15px"
                                    }}>/mo</Typography>
                                </Typography>

                                <Button sx={{
                                    color: "#FFFFFF",
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    paddingY: "15px",
                                    width: '100%',
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    borderRadius: '13px'
                                }}
                                style={{backgroundColor : "#2A2A2A"}}
                                >Join the Waitlist</Button>
                            </CardContent>
                        </Card>
                    ))
                }

            </Stack>

        </Box>
    )
}

export default Pricing