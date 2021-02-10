import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import './nav.css'

export const Nav = () => {
    return (
        <nav>
            <input type="checkbox" className="checkbox" id="checkbox"/>
            <label for="checkbox" className="label">
                <FontAwesomeIcon icon={faMoon} />
                <FontAwesomeIcon icon={faSun} />
                <div className="ball"></div>
            </label>
        </nav>
    )
}
