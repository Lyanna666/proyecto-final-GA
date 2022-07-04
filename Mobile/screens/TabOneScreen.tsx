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
import { fetchAllPictograms, fetchPictogramsByCategory } from '../api/api-rest';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [items, setItems] = useState([]);
  const [pictograms, setPictograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllPictograms();
  }, []);

  const getFilteredPictograms = ({ search }) => {
    const searchString = new RegExp(search, 'i');
    const filteredPictograms = items.filter(pictogram => {
      // console.log(pictogram.keywords[0].keyword);
      return searchString.test(pictogram.keywords[0].keyword);
    });
    return filteredPictograms;
  };

  function handleKeyUp(e) {
    console.log('***********', e);
    // // const value = event.target.value;
    const filteredPictograms = getFilteredPictograms({
      search: e,
    });
    setPictograms(filteredPictograms);
  }

  function getAllPictograms() {
    setLoading(true);
    // console.log(context.language.LANGUAGE);
    fetchAllPictograms('es')
      .then(data => {
        setItems(data);
        setPictograms(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }

  const renderItem = ({ item }) => {
    const name = item.keywords[0].keyword;
    const image =
      'https://static.arasaac.org/pictograms/' +
      item._id +
      '/' +
      item._id +
      '_300.png';

    return (
      <>
        <View style={styles.containerLista}>
          <View style={styles.contentLista}>
            <Text>{name}</Text>
            <Image style={styles.image} source={{ uri: image }} />
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
          onSubmitEditing={e => handleKeyUp(e.nativeEvent.text)}
        />
        {/* // onChangeText={onChangeNumber}// onPress={onPressLearnMore} */}
        <Button
          title="Buscar"
          accessibilityLabel="Buscar"
          onPress={getAllPictograms}
        />

        <FlatList
          contentContainerStyle={styles.lista}
          numColumns={3}
          horizontal={false}
          data={pictograms}
          renderItem={renderItem}
          keyExtractor={item => item._id}
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
