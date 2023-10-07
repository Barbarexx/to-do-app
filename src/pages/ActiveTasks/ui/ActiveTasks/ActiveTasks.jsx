// react
import { useContext } from 'react'
// context
import { TodoContext } from '@/app/providers/context/todo/todoContext'
// modules 
import { TasksHeader } from '@/shared/ui/TasksHeader'
import { TasksList } from '@/shared/ui/TasksList'
import { Task } from '@/widgets/Task'
// styles
import cls from './ActiveTasks.module.scss'

export const ActiveTasks = () => {
    const { allTasksList } = useContext(TodoContext)

    return (
        <>
            <TasksHeader>Active tasks</TasksHeader>
            <TasksList>
                {allTasksList.map((task)=>task.completed ? null : <Task key={task.id}>{task.value}</Task>)}
            </TasksList>
        </>
    )
}