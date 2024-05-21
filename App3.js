import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Product = ({ imgSrc, title }) => (
  <View style={styles.productContainer}>
    <Image source={{ uri: imgSrc }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

import produtosData from './produtos.json'; // Importando o arquivo produtos.json

function Menu({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProdutos, setFilteredProdutos] = useState([]);

  useEffect(() => {
    setProdutos(produtosData.produtos); // Usando os dados importados do arquivo produtos.json
    setFilteredProdutos(produtosData.produtos); // Inicialmente, exibimos todos os produtos
  }, []);

  useEffect(() => {
    const filtered = produtos.filter(
      (produto) =>
        produto.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProdutos(filtered);
  }, [searchQuery, produtos]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container8}>
      <View style={styles.header8}>
        <Text style={styles.headerText8}>BOMBOIDIÂ®</Text>
      </View>
      <View style={styles.nav8}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem8}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
          <Text style={styles.navItem8}>CONTATO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
          <Text style={styles.navItem8}>RESERVA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.navItem8}>CARDÁPIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
          <Text style={styles.navItem8}>LOCALIZAÇÃO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection8}>
        <TextInput
          style={styles.input8}
          placeholder="Pesquisar produto"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.main8}>
        <View style={styles.menuSection8}>
          {filteredProdutos.map((produto) => (
            <Product key={produto.id} imgSrc={produto.imgSrc} title={produto.nome} />
          ))}
        </View>
      </View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
    source={{ uri: 'https://conteudo.solutudo.com.br/wp-content/uploads/2022/06/churrascarias-em-lins.jpg' }} // Substitua pela URL da imagem de fundo desejada
    style={styles.backgroundImage13}
  >
    <View style={styles.overlay13}>
      <View style={styles.nav13}>
        <Text style={styles.logo13}>CHURRASCARIA BOMBOIDI</Text>
      </View>
      <View style={styles.content13}>
        <View style={styles.menu13}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navItem13}>INÍCIO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
            <Text style={styles.navItem13}>CONTATO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
            <Text style={styles.navItem13}>RESERVA</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.navItem13}>CARDÁPIO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
            <Text style={styles.navItem13}>LOCALIZAÇÃO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.about13}>
          <Text style={styles.aboutTitle13}>TRADIÇÃO EM CHURRASCO</Text>
          <Text style={styles.aboutText13}>Experiência autêntica e sabor inigualável. Venha nos visitar e desfrute de um verdadeiro churrasco.</Text>
        </View>
      </View>
      <Image
        source={{ uri: 'https://example.com/foto.jpg' }} // Substitua pela URL da imagem desejada
        style={styles.foto13}
      />
    </View>
  </ImageBackground>
  );
}

function Reservas({ navigation }) {
  return (
    <View style={styles.container9}>
      <View style={styles.header1}>
        <Text style={styles.headerText1}>BOMBOIDIÂ®</Text>
      </View>
      <View style={styles.nav1}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem1}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
          <Text style={styles.navItem1}>CONTATO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
          <Text style={styles.navItem1}>RESERVA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.navItem1}>CARDÁPIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
          <Text style={styles.navItem1}>LOCALIZAÇÃO</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{ uri: 'https://conteudo.solutudo.com.br/wp-content/uploads/2022/06/churrascarias-em-lins.jpg' }}
        style={styles.backgroundImage1}
      >
        <View style={styles.container1}>
          <View style={styles.content1}>
            <View style={styles.form1}>
              <Text style={styles.label1}>NOME:</Text>
              <TextInput style={styles.input1} placeholder="Nome" />

              <Text style={styles.label1}>DATA:</Text>
              <TextInput style={styles.input1} placeholder="Data" />

              <Text style={styles.label1}>RESERVAS:</Text>
              <TextInput style={styles.input1} placeholder="Reservas" />

              <Text style={styles.label1}>HORÁRIO:</Text>
              <TextInput style={styles.input1} placeholder="Horário" />

              <TouchableOpacity style={styles.button1} onPress={() => { }}>
                <Text style={styles.buttonText1}>Faça sua reserva já</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.footer1}>
        <Text style={styles.footerText1}>© 2024 BOMBOIDI. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
}

function Contato({ navigation }) {
  return (
    <View style={styles.container3}>
      <View style={styles.header3}>
        <Text style={styles.headerText1}>BOMBOIDI</Text>
      </View>
      <View style={styles.contact3}>
        <View style={styles.form3}>
          <Text>Email:</Text>
          <TextInput style={styles.input3} keyboardType="email-address" />
          <Text>Nome:</Text>
          <TextInput style={styles.input3} />
          <Text>Telefone:</Text>
          <TextInput style={styles.input3} keyboardType="phone-pad" />
          <Text>Mensagem:</Text>
          <TextInput style={[styles.input3, styles.textArea3]} multiline={true} />
          <TouchableOpacity style={styles.button3} onPress={() => alert('Enviar mensagem')}>
            <Text style={styles.buttonText3}>Enviar mensagem</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Localizacao({ navigation }) {
  return (
    <View style={styles.container4}>
      <ImageBackground
        source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/t2/22208615-ilustracao-do-gradiente-fundo-dentro-vermelho-e-preto-cores-com-hexagonos-vetor.jp' }}
        style={styles.backgroundImage4}
      >
        <View style={styles.header4}>
          <Text style={styles.headerText4}>BOMBOIDIÂ®</Text>
        </View>
        <View style={styles.nav1}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navItem1}>INÍCIO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
            <Text style={styles.navItem1}>CONTATO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
            <Text style={styles.navItem1}>RESERVA</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.navItem1}>CARDÁPIO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
            <Text style={styles.navItem1}>LOCALIZAÇÃO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mapSection}>
          <Image
            source={{ uri: 'https://www.tvperu.gob.pe/sites/default/files/maps.png' }}
            style={styles.mapImage}
          />
        </View>
        <View style={styles.footer4}>
          <Text style={styles.footerText4}>© 2024 BOMBOIDI. Todos os direitos reservados.</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Reservas" component={Reservas} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Localizacao" component={Localizacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    nav1: {
        backgroundColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
      },
      navItem1: {
        color: '#fff',
      },
      container9: {
        flex: 1,
      },
      container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 1000,
      },
      header1: {
        backgroundColor: '#ffffff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        alignItems: 'center',
      },
      headerText1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333',
        textTransform: 'uppercase',
      },
      content1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },
      form1: {
        width: '80%',
        marginBottom: 20,
        backgroundColor: 'rgba(39, 34, 34, 0.749)',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
      },
      label1: {
        marginBottom: 5,
        color: 'white',
        marginBottom: 5,
        fontSize: 16,
      },
      input1: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        width: '100%',
        backgroundColor: '#ffffff',
      },
      button1: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText1: {
        color: 'white',
        fontWeight: 'bold',
      },
      footer1: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'black',
      },
      footerText1: {
        fontSize: 12,
        color: 'white',
      },
      backgroundImage1: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      },
  
  // Contato styles
 
          

  container3: {
            
    flex: 1, // Estende o conteúdo até o final da página
 
  },
  header3: {
  backgroundColor: 'red',
  padding: 20,
  alignItems: 'center',
},
headerText3: {
  color: '#ffffff',
  fontSize: 24,
  fontWeight: 'bold',
},
  image3: {
    width: 200,
    height: 200,
  },
  contact3: {
    alignItems: 'center',
  },
  form3: {
    borderWidth: 5,
    borderColor: 'black',
    padding: 15,
    backgroundColor: 'white',
    marginTop: 80,
  },
  contato3: {
    fontSize: 30,
    color: 'black',
  },
  input3: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 5,
    width: 250,
  },
  textArea3: {
    height: 100,
  },
  button3: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText3: {
    color: 'white',
    textAlign: 'center',
  },

  // Localizacao styles
  container4: {
    flex: 1,
  },
  header4: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    paddingVertical: 20, // Adicionando espaçamento vertical ao cabeçalho
    paddingHorizontal: 50,
  },
  headerText4: {
    color: '#000',
    fontSize: 40,
    fontWeight: "bold"
  },
  nav4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#333',
  },
  navItem4: {
    color: '#fff',
  },
  map4: {
    flex: 1,
    resizeMode: 'contain',
    marginVertical: 20, // Adicionando espaçamento vertical à imagem
    
  },
  backgroundImage4: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  footer4: {
    paddingVertical: 20, // Adicionando espaçamento vertical ao rodapé
    alignItems: 'center',
    backgroundColor: 'black',
  },
  footerText4: {
    fontSize: 12,
    color: 'white',
  },

  // Menu styles
  container8: {
    flex: 1,
  },
  header8: {
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  headerText8: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  nav8: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    
  },
  navItem8: {
    color: '#fff',
  },
  main8: {
    flex: 1,
    padding: 20,
  },
  searchSection8: {
    marginBottom: 20,
  },
  heading8: {
    fontSize: 20,
    marginBottom: 10,
  },
  inputContainer8: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input8: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  button8: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText8: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Home styles
 
  backgroundImage13: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay13: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay escura para contraste
  },
  nav13: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  logo13: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B22222', // Cor vermelha para destaque
  },
  content13: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu13: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  navItem13: {
    fontSize: 18,
    color: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  about1313: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  aboutTitle13: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  aboutText13: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  foto13: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },


  navItem1: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 20,
  },
  

    
  menuSection10: {
    marginBottom: 20,
  },
  productContainer10: {
    marginBottom: 10,
  },

  image10: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title10: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    margin: 0,
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#A18E5C',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  paragraph: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  content: {
    // Adicione estilos para o conteúdo, se necessário
  },
  footer: {
    backgroundColor: '#A18E5C',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
  },

});



export default App;
