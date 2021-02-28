import { Dimensions, Platform, PixelRatio } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;

export const deviceHeight = Dimensions.get('window').height;

export const isIOS = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

// based on iphone 5s's scale
const scale = deviceWidth / 320;

export function normalizeFont(size: number) {
  const newSize = size * scale;
  let result: string | number = '';
  if (Platform.OS === 'ios') {
    result = Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  result = Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;

  return `${result}px`;
}
