import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export function MeuApp ({navigation}) {
 const minhaFoto =  'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a1ddeb1d6931db4ea6c82dbf2c5bed93'
 
  
  return (
   <View style={style.responsividade}>
      <Text style={style.textBemVindo}>Bem-vindo(a) ao meu App</Text>
      <Image style={style.perfil}source={{uri: minhaFoto}}/>
      <Text style={style.textEu}>Meu nome é Henrique, nasci no dia 25/08/2002, natural de Florianópolis/SC, geek, amante de filmes e um aspirante à Densenvolvedor Web/Mobile. </Text>

      
       <TouchableOpacity style={style.botao} onPress = {() => navigation.navigate ('Experiências')}>
       <Text style={style.textExperiencia}>MINHAS EXPERIÊNCIAS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.botao} onPress = {() => navigation.navigate ('Qualificações')}>
       <Text style={style.textQualificacao}>MINHAS QUALIFICAÇÕES</Text>
      </TouchableOpacity>

         <TouchableOpacity style={style.botao} onPress = {() => navigation.navigate ('Informações Pessoais')}>
       <Text style={style.textQualificacao}>MINHAS INFORMAÇÕES PESSOAIS</Text>
      </TouchableOpacity>
</View>
  
  )
}

const style = StyleSheet.create({
  botao: {
   backgroundColor: '#000000',
    marginTop: 10,
    borderRadius: 10,
    width: 300,
    height: 25
  },
  textQualificacao: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textExperiencia: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  textEu: {
    textAlign: 'center',
    padding: 40
  },
  textBemVindo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  perfil: {
    width: 130,
    height:130,
    borderRadius: 100,
    marginTop: 40
  },
  responsividade: {
    margin: 30,
    marginBottom: 90.,
    alignItems:'center'
  }
    }
  )
