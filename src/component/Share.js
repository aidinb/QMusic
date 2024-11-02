import React, {Component} from 'react';
import {View, Platform,Image,TouchableOpacity,Dimensions} from 'react-native';
import UI from '../assets/UI'
let {height, width} = Dimensions.get('window');

export default class Share extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex:1
            }}>
                <View style={{width:width-40,marginTop:20,flexDirection:'row'}}>
                    <View style={{flexDirection:'row',width:(width-40)/2+10,justifyContent:'space-around',paddingLeft:7}}>
                        <Image
                            style={{
                                width: 38,
                                height: 38,
                            }}
                            source={require('../assets/images/facebook.png')}
                            resizeMode={'cover'}
                        />
                        <Image
                            style={{
                                width: 38,
                                height: 38,
                            }}
                            source={require('../assets/images/twitter.png')}
                            resizeMode={'cover'}
                        />
                        <Image
                            style={{
                                width: 38,
                                height: 38,
                            }}
                            source={require('../assets/images/whatsapp.png')}
                            resizeMode={'cover'}
                        />
                    </View>
                    <View style={{width:(width-40)/2+10,alignItems:'flex-end',justifyContent:'center'}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress}>
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('../assets/images/close.png')}
                                resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        );
    }


}

