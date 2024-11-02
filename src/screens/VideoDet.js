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
import VideoPlayer from 'react-native-video-player';
import MessageBox from "../component/MessageBox";
import Share from '../component/Share'

let {height, width} = Dimensions.get('window');

export default class VideoDet extends React.Component {

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


    _onRefresh() {
        this.setState({refreshing: true});

    }

    componentDidDisappear() {
        this.player1.pause();


    }

    componentDidappear() {
        this.player1.play();


    }

    render() {
        const {navigator} = this.props;

        return (
            <View>
                <NavBar logoPress={() => {
                    Navigation.pop(this.props.componentId);
                }} backColor={UI.COLORS_HEX.red} back={true}/>
                <ScrollView contentContainerStyle={{paddingBottom: 120}}>
                    <VideoPlayer
                        video={require('../assets/video/video1.mp4')}
                        videoWidth={width}
                        disableFullscreen={true}
                        videoHeight={width / 2}
                        thumbnail={require('../assets/images/duck.png')}
                        ref={r => this.player1 = r}
                        resizeMode={'cover'}
                        autoplay={true}
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
                            }
                        }}
                    />

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

                            }}>
                                Mattie, Fien en Igmar hebben het naar aanleiding van een video op Dumpert maar over één
                                ding Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et
                                quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed


                            </Text>
                            <View>
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
                                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-220}
                                                      contentContainerStyle={{
                                                          height: 50,
                                                          marginTop: 10,
                                                          marginLeft: -18,
                                                          width: width,
                                                          backgroundColor: 'white',
                                                          justifyContent: 'center',
                                                          alignItems: 'center'
                                                      }} style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <View style={{width: width - 40,marginBottom:10}}>
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
                                </KeyboardAvoidingView>
                            </View>
                        </View>

                    </View>
                </ScrollView>
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