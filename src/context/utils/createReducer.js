export const createReducer = (state = [], action, object) => {
    switch (action.type) {
        case `${object}_START_FETCHING`:
            return action.payload;
        case `${object}_LIST_SUCCESS_FETCHING`:
            return action.payload;
        case `${object}_ADD_SUCCESS`:
            const payload = action.payload;
            payload.data = [...state, action.payload.data];
            return payload;
        case `${object}_UPDATE_SUCCESS`:
            return updateState(state, action);
        case `${object}_DELETE_SUCCESS`:
            return deleteState(state, action);
        default:
            return state;
    }
};

const updateState = (state, action) => {
    const updatedItems = state.map(item => {
        if (item.id === action.id) {
            return action.payload.data;
        }
        return item
    });
    const payload = action.payload;
    payload.data = updatedItems;
    return payload;
};

const deleteState = (state, action) => {
    const items = state.filter(item => {
        return item.id !== action.id
    });
    const payload = action.payload;
    payload.data = items;
    return payload;
};
