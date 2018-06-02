export const SET_NOTIFICATION_DATA = '/home/SET_NOTIFICATION_DATA'
export const TOGGLE_CREATE_POST = '/home/TOGGLE_CREATE_POST'

const initialState = {
    notifications: [],
    isCreatePostEnabled: false,
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

export const toggleCreatePost = (isEnabled) => (
    {
        type: TOGGLE_CREATE_POST,
        isCreatePostEnabled: isEnabled
    }
)

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION_DATA:
            return {
                ...state,
                notifications: action.notifications
            }
        case TOGGLE_CREATE_POST:
            return {
                ...state,
                isCreatePostEnabled: action.isCreatePostEnabled
            }
        default: return state
    }
}

