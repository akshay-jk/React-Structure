import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserActions from '../../Store/Actions/UserActions'

function Users() {
    const dispatch = useDispatch();
    const { Users } = useSelector((state) => state.UserData);
    // console.log(Users)
    useEffect(() => {
        dispatch(UserActions['fetchUsersDetails']())
    }, [])
    return (
        <div>
            {!Users.err && <div>
                {(Users.loading) ? <h3>Loading...</h3> : <h3>List Users</h3>}
            </div>}
            {!!Users.err && <div style={{ 'color': 'red' }}><h2>{Users.err}</h2></div>}
            {
                Users.data.length != 0
                &&
                <div>
                    {Users.data.map((user, index) => {
                        return (
                            <div key={index}>
                                <span>{user.name}</span>
                                <span>{user.id}</span>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Users