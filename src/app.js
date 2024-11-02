import {Linking, Platform,AsyncStorage} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './Screens';
import UI from './assets/UI';
import {isIphoneX} from "react-native-iphone-x-helper";

registerScreens();
Navigation.events().onAppLaunched(() => {
    Navigation.setRoot({
        bottomTabs: {
            children: [
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'Home',

                                }
                            },
                        ],
                        options: {
                            bottomTab: {
                                title: 'Home',
                                icon: require('./assets/images/Home.png'),
                            },
                            bottomTabs: {
                                textColor: "#3d3d3d",
                                selectedTextColor: "#ED3624",
                                backgroundColor: "#FFFFFF",
                                hideShadow: true,
                                drawUnder: true,
                                tabColor: "#3d3d3d",
                                selectedTabColor: "#ED3624",

                            },
                            topBar: {
                                title: {
                                    component: 'NavBar',
                                    alignment: 'center'
                                },
                                backgroundColor: "#ED3624",
                                hideOnScroll: isIphoneX() ? false : true,
                                noBorder: true,
                            }
                        },
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'Messages',
                                }
                            },
                        ],
                        options: {
                            bottomTab: {
                                title: 'Berichten',
                                icon: require('./assets/images/Messages.png'),
                            },
                            bottomTabs: {
                                textColor: "#3d3d3d",
                                selectedTextColor: "#ED3624",
                                backgroundColor: "#FFFFFF",
                                hideShadow: true,
                                drawUnder: true,
                                tabColor: "#3d3d3d",
                                selectedTabColor: "#ED3624",

                            },
                            topBar: {
                                title: {
                                    component: 'NavBar',
                                    alignment: 'center'
                                },
                                backgroundColor: "#ED3624",
                                hideOnScroll: isIphoneX() ? false : true,
                                noBorder: true,
                            }
                        },
                    }
                },

                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'Video',

                                }
                            },
                        ],
                        options: {
                            bottomTab: {
                                title: 'Video',
                                icon: require('./assets/images/Video.png'),
                            },
                            bottomTabs: {
                                textColor: "#3d3d3d",
                                selectedTextColor: "#ED3624",
                                backgroundColor: "#FFFFFF",
                                hideShadow: true,
                                drawUnder: true,
                                tabColor: "#3d3d3d",
                                selectedTabColor: "#ED3624",
                            },
                            topBar: {
                                title: {
                                    component: 'NavBar',
                                    alignment: 'center'
                                },
                                backgroundColor: "#ED3624",
                                hideOnScroll: isIphoneX() ? false : true,
                                noBorder: true,
                            }
                        },
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'Search',
                                }
                            },
                        ],
                        options: {
                            bottomTab: {
                                title: 'Zoek',
                                icon: require('./assets/images/Search.png'),
                            },
                            bottomTabs: {
                                textColor: "#3d3d3d",
                                selectedTextColor: "#ED3624",
                                backgroundColor: "#FFFFFF",
                                hideShadow: true,
                                drawUnder: true,
                                tabColor: "#3d3d3d",
                                selectedTabColor: "#ED3624",
                            },
                            topBar: {
                                title: {
                                    component: 'NavBar',
                                    alignment: 'center'
                                },
                                backgroundColor: "#ED3624",
                                hideOnScroll: false,
                                noBorder: true,
                            }
                        },
                    }
                },
            ],
        },
    });
    Navigation.showOverlay({
        component: {
            name: 'Overlay',
            id: 'overlayPlayer',
            options: {
                overlay: {
                    interceptTouchOutside: false
                },
            }
        }
    });
});
