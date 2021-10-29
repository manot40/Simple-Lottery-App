/* eslint-disable prettier/prettier */
import React from 'react';
import {ViewContext} from '../Main';
import {UserContext} from '../UserContext';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  useToast,
} from 'native-base';

const login = {
  uname: 'user',
  psswd: 'user123',
};
const user: IUser = {
  username: 'user',
  fullname: 'John Doe',
  totalWin: 0,
  totalLose: 0,
  records: [],
};

export default () => {
  const {setView} = React.useContext(ViewContext);
  const {dispatch} = React.useContext(UserContext);
  const [uname, setUname] = React.useState('user');
  const [psswd, setPsswd] = React.useState('user123');
  const toast = useToast();

  function handleLogin() {
    if (uname === login.uname && psswd === login.psswd) {
      setView('Home');
      dispatch({type: 'SET_USER', user});
    } else {
      const id = 'test-toast';
      if (!toast.isActive(id)) {
        toast.show({
          id,
          status: 'error',
          title: 'Login Failed',
          description: 'Username or Password Invalid. Please enter correct login info',
        });
      }
    }
  }

  return (
    <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
      <Heading size="lg" fontWeight="600" color="muted.900">
        Welcome
      </Heading>
      <Heading mt="1" mb="4" color="muted.400" fontWeight="medium" size="xs">
        Login to your account to proceed
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
          <Input
            value={uname}
            _focus={{borderColor: 'muted.900'}}
            onChangeText={val => setUname(val)}
          />
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
            _focus={{borderColor: 'muted.900'}}
            value={psswd}
            onChangeText={val => setPsswd(val)}
          />
        </FormControl>
        <Button
          mt="2"
          bg="muted.900"
          _pressed={{bg: 'muted.700'}}
          _text={{color: 'white'}}
          onPress={() => {
            handleLogin();
          }}>
          Sign in
        </Button>
      </VStack>
    </Box>
  );
};
