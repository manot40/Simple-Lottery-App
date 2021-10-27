import dayjs from 'dayjs';
import {
  Flex,
  Text,
  Button,
  HStack,
  FormControl,
  Input,
  Center,
} from 'native-base';
import React from 'react';
import {UserContext} from '../UserContext';

function random(start: number, end: number) {
  return +(Math.random() * (end - start) + start).toFixed(0);
}

export default () => {
  const [choosenNum, setChoosenNum] = React.useState('1');
  const [result, setResult] = React.useState(<Text />);
  const {dispatch} = React.useContext(UserContext);
  let difficulty: string;

  const decideWinner = () => {
    switch (difficulty) {
      case 'Easy':
        return random(1, 10);
      case 'Normal':
        return random(1, 25);
      case 'Hard':
        return random(1, 50);
      default:
        throw new Error();
    }
  };

  function handleSubmit() {
    const winner = decideWinner();
    const win = winner === +choosenNum;
    const element = (
      <Center marginY="8">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color={win ? 'green.500' : 'red.500'}>
          {win ? 'You Win' : 'You Lose'}
        </Text>
        <Text color="warmGray.500" fontSize="md">
          Winner
        </Text>
        <Text fontWeight="bold" fontSize="xl">
          {winner}
        </Text>
      </Center>
    );
    dispatch({
      type: win ? 'WIN' : 'LOSE',
      record: {
        selectedNumber: +choosenNum,
        date: dayjs().format('DD/MM/YYYY').toString(),
        prizeNumber: winner,
        win,
      },
    });
    setResult(element);
  }

  return (
    <Flex p="4" backgroundColor="white">
      <Text marginY="4" fontSize="3xl" fontWeight="bold">
        Play
      </Text>
      <Text fontSize="lg">Choose difficulty</Text>
      <HStack space="2" marginY="4">
        <Button
          colorScheme="green"
          opacity={difficulty && difficulty !== 'Easy' ? 0.5 : 1}
          w="32%"
          onPress={() => (difficulty = 'Easy')}>
          Easy
        </Button>
        <Button
          colorScheme="amber"
          opacity={difficulty && difficulty !== 'Normal' ? 0.5 : 1}
          w="32%"
          onPress={() => (difficulty = 'Normal')}>
          Normal
        </Button>
        <Button
          colorScheme="red"
          opacity={difficulty && difficulty !== 'Hard' ? 0.5 : 1}
          w="32%"
          onPress={() => difficulty = 'Hard')}>
          Hard
        </Button>
      </HStack>
      {difficulty && (
        <FormControl>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            Chosen Number
          </FormControl.Label>
          <Input
            value={choosenNum}
            onChangeText={val => setChoosenNum(val)}
            InputRightElement={
              <Button onPress={() => handleSubmit()}>Submit</Button>
            }
          />
        </FormControl>
      )}
      {result}
    </Flex>
  );
};
