import React, {useState, useEfect} from "react";
import { TaskWOrk } from '../../components/TaskWork'
import './dashboard.css'

export const Dashboard = () => {

    const [showAddTask, setShowAddTask] = useState(false)

    return(
        <div className="dashboard-container">
            {!showAddTask && (
                <TaskWOrk /> 
            )}
        </div>
    )
}