// styles
import cls from './Button.module.scss'

export const Button = ({ children, onClick, disabled }) => {
	return (
		<button disabled={disabled} className={cls.button} onClick={onClick}>
			{children}
		</button>
	)
}
