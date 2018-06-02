import moment from 'moment'

export const DEFAULT_ACTION = '/timeline/DEFAULT_ACTION'

const initialState = {
    timeline : [
        {
            likes: 3,
            date: moment('2018/06/01', 'YYYY/MM/DD').fromNow(),
            user: {
                id: 1,
                fullname: 'John Doe',
                image: '/images/Person1.jpg',
                tagline: 'Software Engineer'
            },
            content: {
                type: 'link',
                image: '/images/Timeline1.jpeg',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'test.website.com'
            }
        },
        {
            likes: 100,
            date: moment('2018/05/31', 'YYYY/MM/DD').fromNow(),
            user: {
                id: 2,
                fullname: 'Allen Smith',
                image: '/images/Person2.jpg',
                tagline: 'Software Tester'
            },
            content: {
                type: 'text',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            }
        },
        {
            likes: 10,
            date: moment('2018/05/26', 'YYYY/MM/DD').fromNow(),
            user: {
                id: 3,
                fullname: 'Alan Wright',
                image: '/images/Person3.jpg',
                tagline: 'Project Manager'
            },
            content: {
                type: 'link',
                image: '/images/Timeline2.jpeg',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'test.website.com'
            }
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DEFAULT_ACTION:
            return {
                ...state
            }
        default: return state
    }
}

