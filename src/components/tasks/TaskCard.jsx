import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);

    return (
        <div
            className="flex flex-col gap-3 bg-zinc-700 p-5 rounded-lg border border-zinc-600"
            key={task.id}
        >
            <h2 className="text-2xl font-bold capitalize text-white">
                {task.title ? task.title : "Tarea sin titulo"}
            </h2>
            <p className="first-letter:capitalize text-zinc-300">
                {task.description ? task.description : "Sin descripción"}
            </p>
            <button
                className="bg-red-500 px-3 py-2 rounded-lg text-white uppercase font-semibold hover:bg-red-400 focus:outline-none focus:outline-red-400"
                onClick={() => deleteTask(task.id)}
            >
                Eliminar tarea
            </button>
        </div>
    );
}

export default TaskCard;
