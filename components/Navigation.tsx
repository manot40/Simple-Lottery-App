import React from 'react';
import {ViewContext} from './Main';
import icon from 'react-native-vector-icons/MaterialIcons';
import {Box, Icon, Text, HStack, ScrollView, Pressable} from 'native-base';

export default ({children}: any) => {
  const {view, setView} = React.useContext(ViewContext);
  return (
    <Box flex={1} bg="white" safeAreaTop>
      <ScrollView flex={1} p="4" backgroundColor="white">
        {children}
      </ScrollView>
      <HStack bg="darkBlue.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={view === 'Home' ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setView('Home')}>
          <Center>
            <Icon mb="1" as={<icon name="home" />} color="white" size="md" />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={view === 'Shuffle' ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setView('Shuffle')}>
          <Center>
            <Icon mb="1" as={<icon name="shuffle" />} color="white" size="md" />
            <Text color="white" fontSize="12">
              Shuffle
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={view === 'Leaderboard' ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setView('Leaderboard')}>
          <Center>
            <Icon
              mb="1"
              as={<icon name="trending-up" />}
              color="white"
              size="md"
            />
            <Text color="white" fontSize={12}>
              Leaderboard
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={view === 'Account' ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setView('Account')}>
          <Center>
            <Icon
              mb="1"
              as={<icon name="account-circle" />}
              color="white"
              size="md"
            />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};
