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
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import ImageView from 'react-native-image-view';
import axios from 'axios';
import { createBottomTabNavigator } from 'react-navigation';
import styles from './../styles/styles';


const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');


export default class GalleryScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading:true,
            images : [],
            activeTab: 0,
            imageIndex: 0,
            isImageViewVisible: false,
        };

        this.renderFooter = this.renderFooter.bind(this);
    }

    // componentDidMount() { 
    //     fetch('http://5ba097e08c533d0014ea0ea9.mockapi.io/img')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //       let listImages = responseJson.map( (image, index) => {
    //           return {
    //             source: {
    //               uri:image.flower_image_url
    //           },
    //             title:image.name,
    //             id:image.id
    //           }
    //       } )
    //       console.log(listImages);
    //       this.setState({
    //         isLoading: false,
    //         images: listImages,
    //       }, function() {
    //         // In this block you can do something with new state.
    //       });
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
    
    componentDidMount() {
      axios.get('http://5ba097e08c533d0014ea0ea9.mockapi.io/img')
      .then(response => {
        // console.log(response);
        let listImages = response.data.map( (image, index) => {
                    return {
                      source: {
                        uri:image.flower_image_url
                    },
                      title:image.name,
                      id:image.id
                    }
                } );
            console.log(listImages);
                  this.setState({
                    isLoading: false,
                    images: listImages,
                  }, function() {
                    // In this block you can do something with new state.
                  });

      })
      .catch(error => console.log(error));
    }

    renderFooter({title}) {
        const {likes} = this.state;
        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>{title}</Text>
                    <Text style={styles.footerText}>♥</Text>
            </View>
        );
    }

    render() {
        const {isImageViewVisible, activeTab, imageIndex, images} = this.state;
        // console.log(images);

        if (this.state.isLoading) {
 
          return (

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

              <ActivityIndicator size="large" />

            </View>
          
        );
        
      }

        return (
          <ScrollView  contentContainerStyle={styles.contentContainer} >
            <View style={styles.container}>
                <View>
                    {images.map((image, index) => (
                        <TouchableOpacity
                            style={{marginTop:5}}
                            key={image.title}
                            onPress={() => {
                                this.setState({
                                    imageIndex: index,
                                    isImageViewVisible: true,
                                });
                            }}
                        >
                            <Image
                                style={{width, height:300 }}
                                source={image.source}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <ImageView
                    glideAlways
                    images={images}
                    imageIndex={imageIndex}
                    animationType="fade"
                    isVisible={isImageViewVisible}
                    renderFooter={this.renderFooter}
                    onClose={() => this.setState({isImageViewVisible: false})}
                />
            </View>
          </ScrollView>
        );
    }
}