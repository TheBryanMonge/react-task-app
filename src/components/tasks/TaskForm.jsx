import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        createTask(title, description);

        setTitle("");
        setDescription("");
    };

    return (
        <>
            <h2 className="text-2xl font-semibold text-white mb-3">
                Agregar una nueva tarea
            </h2>
            <form className="flex gap-2 mb-7" onSubmit={handleSubmit}>
                <input
                    className="text-white bg-zinc-800 rounded-lg border border-zinc-700 p-2 focus:outline-none focus:outline-zinc-400"
                    type="text"
                    id="title"
                    placeholder="Titulo de la tarea"
                    value={title}
                    autoFocus
                    onInput={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="text-white bg-zinc-800 rounded-lg border border-zinc-700 p-2 focus:outline-none focus:outline-zinc-400"
                    id="description"
                    placeholder="Descripción de la tarea"
                    value={description}
                    onInput={(e) => setDescription(e.target.value)}
                ></textarea>
                <input
                    className="bg-blue-500 px-3 py-2 rounded-lg text-white font-semibold uppercase hover:bg-blue-400 cursor-pointer focus:outline-none focus:outline-blue-400"
                    type="submit"
                    id="submit"
                    value="Guardar"
                />
            </form>
        </>
    );
}

export default TaskForm;
