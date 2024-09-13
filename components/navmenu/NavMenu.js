
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styles from './navmenu.module.css';
import useDeviceDetector from '../../utils/useDeviceDetector';
import ExtraMenu from './ExtraMenu';
import AnchorTemporaryDrawer from './AnchorTemporaryDrawer';

const NavMenu = () => {

  const [navmenu, setNavMenu] = useState([]);
  const [extraMenu, setExtraMenu] = useState([]);

  //  get device type
  const {isDesktop} = useDeviceDetector()

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('./navmenu.json');
        const result = await response.json();
        if(result.length > 4 && isDesktop) {
          setNavMenu(result.slice(0, 3))
          setExtraMenu(result.slice(3))
        } else {
          setNavMenu(result)
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  return ( <> 
    { isDesktop ? (
      <ul className={styles.navList}>
        {
          navmenu.map((item) => {
            return (
              <li key={item.link}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            )
          })
        }
        {
          extraMenu.length > 0 && <ExtraMenu menuList={extraMenu} label="More"/>
        }
        
      </ul>
      ) : (<>
          {
            // Mobile Drawer Menu
            <AnchorTemporaryDrawer navmenu={navmenu} />
          }

      </>
      )
    }
  </>)
}

export default NavMenu