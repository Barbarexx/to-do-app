// styles
import cls from './LeisureTasks.module.scss'
// modules 
import { TasksHeader } from '@/shared/ui/TasksHeader'
import { Input } from '@/shared/ui/Input'
import { TasksList } from '@/shared/ui/TasksList'
import { Task } from '@/widgets/Task'


export const LeisureTasks = () => {
    return (
        <>
            <TasksHeader>Leisure category</TasksHeader>
            <Input categoryName='Leisure' />
            <TasksList>
                <Task />
                <Task />
            </TasksList>
        </>
    )
}