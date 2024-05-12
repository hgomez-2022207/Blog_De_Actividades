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
            <div className="cards-container">
                <h1>Taller</h1>
                <br />
                <div class="card">
                    <div class="card__content">
                        <span color="white"><a href="https://github.com/hgomez-2022207/Taller_Laboratorio_1.git">BI Mas sobre mi</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://github.com/hgomez-2022207/API_Vespertina.git">Tienda de mascotas</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Business_Manager_2022207.git">Gestor de Empresas</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Proyecto_6BI.git">Proyecto Bimestral</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://cetkinal-my.sharepoint.com/:b:/g/personal/hgomez-2022207_kinal_edu_gt/EX-SmEpZNhVHuQgQfTwZuyAB25MXTuEP3GghL7SDrH5crQ?e=dAv13f">Hacker Rank</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://cetkinal-my.sharepoint.com/:w:/g/personal/hgomez-2022207_kinal_edu_gt/ESYYlb2a5RBCqR961Y3iVOMBgnOdzh03AsTefgzshQIgXw?e=bTbF0F">Gestor de Hoteles</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Proyecto_6BI.git">Proyecto Bimestral</a></span>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                <h1>Practica Supervisada</h1>
                <br />
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Git_101.git">Contactos</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://github.com/hgomez-2022207/PS_Control_Academico.git">Control Academico</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Opinion_Manager.git">Opinion Manager</a></span>
                    </div>
                </div>

                <div class="card">
                    <div class="card__content">
                        <span color="white"><a href="https://cetkinal-my.sharepoint.com/:b:/g/personal/hgomez-2022207_kinal_edu_gt/ESPJxSUrI1ZIj1qlg8cw0JkBztr6m24Vwb94_LOWu0-AmA?e=B9yBa2">Exposicion Grupal</a></span>
                    </div>
                </div>
                <div class="card">
                    <div class="card__content">
                    <span color="white"><a href="https://cetkinal-my.sharepoint.com/:b:/g/personal/hgomez-2022207_kinal_edu_gt/EUq015JdwGNPuL3ucV90YbUB55HuzWNjcymOYtajzmJ40A?e=VBkgsJ">Almacenadora</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}