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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.conteudo}>
          <View style={styles.tituloView}>
            <Text style={styles.tituloText}>Coronavírus</Text>
          </View>
          <View style={styles.introducaoView}>
            <Text style={styles.introducaoText}>
              Coronavírus é uma família de vírus que causam infecções
              respiratórias. O novo agente do coronavírus foi descoberto em
              31/12/19 após casos registrados na China. Provoca a doença chamada
              de coronavírus (COVID-19).
            </Text>
          </View>
          <View style={styles.introducaoView}>
            <Text style={styles.introducaoText}>
              Os primeiros coronavírus humanos foram isolados pela primeira vez
              em 1937. No entanto, foi em 1965 que o vírus foi descrito como
              coronavírus, em decorrência do perfil na microscopia, parecendo
              uma coroa.
            </Text>
          </View>
          <View style={styles.introducaoView}>
            <Text style={[styles.introducaoText, {opacity: 0.5}]}>
              - Ministério da Saúde
            </Text>
          </View>
          <View style={styles.cardView}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'space-between', width: wp('30%')}}>
                <Text style={[styles.Text, {fontWeight: 'bold'}]}>Casos:</Text>
                <Text style={[styles.Text, {fontWeight: 'bold'}]}>Mortes:</Text>
              </View>
              <View style={{justifyContent: 'space-between'}}>
                <Text style={[styles.Text, {fontWeight: 'bold'}]}>{casos}</Text>
                <Text style={[styles.Text, {fontWeight: 'bold'}]}>
                  {mortes}
                </Text>
              </View>
            </View>
            <View style={{width: wp('70%'), paddingTop: hp('5%')}}>
              <Text style={styles.Text}>
                Você pode contribuir para os dados respondendo o teste para
                verificar se possui sintomas da Covid-19. É rápido, prático e
                seguro
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Questionario')}>
              <Text style={styles.buttonText}>Realizar teste</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#403585',
  },
  conteudo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    marginBottom: hp('5%'),
  },
  tituloView: {
    marginVertical: hp('5%'),
  },
  tituloText: {
    color: '#FFF',
    fontSize: wp('10%'),
  },
  Text: {
    fontSize: wp('4%'),
    color: '#403585',
  },
  introducaoView: {
    width: wp('80%'),
    marginVertical: hp('1%'),
  },
  introducaoText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: wp('4%'),
  },
  cardView: {
    backgroundColor: '#FFF',
    width: wp('90%'),
    borderRadius: wp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp('5%'),
    marginTop: hp('5%'),
  },
  button: {
    backgroundColor: '#403585',
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('5%'),
  },
  buttonText: {
    color: '#FFF',
    fontSize: wp('4%'),
  },
});
