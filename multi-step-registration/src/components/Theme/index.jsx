import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header';

import * as C from './styles.js';

export const Theme = ({ children }) => {
  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            ...
          </C.Sidebar>
          <C.Page>
            {children}
          </C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
}.isRequired;
