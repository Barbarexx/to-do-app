// styles
import cls from './Input.module.scss'

export const Input = ({ categoryName, type, value, onChange }) => {
	return (
		<input
			className={cls.input}
			placeholder={`Add a new task inside '${categoryName}' category`}
			type={type}
			value={value}
			onChange={onChange}
		/>
	)
}
