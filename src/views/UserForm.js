import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet,TextInput} from 'react-native';
import { Button } from 'react-native-elements';



export default function UserForm(){
    
            const [text, setText] = useState("");   

        return (
            <View>
                
            </View>
        )
    
}



const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: '#333',
        borderWidth: 1,
        marginBottom: 15
    }
})