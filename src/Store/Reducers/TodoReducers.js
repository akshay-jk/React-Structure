import ActionTypes from '../ActionTypes/TodoActionTypes'

const TodoReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.GET_TODO:
            return { ...state, Todo: { loading: true, data: {}, err: '' } }
        case ActionTypes.GET_TODO_SUCCESS:
            return { ...state, Todo: { loading: false, data: action.payload, err: '' } }
        case ActionTypes.GET_TODO_FAILURE:
            return { ...state, Todo: { loading: false, data: {}, err: action.error } }

        case ActionTypes.GET_TODOS:
            return { ...state, Todos: { loading: true, data: [], err: '' } }
        case ActionTypes.GET_TODOS_SUCCESS:
            return { ...state, Todos: { loading: false, data: action.payload, err: '' } }
        case ActionTypes.GET_TODOS_FAILURE:
            return { ...state, Todos: { loading: false, data: [], err: action.error } }

        default:
            return { ...state, Todo: { loading: false, data: {}, err: '' }, Todos: { loading: false, data: [], err: '' } }
    }
}

export default TodoReducer;