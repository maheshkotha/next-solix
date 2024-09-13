"use client";
import React, { useContext } from "react";
import CommonButton from "../common/Button";
import ProfileMenu from "../feature/profilemenu/ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import Logo from "../feature/logo/Logo";
import NavMenu from "../navmenu/NavMenu";
import useDeviceDetector from "../../utils/useDeviceDetector";
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import styles from './header.module.css'


const Header = () => {
  
  const { isAuthenticated } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const handleLogin = () => {
    // need to implement from model and actions
    dispatch(login())
  } 

  const { isDesktop } =  useDeviceDetector()

  return (
    <div className={styles.header}>
      <div className={styles.header__right}>
        {isDesktop && <Logo /> }
        <NavMenu />
      </div>
      <div className={styles.header__left}>
        {isAuthenticated && (
            <SearchIcon />
        )}
        <AppsIcon />
        {isAuthenticated ? <ProfileMenu /> : (
          <CommonButton handleClick={handleLogin}>
            <label>login/signup</label>
          </CommonButton>
        )}
      </div>
    </div>
  );
};

export default Header;
