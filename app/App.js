import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    ListView,
    ActivityIndicator,
    ScrollView,
    YellowBox
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import ImageView from 'react-native-image-view';
import axios from 'axios';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles/styles';
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import TestScreen from './screens/TestScreen';
// import { Provider } from 'react-redux';


export default createBottomTabNavigator(
{
    Home: HomeScreen,
    Gallery: GalleryScreen,
    Test: TestScreen
},
{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Gallery') {
          iconName = `ios-images${focused ? '' : '-outline'}`;
        } else {
            iconName = `ios-settings${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);