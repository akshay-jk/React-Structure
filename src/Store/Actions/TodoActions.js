import ActionTypes from '../ActionTypes/TodoActionTypes';
import Configuration from '../../Configs/config'

import axios from 'axios';

const getTodosRequest = () => {
    return {
        type: ActionTypes.GET_TODOS, payload: [], error: ''
    }
}
const getTodosSuccess = (data) => {
    return {
        type: ActionTypes.GET_TODOS_SUCCESS, payload: data, error: ''
    }
}
const getTodosFailure = (err) => {
    return {
        type: ActionTypes.GET_TODOS_FAILURE, payload: [], error: err
    }
}
const getTodoRequest = () => {
    return {
        type: ActionTypes.GET_TODO, payload: {}, error: ''
    }
}
const getTodoSuccess = (data) => {
    return {
        type: ActionTypes.GET_TODO_SUCCESS, payload: data, error: ''
    }
}
const getTodoFailure = (err) => {
    return {
        type: ActionTypes.GET_TODO_FAILURE, payload: {}, error: err
    }
}
const fetchTodosDetails = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(Configuration.baseURL + '/todos')
            .then((succResp) => {
                dispatch(getTodosSuccess(succResp['data']))
            }).catch((err) => {
                dispatch(getTodosFailure(err.response || err.data || err.message))
            })
    }
}
const fetchTodoDetails = (id) => {
    return (dispatch) => {
        dispatch(getTodoRequest());
        axios.get(Configuration.baseURL + '/todos/' + id)
            .then((succResp) => {
                dispatch(getTodoSuccess(succResp['data']))
            }).catch((err) => {
                dispatch(getTodoFailure(err.response || err.data || err.message))
            })
    }
}

export default { fetchTodosDetails, fetchTodoDetails }