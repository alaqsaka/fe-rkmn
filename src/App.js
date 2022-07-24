import React, { useEffect, useState } from 'react';
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
import items from './data/items.json';
import axios from 'axios';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `'Nunito Sans', sans-serif`,
      body: `'Nunito Sans', sans-serif`,
    },
  });
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://todos-project-api.herokuapp.com/todos', {
        headers: {
          Authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODEsImV4cCI6MTY1OTAwODY3N30.Xab7Hbm6PIf4ampV-gmFPiBs1RLtP_HIdGMiYfrBv0c`,
        },
      })
      .then(response => {
        // console.log('response ', response);
        setTodos(response.data);
      });
  }, []);

  // Fetch todos group
  console.log(todos);
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Container style={{ padding: '24px' }} maxWidth="1400px">
        <SimpleGrid minChildWidth="326px" spacing="16px">
          {todos.map(todo => (
            // Kirim todo_id
            <GroupTaskCard items={items} todo={todo} />
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
