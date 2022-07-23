import { Badge, Box } from '@chakra-ui/react';
import React from 'react';

const GroupTaskCard = () => {
  // Style
  // Accepting props for background color
  // Accepting props for border color
  return (
    <Box
      borderWidth="1px"
      width="100%"
      style={{
        borderColor: 'rgba(1, 149, 159, 1)',
        borderRadius: '4px',
        backgroundColor: 'rgba(247, 254, 255, 1)',
        padding: '16px',
      }}
    >
      <Badge
        variant="outline"
        style={{
          padding: '2px 8px',
          border: '1px solid rgba(1, 149, 159, 1)',
          boxShadow: 'none',
        }}
      >
        <p
          style={{
            textTransform: 'capitalize',
            fontSize: '12px',
            color: 'rgba(1, 149, 159, 1)',
          }}
        >
          Group Task 1
        </p>
      </Badge>

      <p
        style={{
          fontSize: '12px',
          fontWeight: '700',
          color: 'rgba(64, 64, 64, 1)',
          marginTop: '8px',
          marginBottom: '8px',
        }}
      >
        January - March
      </p>
    </Box>
  );
};

export default GroupTaskCard;
