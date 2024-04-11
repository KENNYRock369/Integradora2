import React from "react";
import { View, Text, TouchableOpacity, ScrollView, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Ajustes = () => {
  const { colors } = useTheme();
  const colorScheme = useColorScheme();

  const COLORES = {
    primario: colors.text,
    gris: colors.card,
    blanco: colors.background,
  };

  const FUENTES = {
    regular: {
      fontFamily: 'Arial', // Cambia 'Arial' por la fuente que desees
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Arial-Bold', // Cambia 'Arial-Bold' por la fuente bold que desees
      fontWeight: 'bold',
    },
    // Agrega más estilos de fuente según sea necesario
  };

  const irAEditarPerfil = () => {
    console.log("Función de editar perfil");
  };

  const irAConfiguracion = () => {
    console.log("Función de configuración");
  };

  const irAMisPedidos = () => {
    console.log("Función de mis pedidos");
  };

  const irAContacto = () => {
    console.log("Función de contacto");
  };

  const irAPoliticasDePrivacidad = () => {
    console.log("Función de políticas de privacidad");
  };

  const irACondicionesDeUso = () => {
    console.log("Función de condiciones de uso");
  };

  const irAFAQ = () => {
    console.log("Función de preguntas frecuentes");
  };

  const irAAcercaDe = () => {
    console.log("Función de acerca de");
  };

  const elementosCuenta = [
    {
      icono: "person-outline",
      texto: "Editar Perfil",
      accion: irAEditarPerfil,
    },
    { icono: "settings", texto: "Configuración", accion: irAConfiguracion },
    {
      icono: "shopping-cart",
      texto: "Mis Pedidos",
      accion: irAMisPedidos,
    },
  ];

  const elementosAyuda = [
    {
      icono: "contact-mail",
      texto: "Contacto",
      accion: irAContacto,
    },
    { icono: "security", texto: "Políticas de Privacidad", accion: irAPoliticasDePrivacidad },
    {
      icono: "gavel",
      texto: "Condiciones de Uso",
      accion: irACondicionesDeUso,
    },
    {
      icono: "question-answer",
      texto: "FAQ",
      accion: irAFAQ,
    },
    { icono: "info-outline", texto: "Acerca de", accion: irAAcercaDe },
  ];

  const elementosCacheYCelular = [
    {
      icono: "delete-outline",
      texto: "Liberar Espacio",
      accion: () => console.log("Función de liberar espacio"),
    },
    {
      icono: "save-alt",
      texto: "Ahorrador de Datos",
      accion: () => console.log("Función de ahorrador de datos"),
    },
  ];

  const elementosAcciones = [
    {
      icono: "outlined-flag",
      texto: "Reportar un Problema",
      accion: () => console.log("Función de reportar un problema"),
    },
    { icono: "people-outline", texto: "Agregar Cuenta", accion: () => console.log("Función de agregar cuenta") },
    { icono: "logout", texto: "Cerrar Sesión", accion: () => console.log("Función de cerrar sesión") },
  ];

  const renderizarElementoAjustes = ({ icono, texto, accion }) => (
    <TouchableOpacity
      onPress={accion}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORES.gris,
      }}
    >
      <MaterialIcons name={icono} size={24} color={COLORES.primario} />
      <Text
        style={{
          marginLeft: 36,
          ...FUENTES.semiBold,
          fontWeight: 600,
          fontSize: 16,
          color: COLORES.primario,
        }}
      >
        {texto}{" "}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORES.blanco,
      }}
    >
      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Ajustes de cuenta */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FUENTES.h4, marginVertical: 10, color: COLORES.primario }}>Cuenta</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORES.gris,
            }}
          >
            {elementosCuenta.map((item, index) => (
              <React.Fragment key={index}>
                {renderizarElementoAjustes(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Ajustes de ayuda y soporte */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FUENTES.h4, marginVertical: 10, color: COLORES.primario }}>
            Ayuda y Soporte{" "}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORES.gris,
            }}
          >
            {elementosAyuda.map((item, index) => (
              <React.Fragment key={index}>
                {renderizarElementoAjustes(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Ajustes de cache y celular */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FUENTES.h4, marginVertical: 10, color: COLORES.primario }}>
            Cache y Celular{" "}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORES.gris,
            }}
          >
            {elementosCacheYCelular.map((item, index) => (
              <React.Fragment key={index}>
                {renderizarElementoAjustes(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Ajustes de acciones */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FUENTES.h4, marginVertical: 10, color: COLORES.primario }}>Acciones</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORES.gris,
            }}
          >
            {elementosAcciones.map((item, index) => (
              <React.Fragment key={index}>
                {renderizarElementoAjustes(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ajustes;
