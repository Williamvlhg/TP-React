import './index.css'
import { Link } from "react-router-dom";
export const Navbar = () => {


    return(

        <nav>
            <ul>
                <li><Link to="/">Menu</Link><ul><li>Sandwitches</li><li>Entrées</li><li>Hamburgers</li><li>Plats</li><li>Desserts</li></ul></li>
                <li><Link to="/about">Avis</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/mentions">Mentions</Link></li>
            </ul>



        </nav>



    )




}