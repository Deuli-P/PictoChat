
export const initialState = {
    list: [],
    };


export default listReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_ITEM":
            return {
                ...state,
                list: payload.list,
            };
        case "REMOVE_ITEM":
            return {
                ...state,
                list: payload.list,
            };
        case "CLEAR_LIST":
            return initialState;
        default:
            throw new Error(`No case for type ${type} found in listReducer`);
    }
};