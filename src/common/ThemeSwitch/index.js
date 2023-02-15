import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button, Text, Container, IconWrapper, Icon } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
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