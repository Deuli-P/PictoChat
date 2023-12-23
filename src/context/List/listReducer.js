
export const initialState = {
    list: [],
    };


export default listReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_ITEM":
            console.log("ADD_ITEM", payload);
            return {
                ...state,
                list: payload.list,
            };
        case "REMOVE_ITEM":
            console.log("REMOVE_ITEM", payload);
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