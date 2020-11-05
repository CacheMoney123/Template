import React from 'react';
import logo from '../../assets/logo.svg';
import './Resources.css';

function Resources() {
    return (
        <div className="Resources">
            <header className="Resources-header">
                <p className="Resources-title">
                   <u>Resources Page</u>
                </p>
                <ul className="Resources-info">
                   <li> Testing how this item would look </li>
                   <li> And another </li>
                   <li> And another.... </li>
                   <li> Last one... </li>
                </ul>
                <a
                    className="Resources-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Resources;
