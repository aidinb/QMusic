import React from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    TouchableOpacity,
    Keyboard,
    Animated,
    Easing,
    FlatList
} from "react-native";
import UI from '../assets/UI'
import {Navigation} from 'react-native-navigation';

const {width, height} = Dimensions.get('window');
const data = [
    {
        title: 'Ochtendshow',
        content: "GAST MAAKT COVERS MET RUBBEREN RUBBEREN KIP…",
        image: require('../assets/images/s1.jpg')
    },
    {
        title: 'Middagshow',
        content: "HIER KOMT EEN TITEL OVER DE ACTIE",
        image: require('../assets/images/s2.jpg')
    },
    {
        title: 'Joost mag het weten',
        content: "GAST MAAKT COVERS MET RUBBEREN RUBBEREN KIP…",
        image: require('../assets/images/s1.jpg')
    },
    {
        title: 'Actie',
        content: "HIER KOMT EEN TITEL OVER DE ACTIE",
        image: require('../assets/images/s2.jpg')
    },
    {
        title: 'Ochtendshow',
        content: "GAST MAAKT COVERS MET RUBBEREN RUBBEREN KIP…",
        image: require('../assets/images/s1.jpg')
    },
    {
        title: 'Middagshow',
        content: "HIER KOMT EEN TITEL OVER DE ACTIE",
        image: require('../assets/images/s2.jpg')
    },
]
export default class Search extends React.Component {
    state = {
        q: "",
        height: new Animated.Value(height - 100),
        isClose: false,
    };
    componentDidAppear(){
        Navigation.store.refsById.overlayPlayer.originalComponentRef.closeOverlay();

    }
    onSubmit = () => {
        Keyboard.dismiss();

        if (this.state.isClose && this.state.q === "") {
            this.setState({isClose: false}, () => Animated.timing(
                this.state.height,
                {
                    toValue: height - 100,
                    duration: 500,
                    easing: Easing.bezier(0.645, 0.045, 0.355, 1.000),

                }
            ).start());
        } else if (this.state.isClose && this.state.q !== "") {

        } else {
            Animated.timing(
                this.state.height,
                {
                    toValue: 110,
                    duration: 500,
                    easing: Easing.bezier(0.645, 0.045, 0.355, 1.000),

                }
            ).start(() => this.setState({isClose: true}));
        }

    };
    renderItem = ({item}) => <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'VideoDet',
                    options: {
                        animated: 'fade',
                        topBar: {
                            visible: false,
                        },
                        bottomTabs: {
                            visible: true,
                        },
                    },

                },

            })
        }}
        style={{
            width: width,
            backgroundColor: "white",
            flexDirection: "row",
            padding: 5,
            paddingLeft: 20,
            paddingRight: 20
        }}>
        <Image style={{width: 120, height: 70}} source={item.image}/>
        <View style={{flex: 1, padding: 5, paddingLeft: 10, paddingRight: 10}}>
            <Text style={{
                color: "#3d3d3d", fontSize: 12, fontFamily: UI.FONT.regular,
            }}>{item.title}</Text>
            <Text numberOfLines={2} style={{
                lineHeight: 20,
                marginTop: 5,
                color: "#ED3624", fontSize: 18, fontFamily: UI.FONT.medium,
            }}>{item.content}</Text>
        </View>
    </TouchableOpacity>;

    render() {

        return (
            <View>
                <Animated.View
                    style={{
                        backgroundColor: "#00BFB3",
                        justifyContent: "center",
                        alignItems: "center",
                        height: this.state.height
                    }}
                >
                    <View style={{
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        width: width - 40,
                        padding: 5
                    }}>
                        <TouchableOpacity onPress={this.onSubmit}>
                            <Image style={{width:30,height:30}} source={require('../assets/images/SearchPlaceholder.png')}/>
                        </TouchableOpacity>
                        <TextInput value={this.state.q}
                                   onSubmitEditing={this.onSubmit}
                                   onChangeText={(text) => this.setState({q: text})}
                                   style={{
                                       flex: 1,
                                       fontSize: 20,
                                       marginLeft: 5,
                                       marginRight: 5,
                                       color: "#3D3D3D",
                                       fontFamily: UI.FONT.light,
                                       paddingTop:5
                                   }}
                                   placeholder="Zoeken"/>
                        {this.state.q !== "" &&
                        <TouchableOpacity onPress={() => this.setState({q: ""})}
                                          style={{paddingLeft: 5, paddingRight: 5}}>
                            <Image source={require('../assets/images/delete.png')}/>
                        </TouchableOpacity>}
                    </View>
                </Animated.View>
                <FlatList style={{width: width, height: height - 214,marginTop:-15}}
                          data={data}
                          keyExtractor={(item, index) => "ITM__" + index}
                          showsVerticalScrollIndicator={false}

                          onRefresh={() => {
                          }}
                          refreshing={false}
                          renderItem={this.renderItem}/>
                <View style={{width:width,height:20,backgroundColor:UI.COLORS_HEX.red,position:'absolute',top:0}}>
                </View>
            </View>
        );
    }
}