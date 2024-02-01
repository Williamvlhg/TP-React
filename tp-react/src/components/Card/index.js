import { Plat } from './Plat';
import { Banner } from './Banner';

const Card = ({ children }) => {

    return(

        <div>

            {children}

        </div>


    ) 

    

}

Card.Plat = Plat 
Card.Banner = Banner;
export default Card;