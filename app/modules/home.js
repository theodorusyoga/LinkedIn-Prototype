import moment from 'moment'

export const SET_NOTIFICATION_DATA = '/home/SET_NOTIFICATION_DATA'

const initialState = {
    notifications: [],
    menu: ['Home', 'My Network', 'Jobs', 'Messaging', 'Notifications', 'Me'],
    menuSecondary: ['Work'],
    user: {
        id: 1,
        username: 'john.doe@mail.com',
        fullname: 'John Doe',
        cover: '/images/cover.jpeg',
        pic: '/images/Person1.jpg',
        tagline: 'Software Engineer'
    }
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

