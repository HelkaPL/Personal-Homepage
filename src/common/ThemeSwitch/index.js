import { Wrapper, Button, Text, Container, IconWrapper, Icon } from "./styled";

export const ThemeSwitch = () => {
    const isDarkTheme = false;

    return (
        <Wrapper>
            <Button>
                <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
                <Container>
                    <IconWrapper moveToRight={isDarkTheme}>
                        <Icon />
                    </IconWrapper>
                </Container>
            </Button>
        </Wrapper>
    );
};