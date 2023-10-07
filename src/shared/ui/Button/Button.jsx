// styles
import cls from './Button.module.scss'

export const Button = ({children})=>{

    return (
        <button className={cls.button}>{children}</button>
    )
}
