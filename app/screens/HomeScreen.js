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
import { Container, Header, Content, Form, Item, Input, Label, DatePicker,Left, Body, Right, Title, Picker, Button  } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './../styles/styles';
import ListSites from './../components/ListSites';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class HomeScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         chosenDate: new Date(),         
         listSites :[
                      { 'title':'Nhạc hay',  'link':'mp3.zing.vn',  },
                      { 'title':'Phim hay',  'link':'mp32.zing.vn',  },
                      { 'title':'Game',  'link':'mp33.zing.vn',  }
                    ]
     };
     this.setDate = this.setDate.bind(this);      
    }

    
    setDate(newDate) {
      this.setState({ chosenDate: newDate });
    }
    render() {
      const {listSites} = this.state;
      // console.log(listSites);
      return (       
          <Container>
              <Header>
                <Left/>
                <Body style={{ justifyContent: "center", alignContent:"center", flex: 1}} >
                  <Title style={{color:"#CFD8DC"}}> <Ionicons name='ios-home' size={25} color='black' /> Home Page</Title>
                </Body>
                <Right />
              </Header>
              <Content>
              <Form>
              {/* <Item fixedLabel>
                  <Label  style={styles.labelColor}>Select site</Label>
                  <Picker
                    mode="dropdown"
                    // iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    placeholder="Select your SIM"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                    itemStyle={{ backgroundColor: 'red', marginLeft: 0, paddingTop: 50 }}
                    // itemTextStyle={{ fontSize: 128, color: 'white' }}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>
                </Item> */}
              <ListSites list = {listSites} ></ListSites>

                <Item fixedLabel>
                  <Label style = {styles.labelColor}>Tag</Label>
                  <Input />
                </Item>
                <Item fixedLabel>
                  <Label style = {styles.labelColor} >Limit</Label>
                  <Input 
                  keyboardType = "number-pad"
                  />
                </Item>

                <Item fixedLabel>
                <Label style={[styles.labelColor]} >Date From</Label>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                  />  
                </Item>

                
                <Item fixedLabel>
                <Label style={[styles.labelColor]} >Date To</Label>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.setDate}
                  />  
                </Item>
                  <Button primary><Text> Primary </Text></Button>
                </Form>     
                  <Text>
                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                  </Text>
              </Content>
          </Container>      
      );
    }
}

