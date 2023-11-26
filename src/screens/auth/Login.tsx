import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button, Card, Icon, SocialIcon} from 'react-native-elements';
import LogoSvg from '../../assets/Svg/logo.svg';
import LooperSvg from '../../assets/Svg/looper.svg';
import CustomButton from '../../components/common/CommonButton';
import { color } from 'react-native-elements/dist/helpers';

const Login: React.FC<any> = ({navigation}) => {
  const [cardstate, setcardState] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <LooperSvg />
      </View>
      <View style={styles.logo}>
        <LogoSvg />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>LOGIN WITH</Text>
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ABB0B6"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ABB0B6"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.btn}>
            <CustomButton
              onPress={() => navigation.navigate('CountrySelect')}
              title="Login"
              buttonColor="#DCE102"
              textColor="#2D2D2A"
            />
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>OR CONTINUE WITH</Text>
              <View style={styles.auth}>
                <Image  style={{ width: 80, height: 80, resizeMode: 'cover' }} source={require('../../assets/images/google.png')} />
                <Image  style={{ width: 80, height: 80, resizeMode: 'cover' }} source={require('../../assets/images/facebook.png')} />
                <Image  style={{ width: 80, height: 80, resizeMode: 'cover' }} source={require('../../assets/images/apple.png')} />
              </View>
            </View>
            <View style={{flexDirection:'row', alignSelf: "center"}}>
              <Text style={{color:"#ABB0B6", fontSize:14}}>
                Don't have an account?  
              </Text>
              <TouchableOpacity>
              <Text style={{color:"black", fontSize:14}}>
                 CREATE ACCOUNT
              </Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBFAE6',
    alignSelf: 'center',
    alignItems:'center'
  },
  auth: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf:'center'

  },
  title: {
    color: '#ABB0B6',
    alignSelf: 'flex-start',
    paddingBottom: 10,
    paddingTop: 30,
    fontSize: 15,
  },
  forgot: {
    color: '#2D2D2A',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
  },
  label: {
    color: '#2D2D2A',
    alignSelf: 'flex-start',
    fontSize: 12,
  },
  icon: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    elevation: 10,
  },
  card: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 20,
    padding: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignSelf: 'flex-end',
  },
  input: {
    height: 40,
    width: 350,
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#E7E9E2',
    color: 'black',
  },
  btn: {
    height: 40,
    width: 350,
    color: 'green',
  },
  bg: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
});

export default Login;
