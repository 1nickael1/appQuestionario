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
import CheckBox from '@react-native-community/checkbox';

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
        <View style={styles.conteudo}>
          <View style={styles.tituloPageView}>
            <Text style={styles.tituloPage}>Teste</Text>
            <Text style={styles.tituloPage}>Sintomas Coronavírus</Text>
          </View>
          <View style={styles.introducaoView}>
            <Text style={styles.introducaoText}>
              A COVID-19 afeta diferentes pessoas de diferentes maneiras. A
              maioria das pessoas infectadas apresentará sintomas leves a
              moderados da doença e não precisarão ser hospitalizadas
            </Text>
            <Text style={{textAlign: 'center', opacity: 0.5, color: '#403585'}}>
              - Ministério da Saúde
            </Text>
            <View style={styles.line} />
          </View>
          <View style={styles.questView}>
            <Text style={styles.titulo}>
              Você está com algum(uns) desses sintomas?
            </Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: wp('60%'),
              }}>
              <View>
                <View style={styles.opcoesView}>
                  <CheckBox
                    value={tosse}
                    onValueChange={(e) => {
                      e ? adicionarPonto() : removerPonto();
                      setTosse(e);
                    }}
                    tintColors={{true: '#403585'}}
                  />
                  <Text style={styles.opcoes}>Tosse</Text>
                </View>
                <View style={styles.opcoesView}>
                  <CheckBox
                    value={febre}
                    onValueChange={(e) => {
                      e ? adicionarPonto() : removerPonto();
                      setFebre(e);
                    }}
                    tintColors={{true: '#403585'}}
                  />
                  <Text style={styles.opcoes}>Febre</Text>
                </View>
                <View style={styles.opcoesView}>
                  <CheckBox
                    value={alergia}
                    onValueChange={(e) => {
                      e ? adicionarPonto() : removerPonto();
                      setAlergia(e);
                    }}
                    tintColors={{true: '#403585'}}
                  />
                  <Text style={styles.opcoes}>Alergia</Text>
                </View>
              </View>
              <View>
                <View style={styles.opcoesView}>
                  <CheckBox
                    value={perdaApetite}
                    onValueChange={(e) => {
                      e ? adicionarPonto() : removerPonto();
                      setPerdaApetite(e);
                    }}
                    tintColors={{true: '#403585'}}
                  />
                  <Text style={styles.opcoes}>Perda de apetite</Text>
                </View>
                <View style={styles.opcoesView}>
                  <CheckBox
                    value={insonia}
                    onValueChange={(e) => {
                      e ? adicionarPonto() : removerPonto();
                      setInsonia(e);
                    }}
                    tintColors={{true: '#403585'}}
                  />
                  <Text style={styles.opcoes}>Insônia</Text>
                </View>
                <View style={styles.opcoesView}>
                  <CheckBox
                    value={tontura}
                    onValueChange={(e) => {
                      e ? adicionarPonto() : removerPonto();
                      setTontura(e);
                    }}
                    tintColors={{true: '#403585'}}
                  />
                  <Text style={styles.opcoes}>Tontura</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.questView}>
            <View style={styles.line} />
            <Text style={styles.titulo}>
              Você convive com alguém que tenha coronavírus?
            </Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: wp('40%'),
              }}>
              <View style={styles.opcoesView}>
                <CheckBox
                  value={convive}
                  onValueChange={(e) => {
                    e ? adicionarPonto() : removerPonto();
                    setConvive(e);
                  }}
                  tintColors={{true: '#403585'}}
                />
                <Text style={styles.opcoes}>Sim</Text>
              </View>
              <View style={styles.opcoesView}>
                <CheckBox
                  value={!convive}
                  onValueChange={(e) => {
                    e ? removerPonto() : adicionarPonto();
                    setConvive(!e);
                  }}
                  tintColors={{true: '#403585'}}
                />
                <Text style={styles.opcoes}>Não</Text>
              </View>
            </View>
          </View>
          <View style={styles.questView}>
            <View style={styles.line} />
            <Text style={styles.titulo}>Qual estado você reside?</Text>
            <View style={{alignItems: 'center'}}>
              <Picker
                selectedValue={choice}
                style={{height: 50, width: 100}}
                onValueChange={(e) => setChoice(e)}>
                {estados.map((estado) => (
                  <Picker.Item key={estado} label={estado} value={estado} />
                ))}
              </Picker>
            </View>
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
    width: wp('90%'),
    marginVertical: hp('5%'),
    backgroundColor: '#FFF',
    paddingHorizontal: wp('10%'),
    borderRadius: wp('3%'),
  },
  tituloPage: {
    // marginBottom: hp('5%'),
    fontSize: wp('5%'),
    color: '#403585',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tituloPageView: {
    marginVertical: hp('5%'),
  },
  titulo: {
    marginBottom: hp('5%'),
    fontSize: wp('4%'),
    color: '#666',
    textAlign: 'left',
    width: wp('70%'),
  },
  introducaoView: {
    // width: wp('80%'),
    marginVertical: hp('1%'),
  },
  introducaoText: {
    color: '#403585',
    textAlign: 'left',
    fontSize: wp('4%'),
  },
  opcoes: {
    fontSize: wp('3%'),
    color: '#666',
  },
  opcoesView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  questView: {
    marginVertical: hp('1%'),
    // justifyContent: 'center',
    width: wp('70%'),
    // alignItems: 'center',
    height: hp('25%'),
  },
  buttonView: {
    width: wp('90%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('5%'),
  },
  line: {
    borderBottomColor: '#403585',
    borderBottomWidth: wp('0.5%'),
    marginVertical: hp('1%'),
  },
  button: {
    backgroundColor: '#403585',
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  buttonText: {
    color: '#FFF',
    fontSize: wp('4%'),
  },
});
