import React from 'react'
import './Header.css'

// MUI components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuButton,
  InputBase
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

const Header = () => {
  return (
    <div className="Header">
      <AppBar position="static" color="white">
        <Toolbar>
          <div className="Header__container">
            <div className="Header__container__start">
              <IconButton>
                <MenuIcon />
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
    </div>
  )
}

export default Header
