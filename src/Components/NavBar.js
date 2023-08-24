import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div>
                <CustomLink href={'/'} title={'Home'}/>
            </div>
            <div>
                <CustomLink href={'/about'} title={'About'}/>
                <CustomLink href={'/contact'} title={'Contact'}/>
            </div>
        </nav>
    );
}
const CustomLink = ({href, title}) => {
    const resolvedPath = useResolvedPath(href);
    let isActive = useMatch({ path: resolvedPath.pathname, end: true });
    if (resolvedPath.pathname === '/'){
        isActive = false
    }
    return (
        <Link to={resolvedPath} className={isActive ? 'active' : null}>{title}</Link>
    )
}
export default NavBar;