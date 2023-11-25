import React from 'react';

import { Box, Avatar, Paper, InputBase } from '@mui/material';
import avatarImage from "../utils/man-beard.webp";

import { 
  PeopleOutlineOutlined,
  NotificationsNoneOutlined,
  SearchOutlined
} from '@mui/icons-material';

function Header({ search, onSearch, onSearchType }) {
  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      onSearch();
      console.log(event.target.value);
    }
  }
  
  return (
    <Paper className='header-styles' elevation={1}>
      <Box className='header-styles'>  
        <SearchOutlined />
        <InputBase style={{ flex: 1 }} placeholder="Search " 
          value={search} 
          onKeyDown={onKeyDownHandler} 
          onChange={onSearchType}
        />
      </Box>
      <Box className='header-styles'>
        <PeopleOutlineOutlined />
        <NotificationsNoneOutlined />
        <Avatar alt="user photo" src={avatarImage} />
      </Box>
    </Paper>
  );
}

export default Header;