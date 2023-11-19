import React from 'react';

import avatarPhoto from "../utils/avatar-photo.jpg"

import "../styles/avatar.css";

function Avatar() {
  return (
    <div className='avatar'>
      <img src={avatarPhoto} alt="user photograph" />
    </div>
  );
}

export default Avatar;