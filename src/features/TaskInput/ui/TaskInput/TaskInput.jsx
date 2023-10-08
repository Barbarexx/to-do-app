// react
import { useState } from 'react'
// hooks
import { useTodoContext } from '@/shared/hooks/useTodoContext'
// libs
import { v4 as uuidv4 } from 'uuid'
// ui
import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
// styles
import styles from './TaskInput.module.scss'

export const TaskInput = ({}) => {
	const { addTodo } = useTodoContext()

	const [todoText, setTodoText] = useState('')

	const onTodoTextChange = (e) => {
		setTodoText(e.target.value)
	}

	const onButtonAddTodo = () => {
		const todo = {
			id: uuidv4(),
			text: todoText,
		}
		addTodo(todo)
		setTodoText('')
	}

	return (
		<div className={styles.TaskInput}>
			<Input value={todoText} onChange={onTodoTextChange} type={'text'} />
			<Button disabled={!todoText.trim()} onClick={onButtonAddTodo}>
				Add Todo
			</Button>
		</div>
	)
}
