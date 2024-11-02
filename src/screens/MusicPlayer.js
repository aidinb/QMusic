import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
} from 'react-native';
import NavBar from '../component/NavBar'

let {height, width} = Dimensions.get('window');

export default class MusicPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        const {navigator} = this.props;
        return (
            <View style={{flex: 1}}>
                <NavBar navigator={this.props.navigator}/>
                <Text>Welcome MusicPlayer</Text>
            </View>
        )


    }
}