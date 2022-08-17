import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk'

import UserIntialState from './IntialStates/UserIntialStates';
import UserReducers from './Reducers/UserReducers';

import TodoIntialState from './IntialStates/TodoIntialStates';
import TodoReducer from './Reducers/TodoReducers';

const rootReducer = combineReducers({
    UserData: UserReducers,
    TodoData: TodoReducer
});

const Store = createStore(
    rootReducer,
    {
        ...UserIntialState.UserModel,
        ...TodoIntialState.TodoModel
    },
    applyMiddleware(ThunkMiddleware));

export default Store