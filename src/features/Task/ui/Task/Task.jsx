// react
import { useState } from 'react'
// hooks
import { useTodoContext } from '@/shared/hooks/useTodoContext'
// ui
import { Checkbox } from '@/shared/ui/Checkbox'
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
// styles
import cls from './Task.module.scss'
// img
import trash from './img/trash.svg'

export const Task = ({ text, id }) => {
	const [updatedTodoText, setUpdatedTodoText] = useState(text)

	const [isEditing, setIsEditing] = useState(false)

	const onButtonSetIsEditing = () => {
		setIsEditing(true)
	}

	const onUpdatedTodoTextChange = (e) => {
		setUpdatedTodoText(e.target.value)
	}

	const { deleteTodo, updateTodo } = useTodoContext()

	const onButtonDeleteTodo = () => {
		deleteTodo(id)
	}

	const onButtonUpdateTodo = () => {
		const todo = {
			id,
			text: updatedTodoText,
		}
		updateTodo(todo)
		setIsEditing(false)
	}

	return (
		<div className={cls.task}>
			{isEditing ? (
				<div style={{ display: 'flex' }}>
					<Input
						value={updatedTodoText}
						onChange={onUpdatedTodoTextChange}
						type={'text'}
					/>
					<Button onClick={onButtonUpdateTodo}>Save</Button>
				</div>
			) : (
				<>
					<Checkbox label={text} />
					<Button onClick={onButtonSetIsEditing}>Edit</Button>
				</>
			)}
			<button className={cls.button} onClick={onButtonDeleteTodo}>
				<img src={trash} alt="trash" />
			</button>
		</div>
	)
}
