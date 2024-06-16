import { useState , useReducer, useContext, createContext} from "react";
import listReducer, { initialState } from "./listReducer"
import { useDataSet } from "../DataContext";

const ListContext = createContext(initialState);


export const ListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listReducer, initialState);

    const { dataStore } = useDataSet();

    const addList = (id) => {
                const newItem = dataStore.find((item)=> item.id === id)
                console.log("[ADD LIST] newitem:",newItem);
                dispatch({
                    type: "ADD_ITEM",
                    payload: newItem 
                });
    };

    const removeList = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload:id
        });
    }

    const clearList = () => {
        dispatch({
            type: "CLEAR_LIST",
        });
    };

    const value ={
        list: state,
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
    const context = useContext(ListContext);

    if (context === undefined) {
        throw new Error("Providers manquant");
    }
    return context;
} 

export default useList;