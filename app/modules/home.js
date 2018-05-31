import moment from 'moment'

export const SET_NOTIFICATION_DATA = '/home/SET_NOTIFICATION_DATA'

const initialState = {
    notifications: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION_DATA:
            return {
                ...state,
                notifications: action.notifications
            }
        default: return state
    }
}

