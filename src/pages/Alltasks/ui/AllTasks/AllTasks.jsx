// react
import { useContext } from 'react'
// context
import { TodoContext } from '@/app/providers/context/todo/todoContext'
// styles
import cls from './AllTasks.module.scss'
// modules 
import { TasksHeader } from '@/shared/ui/TasksHeader'
import { TasksList } from '@/shared/ui/TasksList'
import { Task } from '@/widgets/Task'

export const AllTasks = () => {
    const { allTasksList } = useContext(TodoContext)

    return (
        <>
            <TasksHeader>All tasks</TasksHeader>
            <TasksList>
                {allTasksList.map((task) => {
                    return <Task key={task.id}>{task.value}</Task>
                })}
            </TasksList>
        </>
    )
}