import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import APICorona from '../../services/APICorona';

export default function Home({navigation}) {
  const [casos, setCasos] = useState('');
  const [mortes, setMortes] = useState('');

  useEffect(() => {
    APICorona.get('/covid').then((res) => {
      setCasos(res.data.totalCasos);
      setMortes(res.data.totalMortes);
      // console.log(df.data.casosEstado.pop().mortes)
    });
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.conteudo}>
          <View style={styles.titulo}>
            <Text style={{fontSize: wp('10%')}}>Coronavírus</Text>
          </View>
          <View>
            <Text>Número total de casos: {casos}</Text>
            <Text>Número total de mortes: {mortes}</Text>
          </View>
          <View style={styles.conteudo}>
            <Text style={{paddingTop: hp('5%'), fontSize: wp('7%')}}>
              Contribua realizando o teste
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Questionario')}>
              <Text style={styles.buttonText}>Realizar teste</Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <Text style={{fontSize: wp('8%')}}>Outros testes</Text>
            <View style={styles.testesView}>
              <Text>Questionário de ensino</Text>
              <Text>300 respostas</Text>
              <TouchableOpacity style={styles.testeButton}>
                <Text style={{color: '#FFF', fontSize: wp('3%')}}>
                  Participar
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.testesView}>
              <Text>Questionário governaça</Text>
              <Text>450 respostas</Text>
              <TouchableOpacity style={styles.testeButton}>
                <Text style={{color: '#FFF', fontSize: wp('3%')}}>
                  Participar
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
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
  conteudo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    marginTop: hp('5%'),
  },
  button: {
    backgroundColor: '#403585',
    width: wp('30%'),
    height: hp('5%'),
    borderRadius: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('5%'),
  },
  buttonText: {
    color: '#FFF',
    fontSize: wp('4%'),
  },
  testesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('90%'),
    height: hp('6%'),
    borderWidth: wp('0.5%'),
    marginVertical: hp('1%'),
  },
  testeButton: {
    backgroundColor: '#403585',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),
    height: hp('4%'),
    padding: wp('1%'),
  },
});
