import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    RefreshControl, KeyboardAvoidingView
} from 'react-native';
import NavBar from '../component/NavBar'
import UI from '../assets/UI'
import HomeTag0 from '../component/HomeTag0'
import HomeTag1 from '../component/HomeTag1'
import HomeTag2 from '../component/HomeTag2'
import HomeTag3 from '../component/HomeTag3'
import HomeTag4 from '../component/HomeTag4'
import {Navigation} from 'react-native-navigation';

import {isIphoneX} from "react-native-iphone-x-helper";

let {height, width} = Dimensions.get('window');

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTag: 0,
            scrollHeight: '',
            scroll: false,
            refreshing: false,
        };
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.setState({refreshing: false});



    }

    componentDidAppear() {
        if(Navigation.store.refsById.overlayPlayer){
            Navigation.store.refsById.overlayPlayer.originalComponentRef.closeOverlay();

        }
    }
    render() {
        const {navigator} = this.props;
        return (

            <View>
                <KeyboardAvoidingView
                    behavior='position'
                    style={{backgroundColor: 'transparent'}}
                    contentContainerStyle={{backgroundColor: 'transparent'}}
                >
                    <ScrollView style={{
                        backgroundColor: UI.COLORS_HEX.white,
                        width: width,
                        paddingTop: 20

                    }}
                                ref={ref => this.myScroll = ref}
                                onLayout={ev => {
                                    this.state.scrollHeight = ev.nativeEvent.layout.height
                                }}
                                onScroll={e => {
                                    if (e.nativeEvent.contentOffset.y < 1) {
                                        this.setState({scroll: false})
                                    } else {
                                        this.setState({scroll: true, refreshing: false})

                                    }
                                }}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh.bind(this)}
                                    />
                                }
                                scrollEventThrottle={1}
                                onScrollBeginDrag={() => this.setState({scroll: true})}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingBottom: 70,
                                }}>
                        <ScrollView style={{
                            backgroundColor: UI.COLORS_HEX.white,
                            marginTop: 10,
                            height: 40,
                            width: width
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
                            }} onPress={() => {
                                GLOBAL.opened = false;
                                this.setState({showTag: 0})
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>OCHTEND</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 1 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }} onPress={() => {
                                this.setState({showTag: 1})
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>MIDDAG</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 2 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }} onPress={() => {
                                this.setState({showTag: 2})
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>NIEUWS</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 3 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }} onPress={() => {
                                this.setState({showTag: 3})
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>ACTIES</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.showTag === 4 ? UI.COLORS_HEX.red : UI.COLORS_HEX.darGray,
                                borderRadius: 4,
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginLeft: 10
                            }} onPress={() => {
                                this.setState({showTag: 4})
                            }}>
                                <Text style={{
                                    letterSpacing: 0.5,
                                    color: UI.COLORS_HEX.white,
                                    fontFamily: UI.FONT.medium,
                                    marginTop: 11,
                                    fontSize: 22
                                }}>MIDDAG</Text>
                            </TouchableOpacity>
                        </ScrollView>
                        {this.state.showTag === 0 ? <HomeTag0 reageerPress={() => {
                            Navigation.dismissOverlay('overlayPlayer');
                            Navigation.push(this.props.componentId, {
                                component: {
                                    name: 'AddMessage',
                                    options: {
                                        animated: 'fade',
                                        topBar: {
                                            visible: false,
                                        },
                                        bottomTabs: {
                                            visible: false,
                                        },
                                    },

                                },

                            })
                        }} morePress={(id) => {
                            if (id === 0) {
                                this.myScroll.scrollTo({y: this.state.scrollHeight / 2})
                            } else {
                                this.myScroll.scrollTo({y: this.state.scrollHeight + 130})

                            }
                        }
                        }
                        /> : this.state.showTag === 1 ?
                            <HomeTag1/> : this.state.showTag === 2 ? <HomeTag2/> : this.state.showTag === 3 ?
                                <HomeTag3/> : this.state.showTag === 4 ? <HomeTag4/> : <View/>
                        }
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
        )


    }
}