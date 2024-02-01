import Header from '../../components/Header'

import Card from "../../components/Card";

const Home = () => {
    return (
        <div>
            <Header.Navbar />

            <Card.Banner />
            
            <Card.Plat  Plat= 'Poulet' prix = '15€90' contenu ='Poulet, Riz, Sauce'/>

            
            
        </div>
    );
};

export default Home;
