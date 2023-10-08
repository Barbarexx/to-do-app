// styles
import cls from './Checkbox.module.scss'

export const Checkbox = ({ label }) => {
	return (
		<div className={cls.taskContent}>
			<input className={cls.checkbox} type="checkbox" />
			<label className={cls.label}> {label} </label>
			<div className={cls.category}>Uncategorized</div>
		</div>
	)
}
