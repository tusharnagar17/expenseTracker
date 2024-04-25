
import React from 'react';
import { View as DefaultView, Text as DefaultText, useColorScheme } from 'react-native';

  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  

export function Text(props) {
  const { style, ...otherProps } = props;

  const CustomText = isDarkTheme ? {color: "white"}: {color: "black"};

  return <DefaultText style={[{ CustomText }, style]} {...otherProps} />;
}

export function View(props) {
  const { style, ...otherProps } = props;
  
  const CustomView = isDarkTheme ? {backgroundColor: "black"}: {color: "white"};

  return <DefaultView style={[{ CustomView }, style]} {...otherProps} />;
}
