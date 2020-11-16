import React from 'react';

import {View, Text} from 'react-native';
import { Button, Icon } from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UserForm from './src/views/UserForm';
import UserList from './src/views/UserList';
import TelaLogin from './src/views/TelaLogin';

import { UsersProvider } from './src/context/UsersContext';

const Stack = createStackNavigator();
export default App => {

    return(
    <UsersProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"TelaLogin"}
                screenOptions={screenOptions}
                >
                <Stack.Screen 
                name="UserList"
                component={UserList}
                options = {({navigation}) => {
                    return {
                        title: 'Lista de usuários',
                        headerRight: () => (
                            <Button 
                            onPress = {() => navigation.navigate("UserForm")}
                            type="clear"
                            icon={<Icon name="add" size={25} color="#fff" />}
                            
                            />
                            )
                        }
                }}
                />

                <Stack.Screen
                name="UserForm" 
                component={UserForm}
                options = {{
                    title: 'Formulario de usuários'
                }}
                />

                <Stack.Screen
                    name="TelaLogin"
                    component={TelaLogin}
                    options ={{
                        title: "Login"
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor:  '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}

