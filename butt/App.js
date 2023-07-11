import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icone from 'react-native-vector-icons/Ionicons';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:-400 }}>
      <View style={{ flexDirection: 'column', margin: 5, alignItems: 'center' }}>
        
        
      </View>
      <View>
        <Image
          style={{ width: 500, height: 500, marginTop: 500, borderRadius: 6,}}
          source={require('./src/imagem/tenis.png')}
        />
      </View>
      <View>
        <Text style={{fontSize:75, marginTop:-760, color:'black'}}>
         Silva Footwer
        </Text>
        
      </View>
      <View>
        <Text style={{fontSize:25, marginTop:-660}}>
         Melhores Calçados Do Mercado
        </Text>
        
      </View>

    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'darkblue', textAlign: 'center' }}>Nossos Produtos</Text>
      </View>
      
     
      <View style={{ flexDirection: 'column', margin: 35, alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', margin: 35 }}>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Prad')}>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{ width: 290, height: 290, borderRadius: 20, marginTop: 10, marginBottom: 10, resizeMode: 'contain' }}
                  source={require('./src/imagem/nike1.png')}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Tenis Nike airJordan1</Text>
                <Text style={{ textAlign: 'center' }}>Preço: R$550,00</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('Dior')}>
              <View style={{ alignItems: 'center' }}>
                <Image
                  style={{ width: 290, height: 290, borderRadius: 20, marginTop: 10, marginBottom: 10, resizeMode: 'contain' }}
                  source={require('./src/imagem/nike2.png')}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Tenis Nike airJordan2</Text>
                <Text style={{ textAlign: 'center' }}>Preço: R$750,00</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


function SettingsScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -30 }}>
      <Text style={{ fontSize: 55, color: 'black', marginBottom: 10, marginTop:-170 }}>
        SOBRE A LOJA
      </Text>

      <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
    

        <Image
          style={{ width: 350, height: 210, borderRadius: 6, resizeMode: 'cover', marginBottom: 20 }}
          source={require('./src/imagem/SHOES.png')}
        />

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, color: 'red', marginBottom: 60 }}>
            QUEM SOMOS NÓS?
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 19, color: 'black', marginBottom: 20, marginTop: -100 }}>
          A Silva Footwear tem como objetivos principais oferecer calçados de alta qualidade, priorizando o conforto dos clientes.
           Buscamos proporcionar uma experiência de compra excepcional, acompanhando as tendências da moda e estabelecendo parcerias com marcas renomadas. 
           Nosso foco está na satisfação dos clientes, oferecendo produtos de qualidade e um serviço personalizado.
           Queremos ajudar os clientes a encontrar o par perfeito de calçados que atenda às suas necessidades e preferências.
           Nossa meta é ser uma referência no mercado de calçados, garantindo a confiança e fidelidade dos clientes.
           Acreditamos que os calçados certos podem complementar o estilo pessoal de cada indivíduo, tornando-os mais confiantes e confortáveis. 
           Estamos comprometidos em oferecer uma ampla seleção de calçados,
           garantindo uma experiência de compra satisfatória e superando as expectativas dos nossos clientes.







          </Text>
  
        </View>
      </View>
    </View>
  );
}




function SettingsScreen3() {
  return (


    <View>
      
       <Image style={{width:250, height:150, alignSelf:'center', marginTop:200}}
   
  
  source={require('./src/imagem/cc.png')}>
</Image>


<View>
<Text style={{marginTop:-220, fontSize:35, color:'black', textAlign:'center'}}>
  NOSSAS FORMAS DE PAGAMENTO
</Text>
</View>

<View>
<Text style={{marginTop:30, fontSize:20, color:'red', textAlign:'center'}}>
  aceitamos essas formas de pagamento
</Text>
</View>


    </View>

    
    
  );
}



function Prad() {
  const [textoDigitado, setTextoDigitado] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ width: 405, height: 400, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
        source={require('./src/imagem/nike1.png')}
      />
        <Text style={{fontSize:25, color:'black'}}>Tenis nike AirJordan1 </Text>
      <Text style={{ color: 'black', margin:20 }}>SOMENTE ESTA COR DISPONÍVEIS</Text>
      <Text style={{fontSize:28, color:'blue', marginTop:-20}}>PREÇO: R$:550,00</Text>
      <Text style={{fontSize:15, color:'#2F4F4F'}}>tamanho: 35 AO 43</Text>

      
      <View style={{marginTop:90 }}>

<View style={{marginTop:-47, marginRight:5}}> 
<Text style={{ fontSize: 18, color: 'black'}}>CALCULAR FRETE</Text>
</View>
 
</View>



      <TextInput
        style={{
          height: 35,
          width: 150,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          marginTop: -20,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Digite seu cep..."
        onChangeText={(text) => setTextoDigitado(text)}
        value={textoDigitado}
      />
      <Text>cep digitado: {textoDigitado}</Text>
    </View>
  );
}


function Dior() {
  const [textoDigitado, setTextoDigitado] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ width: 605, height: 405, borderRadius: 20, marginTop: 10, marginBottom: 10 }}
        source={require('./src/imagem/nike2.png')}
      />

      
  <Text style={{fontSize:25, color:'black'}}>Tenis nike AirJordan2 </Text>
      <Text style={{ color: 'black', margin:20 }}>SOMENTE ESTA COR DISPONÍVEIS</Text>
      <Text style={{fontSize:28, color:'blue', marginTop:-20}}>PREÇO: R$:750,00</Text>
      <Text style={{fontSize:15, color:'#2F4F4F'}}>tamanho: 35 AO 43</Text>

      
      <View style={{marginTop:90 }}>

        <View style={{marginTop:-47, marginRight:5}}> 
        <Text style={{ fontSize: 18, color: 'black'}}>CALCULAR FRETE</Text>
        </View>
 
</View>

       
      <TextInput
        style={{
          height: 35,
          width: 150,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 10,
          marginTop: -20,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        placeholder="Digite seu cep..."
        onChangeText={(text) => setTextoDigitado(text)}
        value={textoDigitado}
      />
      <Text>cep digitado: {textoDigitado}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
       name="silva footwer"
       component={HomeScreen} 
       options={{
        tabBarIcon: ({color, size}) => (
          <Icone name="home" color={color} size={size}/>
         )
       }}
       />

      <Tab.Screen
       name="produtos"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icone name="md-menu-outline" color={color} size={size}/>
           )
         }}
         />

      <Tab.Screen
       name="sobre"
        component={SettingsScreen2} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Icone name="md-information-sharp" color={color} size={size}/>
           )
         }}
        />

      <Tab.Screen
       name="pagamentos"
        component={SettingsScreen3} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Icone name="card-sharp" color={color} size={size}/>
           )
         }}
        />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Prad" component={Prad}/>
        <Stack.Screen name="Dior" component={Dior}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}