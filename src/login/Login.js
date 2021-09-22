import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import { validateEmail } from "../utils/validations";
import styles from './EstilosLogin';
import { SignIn } from '../services/Login.service';
import LoginForm from "../interfaces/login.interfaces";

const Login = (props) => {

    const { changeForm } = props;
    const [formData, setFormData] = useState(LoginForm());
    const [formError, setFormError] = useState({});

    const login = () => {
        let errors = {};
        if (!formData.email || !formData.password) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
        } else if (!validateEmail(formData.email)) {
            errors.email = true;
        } else {
            return SignIn(formData)
            .catch( r =>  {
                setFormError({
                    email: true,
                    password: true
                })
                alert( r.message )
            })
        }
        setFormError(errors);
    };


    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    return (
        <>
            <TextInput
                style={[styles.input, formError.email && styles.error]}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                onChange={(e) => onChange(e, 'email')}
            />
            <TextInput
                style={[styles.input, formError.email && styles.error]}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) => onChange(e, 'password')}
            />
            <TouchableOpacity onPress={login}>
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <View style={styles.register}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Registrate</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Login;