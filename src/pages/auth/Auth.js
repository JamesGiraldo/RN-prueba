import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, ImageBackground } from 'react-native';
import 'firebase/auth';
import styles from './EstilosAuth';
import Login from '../../login/Login';
import Register from '../../register/Register';

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <ImageBackground style={styles.image} resizeMode="cover" source={require('../../assets/img/vegeta.jpeg')}>
            <View style={styles.view}>
                { isLogin ? (
                    <Login changeForm={changeForm} />
                ) : (
                    <Register changeForm={changeForm} />
                )}
            </View>
        </ImageBackground>
    );
}

export default Auth;