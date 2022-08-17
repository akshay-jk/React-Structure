import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Components/Login/Login';
import Dashboard from './Components/DashBoard/DashBoard';

import PageNotFound from './Components/PageNotFound';

function ProjectRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard/*' element={<Dashboard />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default ProjectRoutes