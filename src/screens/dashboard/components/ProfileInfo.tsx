import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import the hook to use navigation
import { Images } from '../../../assets/images';
import { Fonts } from '../../../constants/Fonts';
import { Colors } from '../../../constants/Colors';
import { WELCOME_TEXT } from '../../../constants/Strings';

const ProfileInfo: React.FC = () => {
  const navigation = useNavigation();  // Get navigation object

  // Function to open the drawer
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.firstView}>
        <Text style={styles.textStyle}>{WELCOME_TEXT}</Text>
        <Text style={styles.largeText}>Johnson</Text>
      </View>
      <TouchableOpacity onPress={openDrawer} style={styles.roundborderview}>
        <View style={styles.imgView}>
          <Image source={Images.profile} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    padding: 10,
  },
  firstView: {
    width: '70%',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.textGray,
  },
  largeText: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.black,
    fontFamily: Fonts.bold,
  },
  roundborderview: {
    width: '30%',
    alignSelf: 'center',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgView: {
    alignSelf: 'center',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 50,
  },
});
