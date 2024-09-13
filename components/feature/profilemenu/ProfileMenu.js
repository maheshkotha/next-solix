"use client";
import React from 'react'
import styles from './profilemenu.module.css';
import { Button, Fade, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/authSlice';

const userOptions = [
  {
    name: "Setting",
  },
  {
    name: "logout",
  }
]
const ProfileMenu = () => {


 const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (item)=> {
    // need to implement confirm mation model
    handleClose();
    if(item.name === "logout") {
      dispatch(logout());
    }
  }
  
  return (
    <div className={styles.container}>
      <AccountCircleIcon />
      <Button
        id="profile-button"
        aria-controls={open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{padding: 0, color: 'inherit', textTransform: "capitalize", fontSize: '16px'}}
      >
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="profile-menu"
        MenuListProps={{
          'aria-labelledby': 'profile-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
          userOptions.map(item => <MenuItem key={item.name} onClick={() =>handleAction(item)}>
            {item.name}</MenuItem>)
        }
      </Menu>
    </div>
  )
}

export default ProfileMenu