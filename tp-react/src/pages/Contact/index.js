import Card from "../../components/Card";
import Logo from "../../assets/LogoTHUYlg.png";
import { Content } from "../../components/Content";
import './index.css';
const Contact = () => {
    return (
        <div>
            <Card.BannerSM Logo={Logo} />
        
            <div className="contact-info">
                <div className="contact-number">
                    <h2>Contactez-nous</h2>
                    <hr />
                    <p>Numéro de telephone : 06.34.56.87.13</p>
                </div>
                <div className="contact-hours">
                    <h2>Horaires</h2>
                    <hr />
                    <ul className="reset">
                  
                        <li className="reset">Lundi: 10:00–22:00</li>
                        <li className="reset">Mardi: 10:00–22:00</li>
                        <li className="reset">Mercredi: 10:00–22:00</li>
                        <li className="reset">Jeudi: 10:00–22:00</li>
                        <li className="reset">Vendredi: 10:00–22:00</li>
                        <li className="reset">Samedi: 10:00–22:00</li>
                        <li className="reset">Dimanche: 10:00–22:00</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;

   