import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MeuApp } from './assets/Screens/Home';
import { ExperienciaScreen } from './assets/Screens/Experiencias';
import { InfoPessoaisScreen } from './assets/Screens/InfoPessoais';
import { QualificacaoScreen } from './assets/Screens/Qualificacoes';

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen  name="Meu App" component={MeuApp} options={{
          headerStyle: {
          backgroundColor: '#000000'
          },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: 'bold' 
        }}/>
        <Stack.Screen name="Experiências" component={ExperienciaScreen} 
        options={{
          headerStyle: {
          backgroundColor: '#000000'
          },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: 'bold' 
        }}/>
           <Stack.Screen name="Qualificações" component={QualificacaoScreen} 
        options={{
          headerStyle: {
          backgroundColor: '#000000'
          },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: 'bold' 
        }}/>

             <Stack.Screen name="Informações Pessoais" component={InfoPessoaisScreen} 
        options={{
          headerStyle: {
          backgroundColor: '#000000'
          },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: 'bold' 
        }}/>
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

