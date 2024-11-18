import React, { useState } from 'react'
import {AppBar,Toolbar,Typography,IconButton,Button,Drawer,List, ListItem ,ListItemText, useMediaQuery,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function Navbar() {
    const[open,setOpen] = useState(false);
    const Theme = useTheme();
    const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"));
    const menuItems = ["About","Services","Projects","contacts"];
  return (
    <>
    <AppBar elevation={0} className='Navbar'position='static' sx={{backgroundColor:"white",color:"black", borderBottom:"1px solid #fafafa"}}>
        <Toolbar>
            {IsMobile ? (
                <div>
                    <IconButton color='inherit'onClick={()=>setOpen(false)}>
                        <MenuIcon/>
                    </IconButton>
                </div>
            ):(
                <>
                <Typography sx={{flexGrow:1}}>
                    <img src="img\logo.png" alt="" />
                </Typography>
                {menuItems.map((item)=>(
                    <Button color='inherit'key={item}>{item}</Button>
                ))}
                <Button variant='outlined'sx={{color:"#2AB691",
                    backgroundColor:"white",
                    borderRadius:"10px",
                    "&:hover":{
                        backgroundColor:"#2AB666",
                        color:"white",
                    }
                }}>sign up

                </Button>
                </>
            )
        }
        </Toolbar>
    </AppBar>
    <Drawer anchor='left'open={open} onClick={()=>setOpen(false)}>
        <List>
            {menuItems.map((item)=>(
                <ListItem button key={item} onClick={()=>setOpen(false)}>
                    <ListItemText>{item}</ListItemText>
                </ListItem>
            ))}
            <ListItem button>
                <ListItemText primary="sign up"/>
            </ListItem>
        </List>
    </Drawer>
    </>
  )
}

export default Navbar;