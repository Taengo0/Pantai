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
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <Link to={resolvedPath} className={isActive ? 'active' : null}>{title}</Link>
    )
}
export default NavBar;