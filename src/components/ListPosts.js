import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert, StyleSheet } from 'react-native';

import { GetPosts } from '../services/Posts.service';
import Publicaciones from './Posts';

const ListPosts = () => {

    const [Posts, setPots] = useState([]);

    console.log(Posts);

    useEffect(() => {
        setPots([]);
        GetPosts().then(r => {
            const itemsArray = [];
            r.data.forEach((doc) => {
                itemsArray.push(doc)
            })
            // console.log( "respuest----------------> ", r.data )
            setPots(itemsArray)
        })
    }, []);

    return (
        <>
            <View>
                <Text style={ styles.titulo }> Lista de Publicaciones </Text>
            </View>
            <View style={ styles.container }>
                <ScrollView style={ styles.scrollView }>
                    { Posts.map( ( item, index) => (
                        <Publicaciones  key={ index } posts={ item } />
                    ))}
                </ScrollView>
            </View>
        </>
    )

}

export default ListPosts;

const styles = StyleSheet.create({
    titulo: {
        color: 'black',
        fontSize: 17,
        marginBottom: 15,
    },
    container: {
        alignItems: 'center',
        height: '100%',
    },
    scrollView: {
        marginBottom: '25%',
        width: '100%',
    },
});
