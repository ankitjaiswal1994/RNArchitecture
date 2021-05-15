import React, { useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import theme from './src/styles/theme';
import { ThemeProvider } from '@shopify/restyle';
import { composeComponents } from './src/utils/component';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoadAssets from './src/utils/LoadAssets';
import { Main } from './src/screens/Navigation';
import { I18nProvider } from './src/locales/I18nProvider';
import { AuthProvider } from './src/context/Authentication';
import PushNotification, { Importance } from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

// export default from './storybook';

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

const Providers = composeComponents(SafeAreaProvider, AuthProvider);

export const getNotificationToken = async () => {
  await messaging().requestPermission();
  console.log('jhgdhjs');
  try {
    await messaging().registerDeviceForRemoteMessages();
    const fcmToken = await messaging().getToken();
    console.log({ fcmToken });
    return fcmToken;
  } catch (err) {
    console.log(err);
  }
  return undefined;
};

PushNotification.createChannel(
  {
    channelId: 'xyz', // same as defined in androidmanifest or you can make multiple channels
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

const App = () => {
  useEffect(() => {
    getNotificationToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log({ remoteMessage });
      PushNotification.localNotification({
        /* Android Only Properties */
        channelId: 'xyz',
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
        data: {},
        playSound: true, // (optional) default: true
        soundName: 'default',
        visibility: 'public', // (optional) set notification visibility, default: private
        priority: 'high', // (optional) set notification priority, default: high
        // bigPictureUrl: remoteMessage.notification.android.imageUrl, // (optional) default: "ic_launcher". Use "" for no large icon.
        // largeIconUrl: remoteMessage.notification.android.imageUrl,
      });
    });

    return unsubscribe;
  }, []);

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
