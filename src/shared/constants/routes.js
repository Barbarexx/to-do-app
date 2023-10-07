import { routeConfig } from "@/app/config/routeConfig/routeConfig";

export const getAllTasksRoute = () => routeConfig.allTasks
export const getActiveTasksRoute = () => routeConfig.activeTasks
export const getCompletedTasksRoute = () => routeConfig.completedTasks

export const getTaskCategoryWorkRoute = () => routeConfig.taskCategoryWork
export const getTaskCategorySportRoute = () => routeConfig.taskCategorySport
export const getTaskCategoryLeisureRoute = () => routeConfig.taskCategoryLeisure
