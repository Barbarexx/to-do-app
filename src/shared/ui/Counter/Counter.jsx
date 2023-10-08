// styles
import styles from './Counter.module.scss'

export const Counter = ({ count }) => {
	return (
		<div className={styles.Counter}>
			<span className={styles.count}>{count}</span>
		</div>
	)
}
