// react
import { useContext } from 'react'
// context
import { TodoContext } from '@/app/providers/context/todo/todoContext'
// features
import { Task } from '@/features/Task'
// ui
import { Counter } from '@/shared/ui/Counter'
import { TasksHeader } from '@/shared/ui/TasksHeader'
import { TasksList } from '@/shared/ui/TasksList'
// styles
import cls from './ActiveTasks.module.scss'

export const ActiveTasks = () => {
	const { allTasksList, allTaskListCount } = useContext(TodoContext)

	return (
		<>
			<TasksHeader>
				Active tasks <Counter count={allTaskListCount} />
			</TasksHeader>
			<TasksList></TasksList>
		</>
	)
}
