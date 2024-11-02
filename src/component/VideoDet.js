import React, {Component} from 'react';
import {View, Platform, Image, TouchableOpacity, ScrollView, Dimensions, Text, TextInput, Button} from 'react-native';
import UI from '../assets/UI'
import Share from '../component/Share'
import MessageBox from "./MessageBox";
import VideoPlayer from 'react-native-video-player';
import {Navigation} from 'react-native-navigation';

let {height, width} = Dimensions.get('window');

export default class VideoDet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            more: 1000,
            share: false,
            share2: false,
            txt: '',
            muted: true
        };
    }


    componentWillMount() {
        if (this.props.play) {
            this.player1.play();
        }
    }

    render() {

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center'
            }}>
                <VideoPlayer
                    video={require('../assets/video/video1.mp4')}
                    videoWidth={width}
                    disableFullscreen={true}
                    videoHeight={width / 2}
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
                    // this.props.morePress(0);
                }}/>


                {this.state.share === true && <Share onPress={() => this.setState({share: false})}/>}
                {this.state.more === 0 && <View style={{width: width, paddingLeft: 10, marginTop: 10}}>
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
                                this.setState({more: 0});
                                this.props.morePress(0);
                            }} style={{
                                color: UI.COLORS_HEX.green,
                                fontFamily: UI.FONT.medium,
                                fontSize: 18,
                            }}> MEER</Text>}


                        </Text>

                    </View>

                </View>}
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    this.setState({more: 1});
                    this.props.morePress(1);
                }}>
                    <VideoPlayer
                        video={require('../assets/video/video1.mp4')}
                        videoWidth={width}
                        disableFullscreen={true}
                        videoHeight={width / 2}
                        ref={r => this.player = r}
                        resizeMode={'cover'}
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
                </TouchableOpacity>
                {this.state.share2 === true && <Share onPress={() => this.setState({share2: false})}/>}
                {this.state.more === 1 && <View style={{width: width, paddingLeft: 10, marginTop: 10}}>
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
                                this.setState({more: 1});
                                this.props.morePress(1);
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
                                }} onPress={this.props.reageerPress}>
                                    <Text style={{
                                        color: UI.COLORS_HEX.white,
                                        fontFamily: UI.FONT.medium,
                                        fontSize: 26,
                                        marginTop: 15
                                    }}>REAGEER</Text>

                                </TouchableOpacity>
                            </View>
                            <MessageBox image={require('../assets/images/parsonGr.png')} name={'Mariëlle Geersten'}
                                        date={'vrijdag 2 februari 2018 / 10.25'}
                                        txt={'Jongens wat een leuk filmpje zeg,ik heb het aan al mijn vriendinnen laten zien, iedereen vond het errug grappig! Knuffels van Mariëlle!!! :)'}/>

                            <MessageBox name={'Geersten'} date={'vrijdag 2 februari 2018 / 10.25'}
                                        txt={'Hier komt een berichtje te staan!'}/>
                            <MessageBox name={'Geersten'} date={'vrijdag 2 februari 2018 / 10.25'}
                                        txt={'Hier komt een berichtje te staan!'}/>
                            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-235}
                                                  contentContainerStyle={{
                                                      height: 50,
                                                      marginTop: 10,
                                                      marginLeft: -18,
                                                      width: width,
                                                      backgroundColor: 'white',
                                                      justifyContent: 'center',
                                                      alignItems: 'center'
                                                  }} style={{justifyContent: 'center', alignItems: 'center'}}>

                                <View style={{width: width - 40}}>
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
                        </View>}


                    </View>

                </View>}

            </View>

        );
    }


}

