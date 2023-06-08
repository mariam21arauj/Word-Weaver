import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }){
    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
    
    return(
        <nav>
            <span>So good to see you, {user.name}!</span>
            &nbsp; | &nbsp;
            <Link to='' onClick={handleLogOut}>Log Out</Link>
            <Link to="/">Main</Link>
            &nbsp; | &nbsp;
            <Link to='/dictionary'>Dictionary</Link>
            &nbsp; | &nbsp;
            <Link to='/thesaurus'>Thesaurus</Link>
            &nbsp; | &nbsp;
            <Link to='favorites'>Favorite Words</Link>
        </nav>
    )
}