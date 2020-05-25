import React, {useEffect, useState} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import APICorona from '../../services/APICorona';
// import { Container } from './styles';

export default function Resultado({route, navigation}) {
  const [loading, setLoading] = useState(false);
  const [porcentagem, setPorcentagem] = useState(0);
  const [dadosDoEstado, setDadosDoEstado] = useState({});
  const [error, setError] = useState(false);
  const [results, setResults] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    setLoading(true);
    const {contagem, choice} = route.params;
    try {
      APICorona.post('/result', {
        exam_id: '1',
        geo_lat: -5.9876,
        geo_lon: -37.9876,
        user_name: '',
        user_score: contagem,
        user_local: `${choice}`,
      }).then((e) => {
        setResults(e.data.Internal_Stats.Sample),
          console.log(e.data.Internal_Stats.Sample);
      });
      setPorcentagem((contagem / 7) * 100);
      APICorona.get(`/covid/${choice}`).then((e) => setDadosDoEstado(e.data));
      setEstado(choice);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, [route.params]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#403585" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Ocorreu um erro com o servidor</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Retornar ao menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <View style={styles.tituloPageView}>
          <Text style={styles.tituloPage}>Resultado</Text>
        </View>
        <View style={styles.introducaoView}>
          <Text style={styles.introducaoText}>
            De acordo com as suas respostas, o resultado do seu teste é o
            seguinte:
          </Text>
        </View>
        <View style={styles.cardView}>
          <Text style={styles.text}>
            Você tem {porcentagem.toFixed(2)}% de estar com o vírus da Covid-19
            (Coronavírus)
          </Text>
          <View style={styles.line} />
          <Text style={styles.text}>Sobre o estado de {estado}: </Text>
          <Text style={styles.text}>
            Pessoas infectadas: {dadosDoEstado.casos}
          </Text>
          <Text style={styles.text}>
            Número de mortes: {dadosDoEstado.mortes}
          </Text>
          <View style={styles.line} />
          <Text style={styles.text}>
            {results} pessoas já responderam o teste
          </Text>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Retornar ao menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  tituloPage: {
    // marginBottom: hp('5%'),
    fontSize: wp('10%'),
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottomWidth: wp('0.5%'),
    borderBottomColor: '#FFF',
  },
  tituloPageView: {
    marginVertical: hp('5%'),
  },
  introducaoView: {
    width: wp('70%'),
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
    // alignItems: 'center',
    paddingVertical: wp('10%'),
    paddingHorizontal: wp('10%'),
    marginTop: hp('5%'),
  },
  line: {
    borderBottomColor: '#403585',
    borderBottomWidth: wp('0.5%'),
    marginVertical: hp('4%'),
  },
  button: {
    backgroundColor: '#403585',
    width: wp('50%'),
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
  text: {
    fontSize: wp('4%'),
    textAlign: 'left',
    color: '#403585',
  },
});
