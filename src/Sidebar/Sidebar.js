import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AirplayIcon from '@mui/icons-material/Airplay';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Trang chủ"/>
            <SidebarRow Icon={ExploreOutlinedIcon} title="Khám phá"/>
            <SidebarRow Icon={AirplayIcon} title="Shorts"/>
            <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Kênh đăng ký"/>
            <hr></hr>
            <SidebarRow Icon={VideoLibraryIcon} title="Thư viện"/>
            <SidebarRow Icon={RestoreIcon} title="Video đã xem"/>
            <SidebarRow Icon={OndemandVideoOutlinedIcon} title="Video của bạn"/>
            <SidebarRow Icon={AccessTimeOutlinedIcon} title="Xem sau"/>
            <SidebarRow Icon={ThumbUpOutlinedIcon} title="Video đã thích"/>
        </div>
    )
}

export default Sidebar