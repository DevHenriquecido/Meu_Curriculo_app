import { View, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export function InfoPessoaisScreen ({  navigation }) {


  return (
  <View>

  <View style={style.alinhamento}>
<AntDesign name="enviroment" size={20} color="black" />
<Text style={style.infoText}>Rua: Zúri Roberto da Silva; </Text>
  </View>

  <View style={style.alinhamento}>
<AntDesign name="enviroment" size={20} color="black" />
<Text style={style.infoText}>Lot. Jardins 1 – Qd 11 Lt 19, casa 01; </Text>
  </View>

  <View style={style.alinhamento}>
<AntDesign name="enviroment" size={20} color="black" />
<Text style={style.infoText}>Bairro: Bela Vista, Palhoça/SC; </Text>
  </View>

  <View style={style.alinhamento}>
<AntDesign name="enviromento" size={20} color="black" />
<Text style={style.infoText}>Nacionalidade: Brasileiro; </Text>
  </View>

  <View style={style.alinhamento}>
<AntDesign name="enviromento" size={20} color="black" />
<Text style={style.infoText}>Naturalidade: Florianópolis; </Text>
  </View>

  <View style={style.alinhamento}>
<AntDesign name="team" size={20} color="black" />
<Text style={style.infoText}>Estado civil: Solteiro; </Text>
  </View>

  <View style={style.alinhamento}>
<AntDesign name="mail" size={20} color="black" />
<Text style={style.infoText}>E-mail: henriquem.vdossantos@gmail.com; </Text>
  </View>

  <View style={style.alinhamento}>
<AntDesign name="phone" size={20} color="black" />
<Text style={style.infoText}>Cel.: (48)98421-3676 / Pai: (48) 99918-0120 / Mãe: (48) 98838-6150. </Text>
  </View>

  <View style={style.alinhamento}>
<AntDesign name="sharealt" size={20} color="black" />
<Text style={style.infoText}>GitHub: @DevHenriquecido </Text>
  </View>

  </View>

  )
}
const style = StyleSheet.create({
alinhamento: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10
},
infoText: {
     marginLeft: 10,
     fontStyle: 'italic',
     fontWeight: 'bold'
}
  
  
  }
  )