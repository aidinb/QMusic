import React, {Component} from 'react';
import {View, Platform, Image, TouchableOpacity, Dimensions} from 'react-native';
import UI from '../assets/UI'
import {isIphoneX} from 'react-native-iphone-x-helper'
import {Navigation} from 'react-native-navigation';

const {width, height} = Dimensions.get("window");
export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                backgroundColor: this.props.backColor ? this.props.backColor : UI.COLORS_HEX.transparent,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: "flex-end",
                paddingLeft: 10,
                paddingRight: 10,
                width: width,
                paddingTop: this.props.backColor ? 10 : 0,
                height: (this.props.backColor || this.props.type) ? isIphoneX() ? 95 : 85 : 65,
            }}>


                {this.props.children}
                {this.props.back && <TouchableOpacity activeOpacity={0.8} onPress={this.props.logoPress}
                                                      style={{position: 'absolute', bottom: 20, left: 5}}>
                    <Image
                        style={{
                            width: 20,
                            height: 20,
                            marginTop:-2
                        }}
                        source={require('../assets/images/arrowLeft.png')}
                        resizeMode={'cover'}
                    />
                </TouchableOpacity>}
                <TouchableOpacity activeOpacity={0.8} onPress={this.props.logoPress}
                                  style={{
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      marginLeft: (this.props.backColor || this.props.type) ? 10 : this.props.back ? 15 : 0,
                                      marginBottom: 15,

                                  }}>
                    <Image
                        style={{
                            width: 100,
                            height: 30,
                        }}
                        source={require('../assets/images/logo.png')}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>

                {!this.props.type && <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    Navigation.dismissOverlay('overlayPlayer');
                    Navigation.showModal({
                        component: {
                            name: 'Login',
                            options: {
                                animated: true
                            },

                        }
                    });
                }} style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Image
                        style={{
                            width: 60,
                            height: 60,
                        }}
                        source={require('../assets/images/person.png')}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>}
            </View>

        );
    }


}

