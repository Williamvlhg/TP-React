import Card from "../../components/Card";
import Logo from "../../assets/LogoTHUYlg.png";
import { Content } from "../../components/Content";
const Contact = () => {
    return (
        <div>
            <Card.BannerSM Logo={Logo} />
            <Content title="Contact" textcontent="Lorem Ipsum" />
        </div>
    );
};

export default Contact;