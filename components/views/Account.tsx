import {Avatar, Button, Center, Text, View} from 'native-base';
import {ViewContext} from '../Main';
import {UserContext} from '../UserContext';
import React from 'react';

export default () => {
  const {setView} = React.useContext(ViewContext);
  const {user, dispatch} = React.useContext(UserContext);
  function handleLogout() {
    dispatch({type: 'DISCARD_USER'});
    setView('Login');
  }
  return (
    <View>
      <Center>
        <Avatar
          size="128px"
          marginY="4"
          source={{
            uri: 'https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmuq2krdm9b/b/bucket-20211017-1905/o/default.jpg',
          }}
        />
        <Text fontWeight="bold" fontSize="3xl">
          {user.fullname}
        </Text>
        <Text
          marginBottom="4"
          fontWeight="bold"
          color="warmGray.400"
          fontSize="md">
          {user.username}
        </Text>
        <Button
          w="50%"
          marginBottom="2"
          colorScheme="red"
          onPress={() => handleLogout()}>
          Logout
        </Button>
        <Button
          w="50%"
          bg="muted.900"
          _pressed={{bg: 'muted.700'}}
          _text={{color: 'white'}}>
          Edit User
        </Button>
      </Center>
    </View>
  );
};
