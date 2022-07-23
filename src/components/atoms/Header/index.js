import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <div>
      <Box
        bg="white"
        w="100%"
        p={4}
        color="black"
        style={{
          paddingTop: '18px',
          paddingBottom: '18px',
        }}
        borderWidth="1px"
      >
        <Heading
          as="h6"
          size="xs"
          style={{
            fontSize: '18px',
            marginLeft: '20px',
            color: 'rgba(30, 31, 33, 1)',
          }}
        >
          Product Roadmap
        </Heading>
      </Box>
    </div>
  );
};

export default Header;
