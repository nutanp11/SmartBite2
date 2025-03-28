//SignIn.tsx
/* eslint-disable react-native/no-inline-styles */
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextStyle,
    ViewStyle,
    ImageStyle,
    Alert,
    ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import AppButton from '../../components/AppButton';

import TextInputComp from '../../components/TextInputComp';
import HeaderText from '../../components/HeaderText';
import {
    CREATE_ACCOUNT,
    ENTER_EMAIL,
    ENTER_INFO,
    LOG_IN,
    NEW_USER,
    PASSWORD,
} from '../../constants/Strings';
import { width } from '../../utils/comman';

type SignInNavigationProp = {
    navigate: (screen: string) => void;
};

type SignInProps = {
    navigation: SignInNavigationProp;
};

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');

    const [password, setPassword] = useState<string>('');

    const validateForm = () => {
        let isValid = true;
        if (email.trim() === '') {
            isValid = false;
        }
        if (password.trim() === '') {
            isValid = false;
        }
        return isValid;
    };

    const onPressLogin = () => {
        const isValid = validateForm();
        if (isValid) {
            Alert.alert('Form Submitted', 'Your email and password are valid.');
            navigation.navigate('ScreenA');
        } else {
            Alert.alert('Validation Failed', 'Please fill in all fields correctly.');
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.topview}>
                    <View >
                        <ImageBackground style={{ width: width, height: width / 1.2,alignItems:"center",justifyContent:"center",
                             borderBottomLeftRadius: 10, alignSelf: 'center' }} resizeMode='cover' source={{ uri: "https://th.bing.com/th/id/OIP.QRlnlD0sHv_Ii_ExO3QwhwHaEo?w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" }} >
                        <HeaderText title={'SmartBite'} />

                        </ImageBackground>

                        <Text style={styles.loginText}>India's #1 Food Delivery and Dining App</Text>

                    </View>

                    <View style={{  justifyContent:"space-around",top:20
 }}>

                        <TextInputComp
                            value={email}
                            placeholderText={ENTER_EMAIL}
                            onChangeText={(text: string) => setEmail(text)}
                        />

                        <TextInputComp
                            value={password}
                            placeholderText={PASSWORD}
                            onChangeText={(text: string) => setPassword(text)}
                        />
                    </View>

                </View>

                <View style={styles.bottomview}>
                    <AppButton onPress={onPressLogin} title={LOG_IN} />

                </View>
            </View>
        </ScrollView>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.appBackground,
    } as ViewStyle,
    topview: {
        flex: 0.8,
        padding: 10,
    } as ViewStyle,
    bottomview: {
        flex: 0.2,
        justifyContent: 'space-between',
    } as ViewStyle,
    loginText: {
        fontSize: 26,
        fontWeight: '900',
        fontFamily: Fonts.bold,
        alignSelf: 'center',
        textAlign: "center",
        width: '80%',

    } as TextStyle,
    subtext: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 35,
        color: Colors.textGray,
        fontFamily: Fonts.regular,
        alignSelf: 'center',
    } as TextStyle,
    imgstyle: {
        width: 256,
        height: 251,
        marginVertical: 10,
        alignSelf: 'center',
    } as ImageStyle,
    graytext: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.textGray,
        fontFamily: Fonts.regular,
        alignSelf: 'center',
    } as TextStyle,
    blacktext: {
        fontSize: 14,
        fontFamily: Fonts.semibold,
    } as TextStyle,
    viewStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
    } as ViewStyle,
});
