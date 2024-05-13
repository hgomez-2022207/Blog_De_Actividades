import { MyAcount } from "./components/my/MyAcouunt.jsx";
import { Dashboard } from "./pages/dashboard/Dasboard.jsx";
import { AddComment } from './components/comments/AddComment.jsx'

const routes = [
    {path: '/*', element: <Dashboard />},
    {path: '/my', element: <MyAcount />},
    {path: '/comments', element: <AddComment />}
]

export default routes;