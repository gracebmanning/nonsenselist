import './Navbar.css';
import synonyms from './synonyms';

function taglineWord(){
    var word = synonyms[Math.floor(Math.random() * synonyms.length)];
    return(word);
}

export default function Navbar(){
    return(
        <nav className='nav'>
            <div className='navHeader'>
                <h1 className='navTitle'>nonsense list</h1>
                <h2 className='navTagline'>worldwide <p id='taglineWord'>{taglineWord()}</p> for those who need it</h2>
            </div>
            <ul className='navList'>
                <li>
                    <a className='navItem' href='all'>
                        all topics
                    </a>
                </li>
                <li>
                    <a className='navItem' href='about'>
                        about
                    </a>
                </li>
                <li>
                    <a className='navItem' href='contact'>
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}