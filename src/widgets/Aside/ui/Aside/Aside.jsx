// react
import { NavLink } from "react-router-dom";
//components
import { Button } from "@/shared/ui/Button";
// styles
import cls from './Aside.module.scss'
// route constants
import {
    getAllTasksRoute,
    getActiveTasksRoute,
    getCompletedTasksRoute,
    getTaskCategoryWorkRoute,
    getTaskCategorySportRoute,
    getTaskCategoryLeisureRoute,
} from '@/shared/constants/routes.js'


export const Aside = ()=>{
    return (
        <aside className={cls.aside}>
            <div className={cls.asideStatus}>
                <NavLink to={getAllTasksRoute()}>
                <Button>All</Button>
                </NavLink>
                <NavLink to={getActiveTasksRoute()}>
                <Button>Active</Button>
                </NavLink>
                <NavLink to={getCompletedTasksRoute()}>
                <Button>Completed</Button>
                </NavLink>
            </div>
            <div className={cls.asideCategories}>
            <NavLink to={getTaskCategoryWorkRoute()}>
                <Button>Work</Button>
                </NavLink>
                <NavLink to={getTaskCategorySportRoute()}>
                <Button>Sport</Button>
                </NavLink>
                <NavLink to={getTaskCategoryLeisureRoute()}>
                <Button>Leisure</Button>
                </NavLink>
            </div>
        </aside>
    )
}