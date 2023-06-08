import { View, Text, TouchableOpacity, StyleSheet, FlatList ,Image, Modal} from 'react-native';
import {  useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 


export function QualificacaoScreen ({  navigation }) {

  const [abrirInfo, setAbrirInfo] = useState(null)

const [instituicao, setInstituicao] = useState([
    { nomeInstituicao: 'Prof Alexandre Sérgio Godinho', 
    imagemInstituicao: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1e2177f3c1b9ca38bfd31ba2cbc93320',
     descricaoInstituicao: 'Completei todo o meu Ensino Fundamental nessa instituição.', 
     tempoInstituicao:  '02/2007 à 12/2016' }, 
{nomeInstituicao: 'Prof Aderbal Ramos da Silva', 
    imagemInstituicao: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1f376d39bb704432cb87989b7244b3f7',
     descricaoInstituicao: 'Estudei meu primeiro ano do Ensino Médio nessa instituição.',
     tempoInstituicao: '02/2017 à 12/2017' 
      },
      {nomeInstituicao: 'Prof Wanderley Junior', 
    imagemInstituicao: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e374cc2519c011b65037cc5c92acf67c',
     descricaoInstituicao: 'Estudei o restante dos meus anos do Ensino Médio nessa instituição.',
     tempoInstituicao: '02/2018 à 12/2019' 
      },
       {nomeInstituicao: 'CCEA', 
    imagemInstituicao: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d094b5dffc262d514bb7742af9396eb1',
     descricaoInstituicao: 'Estudei cursos alguns socioemocionais e preparatórios para encaminhamento para o mercado de trabalho nessa instituição.',
     tempoInstituicao: '02/2017 à 03/2018' 
      },
         {nomeInstituicao: 'SENAI', 
    imagemInstituicao: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/111982158c94982cefd5d3254d28e854',
     descricaoInstituicao: 'Estudo o curso de Técnico de Desenvolvimento de Sistemas nessa instituição.',
     tempoInstituicao: '03/2022 à atual' 
      }

])


  
  return (
    <View style={style.responsividade}>
    <Text style={style.cabecalho}>Instituições</Text>
     <FlatList
        data={instituicao}
        renderItem={({ item, index }) => {
          return (
   <View style={style.separador}>
  <Image style={style.imagemInstituicao} source={{ uri: item.imagemInstituicao }}/>
  <Text style={style.nome}>{item.nomeInstituicao}</Text>
   <Text style={style.descricaoInstituicao}>{item.descricaoInstituicao}</Text>
    <Text style={style.ano}>Tempo de Experiência: {item.tempoInstituicao}</Text>
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
            <Text style={style.itemTarefaPrincipal}>MATÉRIAS:</Text>  
      </View>  

    <View style={style.alinhamentoItemSecundario}>
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria}>Português;</Text>  
      </View>   

    <View style={style.alinhamentoItemSecundario}>   
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Matemática;</Text> 
         </View>

    <View style={style.alinhamentoItemSecundario}>
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Geografia;</Text>
          </View>    

     <View style={style.alinhamentoItemSecundario}>       
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Ciências;</Text> 
   </View> 


 <View style={style.alinhamentoItemSecundario}>       
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Inglês;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Educação Fisíca;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Artes;</Text> 
   </View>

       <View style={style.alinhamentoItemSecundario}>       
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >História;</Text> 
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
            <Text style={style.itemTarefaPrincipal}>MATÉRIAS:</Text>  
      </View>  

    <View style={style.alinhamentoItemSecundario}>
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria}>Português;</Text>  
      </View>   

    <View style={style.alinhamentoItemSecundario}>   
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Matemática;</Text> 
         </View>

    <View style={style.alinhamentoItemSecundario}>
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Geografia;</Text>
          </View>    

     <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Fisíca;</Text> 
   </View> 

   <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Quimíca;</Text> 
   </View> 

   
   <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Biologia;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Filosofia;</Text> 
   </View> 


 <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Inglês;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Educação Fisíca;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Artes;</Text> 
   </View>

       <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >História;</Text> 
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
            <Text style={style.itemTarefaPrincipal}>MATÉRIAS:</Text>  
      </View>  

    <View style={style.alinhamentoItemSecundario}>
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria}>Português;</Text>  
      </View>   

    <View style={style.alinhamentoItemSecundario}>   
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Matemática;</Text> 
         </View>

    <View style={style.alinhamentoItemSecundario}>
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Geografia;</Text>
          </View>    

     <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Fisíca;</Text> 
   </View> 

   <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Quimíca;</Text> 
   </View> 

   
   <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Biologia;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Filosofia;</Text> 
   </View> 


 <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Inglês;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Educação Fisíca;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Artes;</Text> 
   </View>

       <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >História;</Text> 
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

            {abrirInfo == 3 && <View style={style.modal}>

  <View style={style.alinhamentoItemPrincipal}>
      <AntDesign name="rightcircle" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal}>MATÉRIAS:</Text>  
      </View>  

    <View style={style.alinhamentoItemSecundario}>
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria}>Pacote Office (Word, Excel e Power Point) básico, Informática básica e Manutenção de computadores básico;  </Text>  
      </View>   

    <View style={style.alinhamentoItemSecundario}>   
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Diversidade cultural, Textos e linguagens; </Text> 
         </View>

    <View style={style.alinhamentoItemSecundario}>
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Direitos e deveres no mundo do trabalho e Direitos humanos;</Text>
          </View>    

     <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Planejamento financeiro, Técnicas de vendas, Marketing pessoal;</Text> 
   </View> 

   <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Organização para trabalho e Comunicação oral e escrita;  </Text> 
   </View> 

   
   <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Ética organizacional e cidadania e Ética e vida em sociedade; </Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Arte e expressão;  </Text> 
   </View> 


 <View style={style.alinhamentoItemSecundario}>       
<AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Cultura empresarial e Relações humanas.</Text> 
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


{abrirInfo == 4 && <View style={style.modal}>

  <View style={style.alinhamentoItemPrincipal}>
      <AntDesign name="rightcircle" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal}>MATÉRIAS:</Text>  
      </View>  

    <View style={style.alinhamentoItemPrincipal}>
 <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal}>HTML: </Text>  
      </View>   

    <View style={style.alinhamentoItemSecundario}>   
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Formatação de textos; </Text> 
         </View>

    <View style={style.alinhamentoItemSecundario}>
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Inputs;
</Text>
          </View>    

     <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Divs;</Text> 
   </View> 

   <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Botões;  </Text> 
   </View> 

   
   <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >IDs e classes; </Text> 
   </View> 

    <View style={style.alinhamentoItemPrincipal}>       
     <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Javascript: </Text> 
   </View> 


 <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Manipulação de objetos;</Text> 
   </View> 

 <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Vetores;</Text> 
   </View> 
   
    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Filas e pilhas;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Funções;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Conhecimento de árvores;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >Componentização;</Text> 
   </View> 

    <View style={style.alinhamentoItemPrincipal}>       
     <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Programação de aplicativos;</Text> 
   </View> 

    <View style={style.alinhamentoItemPrincipal}>       
     <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Lógica de programação;</Text> 
   </View> 

    <View style={style.alinhamentoItemPrincipal}>       
     <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Banco de Dados:</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >PostgreSQL;</Text> 
   </View> 

    <View style={style.alinhamentoItemPrincipal}>       
    <AntDesign name="rightcircleo" size={20} color="black" />
            <Text style={style.itemTarefaPrincipal} >Bibliotecas:</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >React;</Text> 
   </View> 

    <View style={style.alinhamentoItemSecundario}>       
      <AntDesign name="caretright" size={20} color="black" />
            <Text style={style.itemTarefaSecundaria} >React Native;</Text> 
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
    justifyContent: 'center',
  },
  imagemInstituicao: {
    width: 420,
    height: 250
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 25
  },
  descricaoInstituicao: {
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
    height: 25,
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
    marginLeft: 30,
    width: 300
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
