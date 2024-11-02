import {Platform} from 'react-native';
exports.COLORS_HEX = {
    white: '#FFFFFF',
    red: '#F03415',
    darGray: '#3D3D3D',
    green: '#00C0B4',
    lightblue: '#3E9DCC',
    fbBlue: '#39579A',


    black: '#3d3d3d',
    lightgray: '#e9e9e9',
    gray: 'rgba(0,0,0,0.5)',
    shadow: 'rgba(0,0,0,0.5)',
    darkgray: '#2E2F31',
    back: '#fbfbfb',
    cream: '#FFFCF5',
    transparentwhite: 'rgba(255,255,255,0.5)',
    transparentdarkwhite: 'rgba(255,255,255,0.8)',
    transparent: 'transparent',
    negative: '#ff4b4b',
    positive: '#3DB84D',
    orange: '#E67500',
    darkTxt: '#404040',
    lightTxt: '#4A4A4A',
    reviewBack:'#152339',
    primaryTxt:"#222222",
    secondaryTxt:"#888888",
    detailTxt:"#707070",


    orangeshadow: 'rgba(230,117,0,0.3)',
    purple: '#8339AE',
    pink: '#BA217B',
};

exports.FONT = {
    light: "Cervo-Light",
    lightItalic: "Cervo-LightItalic",
    medium: "Cervo-Medium",
    mediumItalic: "Cervo-MediumItalic",
    regular: "Cervo-Regular",
    regularItalic: "Cervo-RegularItalic",
    thin: "Cervo-Thin",
    thinItalic: "Cervo-ThinItalic",
};


exports.NAVIGATION_STYLE = {
    navBarTextColor: '#404040',
    // navBarTextFontFamily: "Raleway-Bold",
    navBarTextFontSize: 16,
    navBarButtonColor: '#404040',
    navBarTitleTextCentered: true,
    topBarElevationShadowEnabled: false,
    statusBarColor: '#404040',
    navBarNoBorder: true,
    navBarTransparent: true,
    drawUnderNavBar: true,
    navBarTranslucent: Platform.OS === 'ios',
    drawUnderTabBar: true,
    statusBarTextColorScheme: 'dark',
};
