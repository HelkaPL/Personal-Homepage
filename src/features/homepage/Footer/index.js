import { Caption, Header, Info, Link, SocialsLinks, Wrapper } from "./styled";
import { ReactComponent as Github } from "../images/icons/github.svg";
import { ReactComponent as Facebook } from "../images/icons/facebook.svg";
import { ReactComponent as Instagram } from "../images/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg";
import { myData } from "../myData";

const Footer = () => (
    <>
        <Wrapper>
            <Caption >Let's talk!</Caption >
            <Header href={`mailto:${myData.email}`}>{myData.email}</Header>
            <Info>
                I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me 🤞
            </Info>
        </Wrapper>
        <SocialsLinks>
            <Link target="_blank" rel="noreferrer" href={myData.githubLink}>
                <Github />
            </Link>
            <Link target="_blank" rel="noreferrer" href={myData.linkedInLink}>
                <Linkedin />
            </Link>
            <Link target="_blank" rel="noreferrer" href={myData.facebookLink}>
                <Facebook />
            </Link>
            <Link target="_blank" rel="noreferrer" href={myData.instagramLink}>
                <Instagram />
            </Link>
        </SocialsLinks>
    </>
);

export default Footer;