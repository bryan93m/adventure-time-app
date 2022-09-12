import {Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav'>
            <Link to='/' className='nav__link'>
                Adventure Time
            </Link>
            <ul>
                <CustomLink to='/random'>Random</CustomLink>
                <CustomLink to='/search'>Search</CustomLink>
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