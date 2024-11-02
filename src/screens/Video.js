import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    RefreshControl, TextInput,
    KeyboardAvoidingView
} from 'react-native';
import NavBar from '../component/NavBar'
import UI from '../assets/UI'
import HomeTag0 from '../component/HomeTag0'
import HomeTag1 from '../component/HomeTag1'
import HomeTag2 from '../component/HomeTag2'
import HomeTag3 from '../component/HomeTag3'
import HomeTag4 from '../component/HomeTag4'
import {Navigation} from 'react-native-navigation';
import VideoDet from "../component/VideoDet";
import VideoPlayer from 'react-native-video-player';
import MessageBox from "../component/MessageBox";
import Share from '../component/Share'

let {height, width} = Dimensions.get('window');

export default class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTag: 0,
            scrollHeight: '',
            refreshing: false,
            more: 1000,
            share: false,
            share2: false,
            txt: '',
            muted: true,
            video1Y: 0,
            video2Y: 0,
            scrollPos: 0


        };

    }

    _measure = () => {
        this.refs.Marker.measure((x, y, width, height, pageX, pageY) => {
            this.setState({video1Y: y - width / 2})
        })
    }
    _measure2 = () => {
        this.refs.Marker2.measure((x, y, width, height, pageX, pageY) => {
            this.setState({video2Y: y - width / 2})
        })
    }

    componentDidAppear() {
        this.player1.play();
        this._measure();
        this._measure2();

        Navigation.store.refsById.overlayPlayer.originalComponentRef.closeOverlay();


    }

    componentDidDisappear() {
        this.player1.pause();
        this.player2.pause();
        this.player3.pause();


    }

    _onRefresh() {
        this.setState({refreshing: true});

    }


    render() {
        const {navigator} = this.props;

        return (
            <View>
                <KeyboardAvoidingView
                    behavior='position'
                    style={{backgroundColor:'transparent'}}
                    contentContainerStyle={{backgroundColor:'transparent'}}
                    keyboardVerticalOffset={-20}
                >
                    <ScrollView style={{
                        backgroundColor: UI.COLORS_HEX.white,
                        width: width,
                        paddingTop: 20,

                    }}
                                ref={ref => this.myScrollVideo = ref}
                                onScroll={e => {
                                    // console.log(e.nativeEvent.contentOffset.y)
                                    this._measure();
                                    this._measure2();

                                    if (this.player1.isPlaying() === true) {
                                        this.player2.pause();
                                        this.player3.pause();
                                    }
                                    if (this.player2.isPlaying() === true) {
                                        this.player1.pause();
                                        this.player3.pause();
                                    }
                                    if (this.player3.isPlaying() === true) {
                                        this.player1.pause();
                                        this.player2.pause();
                                    }
                                    if (e.nativeEvent.contentOffset.y > 5) {
                                        this.player1.play();
                                        this.player3.pause();
                                        this.player2.pause();
                                    }
                                    if (e.nativeEvent.contentOffset.y > this.state.video1Y) {
                                        this.player1.pause();
                                        this.player3.pause();
                                        this.player2.play();
                                    }
                                    if (e.nativeEvent.contentOffset.y > this.state.video2Y) {
                                        this.player1.pause();
                                        this.player2.pause();
                                        this.player3.play();
                                    }

                                }}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh.bind(this)}
                                    />
                                }
                                scrollEventThrottle={1}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingBottom: 80,
                                }}>
                        <ScrollView style={{
                            backgroundColor: UI.COLORS_HEX.white,
                            marginTop: 10,
                            height: 40,
                            width: width
                        }}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                            <TouchableOpacity activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 0 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }} onPress={() => {
                                this.setState({showTag: 0})
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>OCHTEND</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 1 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>MIDDAG</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 2 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>NIEUWS</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 3 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>ACTIES</Text>
                            </TouchableOpacity>

                            <View activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 4 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>MIDDAG</Text>
                            </View>
                        </ScrollView>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                            <VideoPlayer
                                video={require('../assets/video/video1.mp4')}
                                videoWidth={width}
                                disableFullscreen={true}
                                videoHeight={width / 2}
                                thumbnail={require('../assets/images/duck.png')}
                                ref={r => this.player1 = r}
                                resizeMode={'cover'}
                                muted={this.state.muted}
                                customStyles={{
                                    seekBarProgress: {
                                        height: 5,
                                        backgroundColor: 'red',
                                    },
                                    seekBarKnob: {
                                        width: 20,
                                        height: 20,
                                        marginHorizontal: -8,
                                        marginVertical: -10,
                                        borderRadius: 10,
                                        backgroundColor: 'red',
                                        transform: [{scale: 0.8}],
                                        zIndex: 1,
                                    },
                                    wrapper: {
                                        width: width,
                                        height: width / 2,
                                        marginTop: 10
                                    }
                                }}
                            />
                            <TouchableOpacity style={{
                                width: width,
                                height: width / 2 - 50,
                                marginTop: 10,
                                position: 'absolute',
                                backgroundColor: 'transparent',
                                top: 0,
                                left: 0,
                                right: 0
                            }} activeOpacity={0.8} onPress={() => {
                                this.setState({more: 0, muted: false});
                                this.player2.pause();
                                this.player3.pause();
                                this.player1.play();
                            }}/>


                            {this.state.share === true && <Share onPress={() => this.setState({share: false})}/>}
                            <View style={{width: width, paddingLeft: 10, marginTop: 10}}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingRight: 10,
                                    paddingLeft: 10
                                }}>
                                    <Text style={{
                                        color: UI.COLORS_HEX.red,
                                        fontFamily: UI.FONT.medium,
                                        fontSize: 30,
                                        width: width - 100,
                                        marginTop: 10
                                    }}>
                                        GAST MAAKT COVERS MET RUBBEREN KIP
                                    </Text>
                                    {this.state.share === false &&
                                    <TouchableOpacity onPress={() => this.setState({share: true})} style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: -15
                                    }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                            }}
                                            source={require('../assets/images/Share.png')}
                                            resizeMode={'cover'}
                                        />
                                        <Text style={{
                                            fontFamily: UI.FONT.light,
                                            fontSize: 16,
                                            letterSpacing: 0.5,

                                        }}>
                                            Delen
                                        </Text>
                                    </TouchableOpacity>}

                                </View>
                                <View style={{
                                    width: width,
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginTop: 5
                                }}>
                                    <Text style={{
                                        fontFamily: UI.FONT.light,
                                        fontSize: 22,
                                        width: width - 40,
                                        textAlign: 'justify'

                                    }}>{this.state.more !== 0 ?
                                        'Mattie, Fien en igmar hebben het naar aanleiding van een video op Dumpert maar over een ...' :
                                        'Mattie, Fien en Igmar hebben het naar aanleiding van een video op Dumpert maar over één ding Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed'

                                    }
                                        {this.state.more !== 0 && <Text onPress={() => {
                                            this.setState({more: 0, muted: false});
                                            this.player2.pause();
                                            this.player3.pause();
                                            this.player1.play();
                                        }} style={{
                                            color: UI.COLORS_HEX.green,
                                            fontFamily: UI.FONT.medium,
                                            fontSize: 18,
                                        }}> MEER</Text>}
                                    </Text>

                                </View>

                            </View>
                            <View ref="Marker" style={{width: width, height: width / 2}}>
                                <VideoPlayer
                                    video={require('../assets/video/video2.mp4')}
                                    videoWidth={width}
                                    disableFullscreen={true}
                                    videoHeight={width / 2}
                                    thumbnail={require('../assets/images/thumb1.png')}
                                    ref={r => this.player2 = r}
                                    resizeMode={'cover'}
                                    muted={this.state.muted}

                                    customStyles={{
                                        seekBarProgress: {
                                            height: 5,
                                            backgroundColor: 'red',
                                        },
                                        seekBarKnob: {
                                            width: 20,
                                            height: 20,
                                            marginHorizontal: -8,
                                            marginVertical: -10,
                                            borderRadius: 10,
                                            backgroundColor: 'red',
                                            transform: [{scale: 0.8}],
                                            zIndex: 1,
                                        },
                                        wrapper: {
                                            width: width,
                                            height: width / 2
                                        }
                                    }}
                                />
                                <TouchableOpacity style={{
                                    width: width,
                                    height: width / 2 - 50,
                                    marginTop: 10,
                                    position: 'absolute',
                                    backgroundColor: 'transparent',
                                    top: 0,
                                    left: 0,
                                    right: 0
                                }} activeOpacity={0.8} onPress={() => {
                                    this.setState({more: 1, muted: false});
                                    this.player1.pause();
                                    this.player3.pause();
                                    this.player2.play();
                                }}/>
                            </View>
                            {this.state.share2 === true && <Share onPress={() => this.setState({share2: false})}/>}
                            <View style={{width: width, paddingLeft: 10, marginTop: 10}}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingRight: 10,
                                    paddingLeft: 10
                                }}>
                                    <Text style={{
                                        color: UI.COLORS_HEX.red,
                                        fontFamily: UI.FONT.medium,
                                        fontSize: 30,
                                        width: width - 100,
                                        marginTop: 10
                                    }}>
                                        GAST MAAKT COVERS MET RUBBEREN KIP
                                    </Text>
                                    {this.state.share2 === false &&
                                    <TouchableOpacity onPress={() => this.setState({share2: true})} style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: -15
                                    }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                            }}
                                            source={require('../assets/images/Share.png')}
                                            resizeMode={'cover'}
                                        />
                                        <Text style={{
                                            fontFamily: UI.FONT.light,
                                            fontSize: 16,
                                            letterSpacing: 0.5,

                                        }}>
                                            Delen
                                        </Text>
                                    </TouchableOpacity>}

                                </View>
                                <View style={{
                                    width: width,
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginTop: 5
                                }}>
                                    <Text style={{
                                        fontFamily: UI.FONT.light,
                                        fontSize: 22,
                                        width: width - 40,
                                        textAlign: 'justify'

                                    }}>{this.state.more !== 1 ?
                                        'Mattie, Fien en igmar hebben het naar aanleiding van een video op Dumpert maar over een ...' :
                                        'Fien en igmar hebben het naar aanleiding van een video op Fien en igmar hebben het naar aanleiding van een video op Fien en igmar hebben het naar aanleiding van een video op hebben het naar aanleiding van een hebben het naar aanleiding van een hebben het naar aanleiding van een'

                                    }
                                        {this.state.more !== 1 && <Text onPress={() => {
                                            this.setState({more: 1, muted: false});
                                            this.player1.pause();
                                            this.player3.pause();
                                            this.player2.play();
                                        }} style={{
                                            color: UI.COLORS_HEX.green,
                                            fontFamily: UI.FONT.medium,
                                            fontSize: 18,
                                        }}> MEER</Text>}
                                    </Text>
                                    {this.state.more === 1 && <View>
                                        <View tyle={{
                                            width: width,
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            marginTop: 15,
                                        }}>
                                            <TouchableOpacity style={{
                                                width: width - 40,
                                                backgroundColor: UI.COLORS_HEX.red,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: 10
                                            }} onPress={() => {
                                                Navigation.dismissOverlay('overlayPlayer');
                                                Navigation.push(this.props.componentId, {
                                                    component: {
                                                        name: 'AddMessage',
                                                        options: {
                                                            animated: 'fade',
                                                            topBar: {
                                                                visible: false,
                                                            },
                                                            bottomTabs: {
                                                                visible: false,
                                                            },
                                                        },

                                                    },

                                                })
                                            }}>
                                                <Text style={{
                                                    color: UI.COLORS_HEX.white,
                                                    fontFamily: UI.FONT.medium,
                                                    fontSize: 26,
                                                    marginTop: 15
                                                }}>REAGEER</Text>

                                            </TouchableOpacity>
                                        </View>
                                        <MessageBox image={require('../assets/images/parsonGr.png')}
                                                    name={'Mariëlle Geersten'}
                                                    date={'vrijdag 2 februari 2018 / 10.25'}
                                                    txt={'Jongens wat een leuk filmpje zeg,ik heb het aan al mijn vriendinnen laten zien, iedereen vond het errug grappig! Knuffels van Mariëlle!!! :)'}/>

                                        <MessageBox name={'Geersten'} date={'vrijdag 2 februari 2018 / 10.25'}
                                                    txt={'Hier komt een berichtje te staan!'}/>
                                        <MessageBox name={'Geersten'} date={'vrijdag 2 februari 2018 / 10.25'}
                                                    txt={'Hier komt een berichtje te staan!'}/>

                                        <View style={{width: width - 40, marginTop: 20}}>
                                            <TextInput
                                                style={{
                                                    fontFamily: UI.FONT.light,
                                                    fontSize: 16,
                                                    borderColor: UI.COLORS_HEX.darGray,
                                                    borderWidth: 1,
                                                    padding: 10,
                                                    paddingTop: 5,
                                                    paddingBottom: 5,
                                                    flexDirection: 'row'
                                                }}
                                                onChangeText={(text) => this.setState({txt: text})}
                                                value={this.state.txt}
                                                placeholder='Bericht'
                                                underlineColorAndroid='rgba(0,0,0,0)'
                                            />
                                            <Image
                                                style={{
                                                    width: 22,
                                                    height: 22,
                                                    position: 'absolute',
                                                    top: 5,
                                                    right: 5
                                                }}
                                                source={require('../assets/images/enter.png')}
                                                resizeMode={'cover'}
                                            />
                                        </View>
                                    </View>}


                                </View>

                            </View>

                            <View ref="Marker2" style={{width: width, height: width / 2, marginTop: 15}}>
                                <VideoPlayer
                                    video={require('../assets/video/video3.mp4')}
                                    videoWidth={width}
                                    disableFullscreen={true}
                                    videoHeight={width / 2}
                                    thumbnail={require('../assets/images/thumb2.png')}
                                    ref={r => this.player3 = r}
                                    resizeMode={'cover'}
                                    muted={this.state.muted}

                                    customStyles={{
                                        seekBarProgress: {
                                            height: 5,
                                            backgroundColor: 'red',
                                        },
                                        seekBarKnob: {
                                            width: 20,
                                            height: 20,
                                            marginHorizontal: -8,
                                            marginVertical: -10,
                                            borderRadius: 10,
                                            backgroundColor: 'red',
                                            transform: [{scale: 0.8}],
                                            zIndex: 1,
                                        },
                                        wrapper: {
                                            width: width,
                                            height: width / 2
                                        }
                                    }}
                                />
                                <TouchableOpacity style={{
                                    width: width,
                                    height: width / 2 - 50,
                                    marginTop: 10,
                                    position: 'absolute',
                                    backgroundColor: 'transparent',
                                    top: 0,
                                    left: 0,
                                    right: 0
                                }} activeOpacity={0.8} onPress={() => {
                                    this.setState({more: 2, muted: false});
                                    this.player1.pause();
                                    this.player2.pause();
                                    this.player3.play();
                                }}/>
                            </View>
                            {this.state.share2 === true && <Share onPress={() => this.setState({share2: false})}/>}
                            <View style={{width: width, paddingLeft: 10, marginTop: 10}}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingRight: 10,
                                    paddingLeft: 10
                                }}>
                                    <Text style={{
                                        color: UI.COLORS_HEX.red,
                                        fontFamily: UI.FONT.medium,
                                        fontSize: 30,
                                        width: width - 100,
                                        marginTop: 10
                                    }}>
                                        GAST MAAKT COVERS MET RUBBEREN KIP
                                    </Text>
                                    {this.state.share2 === false &&
                                    <TouchableOpacity onPress={() => this.setState({share2: true})} style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: -15
                                    }}>
                                        <Image
                                            style={{
                                                width: 30,
                                                height: 30,
                                            }}
                                            source={require('../assets/images/Share.png')}
                                            resizeMode={'cover'}
                                        />
                                        <Text style={{
                                            fontFamily: UI.FONT.light,
                                            fontSize: 16,
                                            letterSpacing: 0.5,

                                        }}>
                                            Delen
                                        </Text>
                                    </TouchableOpacity>}

                                </View>
                                <View style={{
                                    width: width,
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    marginTop: 5
                                }}>
                                    <Text style={{
                                        fontFamily: UI.FONT.light,
                                        fontSize: 22,
                                        width: width - 40,
                                        textAlign: 'justify'

                                    }}>{this.state.more !== 2 ?
                                        'Mattie, Fien en igmar hebben het naar aanleiding van een video op Dumpert maar over een ...' :
                                        'Fien en igmar hebben het naar aanleiding van een video op Fien en igmar hebben het naar aanleiding van een video op Fien en igmar hebben het naar aanleiding van een video op hebben het naar aanleiding van een hebben het naar aanleiding van een hebben het naar aanleiding van een'

                                    }
                                        {this.state.more !== 2 && <Text onPress={() => {
                                            this.setState({more: 2, muted: false});
                                            this.player1.pause();
                                            this.player2.pause();
                                            this.player3.play();
                                        }} style={{
                                            color: UI.COLORS_HEX.green,
                                            fontFamily: UI.FONT.medium,
                                            fontSize: 18,
                                        }}> MEER</Text>}
                                    </Text>
                                    {this.state.more === 2 && <View>
                                        <View tyle={{
                                            width: width,
                                            justifyContent: 'center',
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            marginTop: 15,
                                        }}>
                                            <TouchableOpacity style={{
                                                width: width - 40,
                                                backgroundColor: UI.COLORS_HEX.red,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: 10
                                            }} onPress={() => {
                                                Navigation.dismissOverlay('overlayPlayer');
                                                Navigation.push(this.props.componentId, {
                                                    component: {
                                                        name: 'AddMessage',
                                                        options: {
                                                            animated: 'fade',
                                                            topBar: {
                                                                visible: false,
                                                            },
                                                            bottomTabs: {
                                                                visible: false,
                                                            },
                                                        },

                                                    },

                                                })
                                            }}>
                                                <Text style={{
                                                    color: UI.COLORS_HEX.white,
                                                    fontFamily: UI.FONT.medium,
                                                    fontSize: 26,
                                                    marginTop: 15
                                                }}>REAGEER</Text>

                                            </TouchableOpacity>
                                        </View>
                                        <MessageBox image={require('../assets/images/parsonGr.png')}
                                                    name={'Mariëlle Geersten'}
                                                    date={'vrijdag 2 februari 2018 / 10.25'}
                                                    txt={'Jongens wat een leuk filmpje zeg,ik heb het aan al mijn vriendinnen laten zien, iedereen vond het errug grappig! Knuffels van Mariëlle!!! :)'}/>

                                        <MessageBox name={'Geersten'} date={'vrijdag 2 februari 2018 / 10.25'}
                                                    txt={'Hier komt een berichtje te staan!'}/>

                                        <View style={{width: width - 40, marginTop: 20}}>
                                            <TextInput
                                                style={{
                                                    fontFamily: UI.FONT.light,
                                                    fontSize: 16,
                                                    borderColor: UI.COLORS_HEX.darGray,
                                                    borderWidth: 1,
                                                    padding: 10,
                                                    paddingTop: 5,
                                                    paddingBottom: 5,
                                                    flexDirection: 'row'
                                                }}
                                                onChangeText={(text) => this.setState({txt: text})}
                                                value={this.state.txt}
                                                placeholder='Bericht'
                                                underlineColorAndroid='rgba(0,0,0,0)'
                                            />
                                            <Image
                                                style={{
                                                    width: 22,
                                                    height: 22,
                                                    position: 'absolute',
                                                    top: 5,
                                                    right: 5
                                                }}
                                                source={require('../assets/images/enter.png')}
                                                resizeMode={'cover'}
                                            />
                                        </View>
                                    </View>}


                                </View>

                            </View>
                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={{
                    width: width,
                    height: 20,
                    backgroundColor: UI.COLORS_HEX.red,
                    position: 'absolute',
                    top: 0
                }}>
                </View>
            </View>
        )


    }
}