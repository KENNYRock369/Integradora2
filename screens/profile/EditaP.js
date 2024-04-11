import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, TextInput, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";

const EditaP = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    const [selectedImage, setSelectedImage] = useState(null);
    const [nombreCompleto, setNombreCompleto] = useState("Pablo Sanchez");
    const [email, setEmail] = useState("email@gmail.com");
    const [password, setPassword] = useState("hola123");
    const [municipio, setMunicipio] = useState("Tecamachalco");

    const handleImagenSelection = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            setSelectedImage(result.uri);
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? 'black' : 'white' }]}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={handleImagenSelection}>
                        <Image
                            source={selectedImage ? { uri: selectedImage } : require("../../assets/BrayanRe.png")}
                            style={[styles.image, isDarkMode && styles.darkModeImage]}
                        />
                        <View style={styles.cameraIcon}>
                            <MaterialIcons
                                name="photo-camera"
                                size={32}
                                color={isDarkMode ? 'white' : 'black'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>Nombre completo</Text>
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? 'white' : 'black', backgroundColor: isDarkMode ? '#222' : '#eee', borderColor: isDarkMode ? 'white' : 'black' }]}
                        value={nombreCompleto}
                        onChangeText={(value) => setNombreCompleto(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>Email</Text>
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? 'white' : 'black', backgroundColor: isDarkMode ? '#222' : '#eee', borderColor: isDarkMode ? 'white' : 'black' }]}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>Contraseña</Text>
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? 'white' : 'black', backgroundColor: isDarkMode ? '#222' : '#eee', borderColor: isDarkMode ? 'white' : 'black' }]}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[styles.text, { color: isDarkMode ? 'white' : 'black' }]}>Municipio</Text>
                    <TextInput
                        style={[styles.input, { color: isDarkMode ? 'white' : 'black', backgroundColor: isDarkMode ? '#222' : '#eee', borderColor: isDarkMode ? 'white' : 'black' }]}
                        value={municipio}
                        onChangeText={(value) => setMunicipio(value)}
                    />
                </View>
                <TouchableOpacity style={[styles.button, { backgroundColor: isDarkMode ? 'white' : 'black' }]}>
                    <Text style={[styles.buttonText, { color: isDarkMode ? 'black' : 'white' }]}>Guardar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        alignItems: "center",
        paddingVertical: 22,
    },
    imageContainer: {
        marginBottom: 22,
    },
    image: {
        height: 170,
        width: 170,
        borderRadius: 85,
        borderWidth: 2,
        borderColor: 'black',
    },
    darkModeImage: {
        borderColor: 'white',
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        zIndex: 9999,
    },
    inputContainer: {
        flexDirection: "column",
        marginBottom: 12,
        width: "80%",
    },
    input: {
        height: 44,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 6,
        paddingLeft: 8,
    },
    button: {
        height: 44,
        width: "80%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EditaP;
