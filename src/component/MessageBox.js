import React, {Component} from 'react';
import {View, Platform,Image,TouchableOpacity,Dimensions,Text} from 'react-native';
import UI from '../assets/UI'
let {height, width} = Dimensions.get('window');

export default class MessageBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex:1
            }}>
                <View style={{
                    borderRadius: 10,
                    width: width - 80,
                    alignSelf: 'flex-end',
                    backgroundColor: UI.COLORS_HEX.green,
                    marginRight: 20,
                    marginTop: this.props.marginTop?this.props.marginTop:45
                }}>
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            position: 'absolute',
                            top: -23,
                            right: 10
                        }}
                        source={require('../assets/images/arrow.png')}
                        resizeMode={'cover'}
                    />
                    <View>
                        <View style={{
                            justifyContent: 'flex-end',
                            marginRight: 5,
                            marginTop: 10,
                            flexDirection: 'row'
                        }}>

                            <View style={{marginRight: 10, alignItems: 'flex-end'}}>
                                <Text style={{
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    fontSize: 26,
                                    marginTop: 10
                                }}>
                                    {this.props.name}
                                </Text>
                                <Text style={{
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.light,
                                    fontSize: 18,
                                }}>
                                    {this.props.date}
                                </Text>
                            </View>
                            <Image
                                style={{
                                    width: 70,
                                    height: 70,
                                    borderRadius: 10
                                }}
                                source={this.props.image?this.props.image:require('../assets/images/personPlaceHolder.png')}
                                resizeMode={'cover'}
                            />
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            padding: 20,
                            paddingRight:30,
                            paddingLeft:30,
                        }}>
                            <Text style={{
                                color: UI.COLORS_HEX.white,
                                fontFamily: UI.FONT.regular,
                                fontSize: 22,
                            }}>
                                {this.props.txt}
                            </Text>
                        </View>
                    </View>
                </View>

            </View>

        );
    }


}

