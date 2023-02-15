import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import { Wrapper } from "./Wrapper/styled";
import { myData } from "./myData";

export function PersonalHomepage() {
    return (
        <Wrapper>
            <Header />
            <Section title="My skillset includes 🛠️" skills={myData.currentSkills} />
            <Section title="What I want to learn next 🚀" skills={myData.skillsToLearn} />
            <section />
            <Footer />
        </Wrapper>
    );
}
