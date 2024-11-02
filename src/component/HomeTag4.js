import React, {Component} from 'react';
import {View, Platform, Image, TouchableOpacity, ScrollView,Dimensions,Text} from 'react-native';
import UI from '../assets/UI'
let {height, width} = Dimensions.get('window');

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            more: ''
        };
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Image
                    style={{
                        width: width,
                        height: width / 2,
                        marginTop: 10
                    }}
                    source={require('../assets/images/duck.png')}
                    resizeMode={'cover'}
                />

                <View style={{width: width, paddingLeft: 10, marginTop: 10}}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight: 10,
                        paddingLeft: 5
                    }}>
                        <Text style={{
                            color: UI.COLORS_HEX.red,
                            fontFamily: UI.FONT.medium,
                            fontSize: 30,

                        }}>
                            GAST MAAKT COVERS MET RUBBEREN KIP
                        </Text>
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginTop: -15}}>
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
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        width: width,
                        justifyContent: 'center',
                        paddingLeft: 5,
                        paddingRight: 10,
                        marginTop: 5
                    }}>
                        <Text style={{
                            fontFamily: UI.FONT.light,
                            fontSize: 22,
                            width: width - 40,
                            textAlign:'justify'

                        }}>{this.state.more !== 0 ?
                            'Mattie, Fien en igmar hebben het naar aanleiding van een video op Dumpert maar over een ...' :
                            'Fien en igmar hebben het naar aanleiding van een video op Fien en igmar hebben het naar aanleiding van een video op Fien en igmar hebben het naar aanleiding van een video op hebben het naar aanleiding van een hebben het naar aanleiding van een hebben het naar aanleiding van een'

                        }


                            {this.state.more !== 0 && <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                this.setState({more: 0})
                            }}><Text style={{
                                color: UI.COLORS_HEX.green,
                                fontFamily: UI.FONT.medium,
                                fontSize: 18,
                            }}> MEER</Text></TouchableOpacity>}
                        </Text>
                    </View>
                </View>
                <Image
                    style={{
                        width: width,
                        height: width / 2,
                        marginTop: 10
                    }}
                    source={require('../assets/images/video1.png')}
                    resizeMode={'cover'}
                />

                <View style={{width: width, paddingLeft: 10, marginTop: 10}}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingRight: 10,
                        paddingLeft: 5
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
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', marginTop: -15}}>
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
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        width: width,
                        justifyContent: 'center',
                        paddingLeft: 5,
                        paddingRight: 10,
                        marginTop: 5
                    }}>
                        <Text style={{
                            fontFamily: UI.FONT.light,
                            fontSize: 22,
                            width: width - 40,
                            textAlign:'justify'

                        }}>{this.state.more !== 1 ?
                            'Mattie, Fien en igmar hebben het naar aanleiding van een video op Dumpert maar over een ...' :
                            'Fien en igmar hebben het naar aanleiding van een video op Fien en igmar hebben het naar aanleiding van een video op Fien en igmar hebben het naar aanleiding van een video op hebben het naar aanleiding van een hebben het naar aanleiding van een hebben het naar aanleiding van een'

                        }


                            {this.state.more !== 1 && <TouchableOpacity activeOpacity={0.8} onPress={() => {
                                this.setState({more: 1})
                            }}><Text style={{
                                color: UI.COLORS_HEX.green,
                                fontFamily: UI.FONT.medium,
                                fontSize: 18,
                            }}> MEER</Text></TouchableOpacity>}
                        </Text>
                    </View>
                </View>

            </View>

        );
    }


}

