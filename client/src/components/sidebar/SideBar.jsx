import React from 'react'

import './sidebar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="title">
                <span className="smallTitle">Espace Pub</span>
                <img 
                    className="image"
                    src="https://images.pexels.com/photos/7489745/pexels-photo-7489745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                />
                <p className="desc">
                    jouets pour votre chien chien! 
                </p>
            </div>
        </div>
    )
}
