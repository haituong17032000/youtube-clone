import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function Header(){
    return(
        <div className="header">
            <div className="header_left">
                <MenuIcon className="ytb_logo"/>
                <img 
                    className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20200820120939"
                    alt="logo"
                />
            </div>
            <div className="header_center">
                <input placeholder="Searching" type="text"/>
                <button><SearchIcon/></button>
            </div>
            <div className="header_right">
                <VideoCallOutlinedIcon className="ytb_logo"/>
                <AppsIcon className="ytb_logo"/>
                <NotificationsNoneOutlinedIcon className="ytb_logo"/>
                <img 
                src="https://www.w3schools.com/howto/img_avatar.png" 
                alt="avatar"
                className="ytb_logo_avatar"
                />
            </div>
        </div>
    )
}

export default Header;