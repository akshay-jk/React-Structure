import React from 'react';
import { Link } from 'react-router-dom';

import DashBoardRoutes from './DashBoardRoutes';

function Dashboard() {
    return (
        <div style={{ 'display': 'flex' }}>
            <div>
                <div>
                    <div>
                        <img src="https://via.placeholder.com/125/771796" alt="LOGO" />
                    </div>
                </div>
                <div>
                    <div>
                        <Link to='users'>Users</Link>
                    </div>
                    <div>
                        <Link to='todos'>Todo</Link>
                    </div>
                </div>
            </div>
            <div style={{ 'width': '100vw', 'height100': 'vh' }}>
                <DashBoardRoutes />
            </div>
        </div>
    )
}

export default Dashboard;