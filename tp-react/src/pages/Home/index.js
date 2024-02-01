import { Link } from "react-router-dom";

import Card from "../../components/Card";

const Home = () => {
    return (
        <div>
            <h1>Accueil</h1>
            <Link to='/'>Accueil</Link>
            <Link to="/avis">Avis</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/mentions">Mentions</Link>

            
            <Card.Plat  Plat= 'Poulet' prix = '15€90' contenu ='Poulet, Riz, Sauce'/>

            
            
        </div>
    );
};

export default Home;
