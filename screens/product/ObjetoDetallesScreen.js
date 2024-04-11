import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ObjetoDetallesScreen = ({ navigation, route }) => {
  const item = route?.params?.item || {}; // Corrección para evitar el error
  const [isHearted, setIsHearted] = useState(false);
  const [calificacion, setCalificacion] = useState(0); // Estado para la calificación
  const [comment, setComment] = useState(""); // Estado para el comentario

  // Función para manejar la calificación de estrellas
  const handleCalificacionEstrellas = (valor) => {
    setCalificacion(valor);
  };

  // Calcular el porcentaje basado en la calificación
  const porcentaje = calificacion * 20;

  // Función para manejar el trueque
  const handleTrueque = () => {
    // Aquí puedes implementar la lógica para realizar el trueque
    console.log("Trueque realizado");
  };

  const handleCarrito = () => {
    console.log("Agregad correctamente");
  };

  // Función para manejar el cambio en el campo de texto del comentario
  const handleCommentChange = (text) => {
    setComment(text);
  };

  // Función para manejar el envío del comentario
  const handleCommentSubmit = () => {
    // Aquí puedes implementar la lógica para enviar el comentario
    console.log("Comentario enviado:", comment);
    // También puedes limpiar el campo de texto después de enviar el comentario
    setComment("");
  };

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "#f2f2f2", flexGrow: 1 }}>
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 30 }}>
        {/* Icono de flecha para volver atrás */}
       {/* <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()} >
          <FontAwesome name={"arrow-circle-left"} size={28} color="black" />
  </Pressable>*/}
      </SafeAreaView>

      <View style={{
        backgroundColor: "#fff",
        marginTop: 20,
        borderTopLeftRadius: 56,
        borderTopRightRadius: 56,
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 100 // Ajuste para dejar espacio para la imagen
      }}>
        <View style={{ position: 'relative' }}>
          <Image source={item ? item.image : null} style={{ width: 300, height: 300, resizeMode: "contain", borderRadius: 10 }} />
          <Pressable style={{ position: 'absolute', top: 0, right: 10 }} onPress={() => setIsHearted(!isHearted)}>
            <FontAwesome name={isHearted ? "heart" : "heart-o"} size={28} color={isHearted ? "red" : "black"} />
          </Pressable>
        </View>
        <Text style={{ marginTop: 16, fontSize: 28, fontWeight: "bold" }}>{item ? item.name : null}</Text>
        <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 16 }}>{item ? item.description : null}</Text>
        {/* Mostrar calificación de estrellas */}
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          {[1, 2, 3, 4, 5].map((valor) => (
            <Pressable key={valor} onPress={() => handleCalificacionEstrellas(valor)}>
              <FontAwesome name={valor <= calificacion ? "star" : "star-o"} size={28} color="gold" />
            </Pressable>
          ))}
        </View>
        {/* Mostrar porcentaje */}
        <Text style={{ fontSize: 20 }}>Calificación: {porcentaje}%</Text>
        {/* Botón para realizar un trueque */}
        <TouchableOpacity onPress={handleTrueque} style={styles.botonTrueque}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Realizar Trueque</Text>
        </TouchableOpacity>

       <TouchableOpacity onPress={handleCarrito} style={styles.botonCarrito}>
      <Text style={{color: "#fff", fontSize: 18}}>Agrega Carrito</Text>
       </TouchableOpacity>
      

        {/* Campo de texto para el comentario */}
        <View style={styles.commentContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Agrega un comentario..."
            value={comment}
            onChangeText={handleCommentChange}
            multiline={true}
            numberOfLines={4}
          />
          <Pressable style={styles.sendIcon} onPress={handleCommentSubmit}>
            <FontAwesome name="send" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  botonTrueque: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 19,
    marginTop: 20,
    marginBottom: 20, // Agregado para dar espacio entre el botón y el campo de texto del comentario
    marginLeft: -180,
  },

  botonCarrito: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 19,
    marginTop: -68, // Ajusta el margen superior para separar el botón
    marginBottom: 20,
    alignSelf: 'center', // Alinea el contenido del botón hacia la derecha
    marginRight: -200, // Agrega margen derecho para mover el botón hacia la derecha
  },
  
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 0, // Cambiado de -2 a 0
    marginBottom: 20,
  },
  commentInput: {
    flex: 1,
    paddingHorizontal: 10, // Cambiado de -10 a 10
    paddingVertical: 10, // Cambiado de -90 a 10
    fontSize: 16,
    borderRadius: 8, // Agregado para el borde redondeado
  },
  sendIcon: {
    marginLeft: 100,
    padding: 10,
  },
});

export default ObjetoDetallesScreen;
