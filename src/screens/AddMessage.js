import React, {Component} from 'react';
import {
    View,
    Platform,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Text,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import UI from '../assets/UI'
import NavBar from '../component/NavBar'
import MessageBox from '../component/MessageBox'
import MessageBoxRed from '../component/MessageBoxRed'
import {isIphoneX} from 'react-native-iphone-x-helper'
import {Navigation} from 'react-native-navigation';


let {height, width} = Dimensions.get('window');

export default class AddMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            more: '',
            share: false,
            videoPress: false,
            recordPress: false,
            messages: [],
            txt: ''
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
        return (
            <View style={{
                flex: 1,
            }}>
                <NavBar logoPress={() => {
                    if(this.props.video){
                        Navigation.dismissOverlay('overlayPlayer');

                    }else{
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
                    }

                    Navigation.pop(this.props.componentId);
                }} backColor={UI.COLORS_HEX.red} back={true}/>
                <ScrollView ref={ref => this.scrollView = ref}
                            style={{flex: 1}}>
                    {this.state.messages.length > 0 ?

                        this.state.messages.map((item, idx) => {
                            if (item.type === 0) {
                                return (<MessageBox key={"MSG__" + idx} image={require('../assets/images/parsonGr.png')}
                                                    name={'Mariëlle Geersten'}
                                                    date={'vrijdag 2 februari 2018 / 10.25'}
                                                    txt={item.text}
                                                    marginTop={35}/>);
                            } else {
                                return (<MessageBoxRed key={"MSG__" + idx} image={require('../assets/images/Q.png')}
                                                       name={'Qmusic'}
                                                       date={'vrijdag 2 februari 2018 / 10:09'}
                                                       txt={item.text}
                                                       marginTop={25}/>);
                            }
                        })
                        :
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:height/2-120}}>
                            <Text style={{
                                fontFamily: UI.FONT.medium,
                                fontSize: 34,
                                letterSpacing: 0.5,
                                marginTop: 3,
                                color: UI.COLORS_HEX.red,
                                width: width - 60,
                                textAlign: 'center'
                            }}>
                                JE HEBT NOG GEEN
                                BERICHTEN GESTUURD!
                            </Text>
                        </View>
                    }
                </ScrollView>
                <KeyboardAvoidingView behavior="padding" style={{alignItems: 'center',marginBottom:isIphoneX()?30:0}}>
                    <View style={{width: width - 40, marginTop: 5,}}>
                        <TextInput
                            style={{
                                fontFamily: UI.FONT.light,
                                fontSize: 16,
                                borderColor: UI.COLORS_HEX.darGray,
                                borderWidth: 1,
                                padding: 10,
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingRight:40,
                                flexDirection: 'row'
                            }}
                            multiline={true}
                            onChangeText={(text) => this.setState({txt: text})}
                            value={this.state.txt}
                            placeholder='Bericht'
                            underlineColorAndroid='rgba(0,0,0,0)'
                        />
                        <TouchableOpacity hitSlop={{
                            top:20,left:20,right:20,bottom:20
                        }} style={{
                            width: 30,
                            height: 30,
                            position: 'absolute',
                            bottom: 5,
                            right: 10
                        }} activeOpacity={0.8} onPress={() => {
                            let t = this.state.messages;
                            t.push({type: 0, text: this.state.txt});
                            this.setState({messages: t, txt: ''});
                            setTimeout(() => {
                                this.scrollView.scrollToEnd({animated: true});
                            }, 100);
                            if (this.state.messages.length < 2) {
                                setTimeout(() => {
                                    let t = this.state.messages;
                                    t.push({
                                        type: 1,
                                        text: 'Hi Marielle, je berichtje staat online! Kijk op: qmusic.nl/schaatstoppers'
                                    });

                                    this.setState({messages: t,});
                                    setTimeout(() => {
                                        this.scrollView.scrollToEnd({animated: true});
                                    }, 100);
                                }, 3000);
                            }

                        }}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                }}

                                source={require('../assets/images/enter.png')}
                                resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', width: width, marginTop: 10}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {
                            this.setState({recordPress: false, videoPress: false,photoPress:true})
                        }} style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={{
                                    width: 28,
                                    height: 28,
                                }}
                                source={this.state.photoPress===true?require('../assets/images/camra-on.png'):require('../assets/images/photo.png')}
                                resizeMode={'contain'}
                            />
                            <Text style={{
                                fontFamily: UI.FONT.light,
                                fontSize: 15,
                                letterSpacing: 0.5,
                                marginTop: 3,
                                color:this.state.photoPress===true?UI.COLORS_HEX.red:UI.COLORS_HEX.darkTxt


                            }}>Foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {
                            this.setState({recordPress: false, videoPress: true,photoPress:false})
                        }} style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={{
                                    width: 28,
                                    height: 28,
                                }}
                                source={this.state.videoPress===true?require('../assets/images/Video-On.png'):require('../assets/images/video12.png')}
                                resizeMode={'contain'}
                            />
                            <Text style={{
                                fontFamily: UI.FONT.light,
                                fontSize: 15,
                                letterSpacing: 0.5,
                                marginTop: 3,
                                color:this.state.videoPress===true?UI.COLORS_HEX.red:UI.COLORS_HEX.darkTxt

                            }}>Video</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {
                            this.setState({videoPress: false, recordPress: true,photoPress:false})
                        }} style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={{
                                    width: 28,
                                    height: 28,
                                }}
                                source={this.state.recordPress===true?require('../assets/images/record-on.png'):require('../assets/images/record.png')}
                                resizeMode={'contain'}
                            />
                            <Text style={{
                                fontFamily: UI.FONT.light,
                                fontSize: 16,
                                letterSpacing: 0.5,
                                marginTop: 3,
                                color:this.state.recordPress===true?UI.COLORS_HEX.red:UI.COLORS_HEX.darkTxt

                            }}>Geluid</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.videoPress === true && <ScrollView style={{
                        backgroundColor: UI.COLORS_HEX.white,
                        width: width,
                        padding: 10
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
                        }}>
                            <Text style={{
                                letterSpacing: 0.5,
                                color: UI.COLORS_HEX.white,
                                fontFamily: UI.FONT.medium,
                                marginTop: 11,
                                fontSize: 16
                            }}>NEEM VIDEO OP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.showTag === 0 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
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
                                fontSize: 16
                            }}>KIES BESTAANDE VIDEO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({videoPress:false})} activeOpacity={0.8} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.showTag === 0 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
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
                                fontSize: 16
                            }}>ANNULEER</Text>
                        </TouchableOpacity>
                    </ScrollView>}
                    {this.state.recordPress === true && <ScrollView style={{
                        backgroundColor: UI.COLORS_HEX.white,
                        width: width,
                        padding: 10
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
                        }}>
                            <Text style={{
                                letterSpacing: 0.5,
                                color: UI.COLORS_HEX.white,
                                fontFamily: UI.FONT.medium,
                                marginTop: 11,
                                fontSize: 16
                            }}>START GELUIDSOPNAME</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({recordPress:false})} activeOpacity={0.8} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: this.state.showTag === 0 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
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
                                fontSize: 16
                            }}>ANNULEER</Text>
                        </TouchableOpacity>
                    </ScrollView>}
                </KeyboardAvoidingView>
            </View>

        );
    }


}

