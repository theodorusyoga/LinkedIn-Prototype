export const TOGGLE_SEARCH_BOX = '/search/TOGGLE_SEARCH_BOX'

const initialState = {
    isSearchBoxShown: false,
    searchOptions: [ 'People', 'Jobs', 'Posts' ],
    searchResults: [
        { 
            id: 1,
            fullname: 'John Doe',
            pic: '/images/Person1.jpg',
            tagline: 'Software Engineer in Company.inc'
        },
        { 
            id: 2,
            fullname: 'Allen Smith',
            pic: '/images/Person2.jpg',
            tagline: 'Freelance Software Tester'
        },
        { 
            id: 3,
            fullname: 'Alan Wright',
            pic: '/images/Person3.jpg',
            tagline: 'Project Manager'
        },
    ]
}

export const showSearchBox = (isShown) => (
    { 
        type: TOGGLE_SEARCH_BOX, 
        isSearchBoxShown: isShown
    }
)

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SEARCH_BOX:
            return {
                ...state,
                isSearchBoxShown: action.isSearchBoxShown
            }
        default: return state
    }
}

