import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    RefreshControl, TextInput
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

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            pass:''
        };

    }

    componentDidApear() {
        Navigation.setOptions(this.props.componentId, {
            bottomTabs: {
                visible: false,

            }
        });

    }


    render() {
        const {navigator} = this.props;

        return (
            <View style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center'}}>
                <NavBar backColor={UI.COLORS_HEX.red} type='login'/>
                <ScrollView contentContainerStyle={{ alignItems: 'center'}}>
                <View style={{width: width, justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    <Text style={{
                        letterSpacing: 0.5,
                        color: UI.COLORS_HEX.red,
                        fontFamily: UI.FONT.medium,
                        fontSize: 25
                    }}>LOGIN</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                        Navigation.showOverlay({
                            component: {
                                name: 'Overlay',
                                id:'overlayPlayer',
                                options: {
                                    overlay: {
                                        interceptTouchOutside: false
                                    }
                                }
                            }
                        });
                        Navigation.dismissAllModals();
                    }} style={{position: 'absolute', top: 0, right: 15}}>
                        <Image
                            style={{
                                width: 15,
                                height: 15,
                            }}
                            source={require('../assets/images/close.png')}
                            resizeMode={'cover'}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={{
                    width: width - 50,
                    backgroundColor: UI.COLORS_HEX.fbBlue,
                    height: 44,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: UI.COLORS_HEX.white,
                        fontFamily: UI.FONT.thin,
                        fontSize: 22,
                        marginTop: 10
                    }}>login met Facebook</Text>
                    <View style={{position: 'absolute', top: 7, left: 10}}>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                borderWidth: 1,
                                borderColor: 'white',
                                borderRadius: 15
                            }}
                            source={require('../assets/images/facebook.png')}
                            resizeMode={'cover'}
                        />
                    </View>
                </TouchableOpacity>
                <View style={{
                    width: width - 50,
                    marginTop: 35,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: UI.COLORS_HEX.black,
                        fontFamily: UI.FONT.thin,
                        fontSize: 22,
                        marginTop: 10
                    }}>of met je e-mailadres</Text>
                    <TextInput
                        style={{
                            fontFamily: UI.FONT.light,
                            fontSize: 16,
                            borderColor: UI.COLORS_HEX.darGray,
                            borderWidth: 1,
                            padding: 10,
                            paddingTop:5,
                            paddingBottom:5,
                            flexDirection:'row',
                            width: width - 50,
                            height:44,
                            marginTop:5

                        }}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.emai}
                        placeholder='E-mailadres'
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                    <TextInput
                        style={{
                            fontFamily: UI.FONT.light,
                            fontSize: 16,
                            borderColor: UI.COLORS_HEX.darGray,
                            borderWidth: 1,
                            padding: 10,
                            paddingTop:5,
                            paddingBottom:5,
                            flexDirection:'row',
                            width: width - 50,
                            height:44,
                            marginTop:15

                        }}
                        onChangeText={(text) => this.setState({pass: text})}
                        value={this.state.pass}
                        placeholder='Wachtwoord'
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </View>
                <TouchableOpacity activeOpacity={0.8} style={{
                    width: width - 50,
                    backgroundColor: UI.COLORS_HEX.red,
                    height: 44,
                    marginTop: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: UI.COLORS_HEX.white,
                        fontFamily: UI.FONT.medium,
                        fontSize: 24,
                        marginTop: 10
                    }}>AANMELDEN</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{
                    width: width - 50,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: UI.COLORS_HEX.black,
                        fontFamily: UI.FONT.thin,
                        fontSize: 18,
                        marginTop: 5,
                        textDecorationLine:'underline',
                        letterSpacing: 0.5,
                    }}>Wachtwoord vergeten?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>
                    Navigation.showModal({
                        component: {
                            name: 'Register',
                            options: {
                                animated: true
                            },
                            passProps:{componentId:this.props.componentId}
                        }
                    })
                } activeOpacity={0.8} style={{
                    width: width - 50,
                    backgroundColor: UI.COLORS_HEX.red,
                    height: 44,
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: UI.COLORS_HEX.white,
                        fontFamily: UI.FONT.medium,
                        fontSize: 24,
                        marginTop: 10
                    }}>REGISTREER MET E-MAIL</Text>
                </TouchableOpacity>

                </ScrollView>

            </View>

        )

    }
}