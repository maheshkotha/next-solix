import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ExtraMenu({menuList, label}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{padding: 0, color: 'inherit', textTransform: "capitalize", fontSize: '16px'}}
      >
        {label} &nbsp;
        <ExpandMoreIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
          menuList.map((item) => {
          return (
            <Link key={item.link} href={item.link}>
              <MenuItem key={item.link} onClick={handleClose}>{item.name}</MenuItem>
            </Link>)
          })}
      </Menu>
    </div>
  );
}
