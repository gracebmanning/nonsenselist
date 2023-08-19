import './Navbar.css';

export default function Navbar(){
    return(
        <nav className='nav'>
            <div className='navHeader'>
                <h1 className='navTitle'>nonsense list</h1>
                <h2 className='navTagline'>worldwide nonsense for those who need it</h2>
            </div>
            <ul className='navList'>
                <li className='navItem'>all topics</li>
                <li className='navItem'>about</li>
                <li className='navItem'>contact</li>
            </ul>
        </nav>
    );
}