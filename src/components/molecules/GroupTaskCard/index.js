import { Badge, Box, Button, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Task from '../../atoms/Task';
import { BsPlusCircle } from 'react-icons/bs';
import CreateTaskModal from '../../atoms/CreateTaskModal';
import axios from 'axios';

const GroupTaskCard = ({ todo }) => {
  // console.log(items);
  const [items, setItems] = useState([]);
  console.log(todo.id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Style
  // Accepting props for background color
  // Accepting props for border color

  useEffect(() => {
    axios
      .get(`https://todos-project-api.herokuapp.com/todos/${todo.id}/items`, {
        headers: {
          Authorization: `bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyODEsImV4cCI6MTY1OTAwODY3N30.Xab7Hbm6PIf4ampV-gmFPiBs1RLtP_HIdGMiYfrBv0c`,
        },
      })
      .then(response => {
        console.log('response ', response);
        // setTodos(response.data);
        setItems(response.data);
      });
  }, []);

  return (
    <Box
      borderWidth="1px"
      width="100%"
      maxW="326px"
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
          {todo?.title}
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
        {todo.description}
      </p>

      {/* Tasks */}
      <div>
        {items.map(item => (
          <Task task={item} key={item.id} />
        ))}
      </div>

      {/* New Task Button */}
      <Button
        onClick={onOpen}
        bg="none"
        colorScheme="none"
        color="rgba(29, 31, 32, 1)"
        style={{
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '20px',
          padding: '0px',
        }}
        leftIcon={
          <BsPlusCircle color="rgba(51, 51, 51, 1)" fontSize="16.67px" />
        }
      >
        New Task
      </Button>

      <CreateTaskModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default GroupTaskCard;
