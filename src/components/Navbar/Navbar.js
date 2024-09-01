import './Navbar.css';
import { taglineWord } from '../../App';
import { LuMenu } from "react-icons/lu";
import { useState } from 'react';

export default function Navbar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return(
        <nav className={isNavExpanded ? "nav expanded" : "nav"}>
            <div className='navHeader'>
                <h1 className='navTitle'><a href='/'>classifieds.lol</a></h1>
                <h2 className='navTagline'>worldwide <p id='taglineWord'>{taglineWord}</p> for those who need it</h2>
            </div>
            <ul className={isNavExpanded ? "navList expanded" : "navList"}>
                <li>
                    <a className='navItem' href='/post'>
                        all posts
                    </a>
                </li>
                <li>
                    <a className='navItem' href='/category'>
                        browse by category
                    </a>
                </li>
                <li>
                    <a className='navItem' href='/contributors'>
                        contributors
                    </a>
                </li>
                <li>
                    <a className='navItem' href='/about'>
                        about
                    </a>
                </li>
            </ul>
            <button className="menuButton" onClick={() => {setIsNavExpanded(!isNavExpanded);}} >
                <LuMenu className="menuIcon" />
            </button>
        </nav>
    );
}