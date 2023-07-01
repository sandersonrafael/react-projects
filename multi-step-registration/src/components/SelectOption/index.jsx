import React from 'react';
import PropTypes from 'prop-types';

import * as C from './styles';

export const SelectOption = ({ title, description, icon, selected, onClick }) => {
  return (
    <C.Container onClick={onClick} selected={selected}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
};

SelectOption.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func
}.isRequired;
