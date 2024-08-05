import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ItemList = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ItemList;
