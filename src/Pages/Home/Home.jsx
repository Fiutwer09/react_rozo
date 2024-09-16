import React, { useContext } from 'react';
import { Header } from '../../Layouts/Header/Header';
import { Main } from '../../Layouts/Main/Main';
import { ItemTasks } from '../../Components/ItemTasks/ItemTasks';
import { taskContext } from '../../Components/Context/Context';
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks';
import { NewTask } from '../../Components/NewTask/NewTask';
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks';
import { FilterTask } from '../../Components/FilterTask/FilterTask';
export const Home = () => {

    const context = useContext(taskContext);

    return (
        <>
            <Header>
                <div className='container-header-1'>
                <div className='container-title'>
                <h1 className='title-header'>Gestor de Tareas</h1>
                </div>
                <div className='container-img'>
                <img  className='img-profile' src="https://i.pinimg.com/564x/2d/29/4d/2d294d0612a1a14776f872a7b07c05ec.jpg" alt='Imagen de perfil'/>
                </div>
                </div>
                <NewTask/>
                <InfoTasks/>
                <FilterTask/>
            </Header>
            <Main>
                <ContainerTasks>
                 {
                    context.filteredTask.map( task => <ItemTasks key={task.id} idTask={task.id} content={task.descripcion} titleTask={task.title}/>)
                 }
                </ContainerTasks>
            </Main>
        </>
    );
}
