import "./NavBar.css"
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }){
    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
    
    return(
        <div>
            <div className="main-navBar">
                <div id="navbarLogo-container"><img id='navbarLogo' className='drop' src = "https://i.postimg.cc/CKTH3kYj/Word-Weaver2logo.png"  alt = "" /></div>
                <div id="navbarLinks-container">
                    <span className="greeting">So good to see you, {user.name}!</span>
                    <nav className="nav-bar">
                        <ul>
                            <li><Link to='' onClick={handleLogOut}>Log Out</Link>  </li>              
                            <li><Link to="/">Main</Link></li>           
                            <li><Link to='/dictionary'>Dictionary</Link></li>                
                            <li><Link to='favorites'>Favorite Words</Link></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        </div>
    )
}