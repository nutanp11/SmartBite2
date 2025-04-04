import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Fonts } from '../constants/Fonts';

// Define the type for the props
type HeaderTextProps = {
  title: string; // The `title` prop is a string
  customStyle?: object; // Make `customStyle` optional
};

const HeaderText: React.FC<HeaderTextProps> = ({ title, customStyle }) => {
  return (
    <View>
      <Text
        style={[
          {
            fontSize: 54,
            fontWeight: '900',
            fontFamily: Fonts.bold,
            alignSelf: 'center',
            marginTop: Platform.OS == 'android' ? 20 : 0,
          },
          customStyle, // customStyle will be undefined if not provided, but that will be handled
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({});
