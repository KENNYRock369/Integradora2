import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getDatabase, ref, push } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddItemForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [image, setImage] = useState(null);

  const handleChooseImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Se necesita permiso para acceder a la galería de imágenes.');
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri);
    }
  };

  const handleAddItem = async () => {
    const database = getDatabase();
    const itemsRef = ref(database, 'items');
    const newItemRef = push(itemsRef);
  
    const storage = getStorage();
    const imageRef = storageRef(storage, `images/${newItemRef.key}`);

    try {
      await uploadBytes(imageRef, image);
      
      const imageURL = await getDownloadURL(imageRef);
      
      await push(newItemRef, { 
        title,
        description,
        contact,
        image: imageURL,
      });

      setTitle('');
      setDescription('');
      setContact('');
      setImage(null);

      console.log('Item agregado con éxito a la base de datos Firebase.');
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descripción"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Contacto"
        value={contact}
        onChangeText={setContact}
      />
      <TouchableOpacity style={styles.imagePicker} onPress={handleChooseImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePickerText}>Elegir imagen</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    width: "100%",
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  imagePickerText: {
    color: "#666",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddItemForm;
