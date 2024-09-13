import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Logo from '../feature/logo/Logo';
import MenuIcon from '@mui/icons-material/Menu';

export default function AnchorTemporaryDrawer({navmenu}) {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(prevState => !prevState);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    > 
      <div style={{padding: '8px 16px'}}>
        <Logo />
      </div>
      <List>
        {navmenu?.map(({name, link}) => (
          <Link key={link} href={link}>
            <ListItem  disablePadding>
              <ListItemButton>
                  <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer()}>
            <MenuIcon />
          </button>
          <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer()}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
