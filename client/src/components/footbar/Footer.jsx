import React from 'react'

import './footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <span className="copyRight">
               <h6>&copy;{ new Date().getFullYear() } Tous Droits Réservés. Saskia Libotte.</h6>
           </span>
        </div>
    )
}
