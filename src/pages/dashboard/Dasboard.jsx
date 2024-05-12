import {useState, useEfect} from "react";
import { Navbar } from "../../components/navar/Navar";
import './dashboard.css'

export const Dashboard = () => {

    const [showAddTask] = useState(false)

    return(
        <div className="dashboard-container">
            {!showAddTask && (
                <Navbar /> 
            )}
        </div>
    )
}