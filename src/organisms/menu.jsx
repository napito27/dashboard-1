import React from 'react';

import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import LayersIcon from '@mui/icons-material/Layers';

import { Box, List, ListItem, ListItemText, ListItemButton } from "@mui/material";

const MENU_STYLES = {
  display: "flex",
  gap: "10px",
  height: "100vh",
}

const ICON_STYLES = {
  marginRight: "8px"
}

function Menu() {

  return (
    <Box style={{backgroundColor: "#101727", color: "#BCC2CE", alignItems: "center"}}>
      <LayersIcon sx={{margin: "16px", color: "#4240BF"}}/>
      <Box className="menu-top">
        Acme Inc
        <p>Your tier: Premium </p> 
      </Box>
      <hr />
      <Box style={MENU_STYLES} >
        <List>
          <ListItem disablePadding >
            <ListItemButton className='list-item'>
              <SignalCellularAltOutlinedIcon style={ICON_STYLES} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <PeopleOutlineOutlinedIcon style={ICON_STYLES}/>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <ShoppingBagOutlinedIcon style={ICON_STYLES}/>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <PersonOutlineOutlinedIcon style={ICON_STYLES} />
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <SettingsOutlinedIcon style={ICON_STYLES}/>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <LockOutlinedIcon style={ICON_STYLES}/>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <PersonAddAlt1OutlinedIcon style={ICON_STYLES} />
              <ListItemText primary="Register" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <CancelOutlinedIcon style={ICON_STYLES}/>
              <ListItemText primary="Error" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box> 
    </Box>
  );
}

export default Menu