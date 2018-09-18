import React, { Component } from 'react';
 
import { Platform, StyleSheet, View, FlatList, ActivityIndicator, Image, Modal, TouchableOpacity, Dimensions  } from 'react-native';
import Gallery from 'react-native-image-gallery';
 
export default class App extends Component{
 
    constructor()
    {
      super();
    
      this.state = { 
 
      isLoading: true,
 
      ModalVisibleStatus: false,
 
      TempImageURL : ''
        
     }
    }
    
    componentDidMount() {        
      // return fetch('https://reactnativecode.000webhostapp.com/FlowersList.php')
      return fetch('http://5ba097e08c533d0014ea0ea9.mockapi.io/img')
             .then((response) => response.json())
             .then((responseJson) => {
               this.setState({
                 isLoading: false,
                 dataSource: responseJson
               }, function() {
                 // In this block you can do something with new state.
               });
             })
             .catch((error) => {
               console.error(error);
             });
    }
 
    ShowModalFunction(visible, imageURL) 
    {
 
      this.setState({
 
        ModalVisibleStatus: visible,
 
        TempImageURL : imageURL});
        
    }
    
    render() {
 
        if (this.state.isLoading) {
 
            return (
 
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
 
                <ActivityIndicator size="large" />
 
              </View>
            
          );
          
        }
 
      return (
    
   <View style={styles.MainContainer}>
    
         <FlatList
         
            data={ this.state.dataSource }
    
            renderItem={({item}) => 
            
              <View style={{flex:1, flexDirection: 'column', margin:1 }}> 
 
                <TouchableOpacity onPress={this.ShowModalFunction.bind(this, true, item.flower_image_url)} >
                
                  <Image style={styles.imageThumbnail}   resizeMode={'cover'} source = {{ uri: item.flower_image_url }} />
 
                </TouchableOpacity>
 
              </View> 
            
            }
 
            numColumns = { 1 }
 
            keyExtractor={(item, index) => index.toString()}
    
           />
 
           {
             this.state.ModalVisibleStatus 
             
             ?
 
              (
                <Modal
              transparent={false}
 
              animationType={"fade"}
 
              visible={this.state.ModalVisibleStatus}
 
              onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
 
                <View style={styles.modalView}>
 
                    <Image style={styles.mainImage} source = {{ uri: this.state.TempImageURL }} />
 
                      <TouchableOpacity 
                        activeOpacity = { 0.5 }
                        style={styles.TouchableOpacity_Style}
                        onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >
  
                          <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/close_button.png'}}
                          style={{width:25, height: 25}} />
  
                      </TouchableOpacity>
 
                  </View>
 
              </Modal>
              ) 
 
              :
 
              null
 
           }
 
      
   </View>
              
      );
    }
   }

   const win = Dimensions.get('window');
    
   const styles = StyleSheet.create({
    
   MainContainer :{
    
   justifyContent: 'center',
   flex:1,
   paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    
   },
    
  
   imageThumbnail: {
    
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1,
    //  alignSelf: 'stretch',
    //  width: win.width,
     height: 300,
    
   },
 
   mainImage:{
 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width:'98%',
    resizeMode : 'contain'
 
   },
 
   modalView:{
 
    flex:1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.4)'
 
   },
 
   TouchableOpacity_Style:{
 
    width:25, 
    height: 25, 
    top:9, 
    right:9, 
    position: 'absolute'
 
}
   
    
   });