import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import theme from './src/styles/theme';
import { ThemeProvider } from '@shopify/restyle';
import { composeComponents } from './src/utils/component';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadAssets from './src/utils/LoadAssets';
import { Main } from './src/screens/Navigation';
import { I18nProvider } from './src/locales/I18nProvider';
import { AuthProvider } from './src/context/Authentication';

const paperTheme: typeof DefaultTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: '#f1c40f',
  },
  fonts: {
    regular: { fontFamily: 'DancingScript-Bold' },
    light: { fontFamily: 'DancingScript-SemiBold' },
    medium: { fontFamily: 'DancingScript-Medium' },
    thin: { fontFamily: 'DancingScript-Regular' },
  },
};

const Providers = composeComponents(SafeAreaProvider, AuthProvider);

const App = () => {
  return (
    <LoadAssets>
      <Providers>
        <I18nProvider>
          <PaperProvider theme={paperTheme}>
            <ThemeProvider theme={theme}>
              <Main />
            </ThemeProvider>
          </PaperProvider>
        </I18nProvider>
      </Providers>
    </LoadAssets>
  );
};

export default App;
