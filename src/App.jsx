import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";

function App() {
    return (
        <div className="bg-zinc-900 h-screen">
            <div className="container mx-auto">
                <h1 className="text-5xl font-bold text-center py-5 text-white">
                    Mis tareas
                </h1>
                <TaskForm />
                <TaskList />
            </div>
        </div>
    );
}

export default App;
