import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';

const SurveyDialogMenu = () => {
  return (
    <MenuList>
      <MenuItem
        _focus={{ bg: 'none', color: 'rgba(1, 149, 159, 1)' }}
        icon={<HiArrowNarrowRight />}
      >
        Move Right
      </MenuItem>
      <MenuItem
        _focus={{ bg: 'none', color: 'rgba(1, 149, 159, 1)' }}
        icon={<HiArrowNarrowLeft />}
      >
        Move Left
      </MenuItem>
      <MenuItem
        _focus={{ bg: 'none', color: 'rgba(1, 149, 159, 1)' }}
        icon={<BiEditAlt />}
      >
        Edit
      </MenuItem>
      <MenuItem
        _focus={{ bg: 'none', color: 'rgba(225, 20, 40, 1)' }}
        icon={<FiTrash2 />}
      >
        Delete
      </MenuItem>
    </MenuList>
  );
};

export default SurveyDialogMenu;
