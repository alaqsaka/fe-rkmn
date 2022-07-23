import React from 'react';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/700.css';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import Header from './components/atoms/Header';
import GroupTaskCard from './components/molecules/GroupTaskCard';

function App() {
  const theme = extendTheme({
    fonts: {
      heading: `'Nunito Sans', sans-serif`,
      body: `'Nunito Sans', sans-serif`,
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <div style={{ padding: '24px' }}>
        <Flex gap="16px">
          <GroupTaskCard />
          <GroupTaskCard />
          <GroupTaskCard />
          <GroupTaskCard />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
