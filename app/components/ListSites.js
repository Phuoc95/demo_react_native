import React, {Component} from 'react';
import { Item, Input, Label, Title, Picker  } from 'native-base';
import styles from './../styles/styles';

export default class ListSites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
        }
    }

      
    onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
    }

    showListSites = (listSites) => {
        const result = listSites.map( (item,index)=>{
            console.log(item.title);
            return (
                <Picker.Item label={item.title} value={item.link} /> 
            );
    } )
     return result;
    }

    render() {  
      const {list} = this.props;
      return (       
            <Item fixedLabel>
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
                {this.showListSites(list)}
                </Picker>
            </Item>    
      );
    }
}

