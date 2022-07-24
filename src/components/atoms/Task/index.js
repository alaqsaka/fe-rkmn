import {
  Box,
  Divider,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  Progress,
  Spacer,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import SurveyDialogMenu from '../SurveyDialogMenu';

const Task = () => {
  return (
    <Box
      bg="rgba(250, 250, 250, 1)"
      borderWidth="1px"
      style={{
        padding: '16px',
        borderRadius: '4px',
        border: '1px solid rgba(224, 224, 224, 1)',
      }}
    >
      <Text color="rgba(64, 64, 64, 1)" style={{ fontWeight: '700' }}>
        Re-designed the zero-g doggie bags. No more spills!
      </Text>

      <Divider
        variant="dashed"
        style={{
          color: 'rgba(224, 224, 224, 1)',
          marginTop: '8px',
          marginBottom: '12px',
        }}
        colorScheme="rgba(224, 224, 224, 1)"
      />

      <Flex gap={2}>
        <Flex gap={2} alignItems="center">
          <Box w="188px">
            {/* Warna dari progres kalo belum selesai biru, tapi kalo udah selesai (100%) jadi warna ijo */}
            <Progress
              value={30}
              style={{ borderRadius: '9999px', height: '16px' }}
            />
          </Box>

          <Box>
            {/* Angka progres diganti logo check kalau sudah 100% */}
            <p
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                color: 'rgba(117, 117, 117, 1)',
                fontWeight: '400',
              }}
            >
              30%
            </p>
          </Box>
        </Flex>

        <Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton>
                  <IconButton
                    isActive={isOpen}
                    bg="none"
                    colorScheme="rgba(237, 237, 237, 1);"
                    icon={<BsThreeDots color="rgba(117, 117, 117, 1) " />}
                    fontSize="24px"
                  />
                </MenuButton>
                <SurveyDialogMenu />
              </>
            )}
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Task;
