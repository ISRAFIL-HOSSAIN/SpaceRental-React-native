import React,{useState}from 'react';
import {
  StyleSheet,
  View, 
  Image, 
  Text,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Button } from 'react-native-elements';


const CountrySelect = () => {

const name= "Next";
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./home/language_select.png')}
          style={styles.logo}
        />
      </View> 
      <View>
        <Image
          source={require('./home/language_next.png')}
          style={styles.next}
        />

      </View>
    </View>
    
  );
};

const userData = ()=>{
  return (
    <View>
      <Text style={{}}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFAE6',
    alignItems: 'center',
  },
  logo: {
    width: 290,
    height: 300,
    marginTop: 113,
  },
  next: {
    width: 66,
    height: 66,
    marginTop: 100,
  },
  dropdown:{
  height:'auto',
  width: 350,
  marginTop:100,
  backgroundColor: 'white',
  borderRadius:10

  }

});

export default CountrySelect;
