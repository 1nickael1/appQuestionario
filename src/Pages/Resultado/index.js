import React from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
// import { Container } from './styles';

export default function Resultado({ navigation }) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#403585" />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Retornar ao menu</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    button: {
        backgroundColor: '#403585',
        width: wp('40%'),
        height: hp('5%'),
        borderRadius: wp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('5%')
    },
    buttonText: {
        color: '#FFF',
        fontSize: wp('4%')
    }
})
