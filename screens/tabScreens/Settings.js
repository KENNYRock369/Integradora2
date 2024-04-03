import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const COLORES = {
  primario: 'negro',
  gris: 'gris',
  blanco: 'blanco',
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


const Ajustes = ({}) => {
  const irAEditarPerfil = () => {
    navigation.navigate("EditarPerfil");
  };

  const irASeguridad = () => {
    console.log("Función de seguridad");
  };

  const irANotificaciones = () => {
    console.log("Función de notificaciones");
  };

  const irAPrivacidad = () => {
    console.log("Función de privacidad");
  };

  const irASuscripción = () => {
    console.log("Función de suscripción");
  };

  const irAAyuda = () => {
    console.log("Función de ayuda");
  };

  const irATérminosYPolíticas = () => {
    console.log("Función de términos y políticas");
  };

  const irALiberarEspacio = () => {
    console.log("Función de liberar espacio");
  };

  const irAAhorradorDeDatos = () => {
    console.log("Función de ahorrador de datos");
  };

  const irAReportarProblema = () => {
    console.log("Función de reportar un problema");
  };

  const agregarCuenta = () => {
    console.log("Agregar cuenta");
  };

  const cerrarSesión = () => {
    console.log("Cerrar sesión");
  };

  const elementosCuenta = [
    {
      icono: "person-outline",
      texto: "Editar Perfil",
      accion: irAEditarPerfil,
    },
    { icono: "security", texto: "Seguridad", accion: irASeguridad },
    {
      icono: "notifications-none",
      texto: "Notificaciones",
      accion: irANotificaciones,
    },
    { icono: "lock-outline", texto: "Privacidad", accion: irAPrivacidad },
  ];

  const elementosAyuda = [
    {
      icono: "credit-card",
      texto: "Mi Suscripción",
      accion: irASuscripción,
    },
    { icono: "help-outline", texto: "Ayuda y Soporte", accion: irAAyuda },
    {
      icono: "info-outline",
      texto: "Términos y Políticas",
      accion: irATérminosYPolíticas,
    },
  ];

  const elementosCacheYCelular = [
    {
      icono: "delete-outline",
      texto: "Liberar Espacio",
      accion: irALiberarEspacio,
    },
    { icono: "save-alt", texto: "Ahorrador de Datos", accion: irAAhorradorDeDatos },
  ];

  const elementosAcciones = [
    {
      icono: "outlined-flag",
      texto: "Reportar un Problema",
      accion: irAReportarProblema,
    },
    { icono: "people-outline", texto: "Agregar Cuenta", accion: agregarCuenta },
    { icono: "logout", texto: "Cerrar Sesión", accion: cerrarSesión },
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
      <MaterialIcons name={icono} size={24} color="negro" />
      <Text
        style={{
          marginLeft: 36,
          ...FUENTES.semiBold,
          fontWeight: 600,
          fontSize: 16,
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
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORES.negro}
          />
        </TouchableOpacity>

        <Text style={{ ...FUENTES.h3 }}>Ajustes</Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Ajustes de cuenta */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FUENTES.h4, marginVertical: 10 }}>Cuenta</Text>
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
          <Text style={{ ...FUENTES.h4, marginVertical: 10 }}>
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
          <Text style={{ ...FUENTES.h4, marginVertical: 10 }}>
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
          <Text style={{ ...FUENTES.h4, marginVertical: 10 }}>Acciones</Text>
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
