import { Link } from "react-router-dom";

export default function NavBar({ user, setUser }){
    return(
        <nav>
            <span>&nbsp; So good to see you, {user.name}!</span>
            <Link to="/">Main</Link>
            &nbsp; | &nbsp;
            <Link to='/definitions'>Defintitions</Link>
            &nbsp; | &nbsp;
            <Link to='/synonymous'>Synonymous</Link>
            &nbsp; | &nbsp;
            <Link to='/antonymous'>Antonymous</Link>
            &nbsp; | &nbsp;
            <Link to='/examples'>Examples</Link>
            &nbsp; | &nbsp;
            <Link to='favorites'>Favorite Words</Link>
        </nav>
    )
}