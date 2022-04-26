import React from 'react'
import './VideoItem.css'
import Avatar from '@mui/material/Avatar';

function  VideoItem({image, title, channel, views, time, logo}){
    return(
        <div className="video-item">
            <img src={image} alt="thumbail" className="video-thumbail"/>
            <div className="video-info">
                <Avatar 
                className="video-info-avatar"
                 src={logo} 
                 alt={channel}
                />
                    
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} - {time}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoItem