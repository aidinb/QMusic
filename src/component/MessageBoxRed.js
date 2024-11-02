import React, {Component} from 'react';
import {View, Platform, Image, TouchableOpacity, Dimensions, Text} from 'react-native';
import UI from '../assets/UI'

let {height, width} = Dimensions.get('window');

export default class MessageBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <View style={{
                    borderRadius: 10,
                    width: width - 80,
                    alignSelf: 'flex-start',
                    backgroundColor: UI.COLORS_HEX.red,
                    marginLeft: 20,
                    marginTop: this.props.marginTop ? this.props.marginTop : 45
                }}>
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            position: 'absolute',
                            top: -25,
                            left: 10
                        }}
                        source={require('../assets/images/arrowRed.png')}
                        resizeMode={'cover'}
                    />
                    <View>
                        <View style={{
                            justifyContent: 'flex-start',
                            marginTop: 15,
                            flexDirection: 'row',
                            marginLeft: 10
                        }}>
                            <View style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: UI.COLORS_HEX.white,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10
                            }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10
                                    }}
                                    source={this.props.image ? this.props.image : require('../assets/images/personPlaceHolder.png')}
                                    resizeMode={'contain'}
                                />
                            </View>
                            <View style={{marginLeft:10, alignItems: 'flex-start'}}>
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

