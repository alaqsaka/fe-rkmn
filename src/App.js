import React from 'react';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/700.css';
import {
  ChakraProvider,
  Container,
  extendTheme,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import Header from './components/atoms/Header';
import GroupTaskCard from './components/molecules/GroupTaskCard';
import todos from './data/todos.json';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `'Nunito Sans', sans-serif`,
      body: `'Nunito Sans', sans-serif`,
    },
  });

  console.log(todos);
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Container style={{ padding: '24px' }} maxWidth="1400px">
        <SimpleGrid minChildWidth="326px" spacing="16px">
          {todos.map(todo => (
            <GroupTaskCard />
          ))}
        </SimpleGrid>
        {/* <Flex gap="16px">
          {todos.map(todo => (
            <GroupTaskCard />
          ))}
        </Flex> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
