import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import { Wrapper } from "./Wrapper/styled";
import { myData } from "./myData";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import Portfolio from "./Portfolio";

export function PersonalHomepage() {
    return (
        <Wrapper>
            <ThemeSwitch />
            <Header />
            <Section title="My skillset includes 🛠️" skills={myData.currentSkills} />
            <Section title="What I want to learn next 🚀" skills={myData.skillsToLearn} />
            <Portfolio />
            <Footer />
        </Wrapper>
    );
}
