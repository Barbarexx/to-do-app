// styles
import cls from './Input.module.scss'

export const Input = ({categoryName})=>{
    return (
        <input className={cls.input} placeholder= {`Add a new task inside '${categoryName}' category`} type="text" />
    )
}