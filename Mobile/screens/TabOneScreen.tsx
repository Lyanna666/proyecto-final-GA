import {
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, { useState, useEffect } from 'react';
import { fetchAllCountries } from '../components/Utils/conexiones/services';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [countries, setCountries] = useState([]);
  const [countriesToRender, setCountriesToRender] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllCountries();
    setCountriesToRender(countries);
  }, []);

  const getFilteredCountries = ({ search }) => {
    const searchString = new RegExp(search, 'i');

    const filteredCountries = countries.filter(country => {
      return searchString.test(country.name.common);
    });
    return filteredCountries;
  };

  const handleKeyUp = event => {
    // alert(event);
    setSearch(event);
    const filteredCountries = getFilteredCountries({ search: event });

    setCountriesToRender(filteredCountries);
  };

  function getAllCountries() {
    setLoading(true);
    fetchAllCountries()
      .then(countriesData => {
        // alert(countriesData);
        const dataArray = Object.entries(countriesData);
        if (countriesData.length > 0) {
          setCountries(countriesData);
          setCountriesToRender(countriesData);
          setLoading(false);
          console.log(countriesData);
        } else {
          setCountries([]);
          alert(
            'Ha ocurrido un error al cargar los países, vuelva a intentarlo más tarde.',
          );
          setLoading(false);
        }
      })
      .catch(e => {
        console.log(e);
        setCountries([]);
        alert('Error al cargar países: ' + e);
        setLoading(false);
      });
  }

  const renderItem = ({ item }) => {
    const name = item.name.common;
    const flag = item.flags.png;

    return (
      <>
        <View style={styles.containerLista}>
          <View style={styles.contentLista}>
            <Text>{name}</Text>
            <Image style={styles.image} source={{ uri: flag }} />
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="black" />
          <Text style={styles.title}>Cargando...</Text>
        </View>
      ) : (
        <></>
      )}
      <View style={styles.container}>
        <Text style={styles.title}>Esta es la pantalla de Home</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <TextInput
          style={styles.input}
          placeholder="Buscar pictogramas"
          keyboardType="default"
          onChangeText={handleKeyUp}
        />
        {/* // onChangeText={onChangeNumber}// onPress={onPressLearnMore} */}
        <Button
          title="Buscar"
          accessibilityLabel="Buscar"
          onPress={getAllCountries}
        />

        <FlatList
          contentContainerStyle={styles.lista}
          numColumns={3}
          horizontal={false}
          data={countriesToRender}
          renderItem={renderItem}
          keyExtractor={item => item.name.common}
        />

        {/* {countries.map((country, index) => {
          <Text>
            {index}
            {country.name.common}
          </Text>;
        })} */}
      </View>
    </>
  );
}

const numColumns = 3;
const size = Dimensions.get('window').width / numColumns;

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista: {
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerLista: {
    textAlign: 'center',
    width: size,
    height: size,
  },
  contentLista: {
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderRadius: 5,
    alignItems: 'center',
    margin: 3,
    borderWidth: 1,
    padding: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '80%',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    resizeMode: 'contain',
    width: '80%',
    height: undefined,
    aspectRatio: 1,
  },
});
