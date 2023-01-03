import { View, Text, TouchableOpacity, StyleSheet, FlatList ,Image, Modal} from 'react-native';
import {  useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 


export function ExperienciaScreen ({  navigation }) {

  const [abrirInfo, setAbrirInfo] = useState(null)

const [empresas, setEmpresas] = useState([
    { nomeEmpresa: 'Lojas Koerich', 
    imagemEmpresa: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b3ccd4f68448c43c908a74a404411ff9',
     descricaoEmpresa: 'Trabalhei como Jovem Aprendiz no Departamento de Pessoal.', 
     tempoExperiencia:  '03/2018 à 07/2019' }, 
{nomeEmpresa: 'Albertoni Transportes', 
    imagemEmpresa: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b2c21e83cf8860127e5ce482c605daa8',
     descricaoEmpresa: 'Trabalhei como Jovem Aprendiz no Recursos Humanos.',
     tempoExperiencia: '08/2019 à 09/2020' 
      },
      {nomeEmpresa: 'AGEON Electronic Controls', 
    imagemEmpresa: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/be15f940d027915eda58f7fec7ee85cf',
     descricaoEmpresa: 'Trabalhando como Auxiliar de Produção na linha de Inversores.',
     tempoExperiencia: '10/2021 à atual' 
      }

])


  
  return (
    <View style={style.responsividade}>
    <Text style={style.cabecalho}>Empresas</Text>
     <FlatList
        data={empresas}
        renderItem={({ item, index }) => {
          return (
   <View style={style.separador}>
  <Image style={style.imagemEmpresa} source={{ uri: item.imagemEmpresa }}/>
  <Text style={style.nome}>{item.nomeEmpresa}</Text>
   <Text style={style.descricaoEmpresa}>{item.descricaoEmpresa}</Text>
    <Text style={style.ano}>Tempo de Experiência: {item.tempoExperiencia}</Text>
    <TouchableOpacity style={style.botao} onPress={() => setAbrirInfo(index)}>
    <Text style={style.textBotao}>Clique aqui para saber mais!</Text>
    </TouchableOpacity>

  </View>
          )}}
      />
      
      <View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={abrirInfo !== null}
          onRequestClose={() => {
            setAbrirInfo(null);
          }}
        >
          
          {abrirInfo == 0 && <View style={style.modal}>

 <View style={style.alinhamentoItemPrincipal}>
    <AntDesign name="rightcircle" size={20} color="black" />
      <Text style={style.itemTarefaPrincipal} >Líder: Giliarde Martins </Text>
   </View> 

  <View style={style.alinhamentoItemPrincipal}>
      <AntDesign name="rightcircle" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >ATIVIDADES:</Text>
          </View>  

    <View style={style.alinhamentoItemPrincipal}>
     <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal}>Arquivamento;</Text>  
      </View>   

    <View style={style.alinhamentoItemPrincipal}>   
     <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Envio e descarte de cartões e uniformes;</Text> 
         </View>

    <View style={style.alinhamentoItemPrincipal}>
     <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Lançamento de Notas;</Text>
          </View>    

     <View style={style.alinhamentoItemPrincipal}>       
     <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Entrega, recibos e separação de documentos.</Text> 
   </View> 

            <View style={style.centralizadorBotao}>
            <TouchableOpacity style={style.botao}
              onPress={() => {
                setAbrirInfo(null);
              }}
            >
            <Text style={style.textBotao}>Clique aqui para voltar!</Text>
            </TouchableOpacity>
          </View>
          </View>
          
          }

  {abrirInfo == 1 && <View style={style.modal}>

  <View style={style.alinhamentoItemPrincipal}>
    <AntDesign name="rightcircle" size={20} color="black" />
      <Text style={style.itemTarefaPrincipal} >Líder: Vera Lucia</Text>
   </View> 

  <View style={style.alinhamentoItemPrincipal}>
      <AntDesign name="rightcircle" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >ATIVIDADES:</Text>
          </View>  

  <View style={style.alinhamentoItemPrincipal}>
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Arquivamento;</Text>   
  </View>     

     <View style={style.alinhamentoItemPrincipal}>               
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Conferência de Notas;</Text>
       </View>        

     <View style={style.alinhamentoItemPrincipal}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Escaneamento de documentos;</Text> 
        </View>  

<View style={style.alinhamentoItemPrincipal}>
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Entrega, recibos e separação de documentos.</Text> 
         </View>       


            <View style={style.centralizadorBotao}>
            <TouchableOpacity style={style.botao}
              onPress={() => {
                setAbrirInfo(null);
              }}
            >
            <Text style={style.textBotao}>Clique aqui para voltar!</Text>
            </TouchableOpacity>
          </View>
          </View>
          
          }

  {abrirInfo == 2 && <View style={style.modal}>

 <View style={style.alinhamentoItemPrincipal}>
    <AntDesign name="rightcircle" size={20} color="black" />
      <Text style={style.itemTarefaPrincipal} >Líder: Jakson Martins </Text>
   </View> 

   
  <View style={style.alinhamentoItemPrincipal}>
      <AntDesign name="rightcircle" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >ATIVIDADES:</Text>
          </View>  

  <View style={style.alinhamentoItemPrincipal}>
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Montagem de placas:</Text>
          </View>  

<View style={style.alinhamentoItemSecundario}>
 <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >IEX70;</Text>
   </View>  

<View style={style.alinhamentoItemSecundario}>
 <AntDesign name="caretright" size={20} color="black" />
   <Text style={style.itemTarefaSecundaria} >XF2 PRO e MINI;</Text>
   </View> 

<View style={style.alinhamentoItemSecundario}>
 <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >YFs 50, 30, 15, 10 e 05 CV;</Text>
        </View>   

 <View style={style.alinhamentoItemSecundario}>           
 <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >IRXs 05, 10, 20 e 30 CV;</Text>
      </View>     

 <View style={style.alinhamentoItemSecundario}>           
 <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >IHMs Poloclimas Grandes e padrões;</Text>
    </View> 

 <View style={style.alinhamentoItemSecundario}>           
 <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Poloclimas 05, 10, 20 e 30 CV;</Text>
      </View> 

   <View style={style.alinhamentoItemPrincipal}>         
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Testes de funcionamentos básicos;</Text>
         </View>   

    <View style={style.alinhamentoItemPrincipal}>        
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Etiquetação.</Text>
          </View>      

            <View style={style.centralizadorBotao}>
            <TouchableOpacity style={style.botao}
              onPress={() => {
                setAbrirInfo(null);
              }}
            >
            <Text style={style.textBotao}>Clique aqui para voltar!</Text>
            </TouchableOpacity>
          </View>
          </View>
          
          }

        </Modal>
        </View>

          
    </View>

  );
}
const style = StyleSheet.create({
  cabecalho: {
    fontWeight: 'Bold',
    fontSize: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#fffff'
  },
  responsividade: {
    margin: 30,
    marginBottom: 90.,
    alignItems:'center'
  },
  modal: {
    flex: 1,
    textAlign: 'left',
    justifyContent: 'center'
  },
  imagemEmpresa: {
    width: 420,
    height: 250
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 25
  },
  descricaoEmpresa: {
    color: '#808080',
    width: 300
  },
  ano: {
    fontWeight: 'bold'
  },
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#fffff',
    paddingBottom: 30,
    paddingTop: 30
  },
   botao: {
   backgroundColor: '#000000',
    marginTop: 10,
    borderRadius: 10,
    width: 350,
    height: 25
  },
  textBotao: {
   color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
alinhamentoItemPrincipal: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10
  },
 alinhamentoItemSecundario: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 30
  },
  itemTarefaPrincipal: {
    marginLeft: 5,
    fontWeight: 'bold'
  },
  itemTarefaSecundaria: {
     marginLeft: 5,
     fontStyle: 'italic'
  },
  centralizadorBotao: {
    alignItems: 'center'
  }
  
  
  }
  )
