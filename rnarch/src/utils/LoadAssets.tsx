import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { InitialState, NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'services/NavigationService';

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${1}`; // need to modify Constants.manifest.sdkVersion}

interface LoadAssetsProps {
  fonts?: 'FontSource';
  assets?: number[];
  children: ReactElement | ReactElement[];
}

const LoadAssets = ({ children }: LoadAssetsProps) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  // useLoadAssets(assets || [], fonts || {});
  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY,
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);
  const onStateChange = useCallback(
    state => AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    [],
  );
  // if (!ready || !isNavigationReady) {
  //   return <AppLoading />;
  // }
  return (
    <NavigationContainer
      ref={navigationRef}
      {...{ onStateChange, initialState }}>
      {children}
    </NavigationContainer>
  );
};

export default LoadAssets;
