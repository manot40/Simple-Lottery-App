import dayjs from 'dayjs';
import {
  Text,
  Button,
  HStack,
  FormControl,
  Input,
  Center,
  Box,
} from 'native-base';
import React from 'react';
import {UserContext} from '../UserContext';

function random(start: number, end: number) {
  return +(Math.random() * (end - start) + start).toFixed(0);
}

export default () => {
  const [isError, setIsError] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState('');
  const [choosenNum, setChoosenNum] = React.useState('1');
  const [result, setResult] = React.useState(<Text />);
  const {dispatch} = React.useContext(UserContext);

  const decide = (onlyLevel?: boolean) => {
    let range: number[];
    switch (difficulty) {
      case 'Easy':
        range = [1, 10];
        break;
      case 'Normal':
        range = [1, 25];
        break;
      case 'Hard':
        range = [1, 50];
        break;
      default:
        throw new Error();
    }
    return onlyLevel ? range : random(range[0], range[1]);
  };
  function handleInput(input: string) {
    setChoosenNum(input);
    setIsError(
      //@ts-ignore
      isNaN(+input) || +input < decide(true)[0] || +input > decide(true)[1],
    );
  }
  function handleSubmit() {
    const winner = decide();
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
        prizeNumber: +winner,
        win,
      },
    });
    setResult(element);
  }

  return (
    <Box>
      <Text marginY="4" fontSize="3xl" bold>
        Play
      </Text>
      <Text fontSize="lg">Choose difficulty</Text>
      <HStack space="2" marginY="4">
        <Button
          colorScheme="green"
          opacity={difficulty && difficulty !== 'Easy' ? 0.5 : 1}
          w="32%"
          onPress={() => setDifficulty('Easy')}>
          Easy
        </Button>
        <Button
          colorScheme="amber"
          opacity={difficulty && difficulty !== 'Normal' ? 0.5 : 1}
          w="32%"
          onPress={() => setDifficulty('Normal')}>
          Normal
        </Button>
        <Button
          colorScheme="red"
          opacity={difficulty && difficulty !== 'Hard' ? 0.5 : 1}
          w="32%"
          onPress={() => setDifficulty('Hard')}>
          Hard
        </Button>
      </HStack>
      {difficulty && (
        <FormControl isInvalid={isError}>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            {/* @ts-ignore **/}
            Choose Number (Range: {decide(true)[0]} - {decide(true)[1]})
          </FormControl.Label>
          <Input
            value={choosenNum}
            type="numeric"
            onChangeText={val => handleInput(val)}
            onEndEditing={() => !isError && handleSubmit()}
            _focus={{
              borderColor: isError ? 'red.500' : 'muted.900',
            }}
            InputRightElement={
              <Button
                mr="1"
                bg="muted.900"
                _text={{color: 'white'}}
                isDisabled={isError}
                onPress={() => handleSubmit()}>
                Submit
              </Button>
            }
          />
          <FormControl.ErrorMessage>
            Please enter correct number in range.
          </FormControl.ErrorMessage>
        </FormControl>
      )}
      {result}
    </Box>
  );
};
