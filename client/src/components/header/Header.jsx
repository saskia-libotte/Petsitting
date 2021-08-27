import React from 'react'

import './header.css'; //


export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleL">
                    PetSitting
                </span>
                <span className="headerTitleS">
                    Trouver la personne parfaite pour garder votre animal. 
                </span>
            </div>
            <img 
                className="headerImage"
                src="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
        </div>
    )
}
