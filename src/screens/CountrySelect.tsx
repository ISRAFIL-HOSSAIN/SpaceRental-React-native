import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import LanguageSelectSVG from "../../src/assets/Svg/firstpage.svg"
import LanguageSVG from "../../src/assets/Svg/languagenext.svg";
import { Image } from 'react-native-elements';

const CountrySelect: React.FC<any> = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <View >
      <Image
            style={styles.logo}
            source={require('../assets/images/language_select.png')}
          />
      </View>
      <View style={styles.next}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <LanguageSVG />
        </TouchableOpacity>
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
    width: 290,
    height: 300,
    marginTop: 113,
    alignItems: "center",
  },
  next: {
    width: 66,
    height: 66,
    marginTop: 250,
  },
  dropdown: {
    height: 350,
    width: 350,
    marginTop: 100,
    backgroundColor: 'green',
    borderRadius: 250,
  }
});

export default CountrySelect;
