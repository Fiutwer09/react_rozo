import React, {useContext, useEffect} from "react";
import './InfoTasks.css'
import { taskContext } from "../../Components/Context/Context";
export const InfoTasks = () => {

    const context = useContext(taskContext)

    useEffect(() => {

        let pending = context.tasks.filter( tasks => tasks.status === false)
        let resolve = context.tasks.filter( tasks => tasks.status === true)

        context.setPendingTask(pending.length)
        context.setDoneTaks(resolve.length)
    },[context.tasks])


    return (
        <>
        <h2 className="info-tasks">Usted tiene <span className="task-pending">{context.pendingTask}</span> Pendientes y <span className="task-done">{context.doneTaks}</span> terminadas</h2>
        </>
    )
}