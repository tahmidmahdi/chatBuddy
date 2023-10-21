import React, { ReactNode } from 'react';
import { Text as RNText, StyleProp, StyleSheet, TextStyle } from 'react-native';
import { presets } from './test.presets';

const Text: React.FC<{
  children: ReactNode;
  preset?: 'default' | 'bold' | 'h1' | 'h2' | 'h3' | 'h4' | 'small';
  style?: StyleProp<TextStyle>;
}> = ({ children, preset = 'default', style }) => {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return <RNText style={textStyles}>{children}</RNText>;
};

export default Text;
