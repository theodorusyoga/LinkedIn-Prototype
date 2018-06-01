import moment from 'moment'

export const TOGGLE_SEARCH_BOX = '/search/TOGGLE_SEARCH_BOX'

const initialState = {
    isSearchBoxShown: false
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

