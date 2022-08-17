import ActionTypes from '../ActionTypes/UserActionTypes';
import Configuration from '../../Configs/config'

import axios from 'axios';

const getUsersRequest = () => {
    return {
        type: ActionTypes.GET_USERS, payload: [], error: ''
    }
}
const getUsersSuccess = (data) => {
    return {
        type: ActionTypes.GET_USERS_SUCCESS, payload: data, error: ''
    }
}
const getUsersFailure = (err) => {
    return {
        type: ActionTypes.GET_USERS_FAILURE, payload: [], error: err
    }
}
const getUserRequest = () => {
    return {
        type: ActionTypes.GET_USER, payload: {}, error: ''
    }
}
const getUserSuccess = (data) => {
    return {
        type: ActionTypes.GET_USER_SUCCESS, payload: data, error: ''
    }
}
const getUserFailure = (err) => {
    return {
        type: ActionTypes.GET_USER_FAILURE, payload: {}, error: err
    }
}
const fetchUsersDetails = () => {
    return (dispatch) => {
        dispatch(getUsersRequest());
        axios.get(Configuration.baseURL + '/users')
            .then((succResp) => {
                dispatch(getUsersSuccess(succResp['data']))
            }).catch((err) => {
                dispatch(getUsersFailure(err.response || err.data || err.message))
            })
    }
}
const fetchUserDetails = (id) => {
    return (dispatch) => {
        dispatch(getUserRequest());
        axios.get(Configuration.baseURL + '/users/' + id)
            .then((succResp) => {
                dispatch(getUserSuccess(succResp['data']))
            }).catch((err) => {
                dispatch(getUserFailure(err.response || err.data || err.message))
            })
    }
}

export default { fetchUsersDetails, fetchUserDetails }