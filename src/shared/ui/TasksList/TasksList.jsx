// styles
import cls from './TasksList.module.scss'

export const TasksList = ({ children }) => {
	return <div className={cls.tasksList}>{children}</div>
}
