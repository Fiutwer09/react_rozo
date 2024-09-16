import { useContext, useRef , useState } from "react"
import { taskContext } from "../Context/Context"
import { v4 as uuidv4 } from "uuid"
import './NewTask.css'

export const NewTask = () => {

    const context = useContext(taskContext)
    const [titleTask, setTitletask] = useState('')
    const [descripcionTask,setdescripcionTask] = useState('')

    const txtTitle = useRef('')
    const txtDescription = useRef('')

    const handleTitleTask = (event) =>
        setTitletask (event.target.value)

    const handleDescriptionTask = (event) => 
        setdescripcionTask (event.target.value)

    const handleCreateTask =(event) => {
        event.preventDefault()

        const newTask = {
            id : uuidv4(),
            title : titleTask,
            descripcion : descripcionTask,
            status : false
        }

        context.setTasks([...context.tasks,newTask])
        context.setFilteredTask([...context.tasks,newTask])

        txtTitle.current.value = ''
        txtDescription.current.value = ''
    }

  return (
    <form className="frm-task">
      <fieldset>
        <label htmlFor="txt-title">Título de la tarea</label>
        <input ref={txtTitle} onChange={handleTitleTask}  id= 'txt-title' placeholder="Ej:Aseo ambiente" type="text"/>
      </fieldset>
      <fieldset>
      <label htmlFor="txt-description">Descripción de la tarea</label>
      <input ref={txtDescription} onChange={handleDescriptionTask}  id= 'txt-description' placeholder="Ej:Realizar aseo del ambiente" type="text"/>
      </fieldset>
      <button onClick={handleCreateTask} className="btn-new-task">Crear nueva Tarea</button>
    </form>
  )
}


