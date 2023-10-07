// react
import { useState } from "react";
// context 
import { TodoContext } from "./todoContext";

export const ToDoProvider = ({ children }) => {

    const [allTasksList, updateAllTaskList] = useState([{
        id: 0,
        value: 'Test',
        completed: false,
    },
    {
        id: 1,
        value: 'Test1',
        completed: false,
    }, {
        id: 2,
        value: 'Test2',
        completed: false,
    }
    ])

    return (
        <TodoContext.Provider value={{
            allTasksList, updateAllTaskList
        }}>{children}</TodoContext.Provider>
    )
}