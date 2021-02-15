import { createTheme, AllProps as RSAllProps } from '@shopify/restyle';

/**
 * Font families available in this project --
 *  "Poppins-Black"
    "Poppins-Bold"
    "Roboto-Regular"
    "Poppins-SemiBold"
    "Roboto-Medium"
 */
const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  lightGreen: '#aee35f',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  zBlack: '#000000',
  white: '#FFFFFF',
  whiteShade: '#F7F9FD',

  yellowPrimary: '#fffb2a',

  aliceBlue: '#F4F6F8',

  lighterGrey: '#eaeaea',
  lightGrey: '#bdbdbd',
  lightestGrey: '#707070',
  grey: '#939393',
  darkGrey: '#3a3a3a',
  greyishBlue: '#a1a6ba',

  blue: '#226CFD',
  lightBlue: '#E2E8FF',
  lighterBlue: '#F0F5FF',

  red: '#cf3232',
  lightRed: '#ffcccb',

  blackText: '#141414',
  lightBlack: '#191F290F',

  transparent: 'transparent',

  xyz: 'transparent',

  green: '#90ce19',
  darkGreen: '#02af1e',
  limeGreen: '#6ff677',

  disableText: '#555b73',
  normalText: '#141414',
  sectionSeperator: '#f6f6f6',
  audioFileBg: '#f1f1f1',
  cancelBtnBg: '#a1a1a1',
  plusButton: '#fb81fd',
  greenCheck: '#3BB54A',
  greenShade: '#0DC98F',
  blumineText: '#343F76',
  warning: '#FFCC00',
  messageInputBg: '#F7F7F7',
  lightingYellow: '#F5AB31',
};

const theme = createTheme({
  colors: {
    primary: palette.blue,
    lightPrimary: palette.lightBlue,
    lightBlack: palette.lightBlack,
    lighterBlue: palette.lighterBlue,
    mainBackground: palette.white,
    lightBackground: palette.white,
    bluishBackground: palette.lighterGrey,
    cardPrimaryBackground: palette.purplePrimary,
    textInputBorderColor: palette.lightGrey,
    dividerBorderColor: palette.lightestGrey,
    textInputBackground: palette.white,
    aliceBlue: palette.aliceBlue,
    error: palette.red,
    transparent: palette.transparent,
    xyz: palette.xyz,
    whiteShade: palette.whiteShade,
    greyText: palette.grey,
    whiteText: palette.white,
    darkText: palette.blackText,
    darkGreyText: palette.darkGrey,
    chipBackground: palette.lighterGrey,
    success: palette.green,
    greenShade: palette.greenShade,
    successStep: palette.limeGreen,
    currentStep: palette.yellowPrimary,
    inactiveTab: palette.lightGrey,
    disableText: palette.disableText,
    normalText: palette.normalText,
    sectionSeperator: palette.sectionSeperator,
    audioFileBg: palette.audioFileBg,
    black: palette.black,
    cancelBtnBg: palette.cancelBtnBg,
    plusButton: palette.plusButton,
    greenCheck: palette.greenCheck,
    currency: palette.darkGreen,
    zBlack: palette.zBlack,
    disabled: palette.greyishBlue,
    blumineText: palette.blumineText,
    warning: palette.warning,
    messageInputBg: palette.messageInputBg,
    lightingYellow: palette.lightingYellow,
    greenPrimary: palette.greenPrimary,
    lightGreen: palette.lightGreen,
    lightRed: palette.lightRed,
  },
  spacing: {
    '-xs': -4,
    '-s': -8,
    '-sl': -10,
    '-xm': -12,
    '-m': -16,
    '-ml': -18,
    '-l': -24,
    '-xl': -30,
    '-xxl': -40,
    '-xxxl': -50,
    '-mxxxl': -55,
    xxs: 2,
    xs: 4,
    s: 8,
    sl: 10,
    xm: 12,
    m: 16,
    ml: 18,
    mll: 20,
    l: 24,
    xl: 30,
    xxl: 40,
    xxxl: 50,
    XL: 60,
    XXL: 80,
    XXXL: 100,
    phoneInputPadding: 100,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textInputVariants: {
    error: {
      borderColor: 'error',
    },
    phone: {
      paddingLeft: 'phoneInputPadding',
    },
    phoneError: {
      borderColor: 'error',
      paddingLeft: 'phoneInputPadding',
    },
    socialError: {
      borderColor: 'error',
      paddingLeft: 'XL',
    },
    social: {
      paddingLeft: 'XL',
    },
  },
  textVariants: {
    headline: {
      fontSize: 18,
      fontFamily: 'Roboto-SemiBold',
    },
    title: {
      fontSize: 15,
      fontFamily: 'Roboto-Medium',
    },

    boldTitle: {
      fontSize: 16,
      fontFamily: 'Roboto-SemiBold',
    },
    subTitle: {
      fontSize: 14,
      fontFamily: 'Roboto-SemiBold',
      fontWeight: 'bold',
    },
    titleDescription: {
      fontSize: 13,
      fontFamily: 'Roboto-Medium',
    },
    body: {
      fontSize: 14,
      fontFamily: 'Roboto-Regular',
    },
    largeBody: {
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
    },
    bodyLight: {
      fontSize: 14,
      fontFamily: 'Roboto-Light',
    },
    regular: {
      fontFamily: 'Roboto-Regular',
    },
    semiBold: {
      fontFamily: 'Roboto-SemiBold',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
    },
  },
  buttonVariants: {
    secondary: {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      borderColor: 'primary',
      borderWidth: 1,
      backgroundColor: 'lighterBlue',
    },
    'secondary-small': {
      width: '100%',
      height: 30,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      borderColor: 'primary',
      borderWidth: 2,
    },
    primary: {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      borderColor: 'primary',
      borderWidth: 2,
    },
    'primary-round': {
      width: '100%',
      height: 50,
      paddingHorizontal: 's',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 27,
      borderColor: 'primary',
      borderWidth: 2,
    },
  },
  buttonTextVariants: {
    primary: {
      color: 'whiteText',
    },
    'primary-round': {
      color: 'whiteText',
    },
    secondary: {
      color: 'primary',
    },
    'secondary-small': {
      fontSize: 12,
      color: 'primary',
    },
  },
  selectBoxVariants: {
    selected: {
      borderColor: 'primary',
      backgroundColor: 'lightPrimary',
    },
    nonSelected: {
      borderColor: 'textInputBorderColor',
    },
    error: {
      borderColor: 'error',
    },
  },
  cardVariants: {
    low: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      shadowOffset: { width: 0, height: 1 },
      elevation: 3,
    },
    medium: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
      shadowOffset: { width: 0, height: 2 },
      elevation: 5,
    },
    high: {
      overflow: 'visible',
      shadowColor: 'zBlack',
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      shadowOffset: { width: 0, height: 3 },
      elevation: 7,
    },
  },
});
export type Theme = typeof theme;
export type AllProps = RSAllProps<Theme>;
export default theme;
