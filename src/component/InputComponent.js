import React from 'react';
import {View, Text, ScrollView, Animated, TextInput, Dimensions, Image,} from "react-native";
import UI from '../assets/UI'

const NONE = 0;
const ERROR = 1;
const OK = 2;
const {width, height} = Dimensions.get('window');
export default class InputComponent extends React.Component {
    render() {
        let opt = {};
        if (this.props.maxLength) {
            opt.maxLength = this.props.maxLength;
        }
        return (
            <View style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: width - 40,
                padding: 5,
                marginBottom: 15,
                borderWidth: 1,
                borderColor: "#3d3d3d"
            }}>
                <TextInput
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#4A4A4A"
                    onBlur={this.props.onBlur}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType={this.props.keyboardType}
                    onChangeText={(text) => this.props.onChangeText(text)}
                    value={this.props.value}
                    {...opt}
                    style={{
                        flex: 1,
                        fontSize: 20,
                        marginLeft: 5,
                        marginRight: 5,
                        color: this.props.status === ERROR ? "#ED3624" : "#3D3D3D",
                        fontFamily: UI.FONT.light,
                        paddingTop:5
                    }}/>
                {this.props.status === OK &&
                <Image style={{width: 10 * 3 / 2, height: 9 * 3 / 2, marginLeft: 5, marginRight: 5}}
                       source={require('../assets/images/True.png')}/>}
                {this.props.status === ERROR &&
                <Image style={{width: 17 * 2 / 3, height: 17 * 2 / 3, marginLeft: 5, marginRight: 5}}
                       source={require('../assets/images/False.png')}/>}
            </View>
        );
    }
}