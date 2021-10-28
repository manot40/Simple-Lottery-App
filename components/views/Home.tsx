import React from 'react';
import {UserContext} from '../UserContext';
import {Box, Text, HStack, VStack, FlatList, Spacer, Center} from 'native-base';

export default () => {
  const {user} = React.useContext(UserContext);
  return (
    <Box>
      <Text marginY="4" fontSize="3xl" bold>
        Statistic
      </Text>
      <HStack
        justifyContent="space-between"
        marginBottom="2"
        space="2"
        maxWidth="full">
        <Box backgroundColor="green.600" p="4" rounded="lg" w="49%">
          <HStack justifyContent="space-between">
            <Text fontSize="4xl" color="warmGray.100" bold>
              {user.totalWin}
            </Text>
            <Text fontSize="md" color="warmGray.100" bold>
              Win
            </Text>
          </HStack>
        </Box>
        <Box backgroundColor="red.500" p="4" rounded="lg" w="49%">
          <HStack justifyContent="space-between">
            <Text fontSize="4xl" color="warmGray.100" bold>
              {user.totalLose}
            </Text>
            <Text fontSize="md" color="warmGray.100" bold>
              Lose
            </Text>
          </HStack>
        </Box>
      </HStack>
      <HStack justifyContent="space-between" space="2" maxWidth="full">
        <Box backgroundColor="muted.900" p="4" rounded="lg" w="49%">
          <HStack justifyContent="space-between">
            <Text fontSize="4xl" color="warmGray.100" bold>
              {user.records.length}
            </Text>
            <Text fontSize="md" color="warmGray.100" bold>
              Attempt
            </Text>
          </HStack>
        </Box>
        <Box backgroundColor="muted.600" p="4" rounded="lg" w="49%">
          <HStack justifyContent="space-between">
            <Text fontSize="4xl" color="warmGray.100" bold>
              {user.totalWin === 0
                ? '0'
                : ((user.totalWin / user.records.length) * 100).toFixed(1)}
              %
            </Text>
            <Text fontSize="md" color="warmGray.100" bold>
              WR
            </Text>
          </HStack>
        </Box>
      </HStack>
      <Text marginY="4" fontSize="3xl" bold>
        History
      </Text>
      {!user.records.length ? (
        <Center>
          <Text color="coolGray.600">Belum ada riwayat</Text>
        </Center>
      ) : (
        <FlatList
          maxHeight="50%"
          data={user.records.slice(0, 20)}
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              borderColor="coolGray.100"
              pl="4"
              pr="5"
              py="2">
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text color={item.win ? 'green.600' : 'red.500'} bold>
                    {item.win ? 'Win' : 'Lose'}
                  </Text>
                  <Text color="coolGray.600">
                    {`Chosen: ${item.selectedNumber} | Winner: ${item.prizeNumber}`}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
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
    </Box>
  );
};
