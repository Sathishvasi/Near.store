const initialState = {
    hideSearchBar: false,
    productListing: false
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCHBAR':
            return {
                ...state,
                hideSearchBar: action.value.hideSearchBar
            }

        case 'PRODUCT_LISTING':
            return{
                ...state,
                productListing: action.value.productListing
            }

        default:
            return state;
    }
}

export default rootReducer;