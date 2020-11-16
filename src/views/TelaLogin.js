import React, {useState} from 'react';

import {View, TextInput, Text, StyleSheet, Button} from 'react-native';
import { Formik } from 'formik';

import * as Yup from 'yup'
import { State } from 'react-native-gesture-handler';
// import api from '../server/api';

export default function TelaLogin() {
    const [dadosUser, setdadosUser] = useState('');
    return (
        <View>
  
            <Form />

        <Text style={styles.nome}>Nome: </Text>
            
        </View>
    )
}



function Form() {
    return (
    
        <Formik
           initialValues={{
               email: '',
               senha: '',
           }}
           onSubmit={values => {
                const user = {
                    "usuario": [
                        values
                    ]
                }
                const url ='https://itrampoficial.000webhostapp.com/server/controllers/authController.php';
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(user)
                }).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    if (response == 'senha_invalida') {
                        console.log(response);
                        alert('Senha Inválida')
                    }else if(response == 'email_invalido'){
                        console.log(response);
                        console.log('Email inválido')
                    }else{
                        console.log('Logado com sucesso')
                        let data = []

                        data.push(response)
                        let usuario = data[0]

                        setdadosUser(usuario)
                        
                        console.log(dadosUser.nome)
                    }
                })


                
           }}>

           {({values, handleChange, handleSubmit, errors}) => (
               <>
                   <TextInput
                   style={styles.input}
                   placeholder="Digite seu e-mail"
                   value={values.email}
                   onChangeText={handleChange('email')}
                   />

                   <TextInput
                   style={styles.input}
                   placeholder="Digite sua senha"
                   value={values.senha}
                   onChangeText={handleChange('senha')}
                   />

                   <Button 
                       style={styles.button}        
                       title= "Enviar"
                       onPress={handleSubmit}
                   />
               </>
           )}
        </Formik>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        backgroundColor: '#DFDFDF',
        width: 300,
        height: 50,
        paddingLeft: 10,
        borderRadius: 10,
        marginBottom: 10
    },

    nome: {
        position: 'absolute',
        top: 180,
        left: 40
    }
    
})