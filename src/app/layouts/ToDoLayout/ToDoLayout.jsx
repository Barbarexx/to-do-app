// react 
import { Outlet } from 'react-router-dom'
// modules
import { Aside } from '@/widgets/Aside'
// styles
import cls from './ToDoLayout.module.scss'
//providers
import { ToDoProvider } from '@/app/providers/context/todo/todoProvider'

export const ToDoLayout = ()=>{
    return (
        <ToDoProvider>
        <div className={cls.ToDoLayout}>
            <Aside/>
            <div className={cls.ToDoContent}><Outlet/></div>
        </div>
        </ToDoProvider>
    )
}