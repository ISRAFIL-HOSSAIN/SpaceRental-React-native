import React, { Component, ReactNode } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CustomInputFieldProps {
  width?: number;
  height?: number;
  onChange?: (text: string) => void;
  placeholder?: string;
  borderStyle?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;

  prefixIcon?: string;
  prefixIconSize?: number;
  prefixIconColor?: string;
  prefixIconPaddingTop?: number;
  prefixIconPaddingBottom?: number;
  prefixIconPaddingLeft?: number;
  prefixIconPaddingRight?: number;

  suffixIcon?: string;
  suffixIconSize?: number;
  suffixIconColor?: string;
  suffixIconPaddingTop?: number;
  suffixIconPaddingBottom?: number;
  suffixIconPaddingLeft?: number;
  suffixIconPaddingRight?: number;
  onPresssuffixIcon?: () => void;
}

interface ContainerProps {
  borderWidth?: number;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-width: ${(props) => props.borderWidth}px;
  border-style: ${(props) => props.borderStyle};
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius}px;

  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-right: ${(props) => props.marginRight}px;

  padding-top: ${(props) => props.paddingTop}px;
  padding-bottom: ${(props) => props.paddingBottom}px;
  padding-left: ${(props) => props.paddingLeft}px;
  padding-right: ${(props) => props.paddingRight}px;
`;

const PrefixIconContainer = styled.View<{
  prefixIconPaddingTop?: number;
  prefixIconPaddingBottom?: number;
  prefixIconPaddingLeft?: number;
  prefixIconPaddingRight?: number;
}>`
  flex: 1;
  align-items: center;
  padding-top: ${(props) => props.prefixIconPaddingTop}px;
  padding-bottom: ${(props) => props.prefixIconPaddingBottom}px;
  padding-left: ${(props) => props.prefixIconPaddingLeft}px;
  padding-right: ${(props) => props.prefixIconPaddingRight}px;
`;

const InputFieldContainer = styled.View`
  flex: 8;
`;

const InputField = styled.TextInput``;

const SuffixIconContainer = styled.View<{
  suffixIconPaddingTop?: number;
  suffixIconPaddingBottom?: number;
  suffixIconPaddingLeft?: number;
  suffixIconPaddingRight?: number;
}>`
  flex: 1;
  padding-top: ${(props) => props.suffixIconPaddingTop}px;
  padding-bottom: ${(props) => props.suffixIconPaddingBottom}px;
  padding-left: ${(props) => props.suffixIconPaddingLeft}px;
  padding-right: ${(props) => props.suffixIconPaddingRight}px;
`;

class CustomInputField extends Component<CustomInputFieldProps> {
  render(): ReactNode {
    const {
      width,
      height,
      onChange,
      placeholder,
      borderStyle,
      borderWidth,
      borderColor,
      borderRadius,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,

      prefixIcon,
      prefixIconSize,
      prefixIconColor,
      prefixIconPaddingTop,
      prefixIconPaddingBottom,
      prefixIconPaddingLeft,
      prefixIconPaddingRight,

      suffixIcon,
      suffixIconSize,
      suffixIconColor,
      suffixIconPaddingTop,
      suffixIconPaddingBottom,
      suffixIconPaddingLeft,
      suffixIconPaddingRight,
      onPresssuffixIcon,
    } = this.props;

    return (
      <Container
        height={height}
        width={width}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        borderColor={borderColor}
        borderRadius={borderRadius}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
      >
        {prefixIcon && (
          <PrefixIconContainer
            prefixIconPaddingTop={prefixIconPaddingTop}
            prefixIconPaddingBottom={prefixIconPaddingBottom}
            prefixIconPaddingLeft={prefixIconPaddingLeft}
            prefixIconPaddingRight={prefixIconPaddingRight}
          >
            <Icon name={prefixIcon} size={prefixIconSize} color={prefixIconColor} />
          </PrefixIconContainer>
        )}
        <InputFieldContainer>
          <InputField placeholder={placeholder} onChange={onChange} />
        </InputFieldContainer>
        {suffixIcon && (
          <SuffixIconContainer
            suffixIconPaddingTop={suffixIconPaddingTop}
            suffixIconPaddingBottom={suffixIconPaddingBottom}
            suffixIconPaddingLeft={suffixIconPaddingLeft}
            suffixIconPaddingRight={suffixIconPaddingRight}
          >
            <Icon name={suffixIcon} size={suffixIconSize} color={suffixIconColor} onPress={onPresssuffixIcon} />
          </SuffixIconContainer>
        )}
      </Container>
    );
  }
}

export default CustomInputField;
