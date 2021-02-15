import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import theme from './src/styles/theme';
import { ThemeProvider } from '@shopify/restyle';
import { composeComponents } from './src/utils/component';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadAssets from './src/utils/LoadAssets';
import { Main } from './src/screens/Navigation';

const paperTheme: typeof DefaultTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: '#f1c40f',
  },
  fonts: {
    regular: { fontFamily: 'Roboto-Bold' },
    light: { fontFamily: 'Roboto-Light' },
    medium: { fontFamily: 'Roboto-Medium' },
    thin: { fontFamily: 'Roboto-Regular' },
  },
};

const Providers = composeComponents(SafeAreaProvider);

const App = () => {
  return (
    <LoadAssets>
      <Providers>
        <PaperProvider theme={paperTheme}>
          <ThemeProvider theme={theme}>
            <Main />
          </ThemeProvider>
        </PaperProvider>
      </Providers>
    </LoadAssets>
  );
};

export default App;
