const initialState = {
    hideSearchBar: false,
    productListing: false,
    storeTitle: 'Default store'
};

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case 'STORE':
            return {
                ...state,
                hideSearchBar: action.value.hideSearchBar,
                    storeTitle: action.value.storeTitle,
                    productListing: action.value.productListing
            }

            default:
                return state;
    }
}

export default rootReducer;