import React from 'react';
import { Text, View } from 'react-native';
import firebase from '../../utils/firebase';
import styles from './EstilosBar';

const ActionBar = () => {
    return (
        <View style={styles.viewFooter}>
            <View style={styles.viewClose}>
                <Text style={styles.text} onPress={() => firebase.auth().signOut()}>
                    Cerrar Sessión
                </Text>
            </View>
        </View>
    );
}

export default ActionBar;