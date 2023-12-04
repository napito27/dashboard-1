import React from 'react';

import { Box, Avatar, Paper, InputBase } from '@mui/material';

import { 
  PeopleOutlineOutlined,
  NotificationsNoneOutlined,
  SearchOutlined
} from '@mui/icons-material';

import avatarImage from "../utils/man-beard.webp";

function Header({ search, onSearch, onSearchType }) {
  const onKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      onSearch();
      console.log(event.target.value);
    }
  }
  
  return (
    <Paper className='header-container' elevation={1}>
      <Box className='header-search-container'>  
        <SearchOutlined />
        <InputBase style={{ flex: 1 }}  
          value={search} 
          onKeyDown={onKeyDownHandler} 
          onChange={onSearchType}
        />
      </Box>
      <Box className='header-icon-container'>
        <PeopleOutlineOutlined />
        <NotificationsNoneOutlined />
        <Avatar alt="user photo" src={avatarImage} />
      </Box>
    </Paper>
  );
}

export default Header;