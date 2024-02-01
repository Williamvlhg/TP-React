import { Link } from "react-router-dom";
import  Card  from "../../components/Card";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/'>Home</Link>
           <Link to="/avis">Avis</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/mentions">Mentions</Link>
        
        </div>
    );
};

export default Home;