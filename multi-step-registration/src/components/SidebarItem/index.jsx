import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CgProfile } from 'react-icons/cg';
import { BsBookFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

import * as C from './styles';

export const SidebarItem = ({ title, description, icon, path, active }) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>

        <C.IconArea active={active}>
          {icon === 'profile' && (
            <CgProfile style={{ width: 32, height: 32, color: 'white' }} />
          )}
          {icon === 'book' && (
            <BsBookFill style={{ width: 32, height: 32, color: 'white' }} />
          )}
          {icon === 'mail' && (
            <AiOutlineMail style={{ width: 32, height: 32, color: 'white' }} />
          )}
        </C.IconArea>
        <C.Point  active={active} />
      </Link>
    </C.Container>
  );
};

SidebarItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string,
  active: PropTypes.bool,
}.isRequired;
