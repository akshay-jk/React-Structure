import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Users from '../User/Users'
import Todos from '../Todo/Todos';
import PageNotFound from '../PageNotFound';

function DashboardRoutes() {
    return (
        <Routes>
            <Route path='/users' element={<Users />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default DashboardRoutes;