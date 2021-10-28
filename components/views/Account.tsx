import {Avatar, Button, Center, Text} from 'native-base';
import {ViewContext} from '../Main';
import {UserContext} from '../UserContext';
import React from 'react';

export default () => {
  const {setView} = React.useContext(ViewContext);
  const {user} = React.useContext(UserContext);
  return (
    <>
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
          onPress={() => setView('Login')}>
          Logout
        </Button>
        <Button w="50%" colorScheme="info">
          Edit User
        </Button>
      </Center>
    </>
  );
};
