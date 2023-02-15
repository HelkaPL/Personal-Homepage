import { ThemeProvider } from 'styled-components';
import { PersonalHomepage } from './features/homepage';
import { themeDark, themeLight } from './theme';


function App() {
const isDarkTheme = "false";
  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
