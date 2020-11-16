import React, { useContext } from 'react';
import { Text, FlatList, Alert} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';

import UsersContext from '../context/UsersContext';

export default props => {

    const { state, dispatch } = useContext(UsersContext);
    
    function confirmUserDeletion(user) {
        Alert.alert('Excluir usuario', 'Deseja excluir o usuário?',[
            {
                text: 'Sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }


    function getActions(user) {
        return (
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" color="orange" size={25}/>}
                />

                <Button 
                    onPress={ () => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" color="red" size={25}/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (<ListItem 
            leftAvatar={{source: {uri: user.avatarUrl}}}
            key={user.id}
            title={user.name}
            subtitle={user.email}
            bottomDivider
            rightElement={getActions(user)}
            onPress={() => props.navigation.navigate('UserForm')}
        />)
        
    }


    return (
        <FlatList 
            keyExtractor={users => users.id.toString()}
            data={state.users}
            renderItem={getUserItem}
        />
    )
}