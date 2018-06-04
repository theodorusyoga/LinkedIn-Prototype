export const SET_NOTIFICATION_DATA = '/home/SET_NOTIFICATION_DATA'
export const TOGGLE_CREATE_POST = '/home/TOGGLE_CREATE_POST'

const initialState = {
    notifications: [],
    isCreatePostEnabled: false,
    menu: [
        {
            name: 'Home'
        },
        {
            name: 'My Network'
        }
        ,
        {
            name: 'Jobs'
        },
        {
            name: 'Messaging'
        },
        {
            name: 'Notifications'
        },
        {
            name: 'Me',
            link: '/profile'
        }],
    menuSecondary: [{
        name: 'Work'
    }],
    user: {
        id: 1,
        username: 'john.doe@mail.com',
        fullname: 'John Doe',
        cover: '/images/cover.jpeg',
        pic: '/images/Person1.jpg',
        tagline: 'Software Engineer',
        country: 'Indonesia',
        followers: '1,151',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
            'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
            'voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        activity: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        details: [{
            type: 'education',
            text: 'International National University'
        }, {
            type: 'contact',
            text: 'See contact info'
        }, {
            type: 'people',
            text: '500+ connections'
        }
        ]
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

