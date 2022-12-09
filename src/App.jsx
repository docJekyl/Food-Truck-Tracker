import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import GlobalRoot from './Routes/GlobalRoot'
import { useLocalStorage } from '@mantine/hooks';
import { MantineTheme } from './utils/mantine-theme';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage('light');

  return (
    <MantineProvider
        withNormalizeCSS
        withGlobalStyle
        theme={{
          colorScheme: colorScheme,
          components: {
            Text: {
              defaultProps: {
                color: colorScheme === 'dark' && theme.colors.dark[0]
              }
            }
          }
        }}
        defaultProps={MantineTheme}
      >
        <BrowserRouter>
          <GlobalRoot />
        </BrowserRouter>
      </MantineProvider>
  )
}

export default App
