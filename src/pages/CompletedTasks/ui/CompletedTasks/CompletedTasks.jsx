// react
import { useContext } from 'react'
// context
import { TodoContext } from '@/app/providers/context/todo/todoContext'
// modules 
import { TasksHeader } from '@/shared/ui/TasksHeader'
import { TasksList } from '@/shared/ui/TasksList'
import { Task } from '@/widgets/Task'
// styles
import cls from './CompletedTasks.module.scss'



export const CompletedTasks = () => {

    const { allTasksList } = useContext(TodoContext)

    return (
        <>
            <TasksHeader>Completed tasks</TasksHeader>
            <TasksList>
            {allTasksList.map((task)=>task.completed ? <Task key={task.id}>{task.value}</Task> : null)}
            </TasksList>
        </>
    )
}