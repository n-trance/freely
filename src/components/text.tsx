import React from 'react';
import { StyleSheet, Text as TextComponent, TextProps } from 'react-native';
import colors from '../constants/colors';

export const Text = ({ children, style, ...props }: TextProps) => (
  <TextComponent style={[styles.text, style]} {...props}>
    {children}
  </TextComponent>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SFProDisplay-Regular',
    color: colors.TEXT,
  },
});
