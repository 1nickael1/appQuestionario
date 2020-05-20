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
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>
          Você tem {porcentagem.toFixed(2)}% de ter corona
        </Text>
        <Text style={styles.text}>Sobre o seu estado: </Text>
        <Text style={styles.text}>Casos: {dadosDoEstado.casos}</Text>
        <Text style={styles.text}>Mortes: {dadosDoEstado.mortes}</Text>
        <Text style={styles.text}>
          {results} pessoas já responderam o teste
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Retornar ao menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#403585',
    width: wp('45%'),
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
  text: {
    fontSize: wp('5%'),
  },
});
