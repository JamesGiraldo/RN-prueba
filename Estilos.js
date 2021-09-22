import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ABB2B9',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default styles;