import { MyAcount } from "./components/my/MyAcouunt.jsx";
import { Dashboard } from "./pages/dashboard/Dasboard.jsx";

const routes = [
    {path: '/*', element: <Dashboard />},
    {path: '/my', element: <MyAcount />}
]

export default routes;