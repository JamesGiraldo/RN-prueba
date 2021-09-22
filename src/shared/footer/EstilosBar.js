import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        top: 0,
        left: '50%',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginBottom: 20,
    },
    viewClose: {
        backgroundColor: '#820000',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    viewAdd: {
        backgroundColor: '#1ea1f2',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
});

export default styles;