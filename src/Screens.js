import React from 'react';

import {Navigation} from 'react-native-navigation';
import {Provider} from 'mobx-react/native';
import store from './stores/AppState'
import Home from './screens/Home';
import Messages from './screens/Messages';
import MusicPlayer from './screens/MusicPlayer';
import Video from './screens/Video';
import Search from './screens/Search';
import AddMessage from './screens/AddMessage';
import Overlay from './screens/Overlay';
import NavBar from './component/NavBar';
import Login from './screens/Login';
import Register from './screens/Register';
import VideoDet from './screens/VideoDet';



export function registerScreens() {
    Navigation.registerComponent('Home', () => Home);
    Navigation.registerComponent('Messages', () => Messages, store, Provider);
    Navigation.registerComponent('MusicPlayer', () => MusicPlayer, store, Provider);
    Navigation.registerComponent('Video', () => Video, store, Provider);
    Navigation.registerComponent('Search', () => Search, store, Provider);
    Navigation.registerComponent('AddMessage', () => AddMessage, store, Provider);
    Navigation.registerComponent('Overlay', () => Overlay, store, Provider);
    Navigation.registerComponent('NavBar', () => NavBar, store, Provider);
    Navigation.registerComponent('Login', () => Login, store, Provider);
    Navigation.registerComponent('Register', () => Register, store, Provider);
    Navigation.registerComponent('VideoDet', () => VideoDet, store, Provider);
}
