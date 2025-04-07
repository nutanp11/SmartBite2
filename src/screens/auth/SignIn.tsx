/* eslint-disable react-native/no-inline-styles */
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextStyle,
    ViewStyle,
    ImageStyle,
    ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import AppButton from '../../components/AppButton';
import TextInputComp from '../../components/TextInputComp';
import HeaderText from '../../components/HeaderText';
import {
    ENTER_EMAIL,
    LOG_IN,
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
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

 
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            return 'Email is required';
        } else if (!emailRegex.test(email)) {
            return 'Please enter a valid email';
        }
        return '';
    };

    const validatePassword = (password: string) => {
        if (!password.trim()) {
            return 'Password is required';
        } else if (password.length < 6) {
            return 'Password must be at least 6 characters';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return 'Password must contain at least one special character';
        }
        return '';
    };

    const handleEmailChange = (text: string) => {
        setEmail(text);
        const error = validateEmail(text);
        setEmailError(error);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        const error = validatePassword(text);
        setPasswordError(error);
    };

    const onPressLogin = () => {
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setEmailError(emailError);
        setPasswordError(passwordError);

        if (!emailError && !passwordError) {
            navigation.navigate('Dashboard');
        } 
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.topview}>
                    <View>
                        <ImageBackground
                            style={{
                                width: width,
                                height: width / 1.2,
                                borderBottomLeftRadius: 10,
                                alignSelf: 'center',
                                top: -10,
                            }}
                            resizeMode="stretch"
                            source={{
                                uri: 'https://th.bing.com/th/id/OIP.OHv_QRoJDtQwoqYTrkKEmwHaE6?w=277&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7',
                            }}
                        >
                            <HeaderText customStyle={{ color: Colors.white, top: 40, fontSize: 38 }} title={'SmartBite'} />
                        </ImageBackground>

                        <Text style={styles.loginText}>India's #1 Food Delivery and Dining App</Text>
                    </View>

                    <View style={{ justifyContent: 'space-around' }}>
                        <HeaderText customStyle={{ color: Colors.black, marginVertical: 10, fontSize: 32 }} title={'SignIn'} />

                        <TextInputComp
                            value={email}
                            placeholderText={ENTER_EMAIL}
                            onChangeText={handleEmailChange}
                            onBlur={() => setEmailError(validateEmail(email))}
                        />
                        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                        <TextInputComp
                            value={password}
                            placeholderText={PASSWORD}
                            onChangeText={handlePasswordChange}
                            onBlur={() => setPasswordError(validatePassword(password))}
                            secureTextEntry
                        />
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
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
        paddingHorizontal:5
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
        fontSize: 24,
        opacity:0.7,
        top: 10,
        fontWeight: '900',
        fontFamily: Fonts.bold,
        alignSelf: 'center',
        textAlign: 'center',
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
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        fontFamily: Fonts.regular,
    } as TextStyle,
});
