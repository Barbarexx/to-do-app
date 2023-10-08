// styles
import cls from './SportTasks.module.scss'
// modules
import { TasksHeader } from '@/shared/ui/TasksHeader'
import { Input } from '@/shared/ui/Input'
import { TasksList } from '@/shared/ui/TasksList'
import { Task } from '@/features/Task'

export const SportTasks = () => {
	return (
		<>
			<TasksHeader>Sport category</TasksHeader>
			<Input categoryName="Sport" />
			<TasksList>
				<Task />
				<Task />
			</TasksList>
		</>
	)
}
