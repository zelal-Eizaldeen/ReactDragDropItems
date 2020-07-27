import * as actionTypes from '../actions/actions';

const initialState  = {
    icons: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM:
            return {

            }

            case actionTypes.REMOVE_ITEM:
                return {

                }
    }
};

export default reducer;