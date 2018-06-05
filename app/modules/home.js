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
            text: 'International National University',
        }, {
            type: 'contact',
            text: 'See contact info'
        }, {
            type: 'people',
            text: '500+ connections'
        }
        ],
        education: {
            name: 'International National University',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
                'voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        job: {
            name: 'International Company Inc.',
            position: 'Software Engineer',
            time: '2018 - present',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
                'voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        educations: [
            {
                name: 'International University',
                position: 'Master of Science',
                time: '2013 - 2015',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                    'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
                    'voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            {
                name: 'National University',
                position: 'Bachelor of Science',
                time: '2009 - 2014',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                    'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
                    'voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }
        ],
        volunteers: [{
            name: 'Humanity Aid 2018',
            position: 'Lecturer',
            time: 'August 2017',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
                'voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },{
            name: 'Humanity Aid 2017',
            position: 'Freelance Designer',
            time: 'August 2016',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
                'voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }],
        accomplishments: [
            {
                type: 'Courses',
                count: 6,
                content: [ 'Algorithm & Programming', 'Database', 'Enterprise Application', 'Object Oriented Programming',
                    'Program Design Method', 'Web Programming']
            },
            {
                type: 'Honors & Awards',
                count: 5,
                content: [ 'Algorithm & Programming', 'Database', 'Enterprise Application', 'Object Oriented Programming',
                    'Program Design Method', 'Web Programming']
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

