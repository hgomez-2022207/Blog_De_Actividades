import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {addComment as addTaskRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useComment = () => {
    const [isLoading, setIsLoading] = useState(false); 

    const navigate = useNavigate();

    const addComment = async (name, comment) => {
    setIsLoading(true);

    const response = await addTaskRequest({
        name,
        comment
    });
    
    setIsLoading(false);

    if (response.error) {
        return toast.error(
        response.e?.response?.data || 'Ocurrio un error al guardar el comentario'
        )
    }

    toast.success('Comentario guardada con éxito');
    navigate('/');
    }


    
    return{
        addComment,
        isLoading
    }
}