import React from 'react'
import './sidebarRow.css'

function SidebarRow({Icon,title,selected}){
    return(
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon"/>
            <h4 className="sidebarRow_title">{title}</h4>
        </div>
    )
}

export default SidebarRow