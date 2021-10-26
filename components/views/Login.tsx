import React from 'react';
import {ViewContext} from '../Main';
import {UserContext} from '../UserContext';
import {defaultUser} from '../UserContext';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  useToast,
  View,
} from 'native-base';

const defaultLogin = {
  uname: 'user',
  psswd: 'user123',
};

export default () => {
  const {setView} = React.useContext(ViewContext);
  const {dispatch} = React.useContext(UserContext);
  const [uname, setUname] = React.useState('user');
  const [psswd, setPsswd] = React.useState('user123');
  const toast = useToast();

  function handleLogin() {
    if (uname === defaultLogin.uname && psswd === defaultLogin.psswd) {
      setView('Home');
      dispatch({type: 'SET_USER', user: defaultUser});
    } else {
      const id = 'test-toast';
      if (!toast.isActive(id)) {
        toast.show({
          id,
          status: 'error',
          title: 'Login Gagal',
          description: 'Username atau Password salah. Harap periksa kembali',
        });
      }
    }
  }

  return (
    <View flex={1} backgroundColor="white">
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Selamat Datang
        </Heading>
        <Heading
          mt="1"
          mb="4"
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Masuk ke akun anda untuk melanjutkan
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Username
            </FormControl.Label>
            <Input value={uname} onChangeText={val => setUname(val)} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: 'coolGray.800',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Password
            </FormControl.Label>
            <Input
              type="password"
              value={psswd}
              onChangeText={val => setPsswd(val)}
            />
          </FormControl>
          <Button
            mt="2"
            bg="darkBlue.600"
            _text={{color: 'white'}}
            onPress={() => {
              handleLogin();
            }}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </View>
  );
};
