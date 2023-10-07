// react
import { Routes, Route } from 'react-router-dom'
// modules
import { ToDoLayout } from '@/app/layouts/ToDoLayout'
import { ActiveTasks } from '@/pages/ActiveTasks'
import { AllTasks } from '@/pages/Alltasks'
import { CompletedTasks } from '@/pages/CompletedTasks'
import { WorkTasks } from '@/pages/WorkTasks'
import { SportTasks } from '@/pages/SportTasks'
import { LeisureTasks } from '@/pages/LeisureTasks'
// route constants
import {
    getAllTasksRoute,
    getActiveTasksRoute,
    getCompletedTasksRoute,
    getTaskCategoryWorkRoute,
    getTaskCategorySportRoute,
    getTaskCategoryLeisureRoute,
} from '@/shared/constants/routes.js'

const App = () => {
    return (
        <div>
            <Routes>
                <Route element={<ToDoLayout />}>
                    <Route path={getAllTasksRoute()} element={<AllTasks />} />
                    <Route path={getActiveTasksRoute()} element={<ActiveTasks />} />
                    <Route path={getCompletedTasksRoute()} element={<CompletedTasks />} />
                    //
                    <Route path={getTaskCategoryWorkRoute()} element={<WorkTasks />} />
                    <Route path={getTaskCategorySportRoute()} element={<SportTasks />} />
                    <Route path={getTaskCategoryLeisureRoute()} element={<LeisureTasks />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App