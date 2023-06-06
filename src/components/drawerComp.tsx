import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    Button,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
const pages = ["Features", "Languages", "Use Cases", "Reviews", "Pricing", "FAQ’s"];
const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <React.Fragment>
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                sx={{
                    "&.MuiDrawer-paper":{
                        width:'100%'
                    }
                }}
            >
                <Box p={2} sx={{ width : {
                    xs : "100%",
                    sm : "350px"
                }}}>
                    <Stack sx={{position : 'relative'}} direction="row" justifyContent={'center'} alignItems={"center"}>
                        <Typography sx={{ fontSize: "20px", color: "#5727E7", fontWeight: 600 }}>GraphixAi</Typography>

                        <IconButton
                            sx={{ color: "#5727E7" , position : "absolute" , right : '0px'}}
                            onClick={() => setOpenDrawer(!openDrawer)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    <List>
                        {pages.map((page, index) => (
                            <ListItemButton key={index}>
                                <ListItemIcon sx={{ margin: "auto" }}>
                                    <ListItemText sx={{ color: "#545454", fontSize: "18px", fontWeight: "600" }}>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))}
                    </List>

                    <Button sx={{
                        fontSize: "14px",
                        background: "#E9E9E9",
                        color: "black",
                        fontWeight: 700,
                        padding: "10px 45px",
                        lineHeight: "normal",
                        width: '100%',
                        marginBottom: "10px"
                    }}

                        style={{ backgroundColor: '#E9E9E9' }}
                        variant="contained">
                        Log In
                    </Button>
                    <Button sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        padding: "10px 26px",
                        lineHeight: "normal",
                        width: '100%'
                    }}

                        style={{ backgroundColor: "#5727E7" }}
                        variant="contained" color="secondary">
                        Get Started
                    </Button>
                </Box>
            </Drawer>
            <IconButton
                sx={{ color: "#5727E7", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;