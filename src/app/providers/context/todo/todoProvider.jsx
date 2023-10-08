// react
import { useState } from 'react'
// context
import { TodoContext } from './todoContext'

export const ToDoProvider = ({ children }) => {
	const [allTasksList, setAllTaskList] = useState([])

	const completedTask = allTasksList.filter((task) => task.completed)

	const uncompletedTask = allTasksList.filter((task) => !task.completed)

	// tasks count

	const allTaskListCount = allTasksList.length

	const completedTaskCount = completedTask.length

	const uncompletedTaskCount = uncompletedTask.length

	const addTodo = (todo) => {
		const todosWithNewTodo = [...allTasksList, todo]
		setAllTaskList(todosWithNewTodo)
	}

	const deleteTodo = (id) => {
		const todosWithDeletedTodo = allTasksList.filter((todo) => todo.id !== id)
		setAllTaskList(todosWithDeletedTodo)
	}

	const updateTodo = (updatedTodo) => {
		const todosWithUpdatedTodo = allTasksList.map((todo) => {
			return todo.id === updatedTodo.id ? { ...updatedTodo } : todo
		})
		setAllTaskList(todosWithUpdatedTodo)
	}

	return (
		<TodoContext.Provider
			value={{
				allTasksList,
				completedTask,
				uncompletedTask,
				allTaskListCount,
				completedTaskCount,
				uncompletedTaskCount,
				deleteTodo,
				addTodo,
				updateTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}
