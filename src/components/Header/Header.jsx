import React, { useState } from 'react'
import clsx from 'clsx'
import './Header.css'

// MUI components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuButton,
  InputBase,
  Drawer,
	Divider,
	List
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  Apps as AppsIcon,
  MoreVert as MoreVertIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons'
import YouTubeIcon from '@material-ui/icons/YouTube';

import { mainListItems, secondListItems } from '../ListItems'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
	drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
	toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}))

const Header = () => {
  const classes = useStyles()
	const[open, setOpen] = useState(true)

	const handleDrawerIsOpen = () =>{
		setOpen(!open)
	}
  return (
    <div className="Header">
      <AppBar position="static" color="white">
        <Toolbar>
          <div className="Header__container">
            <div className="Header__container__start">
              <IconButton>
                <MenuIcon onClick={handleDrawerIsOpen}/>
              </IconButton>
              <YouTubeIcon style={{color: "red"}} />
              <Typography variant="h6">
                YouTube-Clone
              </Typography>
            </div>
            <div className="Header__container__center">
              <yt-searchbox className="Header__Yt__Section">
                <form className="Header__Yt__Section__Form">
                  <InputBase
                    placeholder="Search"
                    className="Header__searchSection__container"
                  />
                  <div className="Header__Yt__Section__searchIcon">
                    <SearchIcon fontSize="medium" className="Header__SearchIcon"/>
                  </div>
                </form>
              </yt-searchbox>
              <IconButton>
                <MicIcon style={{color: "black"}}/>
              </IconButton>
            </div>
            <div className="Header__container__end">
              <IconButton>
                <AppsIcon  style={{color: "black"}}/>
              </IconButton>
              <IconButton>
                <MoreVertIcon  style={{color: "black"}}/>
              </IconButton>
              <div className="Header__container__end__SignInButton">
                <AccountCircleRoundedIcon style={{color: "#064fd4"}}/>
                <div className="Header__container__end__SignInButtonText">
                  SIGN IN
                </div>
              </div>
            </div>
          </div>
        </Toolbar>

      </AppBar>
      <Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<Divider />
				<List>{mainListItems}</List>
				<Divider />
        {
          open ?
          <List>
            {secondListItems}
          </List>
          :
          null
        }

			</Drawer>
    </div>
  )
}

export default Header
