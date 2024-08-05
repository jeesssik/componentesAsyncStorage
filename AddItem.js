import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddItem = ({ onAddItem }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAddItem(text);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Agregar un nuevo item"
      />
      <Button title="Agregar" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddItem;
