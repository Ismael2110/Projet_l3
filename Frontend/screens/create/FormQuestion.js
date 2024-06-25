import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'
import colors from '../../constants/colors'

export default function FormQuestion(props) {
    const [name, setName] = useState('')

    const handleAddQuestion = () => {
        if (name.trim().length === 0) {
            alert('Veuillez entrer le nom et la description du département.')
        } else {
            props.onAddQuestion({name})
            setName('')
            Keyboard.dismiss()
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TextInput
                placeholder="Entrez la question"
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TouchableOpacity style={styles.btn} onPress={handleAddQuestion}>
                <Text style={styles.btnText}>Ajouter une question</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.dark_gray,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 4,
        fontSize: 16,
    },
    btn: {
        backgroundColor: colors.primary,
        marginVertical: 4,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 4,
    },
    btnText: {
        textAlign: 'center',
        color: colors.white,
    },
})
