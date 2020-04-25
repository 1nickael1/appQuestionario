import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';

// import { Container } from './styles';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function Teste({ navigation }) {
    const [tosse, setTosse] = useState(false);
    const [febre, setFebre] = useState(false);
    const [alergia, setAlergia] = useState(false);
    const [perdaApetite, setPerdaApetite] = useState(false);
    const [insonia, setInsonia] = useState(false);
    const [tontura, setTontura] = useState(false);
    const [convive, setConvive] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.questView1}>
                    <Text style={styles.titulo}>Você está sentindo quais sintomas?</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: wp('80%') }}>
                        <View>
                            <View style={styles.opcoesView}>
                                <Switch
                                    value={tosse}
                                    onValueChange={e => setTosse(e)}
                                    trackColor={{ false: "#767577", true: "#403585" }}
                                    thumbColor={tosse ? "#665d9d" : "#333"} />
                                <Text style={styles.opcoes}>Tosse</Text>
                            </View>
                            <View style={styles.opcoesView}>
                                <Switch
                                    value={febre}
                                    onValueChange={e => setFebre(e)}
                                    trackColor={{ false: "#767577", true: "#403585" }}
                                    thumbColor={febre ? "#665d9d" : "#333"} />
                                <Text style={styles.opcoes}>Febre</Text>
                            </View>
                            <View style={styles.opcoesView}>
                                <Switch
                                    value={alergia}
                                    onValueChange={e => setAlergia(e)}
                                    trackColor={{ false: "#767577", true: "#403585" }}
                                    thumbColor={alergia ? "#665d9d" : "#333"} />
                                <Text style={styles.opcoes}>Alergia</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.opcoesView}>
                                <Switch
                                    value={perdaApetite}
                                    onValueChange={e => setPerdaApetite(e)}
                                    trackColor={{ false: "#767577", true: "#403585" }}
                                    thumbColor={perdaApetite ? "#665d9d" : "#333"} />
                                <Text style={styles.opcoes}>Perda de apetite</Text>
                            </View>
                            <View style={styles.opcoesView}>
                                <Switch
                                    value={insonia}
                                    onValueChange={e => setInsonia(e)}
                                    trackColor={{ false: "#767577", true: "#403585" }}
                                    thumbColor={insonia ? "#665d9d" : "#333"} />
                                <Text style={styles.opcoes}>Insônia</Text>
                            </View>
                            <View style={styles.opcoesView}>
                                <Switch
                                    value={tontura}
                                    onValueChange={e => setTontura(e)}
                                    trackColor={{ false: "#767577", true: "#403585" }}
                                    thumbColor={tontura ? "#665d9d" : "#333"} />
                                <Text style={styles.opcoes}>Tontura</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.questView2}>
                    <Text style={styles.titulo}>Você convive com alguem que tenha coronavírus?</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: wp('80%') }}>
                        <View style={styles.opcoesView}>
                            <Switch
                                value={convive}
                                onValueChange={e => setConvive(e)}
                                trackColor={{ false: "#767577", true: "#403585" }}
                                thumbColor={tontura ? "#665d9d" : "#333"} />
                            <Text style={styles.opcoes}>Sim</Text>
                        </View>
                        <View style={styles.opcoesView}>
                            <Switch
                                value={!convive}
                                onValueChange={e => setConvive(!e)}
                                trackColor={{ false: "#767577", true: "#403585" }}
                                thumbColor={tontura ? "#665d9d" : "#333"} />
                            <Text style={styles.opcoes}>Não</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.questView3}>
                    <Text style={styles.titulo}>Onde você mora?</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Resultado')}
                    >
                        <Text style={styles.buttonText}>Avançar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    titulo: {
        marginBottom: hp('5%'),
        fontSize: wp('4%'),
        color: '#000',
        textAlign: "center"
    },
    opcoes: {
        fontSize: wp('3%'),
        color: '#000',
    },
    opcoesView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    questView1: {
        marginVertical: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: hp('0.5%'),
        width: wp('90%'),
        height: hp('25%'),
        elevation: 7,
        backgroundColor: '#FFF'
    },
    questView2: {
        marginBottom: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: hp('0.5%'),
        width: wp('90%'),
        height: hp('25%'),
        elevation: 7,
        backgroundColor: '#FFF'
    },
    questView3: {
        marginBottom: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: hp('0.5%'),
        width: wp('90%'),
        height: hp('25%'),
        elevation: 7,
        backgroundColor: '#FFF'
    },
    buttonView: {
        width: wp('90%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp('5%'),
    },
    button: {
        backgroundColor: '#403585',
        width: wp('30%'),
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