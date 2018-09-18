/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image resizeMode="cover"  style={{ width:200, height: 200, borderWidth: 1, borderRadius: 100 }}  source={{uri:'http://files.vforum.vn/2014/T09/img/vforum.vn-132749-24-canh-thien-nhien-dep-tren-the-gioi-185-1.jpg'}}></Image>
        {/* <Image source={require('./imgs/hinh2.jpg')}></Image> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
