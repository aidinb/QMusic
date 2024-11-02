import React from 'react';
import {
    View, Text, ScrollView, Animated, TextInput, Dimensions, KeyboardAvoidingView, Platform,
    TouchableOpacity,Image
} from "react-native";
import InputComponent from "../component/InputComponent";
import NavBar from '../component/NavBar'
import UI from '../assets/UI'
import {Navigation} from 'react-native-navigation';

const NONE = 0;
const ERROR = 1;
const OK = 2;

const {width, height} = Dimensions.get('window');


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateDate(dateString) {
    var re = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.]\d\d$/;
    return re.test(String(dateString).toLowerCase());
}

export default class Register extends React.Component {
    state = {
        form: {
            email: "",
            mobile: "",
            name: "",
            family: "",
            birth: "",
            password: "",
            confirm: "",
        },
        formStatus: {
            email: NONE,
            mobile: NONE,
            name: NONE,
            family: NONE,
            birth: NONE,
            password: NONE,
            confirm: NONE,
        },
    };
    onChangeText = (kind, text) => {
        let frm = this.state.form;
        if (kind === 'birth') {
            let raw = text.replace(/-/g, '');
            let f = "";
            if (raw.length >= 6) {
                f = raw.slice(0, 2) + '-' + raw.slice(2, 4) + '-' + raw.slice(4, 6);
            } else if (raw.length >= 4) {
                f = raw.slice(0, 2) + '-' + raw.slice(2, 4) + '-' + raw.slice(4);
            } else if (raw.length >= 2) {
                f = raw.slice(0, 2) + '-' + raw.slice(2);
            } else {
                f = raw;
            }
            frm.birth = f;
        } else
            frm[kind] = text;
        this.setState({form: frm})
    };
    onSubmit = () => {
        let frmSts = this.state.formStatus;
        if (this.state.form === '') {
            frmSts.email = ERROR;
        } else if (validateEmail(this.state.form.email)) {
            frmSts.email = OK;
        } else {
            frmSts.email = ERROR;
        }
        if (this.state.form.mobile === '') {
            frmSts.mobile = ERROR;
        } else {
            frmSts.mobile = OK;
        }
        if (this.state.form.name === '') {
            frmSts.name = ERROR;
        } else {
            frmSts.name = OK;
        }
        if (this.state.form.family === '') {
            frmSts.family = ERROR;
        } else {
            frmSts.family = OK;
        }
        if (this.state.form.birth === '') {
            frmSts.birth = ERROR;
        } else if (validateDate(this.state.form.birth)) {
            frmSts.birth = OK;
        } else {
            frmSts.birth = ERROR;
        }
        if (this.state.form.password === '') {
            frmSts.password = ERROR;
        } else {
            frmSts.password = OK;
        }
        if (this.state.form.confirm === '' || this.state.form.confirm !== this.state.form.password) {
            frmSts.confirm = ERROR;
        } else {
            frmSts.confirm = OK;
        }
        if (Object.keys(frmSts).every((key) => frmSts[key] === OK)) {
            // todo GO TO LOGIN
        }

        this.setState({formStatus: frmSts});
    };
    onBlur = (kind) => {
        let frmSts = this.state.formStatus;
        frmSts[kind] = NONE;
        this.setState({formStatus: frmSts});
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "white"}}>
                <NavBar backColor={UI.COLORS_HEX.red} type='login'/>
                <KeyboardAvoidingView
                    style={{flex: 1}}
                    behavior={'padding'}
                >
                    <ScrollView
                        keyboardShouldPersistTaps={'always'}
                        removeClippedSubviews={false}
                        contentContainerStyle={{
                            alignItems: "center",
                            padding: 20
                        }}
                        showsVerticalScrollIndicator={false}
                        style={{
                            flex: 1,
                        }}>
                        <View style={{width: width, justifyContent: 'center', alignItems: 'center',marginBottom:10}}>
                            <Text style={{
                                letterSpacing: 0.5,
                                color: UI.COLORS_HEX.red,
                                fontFamily: UI.FONT.medium,
                                fontSize: 25
                            }}>REGISTERAR</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                            Navigation.dismissModal(this.props.componentId);
                        }} style={{position: 'absolute', top: 3, right: 15}}>
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
                        <InputComponent placeholder="E-mailadres"
                                        status={this.state.formStatus.email}
                                        value={this.state.form.email}
                                        onBlur={() => this.onBlur('email')}
                                        keyboardType="email-address"
                                        onChangeText={(text) => this.onChangeText('email', text)}/>
                        <InputComponent placeholder="Mobiel nummer"
                                        status={this.state.formStatus.mobile}
                                        value={this.state.form.mobile}
                                        keyboardType="phone-pad"
                                        onBlur={() => this.onBlur('mobile')}
                                        onChangeText={(text) => this.onChangeText('mobile', text)}/>
                        <InputComponent placeholder="Voornaam"
                                        status={this.state.formStatus.name}
                                        value={this.state.form.name}
                                        keyboardType="default"
                                        onBlur={() => this.onBlur('name')}
                                        onChangeText={(text) => this.onChangeText('name', text)}/>
                        <InputComponent placeholder="Achternaam"
                                        status={this.state.formStatus.family}
                                        value={this.state.form.family}
                                        keyboardType="default"
                                        onBlur={() => this.onBlur('family')}
                                        onChangeText={(text) => this.onChangeText('family', text)}/>
                        <InputComponent placeholder="Geboortedatum (DD-MM-JJ)"
                                        status={this.state.formStatus.birth}
                                        value={this.state.form.birth}
                                        maxLength={8}
                                        keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}
                                        onBlur={() => this.onBlur('birth')}
                                        onChangeText={(text) => this.onChangeText('birth', text)}/>
                        <InputComponent placeholder="Wachtwoord"
                                        status={this.state.formStatus.password}
                                        value={this.state.form.password}
                                        keyboardType="default"
                                        secureTextEntry={true}
                                        onBlur={() => this.onBlur('password')}
                                        onChangeText={(text) => this.onChangeText('password', text)}/>
                        <InputComponent placeholder="Voer wachtwoord opnieuw in"
                                        status={this.state.formStatus.confirm}
                                        value={this.state.form.confirm}
                                        keyboardType="default"
                                        secureTextEntry={true}
                                        onBlur={() => this.onBlur('confirm')}
                                        onChangeText={(text) => this.onChangeText('confirm', text)}/>

                        <TouchableOpacity onPress={this.onSubmit} style={{
                            backgroundColor: "#ED3624",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            width: width - 40,
                            padding: 5,
                            marginBottom: 15,
                        }}>
                            <Text style={{
                                color: UI.COLORS_HEX.white,
                                fontFamily: UI.FONT.medium,
                                fontSize: 24,
                                marginTop: 10
                            }}>
                                VERZENDEN
                            </Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={{color: UI.COLORS_HEX.black,
                                fontFamily: UI.FONT.thin,
                                fontSize: 18,
                                marginTop: 5,
                                letterSpacing: 0.5,}}>Ben je al
                                geregistreerd?<Text
                                    style={{textDecorationLine: 'underline'}}
                                    onPress={() => alert("BOO")}> Klik dan hier</Text></Text>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={{
                    width: width,
                    height: 20,
                    backgroundColor: UI.COLORS_HEX.red,
                    position: 'absolute',
                    top: 0
                }}>
                </View>
            </View>
        );
    }
}