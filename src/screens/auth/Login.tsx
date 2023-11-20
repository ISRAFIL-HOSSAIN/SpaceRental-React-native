import React,{useState}from 'react';
import {StyleSheet, View, Image, Text,TouchableOpacity } from 'react-native';
import { Card, SocialIcon } from 'react-native-elements';


const LanguageSelect = () => {
    const [cardstate, setcardState] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View> 
      <View>
        <Image
          source={require('../../../assets/images/Looper.png')}
          style={styles.next}
        />
      </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFAE6',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 38,
    marginTop: 40,
  },
  next: {
    width: 572,
    height: 554.51,
  },
  card: {
    width: 100,
    height:100,
  },
});

export default LanguageSelect;
