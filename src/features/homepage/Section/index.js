import { Item, ItemList, StyledSection, Title } from "./styled";

const Section = ({ title, skills }) => (
    <StyledSection>
        <Title>{title}</Title>
        <ItemList>
            {skills.map((skill) =>
            <Item key={skill}>
                {skill}
            </Item>
            )}
        </ItemList>
    </StyledSection>
);

export default Section;