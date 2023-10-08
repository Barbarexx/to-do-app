// styles
import cls from './WorkTasks.module.scss'
// modules
import { TasksHeader } from '@/shared/ui/TasksHeader'
import { Input } from '@/shared/ui/Input'
import { TasksList } from '@/shared/ui/TasksList'
import { Task } from '@/features/Task'

export const WorkTasks = () => {
	return (
		<>
			<TasksHeader>Work category</TasksHeader>
			<Input categoryName="Work" />
			<TasksList>
				<Task />
				<Task />
			</TasksList>
		</>
	)
}
