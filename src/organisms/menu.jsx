import React from 'react';

import { Box, List, ListItem, ListItemText, ListItemButton, Avatar } from "@mui/material";

import { 
  SignalCellularAltOutlined,
  PeopleOutlineOutlined,
  ShoppingBagOutlined,
  PersonOutlined,
  SettingsOutlined,
  LockOutlined,
  // UnfoldMoreOutlined,
  PersonAddAlt1Outlined,
  CancelOutlined
} from '@mui/icons-material';

import BasicSelect from '../atoms/select';

import logo from "../utils/logo.png";

import "../styles/app.css";

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
    <Box className="menu-container" >
      <Avatar src={logo} className='main-logo'/>
      <BasicSelect />
      <hr />
      <Box style={MENU_STYLES} >
        <List>
          <ListItem disablePadding >
            <ListItemButton className='list-item'>
              <SignalCellularAltOutlined style={ICON_STYLES} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <PeopleOutlineOutlined style={ICON_STYLES}/>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <ShoppingBagOutlined style={ICON_STYLES}/>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <PersonOutlined style={ICON_STYLES} />
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <SettingsOutlined style={ICON_STYLES}/>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <LockOutlined style={ICON_STYLES}/>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <PersonAddAlt1Outlined style={ICON_STYLES} />
              <ListItemText primary="Register" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton className='list-item'>
                <CancelOutlined style={ICON_STYLES}/>
              <ListItemText primary="Error" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box> 
    </Box>
  );
}

export default Menu