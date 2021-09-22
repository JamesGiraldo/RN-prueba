import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const Publicaciones = (props) => {
    const { posts } = props;

    return (
        <>
            <TouchableOpacity style={styles.card}>
                <View style={styles.textCurrent}>
                    <Text> { posts.id } - {posts.title} </Text>
                </View>
            </TouchableOpacity>
        </>
    );
}

export default Publicaciones;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        height: '1%',
        alignItems: 'center',
        margin: 10,
    },
    textCurrent: {
        backgroundColor: '#7f6df3',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});
