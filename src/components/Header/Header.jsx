import React, { useState } from 'react'
import clsx from 'clsx'
import './Header.css'

// Local components
import Tag from '../Tag'
import ToDoList from '../ToDoList'

// MUI components
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Drawer,
	Divider,
	List,
  CssBaseline,
  Container,
  Grid,
  Box
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Mic as MicIcon,
  Apps as AppsIcon,
  MoreVert as MoreVertIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
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
  colorBlack: {
    color: 'black'
  },
  hideOnMobile: {
    [theme.breakpoints.down("xs")]: {
      display: 'none !important'
    }
  },
  dFlex: {
    display: 'flex',
  },
  alignCenter: {
    alignItems: 'center'
  },
  Header__container__end__SignInButton: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #064fd4',
    padding: '5px 11px',
    cursor: 'pointer',
    [theme.breakpoints.down("xs")]: {
      display: 'none !important'
    }
  }
}))

const Header = () => {
  const classes = useStyles()
	const[open, setOpen] = useState(false)

	const handleDrawerIsOpen = () =>{
		setOpen(!open)
	}
  return (
    <div className="Header">
      <CssBaseline />
      <AppBar position="static" color="white">
        <Toolbar>
          <div className="Header__container">
            <div className="Header__container__start">
              <IconButton>
                <MenuIcon onClick={handleDrawerIsOpen}/>
              </IconButton>
              <div  className={clsx(classes.dFlex, classes.alignCenter, classes.hideOnMobile)}>
                <YouTubeIcon style={{color: "red"}}/>
                <Typography variant="h6">
                  YouTube-Clone
                </Typography>
              </div>
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
                <AppsIcon className={classes.colorBlack}/>
              </IconButton>
              <IconButton>
                <MoreVertIcon className={classes.colorBlack}/>
              </IconButton>
              <div className={classes.Header__container__end__SignInButton} >
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
      <main>
        <div />
        <Container style={{display: 'flex', justifyContent: 'flex-end'}}>
          <div>
            <Tag />
            <h1>To do:</h1>
            <ToDoList />
          </div>
        </Container>
      </main>
    </div>
  )
}

export default Header
