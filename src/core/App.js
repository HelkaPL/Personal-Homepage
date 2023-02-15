import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectIsDarkTheme } from '../common/themeSlice';
import { PersonalHomepage } from '../features/homepage';
import { GlobalStyle } from './GlobalStyles';
import { themeDark, themeLight } from './theme';


function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
