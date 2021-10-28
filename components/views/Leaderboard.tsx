import React from 'react';
import {
  Flex,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
} from 'native-base';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Aafreen Khan',
    recentText: 'Seeing the top!',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujitha Mathur',
    recentText: 'Runner up',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    recentText: 'Good one!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  },
  {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    fullName: 'Aniket Kumar',
    recentText: 'Not bad',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d72',
    fullName: 'Kiara',
    recentText: 'I will call it for today',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
  {
    id: '28694a0f-3da1-471f-bd96-142856e29d72',
    fullName: 'You',
    recentText: 'Best i can do',
    avatarUrl:
      'https://objectstorage.ap-tokyo-1.oraclecloud.com/n/nrmuq2krdm9b/b/bucket-20211017-1905/o/default.jpg',
  },
];

export default () => {
  return (
    <>
      <Text marginY="4" fontSize="3xl" fontWeight="bold">
        Leaderboard
      </Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <Flex
            borderBottomWidth="1"
            _dark={{
              borderColor: 'gray.600',
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2">
            <HStack space={3} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                color="coolGray.800"
                fontWeight="bold"
                alignSelf="flex-start">
                #{(index += 1)}
              </Text>
            </HStack>
          </Flex>
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};
