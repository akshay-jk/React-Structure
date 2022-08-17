import ActionTypes from '../ActionTypes/UserActionTypes'

const UserReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER:
            return { ...state, User: { loading: true, data: {}, err: '' } }
        case ActionTypes.GET_USER_SUCCESS:
            return { ...state, User: { loading: false, data: action.payload, err: '' } }
        case ActionTypes.GET_USER_FAILURE:
            return { ...state, User: { loading: false, data: {}, err: action.error } }

        case ActionTypes.GET_USERS:
            return { ...state, Users: { loading: true, data: [], err: '' } }
        case ActionTypes.GET_USERS_SUCCESS:
            return { ...state, Users: { loading: false, data: action.payload, err: '' } }
        case ActionTypes.GET_USERS_FAILURE:
            return { ...state, Users: { loading: false, data: [], err: action.error } }

        default:
            return { ...state, User: { loading: false, data: {}, err: '' }, Users: { loading: false, data: [], err: '' } }
    }
}

export default UserReducer;