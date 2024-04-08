import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AntDesign } from '@expo/vector-icons';

const Input = (props) => {
    const onChangeText = (text) => {
        props.onInputChanged(props.id, text);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <AntDesign name={props.iconName} size={24} color={Colors.gray} style={styles.icon} />
                <TextInput
                    {...props}
                    placeholderTextColor={Colors.gray}
                    style={styles.input}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
        color: Colors.black,
    },
    icon: {
        marginRight: 10,
    },
});

export default Input;
