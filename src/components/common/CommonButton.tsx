import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  buttonColor: string;
  textColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, buttonColor, textColor }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height:40,
    width:'auto',
    borderRadius: 10,
    marginTop: 10,
    justifyContent:'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems:'center',
    textAlign:"center"
  },
});

export default CustomButton;
