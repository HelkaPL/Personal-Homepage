import { Caption, Header, Info, Link, SocialsLinks, Wrapper } from "./styled";
import { ReactComponent as Github } from "../images/icons/github.svg";
import { ReactComponent as Facebook } from "../images/icons/facebook.svg";
import { ReactComponent as Instagram } from "../images/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg";
const email = "jakubhelizanowicz@gmail.com";

const Footer = () => (
    <>
        <Wrapper>
            <Caption >Let's talk!</Caption >
            <Header href={`mailto:${email}`}>{email}</Header>
            <Info>
                I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me 🤞
            </Info>
        </Wrapper>
        <SocialsLinks>
            <Link target="_blank" rel="noreferrer" href="https://github.com/">
                <Github />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                <Linkedin />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                <Facebook />
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/">
                <Instagram />
            </Link>
        </SocialsLinks>
    </>
);

export default Footer;