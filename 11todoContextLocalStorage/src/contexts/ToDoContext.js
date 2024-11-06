import { createContext, useContext } from "react";

//context provides a way to pass data through the component tree without having to pass 
//props manually at every level. It's especially useful for globally accessible data that 
//many components need

//in this context we have methods and values
export const TodoContext = createContext({
    //values
    todos : [
        {
            id : 1,
            todo : "Todo msg",
            completed : false
        }
    ],
    //functionalities adding
    addToDo : (todo) => {},
    updateToDo : (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {} 
})


export const useToDo = () => {
    return useContext(TodoContext)
}

export const ToDoProvider = TodoContext.Provider