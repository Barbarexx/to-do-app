import { useTodoContext } from '@/shared/hooks/useTodoContext'
// styles
import cls from './AllTasks.module.scss'
// features
import { TaskInput } from '@/features/TaskInput'
// ui
import { Counter } from '@/shared/ui/Counter'
import { TasksHeader } from '@/shared/ui/TasksHeader'
import { TasksList } from '@/shared/ui/TasksList'

import { Task } from '@/features/Task'

export const AllTasks = () => {
	const { allTasksList, allTaskListCount } = useTodoContext()

	return (
		<>
			<TasksHeader>
				All tasks <Counter count={allTaskListCount} />
			</TasksHeader>
			<TaskInput />
			<TasksList>
				{allTasksList.map((task) => (
					<Task key={task.id} id={task.id} text={task.text} />
				))}
			</TasksList>
		</>
	)
}
