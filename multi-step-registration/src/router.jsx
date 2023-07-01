import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Step3 } from './pages/Step3';
import { Step2 } from './pages/Step2';
import { Step1 } from './pages/Step1';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Step1/>} />
        <Route path="/step2" exact element={<Step2/>} />
        <Route path="/step3" exact element={<Step3/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};
