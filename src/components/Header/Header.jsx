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
  CssBaseline,
  Container,
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


import { makeStyles } from '@material-ui/core/styles';
import LateralNavBar from '../LateralNavBar/LateralNavBar'

const useStyles = makeStyles((theme)=>({
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
      <AppBar position="static" color="inherit">
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
                    <SearchIcon className="Header__SearchIcon"/>
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

      <LateralNavBar open={open}/>
      
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
