import React from 'react'
import './Video.css'
import VideoItem from './VideoItem'
import data from '../data'
function Video(){
    return(
        <div className="video-side">
            <div className="video_video">
            {data.map((item,index)=>(
                <VideoItem
                    image = {item.src}
                    logo = {item.logo}
                    title = {item.title}
                    channel = {item.chanel}
                    views = {item.view}
                    time = {item.time}
                />
            ))}
            </div>
        </div>
        
    )
}

export default Video