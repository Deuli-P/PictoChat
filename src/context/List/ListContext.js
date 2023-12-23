import React from "react";
import listReducer, { initialState } from "./listReducer"

const ListContext = React.createContext(initialState);


export const ListProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(listReducer, initialState);

    // si item pas dans la list alors isSelect = false


    const addList = (item) => {
        if ( state.list.length < 4){
            const newItem = state.list.concat(item)
            dispatch({
                type: "ADD_ITEM",
                payload: {
                    list: newItem 
                } 
            });
        }
    };

    const removeList = (item) => {
        const updateList = state.list.filter((currentItem) => currentItem.title !== item.title);
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                list: updateList
            }
        });
    }

    const clearList = () => {
        dispatch({
            type: "CLEAR_LIST",
        });
    };

    const value ={
        list: state.list,
        addList,
        removeList,
        clearList,
    };
    

    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    );
}

const useList = () =>{
    const context = React.useContext(ListContext);

    if (context === undefined) {
        throw new Error("useList must be used within a ListProvider");
    }
    return context;
} 

export default useList;