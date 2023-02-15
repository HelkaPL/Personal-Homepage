import { About, Description, HeroImage, HireButton, Name, PreName, StyledHeader, Envelope } from "./styled";
import myPhoto from "../images/Jakub_Helizanowicz.jpg";
import { myData } from "../myData";

const Header = () => (
    <StyledHeader>
        <HeroImage src={myPhoto}/>
        <About>
            <PreName>This is</PreName>
            <Name>{myData.fullName}</Name>
            <Description>👨🏻‍💻 {myData.description} </Description>
            <HireButton href={`mailto:${myData.email}`}>
                <Envelope />
                Hire Me
            </HireButton>
        </About>
    </StyledHeader>

);

export default Header;