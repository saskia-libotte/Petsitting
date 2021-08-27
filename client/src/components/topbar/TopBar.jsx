import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './topbar.css';


export default function TopBar() {
 
    return (
        <div className="top">
            <div className="topLeft">
                <i className="pet fas fa-paw"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to='/'>Accueil</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to='/posted'>
                            {"Poster une annonce"}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
