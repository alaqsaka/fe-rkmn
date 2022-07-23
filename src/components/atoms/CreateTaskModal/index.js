import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import React from 'react';

const CreateTaskModal = ({ onOpen, isOpen, onClose }) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <FormControl style={{ marginBottom: '16px' }}>
              <FormLabel
                style={{
                  color: 'rgba(64, 64, 64, 1)',
                  fontSize: '12px',
                  fontWeight: '700',
                  lineHeight: '20px',
                }}
              >
                Task Name
              </FormLabel>
              <Input
                type="text"
                placeholder="Type your Task"
                style={{
                  height: '36px',
                  border: '2px solid rgba(237, 237, 237, 1)',
                  fontSize: '12px',
                  color: 'rgba(64, 64, 64, 1)',
                  marginTop: '8px',
                }}
              />
            </FormControl>

            <FormControl style={{ marginBottom: '16px' }}>
              <FormLabel
                style={{
                  color: 'rgba(64, 64, 64, 1)',
                  fontSize: '12px',
                  fontWeight: '700',
                  lineHeight: '20px',
                }}
              >
                Progress
              </FormLabel>
              <Input
                type="text"
                placeholder="70%"
                style={{
                  height: '36px',
                  border: '2px solid rgba(237, 237, 237, 1)',
                  fontSize: '12px',
                  color: 'rgba(64, 64, 64, 1)',
                  marginTop: '8px',
                  width: '134px',
                }}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              bg="none"
              colorScheme="none"
              style={{
                marginRight: '10px',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                color: '#1D1F20',
                fontSize: '14px',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
              }}
            >
              Cancel
            </Button>

            {/* Dispatch actions for create task! */}
            <Button
              onClick={onClose}
              color="white"
              bg="rgba(1, 149, 159, 1)"
              colorScheme="none"
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                fontSize: '14px',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
              }}
            >
              Save Task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTaskModal;
