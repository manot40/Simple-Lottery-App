import React from 'react';
import {UserContext} from '../UserContext';
import {
  Box,
  Text,
  HStack,
  VStack,
  Flex,
  FlatList,
  Spacer,
  Center,
} from 'native-base';

export default () => {
  const {user} = React.useContext(UserContext);
  return (
    <Flex p="4" backgroundColor="white">
      <Text marginY="4" fontSize="3xl" fontWeight="bold">
        Statistic
      </Text>
      <HStack
        justifyContent="space-between"
        marginBottom="2"
        space="2"
        maxWidth="full">
        <Box backgroundColor="green.600" p="4" rounded="lg" w="49%">
          <HStack justifyContent="space-between">
            <Text fontSize="4xl">{user.totalWin}</Text>
            <Text fontSize="md" fontWeight="bold">
              Win
            </Text>
          </HStack>
        </Box>
        <Box backgroundColor="red.500" p="4" rounded="lg" w="49%">
          <HStack justifyContent="space-between">
            <Text fontSize="4xl">{user.totalLose}</Text>
            <Text fontSize="md" fontWeight="bold">
              Lose
            </Text>
          </HStack>
        </Box>
      </HStack>
      <Box backgroundColor="darkBlue.400" p="4" rounded="lg" w="full">
        <HStack justifyContent="space-between">
          <Text fontSize="4xl">{user.records.length}</Text>
          <Text fontSize="md" fontWeight="bold">
            Total Attempt
          </Text>
        </HStack>
      </Box>
      <Text marginY="4" fontSize="3xl" fontWeight="bold">
        History
      </Text>
      {!user.records.length ? (
        <Center>
          <Text color="coolGray.600">Belum ada riwayat</Text>
        </Center>
      ) : (
        <FlatList
          maxHeight="45%"
          data={user.records}
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2">
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color={item.win ? 'green.600' : 'red.500'}
                    bold>
                    {item.win ? 'Win' : 'Lose'}
                  </Text>
                  <Text color="coolGray.600">
                    {`Chosen: ${item.selectedNumber} | Winner: ${item.prizeNumber}`}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start">
                  {item.date}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={item =>
            (Math.random() * item.selectedNumber).toString()
          }
        />
      )}
    </Flex>
  );
};
