import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const taskContext = createContext();

const tsk = [
    {id : uuidv4(), title: 'Tarea de ejemplo 1', descripcion: 'Descripción pendiente 1', status: false},
    {id : uuidv4(), title: 'Tarea de ejemplo 2', descripcion: 'Descripción pendiente 2', status: true},
    {id : uuidv4(), title: 'Tarea de ejemplo 3', descripcion: 'Descripción pendiente 3', status: false},
    {id : uuidv4(), title: 'Tarea de ejemplo 4', descripcion: 'Descripción pendiente 4', status: true}
]

export const TaskProvider = ({children}) => {

    const [tasks, setTasks] = useState(tsk);
    const [filteredTask, setFilteredTask] = useState(tsk);
    const [pendingTask,setPendingTask] = useState(0);
    const [doneTaks,setDoneTaks] = useState(0);


    // Función para actualizar el estado de la tarea 
    const updateTaskStatus = (taskId, newStatus) => {
        setTasks(prevTask =>
            prevTask.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    }

    return( 
        <taskContext.Provider value={{ 
            tasks, 
            setTasks, 
            pendingTask,
            setPendingTask,
            doneTaks,
            setDoneTaks,
            filteredTask, 
            setFilteredTask,
            updateTaskStatus
        }}>
            {children}
        </taskContext.Provider>
    )
}
