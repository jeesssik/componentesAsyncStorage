import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddItem from './AddItem';
import ItemList from './ItemList';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar items desde AsyncStorage al iniciar la app
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('items');
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error('Failed to load items from AsyncStorage:', error);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  // Guardar items en AsyncStorage
  const saveItems = async (newItems) => {
    try {
      await AsyncStorage.setItem('items', JSON.stringify(newItems));
    } catch (error) {
      console.error('Failed to save items to AsyncStorage:', error);
    }
  };

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    saveItems(newItems);
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <AddItem onAddItem={addItem} />
      <ItemList items={items} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
