
export const initialState =[]



export default listReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_ITEM":{
            console.log("[REDCER] ADD state:",state);
            const newList =  [...state,payload];
            return newList
        }
        case "REMOVE_ITEM":{
            const newList = state.filter(item => item.id != payload)
            return newList
            };
        case "CLEAR_LIST":{
            const newList = initialState
            return newList;
        }   
        default:
            throw new Error(`No case for type ${type} found in listReducer`);
    }
};