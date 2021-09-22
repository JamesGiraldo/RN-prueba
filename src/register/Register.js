import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    TextInput,
} from 'react-native';

import firebase from '../utils/firebase';
import styles from './EstilosRegister';
import { validateEmail } from '../utils/validations';
import RegisterForm from '../interfaces/register.interfaces';
import { nuevoUsuario } from '../services/Register.service';

const Register = (props) => {

    const { changeForm } = props;
    const [formData, setFormData] = useState(RegisterForm());
    const [FormError, setFormError] = useState({});

    const singUp = () => {
        let erros = {};
        if (!formData.email || !formData.password || !formData.password2) {
            if (!formData.email) erros.email = true;
            if (!formData.password) erros.password = true;
            if (!formData.password2) erros.password2 = true;
        } else if (!validateEmail(formData.email)) {
            erros.email = true;
        } else if (formData.password !== formData.password2) {
            erros.password = true;
            erros.password2 = true;
        } else if (formData.password.length < 6) {
            erros.password = true;
            erros.password2 = true;
        } else {
            return nuevoUsuario( formData )
            .catch( r =>  alert( "error: ", r.message ) )
        }
        setFormError(erros);
    }

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    return (
        <>
            <TextInput
                style={[styles.input, FormError.email && styles.error]}
                placeholder="Correo electronico"
                placeholderTextColor="#969696"
                onChange={e => onChange( e, 'email' )}
            />
            <TextInput
                style={[styles.input, FormError.password && styles.error]}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={e => onChange( e, 'password' )}
            />
            <TextInput
                style={[styles.input, FormError.password2 && styles.error]}
                placeholder="Confirmacion de contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={e => onChange( e, 'password2' )}
            />

            <TouchableOpacity onPress={singUp} >
                <Text style={styles.btnText}>Registrarme</Text>
            </TouchableOpacity>

            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Register;