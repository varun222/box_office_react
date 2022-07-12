import { useUserContext } from "../context/userContext";
import {Link} from "react-router-dom"

const Nav = () => {
    const {logoutUser,user}=useUserContext();
    return ( 
        <nav className="nav_bar">
            <ul className="navbar_list">
               <li><Link to="/dashboard" className="link_change">Home</Link></li> 
                <li><Link to="/list" className="link_change">List</Link></li>
            </ul>
         <p>Hey, {user.displayName}</p>
        <button className="nav_bar_login" onClick={logoutUser}>Logout</button>
        </nav>
     );
}
 
export default Nav;