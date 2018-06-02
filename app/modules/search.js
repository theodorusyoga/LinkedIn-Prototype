export const TOGGLE_SEARCH_BOX = '/search/TOGGLE_SEARCH_BOX'

const initialState = {
    isSearchBoxShown: false,
    searchOptions: [ 'People', 'Jobs', 'Posts' ],
    searchResults: [
        { 
            id: 1,
            name: 'John Doe',
            image: '/images/Person1.jpg'
        },
        { 
            id: 2,
            name: 'Allen Smith',
            image: '/images/Person2.jpg'
        },
        { 
            id: 3,
            name: 'Alan Wright',
            image: '/images/Person3.jpg'
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

