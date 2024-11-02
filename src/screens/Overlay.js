import React from 'react';
import {View, Text, Image, Dimensions, ScrollView, Animated, TouchableOpacity, Easing} from "react-native";
import {isIphoneX} from 'react-native-iphone-x-helper'
import UI from '../assets/UI'
import Video from "react-native-video";

const {width, height} = Dimensions.get('window');
const CARD_WIDTH = width - 70;
const playlist = [
    {
        image: require('../assets/images/pink.jpg'),
        title: "What About Us",
        singer: "P!NK",
        time: 2000
    },
    {
        image: require('../assets/images/katy.jpg'),
        title: "Teenage Dream",
        singer: "KATY PERRY",
        time: 4000
    },
    {
        image: require('../assets/images/luis.jpg'),
        title: "Despacito",
        singer: "LUIS FONSI FT. DADDY YANKEE",
        time: 6000
    },
    {
        image: require('../assets/images/camila.jpg'),
        title: "Havana",
        singer: "CAMILA CABELLO",
        time: 6000
    },

];

export default class Overlay extends React.Component {
    state = {
        height: isIphoneX() ? new Animated.Value(height - 120) : new Animated.Value(height - 90),
        isOpen: false,
        scrollX: new Animated.Value(0),
        fadeIn: new Animated.Value(0),
        fadeOutBg: new Animated.Value(0.5),
        fadeOut: new Animated.Value(1),
        paused: true
    };

    onToggle = () => {
        if (!this.state.isOpen) {
            this.setState({isOpen: true}, () =>
                Animated.parallel([
                    Animated.timing(
                        this.state.height,
                        {
                            toValue: isIphoneX() ? 105 : 75,
                            duration: 500,
                            easing: Easing.quad,
                        }
                    ),
                    Animated.timing(
                        this.state.fadeIn,
                        {
                            toValue: 1,
                            duration: 500,
                            easing: Easing.linear,
                            useNativeDriver: true,
                        }
                    ),
                    Animated.timing(
                        this.state.fadeOut,
                        {
                            toValue: 0,
                            duration: 500,
                            easing: Easing.linear,
                            useNativeDriver: true,
                        }
                    ),
                    Animated.timing(
                        this.state.fadeOutBg,
                        {
                            toValue: 0,
                            duration: 500,
                            easing: Easing.linear,
                            useNativeDriver: true,
                        }
                    ),
                ]).start()
            )
        } else {
            Animated.parallel([
                Animated.timing(
                    this.state.height,
                    {
                        toValue: isIphoneX() ? height - 120 : height - 90,
                        duration: 500,
                        easing: Easing.quad,
                    }
                ),
                Animated.timing(
                    this.state.fadeIn,
                    {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.state.fadeOut,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }
                ),
                Animated.timing(
                    this.state.fadeOutBg,
                    {
                        toValue: 0.5,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: true,
                    }
                ),
            ]).start(() => this.setState({isOpen: false}))
        }
    }

    closeOverlay = () => {
        Animated.parallel([
            Animated.timing(
                this.state.height,
                {
                    toValue: isIphoneX() ? height - 120 : height - 90,
                    duration: 500,
                    easing: Easing.linear,
                }
            ),
            Animated.timing(
                this.state.fadeIn,
                {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                this.state.fadeOut,
                {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                this.state.fadeOutBg,
                {
                    toValue: 0.5,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }
            ),
        ]).start(() => {
            this.setState({isOpen: false});
        })
    }

    render() {

        return (
            <Animated.View style={{
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                bottom: isIphoneX() ? 78 : 48,
                position: 'absolute',
                left: 0,
                right: 0,
                top: this.state.height,
            }}>
                <Video source={require('../assets/video/pink.mp3')}   // Can be a URL or a local file.
                       ref={(ref) => {
                           this.player = ref
                       }}                                      // Store reference
                       rate={1.0}                              // 0 is paused, 1 is normal.
                       volume={1.0}                            // 0 is muted, 1 is normal.
                       muted={false}                           // Mutes the audio entirely.
                       paused={this.state.paused}                          // Pauses playback entirely.
                       repeat={false}                           // Repeat forever.
                       playInBackground={true}                // Audio continues to play when app entering background.
                       playWhenInactive={true}                // [iOS] Video continues to play when control or notification center are shown.
                />
                <View style={{
                    position: 'absolute',
                    left: -10,
                    top: 168,
                    backgroundColor: "#00BFB3",
                    marginLeft: 5,
                    height: 24,
                    justifyContent: 'center',
                    alignItems: "center",
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    paddingLeft: 20,
                    paddingRight: 10,
                    paddingTop: 3,
                    zIndex: 10000
                }}>
                    <Text
                        style={{
                            color: "white",
                            fontFamily: UI.FONT.medium,
                            fontSize: 18,
                            paddingTop: 2
                        }}>06:43</Text>
                </View>
                {this.state.isOpen ? <View style={{flex: 1}}>
                        <Animated.Image style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: width,
                            height: isIphoneX() ? height - 48 - 136 : height - 48 - 75,
                            opacity: this.state.scrollX.interpolate({
                                inputRange: [0, CARD_WIDTH - 35],
                                outputRange: [0.5, 0],
                                extrapolate: 'clamp',
                            })
                        }} resizeMode="cover" blurRadius={20} source={playlist[0].image}/>
                        <Animated.Image style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: width,
                            height: isIphoneX() ? height - 48 - 136 : height - 48 - 75,
                            opacity: this.state.scrollX.interpolate({
                                inputRange: [0, CARD_WIDTH - 35, CARD_WIDTH * 2 - 35],
                                outputRange: [0, 0.5, 0],
                                extrapolate: 'clamp',
                            })
                        }} resizeMode="cover" blurRadius={20} source={require('../assets/images/katy.jpg')}/>
                        <Animated.Image style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: width,
                            height: isIphoneX() ? height - 48 - 136 : height - 48 - 75,
                            opacity: this.state.scrollX.interpolate({
                                inputRange: [CARD_WIDTH - 35, CARD_WIDTH * 2 - 35, CARD_WIDTH * 3 - 35],
                                outputRange: [0, 0.5, 0],
                                extrapolate: 'clamp',
                            })
                        }} resizeMode="cover" blurRadius={20} source={require('../assets/images/luis.jpg')}/>
                        <Animated.Image style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: width,
                            height: isIphoneX() ? height - 48 - 136 : height - 48 - 75,
                            opacity: this.state.scrollX.interpolate({
                                inputRange: [CARD_WIDTH * 2 - 35, CARD_WIDTH * 3 - 35, CARD_WIDTH * 4 - 35],
                                outputRange: [0, 0.5, 0],
                                extrapolate: 'clamp',
                            })
                        }} resizeMode="cover" blurRadius={20} source={require('../assets/images/camila.jpg')}/>

                        <View style={{height: 40}}>
                            <ScrollView horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        style={{width: width, padding: 5, paddingLeft: 15, paddingRight: 15}}
                                        contentContainerStyle={{paddingRight: 20}}
                            >
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: UI.COLORS_HEX.white,
                                    borderRadius: 4,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginRight: 5
                                }}>
                                    <Text style={{
                                        color: "#ED3624",
                                        letterSpacing: 0.5,
                                        fontFamily: UI.FONT.medium,
                                        marginTop: 7,
                                        fontSize: 22
                                    }}>QMUSIC</Text>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: UI.COLORS_HEX.darGray,
                                    borderRadius: 4,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginRight: 5
                                }}>
                                    <Text
                                        style={{
                                            letterSpacing: 0.5,
                                            color: UI.COLORS_HEX.white,
                                            fontFamily: UI.FONT.medium,
                                            marginTop: 7,
                                            fontSize: 22
                                        }}>KIJK
                                        LIVE</Text>
                                </View>

                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: UI.COLORS_HEX.darGray,
                                    borderRadius: 4,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginRight: 5
                                }}>
                                    <Text
                                        style={{
                                            letterSpacing: 0.5,
                                            color: UI.COLORS_HEX.white,
                                            fontFamily: UI.FONT.medium,
                                            marginTop: 7,
                                            fontSize: 22
                                        }}>NON-STOP</Text>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: UI.COLORS_HEX.darGray,
                                    borderRadius: 4,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginRight: 5
                                }}>
                                    <Text
                                        style={{
                                            letterSpacing: 0.5,
                                            color: UI.COLORS_HEX.white,
                                            fontFamily: UI.FONT.medium,
                                            marginTop: 7,
                                            fontSize: 22
                                        }}>FOUTE
                                        UUR</Text>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: UI.COLORS_HEX.darGray,
                                    borderRadius: 4,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginRight: 5
                                }}>
                                    <Text
                                        style={{
                                            letterSpacing: 0.5,
                                            color: UI.COLORS_HEX.white,
                                            fontFamily: UI.FONT.medium,
                                            marginTop: 7,
                                            fontSize: 22
                                        }}>HOT</Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: 15}}>
                            <Image style={{height: 52, width: 52, borderRadius: 26, marginRight: 10}}
                                   source={require('../assets/images/profile-2.png')}/>
                            <Text
                                style={{color: "white", fontFamily: UI.FONT.medium, fontSize: 28, marginTop: 13}}>JOEP
                                ROELSEN</Text>
                        </View>

                        <Animated.ScrollView decelerationRate={0}
                                             snapToInterval={CARD_WIDTH}
                                             snapToAlignment={"center"}
                                             horizontal={true}
                                             bounces={false}
                                             onScroll={Animated.event(
                                                 [{nativeEvent: {contentOffset: {x: this.state.scrollX}}}],
                                                 {useNativeDriver: true}
                                             )}
                                             scrollEventThrottle={1}
                                             showsHorizontalScrollIndicator={false}
                                             removeClippedSubviews={false}
                                             style={{
                                                 height: height,
                                                 marginTop: -height / 12,
                                                 transform: [{scaleX: -1}]
                                             }}

                        >

                            <View style={{height: height, width: CARD_WIDTH * 4 + 35}}/>


                            <Animated.View style={{
                                position: 'absolute',
                                top: 100,
                                transform: [
                                    {
                                        translateX: this.state.scrollX.interpolate({
                                            inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35, 3 * CARD_WIDTH - 35, 4 * CARD_WIDTH - 35, 5 * CARD_WIDTH - 35],
                                            outputRange: [width / 8 + 36, CARD_WIDTH + width / 8 + 24 - 35, 2 * CARD_WIDTH + width / 8 + 12 - 35, 3 * CARD_WIDTH + width / 8 - 35, 4 * CARD_WIDTH + width / 8 - 35, 5 * CARD_WIDTH + width / 8 - 35],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                    {
                                        translateY: this.state.scrollX.interpolate({
                                            inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35, 3 * CARD_WIDTH - 35],
                                            outputRange: [-36, -24, -12, 0],
                                            extrapolate: 'clamp',
                                        })
                                    }],
                                opacity: this.state.scrollX.interpolate({
                                    inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35, 3 * CARD_WIDTH - 35],
                                    outputRange: [0, 0.3, 0.6, 1]
                                })

                            }}>
                                <Image style={{
                                    width: width * 3 / 4,
                                    height: width * 3 / 4,
                                }} source={playlist[3].image}/>

                                <View style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    flexDirection: "row",
                                    width: CARD_WIDTH,
                                    paddingRight: 20

                                }}>
                                    <TouchableOpacity activeOpacity={0.8} style={{
                                        backgroundColor: "#00BFB3",
                                        marginRight: 5,
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "white", paddingBottom: 2
                                    }}>
                                        <Image style={{
                                            width: 22,
                                            height: 22,
                                        }} source={require('../assets/images/like.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={{
                                        backgroundColor: "#00BFB3",
                                        marginLeft: 5,
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "white", paddingTop: 3
                                    }}>
                                        <Image style={{
                                            width: 22,
                                            height: 22
                                        }} source={require('../assets/images/dislike.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>


                            <Animated.View style={{
                                position: 'absolute',
                                top: 100,
                                transform: [
                                    {
                                        translateX: this.state.scrollX.interpolate({
                                            inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35, 3 * CARD_WIDTH - 35, 4 * CARD_WIDTH - 35, 5 * CARD_WIDTH - 35],
                                            outputRange: [width / 8 + 24, CARD_WIDTH + width / 8 + 12 - 35, 2 * CARD_WIDTH + width / 8 - 35, 2 * CARD_WIDTH + width / 8 - 35, 4 * CARD_WIDTH + width / 8 - 35, 5 * CARD_WIDTH + width / 8 - 35],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                    {
                                        translateY: this.state.scrollX.interpolate({
                                            inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35, 3 * CARD_WIDTH - 35],
                                            outputRange: [-24, -12, 0, 0],
                                            extrapolate: 'clamp',
                                        })
                                    }],
                                opacity: this.state.scrollX.interpolate({
                                    inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35],
                                    outputRange: [0.3, 0.6, 1]
                                })

                            }}>
                                <Image style={{
                                    width: width * 3 / 4,
                                    height: width * 3 / 4,
                                }} source={playlist[2].image}/>

                                <View style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    flexDirection: "row",
                                    width: CARD_WIDTH,
                                    paddingRight: 20

                                }}>
                                    <TouchableOpacity activeOpacity={0.8} style={{
                                        backgroundColor: "#00BFB3",
                                        marginRight: 5,
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "white", paddingBottom: 2
                                    }}>
                                        <Image style={{
                                            width: 22,
                                            height: 22,
                                        }} source={require('../assets/images/like.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={{
                                        backgroundColor: "#00BFB3",
                                        marginLeft: 5,
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "white", paddingTop: 3
                                    }}>
                                        <Image style={{
                                            width: 22,
                                            height: 22
                                        }} source={require('../assets/images/dislike.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>


                            <Animated.View style={{
                                position: 'absolute',
                                top: 100,
                                transform: [
                                    {
                                        translateX: this.state.scrollX.interpolate({
                                            inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35, 3 * CARD_WIDTH - 35, 4 * CARD_WIDTH - 35],
                                            outputRange: [width / 8 + 12, CARD_WIDTH - 35 + width / 8, CARD_WIDTH - 35 + width / 8, CARD_WIDTH + width / 8, 4 * CARD_WIDTH + width / 8],
                                            extrapolate: 'clamp',
                                        }),
                                    },
                                    {
                                        translateY: this.state.scrollX.interpolate({
                                            inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35],
                                            outputRange: [-12, 0, 0],
                                            extrapolate: 'clamp',
                                        })
                                    }],
                                opacity: this.state.scrollX.interpolate({
                                    inputRange: [0, CARD_WIDTH - 35, 2 * CARD_WIDTH - 35],
                                    outputRange: [0.6, 1, 0.6]
                                })

                            }}>

                                <Image style={{
                                    width: width * 3 / 4,
                                    height: width * 3 / 4,
                                }} source={playlist[1].image}/>

                                <View style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    flexDirection: "row",
                                    width: CARD_WIDTH,
                                    paddingRight: 20


                                }}>
                                    <TouchableOpacity activeOpacity={0.8} style={{
                                        backgroundColor: "#00BFB3",
                                        marginRight: 5,
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "white", paddingBottom: 2
                                    }}>
                                        <Image style={{
                                            width: 22,
                                            height: 22,
                                        }} source={require('../assets/images/like.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={{
                                        backgroundColor: "#00BFB3",
                                        marginLeft: 5,
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "white", paddingTop: 3
                                    }}>
                                        <Image style={{
                                            width: 22,
                                            height: 22
                                        }} source={require('../assets/images/dislike.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>


                            <Animated.View style={{
                                position: 'absolute',
                                top: 100,
                                transform: [
                                    {
                                        translateX: this.state.scrollX.interpolate({
                                            inputRange: [0, CARD_WIDTH - 35],
                                            outputRange: [width / 8, width / 8 - 35],
                                            extrapolate: 'clamp',
                                        })
                                    }],
                                opacity: this.state.scrollX.interpolate({
                                    inputRange: [0, CARD_WIDTH - 35],
                                    outputRange: [1, 0.5]
                                })

                            }}>

                                <Image style={{
                                    width: width * 3 / 4,
                                    height: width * 3 / 4,
                                }} source={playlist[0].image}/>

                                <View style={{
                                    position: 'absolute',
                                    bottom: 20,
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    flexDirection: "row",
                                    width: CARD_WIDTH,
                                    paddingRight: 20

                                }}>
                                    <TouchableOpacity activeOpacity={0.8} style={{
                                        backgroundColor: "#00BFB3",
                                        marginRight: 5,
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "white", paddingBottom: 2
                                    }}>
                                        <Image style={{
                                            width: 22,
                                            height: 22,
                                        }} source={require('../assets/images/like.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.8} style={{
                                        backgroundColor: "#00BFB3",
                                        marginLeft: 5,
                                        width: 40,
                                        height: 40,
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "white", paddingTop: 3
                                    }}>
                                        <Image style={{
                                            width: 22,
                                            height: 22
                                        }} source={require('../assets/images/dislike.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>
                        </Animated.ScrollView>
                        <Animated.View style={{
                            width: width,
                            alignItems: "center", paddingTop: 20, opacity: this.state.scrollX.interpolate({
                                inputRange: [0, CARD_WIDTH - 35],
                                outputRange: [1, 0]
                            }), position: "absolute", bottom: 40
                        }}>

                            <Text style={{
                                color: "white",
                                fontFamily: UI.FONT.medium,
                                fontSize: 22,
                            }}>{playlist[0].title}</Text>
                            <Text style={{
                                color: "white",
                                fontFamily: UI.FONT.medium,
                                fontSize: 18,
                            }}>{playlist[0].singer}</Text>

                        </Animated.View>

                        <Animated.View style={{
                            width: width,
                            alignItems: "center", paddingTop: 10, opacity: this.state.scrollX.interpolate({
                                inputRange: [0, CARD_WIDTH - 35, CARD_WIDTH * 2 - 35],
                                outputRange: [0, 1, 0]
                            }), position: "absolute", bottom: 40
                        }}>
                            <Text style={{
                                color: "white",
                                fontFamily: UI.FONT.medium,
                                fontSize: 22,
                            }}>{playlist[1].title}</Text>
                            <Text style={{
                                color: "white",
                                fontFamily: UI.FONT.medium,
                                fontSize: 18,
                            }}>{playlist[1].singer}</Text>
                        </Animated.View>

                        <Animated.View style={{
                            width: width,

                            alignItems: "center", paddingTop: 10, opacity: this.state.scrollX.interpolate({
                                inputRange: [CARD_WIDTH - 35, CARD_WIDTH * 2 - 35, CARD_WIDTH * 3 - 35],
                                outputRange: [0, 1, 0]
                            }), position: "absolute", bottom: 40
                        }}>
                            <Text style={{
                                color: "white",
                                fontFamily: UI.FONT.medium,
                                fontSize: 22,
                            }}>{playlist[2].title}</Text>
                            <Text style={{
                                color: "white",
                                fontFamily: UI.FONT.medium,
                                fontSize: 18,
                            }}>{playlist[2].singer}</Text>
                        </Animated.View>

                        <Animated.View style={{
                            width: width,

                            alignItems: "center", paddingTop: 10, opacity: this.state.scrollX.interpolate({
                                inputRange: [CARD_WIDTH * 2 - 35, CARD_WIDTH * 3 - 35, CARD_WIDTH * 4 - 35],
                                outputRange: [0, 1, 0]
                            }), position: "absolute", bottom: 40
                        }}>
                            <Text style={{
                                color: "white",
                                fontFamily: 'AvenirNextCondensed-Bold',
                                fontSize: 22,
                            }}>{playlist[3].title}</Text>
                            <Text style={{
                                color: "white",
                                fontFamily: 'AvenirNextCondensed-DemiBold',
                                fontSize: 18,
                            }}>{playlist[3].singer}</Text>
                        </Animated.View>
                    </View>
                    :
                    <Animated.Image style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: width,
                        height: 42,
                        opacity: this.state.fadeOutBg
                    }} resizeMode="cover" blurRadius={20} source={require('../assets/images/pink.jpg')}/>}


                <Animated.View style={{
                    paddingLeft: 15,
                    paddingRight: 15,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 42,
                    opacity: this.state.fadeOut,
                    justifyContent: 'center',

                }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.onToggle}>
                        <Text style={{
                            color: "white", fontFamily: UI.FONT.regular, fontSize: 15,
                            letterSpacing: 0.5,
                            paddingTop: 4,
                        }}>What
                            About Us</Text>
                        <Text style={{
                            color: "white",
                            letterSpacing: 0.5,
                            fontFamily: UI.FONT.regular,
                            fontSize: 15,
                            marginTop: -3
                        }}>P!NK</Text>
                        <View style={{position: "absolute", right: 22, bottom: 16}}
                              activeOpacity={0.8}
                              hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}>
                            <Image style={{width: 18, height: 9}} source={require('../assets/images/up.png')}/>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{position: "absolute", right: 37, bottom: 16, opacity: this.state.fadeIn}}>
                    <TouchableOpacity onPress={this.onToggle}
                                      activeOpacity={0.8}
                                      hitSlop={{bottom: 10, left: 10, right: 10, top: 10}}>
                        <Image style={{width: 18, height: 9}} source={require('../assets/images/down.png')}/>
                    </TouchableOpacity>
                </Animated.View>
                <TouchableOpacity onPress={() => this.setState({paused: !this.state.paused})} style={{
                    position: 'absolute',
                    left: -40 + width / 2,
                    right: -40 + width / 2,
                    alignItems: "center",
                    bottom: -70, height: 100, width: 80,
                }}>
                    {!this.state.paused ?
                        <Image style={{width: 64, height: 64}} source={require('../assets/images/pause.png')}/> :
                        <Image style={{width: 64, height: 64}} source={require('../assets/images/play.png')}/>}

                </TouchableOpacity>


            </Animated.View>
        );
    }
}