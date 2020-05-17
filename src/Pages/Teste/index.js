import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Picker} from '@react-native-community/picker';

// import { Container } from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import APICorona from '../../services/APICorona';

const estados = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

export default function Teste({navigation}) {
  const [tosse, setTosse] = useState(false);
  const [febre, setFebre] = useState(false);
  const [alergia, setAlergia] = useState(false);
  const [perdaApetite, setPerdaApetite] = useState(false);
  const [insonia, setInsonia] = useState(false);
  const [tontura, setTontura] = useState(false);
  const [convive, setConvive] = useState(false);
  const [questoes, setQuestoes] = useState([]);
  const [contagem, setContagem] = useState(0);
  const [choice, setChoice] = useState('AC');

  useEffect(() => {
    APICorona.get('/exam').then((res) => {
      setQuestoes(res.data.Exam_Questions);
      // console.log(res.data.Exam_Questions);
    });
  }, []);

  function adicionarPonto() {
    setContagem(contagem + 1);
  }

  function removerPonto() {
    if (contagem === 0) {
      return;
    }

    setContagem(contagem - 1);
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* {questoes.map((e, idx1) => (
          <View style={styles.questView}>
            <Text style={styles.titulo}>{e.title}</Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: wp('80%'),
              }}>
              {e.options.map((opcao, idx2) => (
                <View style={styles.opcoesView}>
                  {console.log(idx1, idx2)}
                  <Switch
                    value={false}
                    onValueChange={(onV) => (teste.sim = false)}
                    trackColor={{false: '#767577', true: '#403585'}}
                    thumbColor={opcao ? '#665d9d' : '#333'}
                  />
                  <Text style={styles.opcoes}>{opcao}</Text>
                </View>
              ))}
            </View>
          </View>
        ))} */}
        <View style={styles.questView}>
          <Text style={styles.titulo}>Você está sentindo quais sintomas?</Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: wp('80%'),
            }}>
            <View>
              <View style={styles.opcoesView}>
                <Switch
                  value={tosse}
                  onValueChange={(e) => {
                    e ? adicionarPonto() : removerPonto();
                    setTosse(e);
                  }}
                  trackColor={{false: '#767577', true: '#403585'}}
                  thumbColor={tosse ? '#665d9d' : '#333'}
                />
                <Text style={styles.opcoes}>Tosse</Text>
              </View>
              <View style={styles.opcoesView}>
                <Switch
                  value={febre}
                  onValueChange={(e) => {
                    e ? adicionarPonto() : removerPonto();
                    setFebre(e);
                  }}
                  trackColor={{false: '#767577', true: '#403585'}}
                  thumbColor={febre ? '#665d9d' : '#333'}
                />
                <Text style={styles.opcoes}>Febre</Text>
              </View>
              <View style={styles.opcoesView}>
                <Switch
                  value={alergia}
                  onValueChange={(e) => {
                    e ? adicionarPonto() : removerPonto();
                    setAlergia(e);
                  }}
                  trackColor={{false: '#767577', true: '#403585'}}
                  thumbColor={alergia ? '#665d9d' : '#333'}
                />
                <Text style={styles.opcoes}>Alergia</Text>
              </View>
            </View>
            <View>
              <View style={styles.opcoesView}>
                <Switch
                  value={perdaApetite}
                  onValueChange={(e) => {
                    e ? adicionarPonto() : removerPonto();
                    setPerdaApetite(e);
                  }}
                  trackColor={{false: '#767577', true: '#403585'}}
                  thumbColor={perdaApetite ? '#665d9d' : '#333'}
                />
                <Text style={styles.opcoes}>Perda de apetite</Text>
              </View>
              <View style={styles.opcoesView}>
                <Switch
                  value={insonia}
                  onValueChange={(e) => {
                    e ? adicionarPonto() : removerPonto();
                    setInsonia(e);
                  }}
                  trackColor={{false: '#767577', true: '#403585'}}
                  thumbColor={insonia ? '#665d9d' : '#333'}
                />
                <Text style={styles.opcoes}>Insônia</Text>
              </View>
              <View style={styles.opcoesView}>
                <Switch
                  value={tontura}
                  onValueChange={(e) => {
                    e ? adicionarPonto() : removerPonto();
                    setTontura(e);
                  }}
                  trackColor={{false: '#767577', true: '#403585'}}
                  thumbColor={tontura ? '#665d9d' : '#333'}
                />
                <Text style={styles.opcoes}>Tontura</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.questView}>
          <Text style={styles.titulo}>
            Você convive com alguem que tenha coronavírus?
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: wp('80%'),
            }}>
            <View style={styles.opcoesView}>
              <Switch
                value={convive}
                onValueChange={(e) => {
                  e ? adicionarPonto() : removerPonto();
                  setConvive(e);
                }}
                trackColor={{false: '#767577', true: '#403585'}}
                thumbColor={tontura ? '#665d9d' : '#333'}
              />
              <Text style={styles.opcoes}>Sim</Text>
            </View>
            <View style={styles.opcoesView}>
              <Switch
                value={!convive}
                onValueChange={(e) => {
                  e ? removerPonto() : adicionarPonto();
                  setConvive(!e);
                }}
                trackColor={{false: '#767577', true: '#403585'}}
                thumbColor={tontura ? '#665d9d' : '#333'}
              />
              <Text style={styles.opcoes}>Não</Text>
            </View>
          </View>
        </View>
        <View style={styles.questView}>
          <Text style={styles.titulo}>Onde você mora?</Text>
          <Picker
            selectedValue={choice}
            style={{height: 50, width: 100}}
            onValueChange={(e) => setChoice(e)}>
            {estados.map((estado) => (
              <Picker.Item key={estado} label={estado} value={estado} />
            ))}
          </Picker>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Resultado', {
                contagem,
                choice,
              })
            }>
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
    textAlign: 'center',
  },
  opcoes: {
    fontSize: wp('3%'),
    color: '#000',
  },
  opcoesView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questView: {
    marginVertical: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: hp('0.5%'),
    borderRadius: wp('5%'),
    width: wp('90%'),
    height: hp('25%'),
    elevation: 7,
    backgroundColor: '#FFF',
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
    marginVertical: hp('5%'),
  },
  buttonText: {
    color: '#FFF',
    fontSize: wp('4%'),
  },
});
