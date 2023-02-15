import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectIsDarkTheme } from './common/ThemeSwitch/themeSlice';
import { PersonalHomepage } from './features/homepage';
import { themeDark, themeLight } from './theme';


function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
