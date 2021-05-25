const SET_TEXT = 'SET_TEXT';
const CLEAR_TEXT = 'CLEAR_TEXT';

const textReducer = (state,action) => {
    switch(action.type) {
        case SET_TEXT:
            return Object.assign(
                {}, state, {text: action.payload}
            );
        case CLEAR_TEXT:
            return Object.assign(
                {}, state, {text: ""}
            );
        default:
            return state;
    }
}

export default textReducer;