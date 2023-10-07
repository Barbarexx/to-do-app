// react
import { useContext } from 'react'
// modules
import { Checkbox } from '@/shared/ui/Checkbox'
// providers
import { TodoContext } from '@/app/providers/context/todo/todoContext'
// styles
import cls from './Task.module.scss'
// img
import trash from './img/trash.svg'

export const Task = ({children})=>{
    
    const {allTasksList,updateAllTaskList} = useContext(TodoContext)

    const clickHandler = (event)=>{
        updateAllTaskList(allTasksList.toSpliced(0,1))
    }

    return (
        <div className={cls.task}>
            <Checkbox label = {children}/>
            <button className={cls.button} onClick={clickHandler}><img src={trash} alt="trash" /></button>
        </div>
    )
}