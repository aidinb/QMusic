import React, {Component} from 'react';
import {View, Platform, Image, TouchableOpacity, ScrollView} from 'react-native';
import UI from '../assets/UI'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <ScrollView style={{
                    backgroundColor: UI.COLORS_HEX.white,
                    marginTop: 5,
                    height: 30,
                }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: UI.COLORS_HEX.darGray
                    }}>
                        <Text>OCHTEND</Text>
                    </TouchableOpacity>


                </ScrollView>

            </View>

        );
    }


}

