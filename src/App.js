import React, { useEffect, useState } from 'react';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/700.css';
import {
  ChakraProvider,
  Container,
  extendTheme,
  SimpleGrid,
} from '@chakra-ui/react';
import Header from './components/atoms/Header';
import GroupTaskCard from './components/molecules/GroupTaskCard';
import { getTodos } from './actions/todos';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `'Nunito Sans', sans-serif`,
      body: `'Nunito Sans', sans-serif`,
    },
  });
  let [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  todos = useSelector(state => state.todos);

  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Container style={{ padding: '24px' }} maxWidth="1400px">
        <SimpleGrid minChildWidth="326px" spacing="16px">
          {todos.map(todo => (
            // Kirim todo_id
            <GroupTaskCard key={todo} todo={todo} />
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
