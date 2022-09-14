import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return (
            <h1 className="text-3xl text-center text-zinc-400 font-semibold">
                No hay tareas
            </h1>
        );
    }

    return (
        <div className="grid grid-cols-4 gap-4 ">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
