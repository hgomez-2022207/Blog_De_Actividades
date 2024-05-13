import { MyAcount } from "./components/my/MyAcouunt.jsx";
import { Dashboard } from "./pages/dashboard/Dasboard.jsx";
import { TaskComments } from './components/comments/TaskComments.jsx'

const routes = [
    {path: '/*', element: <Dashboard />},
    {path: '/my', element: <MyAcount />},
    {path: '/comments', element: <AddComment />}
]

export default routes;