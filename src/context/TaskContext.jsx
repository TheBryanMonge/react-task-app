import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(title, description) {
        const task = {
            id: tasks.length,
            title,
            description,
        };

        setTasks([...tasks, task]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter((t) => t.id !== id));
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
