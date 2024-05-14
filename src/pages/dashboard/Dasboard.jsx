import {useState, useEffect} from "react";
import { Navbar } from "../../components/navar/Navar";
import './dashboard.css'
import { getComment } from "../../services/";
import { TaskComments } from "../../components/comments/TaskComments";
import { SearchInput } from "../../settings/SearchInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const navigate = useNavigate()
    const [showAddContent, setSpanText] = useState(false)
    const [comments, setComment] = useState({ com: [] });
    const [filteredComments, setFilteredComments] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    console.log('dash',comments)
    useEffect(() => {
        const fetchComment = async () => {
          try {
            const response = await getComment();
            if (!response.error) {
              setComment(response.data || { com: [] });
            } else {
              console.error('Error al cargar los comentarios:', response.error);
            }
          } catch (error) {
            console.error('Error al cargar los comentarios:', error);
          }
        };
        fetchComment();
      }, []);

    const handleSpanClick = (text) => {
        setSpanText(text);
        console.log(text)
        navigate('/comments', { state: { initialText: text } });
    };

    useEffect(() => {
        if (Array.isArray(comments.com)) {
          const filtered = comments.com.filter(comment =>
            comment.name.toLowerCase().includes(searchValue.toLowerCase())
          );
          setFilteredComments(filtered);
        }
      }, [comments, searchValue]);
    
    const handleSearch = (value) => {
        setSearchValue(value);
    };

    return(
        <div className="dashboard-container">
            {!showAddContent && (
                <Navbar /> 
            )}
            <h1>Taller</h1>
            <div className="cards-container">
                
                <br />
                <div className="card" to='/comments'>
                    <span color="white"><a href="https://github.com/hgomez-2022207/Taller_Laboratorio_1.git">BI Mas sobre mi</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("BI Mas sobre mi")}>
                        Un pequeño repaso de lo que vimos el año pasado.
                    </button>
                </div>
                <div className="card" to='/comments'>
                    <span color="white"><a href="https://github.com/hgomez-2022207/API_Vespertina.git">Tienda de mascotas</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Tienda de mascotas")}>
                        <p>Se realiza una tenda de mascotas con cuenta de usuario e informacion de las mascotas que ofrece la tienda.</p>
                    </button>
                </div>
                <div className="card">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Business_Manager_2022207.git">Gestor de Empresas</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Gestor de Empresas")}>
                        <p>Un gesto de empresas en el cual manejabamos informacion de los productos y precios de dichas empresas.</p>
                    </button>
                </div>
                <div className="card">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Proyecto_6BI.git">Proyecto Bimestral</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Proyecto Bimestral")}>                        
                        <p>Se realizo el gesto de compras que devolvia informacion de la factura, junto con los datos del comprador.</p>
                    </button>
                </div>
                <div className="card">
                    <span color="white"><a href="https://cetkinal-my.sharepoint.com/:b:/g/personal/hgomez-2022207_kinal_edu_gt/EX-SmEpZNhVHuQgQfTwZuyAB25MXTuEP3GghL7SDrH5crQ?e=dAv13f">Hacker Rank</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Hacker Rank")}>
                        <p>Repaso de trabajos en hackerRank</p>
                    </button>
                </div>
                <div className="card">
                    <span color="white"><a href="https://cetkinal-my.sharepoint.com/:w:/g/personal/hgomez-2022207_kinal_edu_gt/ESYYlb2a5RBCqR961Y3iVOMBgnOdzh03AsTefgzshQIgXw?e=bTbF0F">Gestor de Hoteles</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Gestor de Hoteles")}>
                        <p>Trabajo en grupo que actualmente no esta terminado.</p>
                    </button>
                </div>
            </div>
            <h1>Practica Supervisada</h1>
            <div className="cards-container">
                
                <br />
                <div className="card">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Git_101.git">Contactos</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Gestor de Hoteles")}>
                        <p>Por medio de html hariamos una pagina que registre los contactos.</p>
                    </button>
                </div>
                <div className="card">
                    <span color="white"><a href="https://github.com/hgomez-2022207/PS_Control_Academico.git">Control Academico</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Gestor de Hoteles")}>
                        <p>Una aplicacion que maneje los cursos de los profesores y los estudiantes.</p>
                    </button>
                </div>
                <div className="card">
                    <span color="white"><a href="https://github.com/hgomez-2022207/Opinion_Manager.git">Opinion Manager</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Gestor de Hoteles")}>
                        <p>Una aplicacion en la cual se harian publicaciones y se darian opiniones.</p>
                    </button>
                </div>

                <div className="card">
                    <span color="white"><a href="https://cetkinal-my.sharepoint.com/:b:/g/personal/hgomez-2022207_kinal_edu_gt/ESPJxSUrI1ZIj1qlg8cw0JkBztr6m24Vwb94_LOWu0-AmA?e=B9yBa2">Exposicion Grupal</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Exposicion Grupal")}>
                        <p>Nada de programacion, solo una exposicion en grupo.</p>
                    </button>
                </div>
                <div className="card">
                    <span color="white"><a href="https://cetkinal-my.sharepoint.com/:b:/g/personal/hgomez-2022207_kinal_edu_gt/EUq015JdwGNPuL3ucV90YbUB55HuzWNjcymOYtajzmJ40A?e=VBkgsJ">Almacenadora</a></span>
                    <button className="card__content" onClick={() => handleSpanClick("Gestor de Hoteles")}>
                        <p>Un trabajo en react que almacena la informacion de tareas con sus fechas de inicio y vencimiento.</p>
                    </button>
                </div>
            </div>
            {!showAddContent && (
                <SearchInput placeholder="Search comments" onSearch={handleSearch} />
            )}
            {searchValue.trim() === '' ? (
                    <TaskComments comments={comments.com} /> 
                  ) : (
                    <TaskComments comments={filteredComments} />
                  )}
        </div>
    )
}