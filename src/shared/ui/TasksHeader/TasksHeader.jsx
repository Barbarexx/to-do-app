// styles
import cls from './TasksHeader.module.scss'

export const TasksHeader = ({children}) => {
    return (
        <header className={cls.tasksHeader}>{children}</header>
    )
}