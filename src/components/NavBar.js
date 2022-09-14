import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import AdventureLogo from '../pages/assets/AdventureLogo.png'


function NavBar() {
    return (
        <nav className='nav'>
            <Link to='/home' className='nav__link logo'>
                <img alt='logo' src={AdventureLogo} style={{width: 150}}/>
            </Link>
                <ul>
                    <CustomLink to='/random'>Random</CustomLink>
                    <CustomLink to='/search'>Search</CustomLink>
                    <CustomLink to='/newcharacter'>New Character</CustomLink>
                </ul>
        </nav>
    );
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


export default NavBar;