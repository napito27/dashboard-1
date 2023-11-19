import React from 'react';

import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Box, Avatar, Paper } from '@mui/material';

const ICON_STYLES = {
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  color: "#6B7280",
  display: "flex",
  gap: "10px",
  height: "50px",
  justifyContent:"space-between",
  paddingRight: "8px"
}

function Header() {

  return (
    <Paper style={ICON_STYLES} elevation={3}>
      <Box style={ICON_STYLES}>  
        <SearchOutlinedIcon />
      </Box>
      <Box style={ICON_STYLES}>
        <PeopleIcon />
        <NotificationsIcon />
        <Avatar alt="user photo" src="" />
      </Box>
    </Paper>
  );
}

export default Header;