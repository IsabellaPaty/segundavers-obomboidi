import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import produtosData from './produtos.json';

const Product = ({ imgSrc, title }) => (
  <View style={styles.productContainer}>
    <Image source={{ uri: imgSrc }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Menu({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setProdutos(produtosData.produtos);
  }, []);

  const filteredProducts = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BOMBOIDI®</Text>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
          <Text style={styles.navItem}>CONTATO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
          <Text style={styles.navItem}>RESERVA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.navItem}>CARDÁPIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
          <Text style={styles.navItem}>LOCALIZAÇÃO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          onChangeText={text => setSearchTerm(text)}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.menuSection}>
          {filteredProducts.map((produto) => (
            <Product key={produto.id} imgSrc={produto.imgSrc} title={produto.nome} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  nav: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem: {
    color: '#fff',
  },
  searchSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  main: {
    flex: 1,
    padding: 20,
  },
  menuSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productContainer: {
    marginBottom: 10,
    width: '48%',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
  },
});

export default Menu;
