import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

const ProjectRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/users" element={<UserCrud />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default ProjectRoutes;
