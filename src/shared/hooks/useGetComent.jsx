import { useState  } from "react";
import toast from "react-hot-toast";
import { getComment as getCommentRequest } from "../../services";

export const useGetComment = () => {
    const [ comments, setComment ] = useState([]);

    const getComment = async () => {
        try{
            const commentData = await getCommentRequest();

            if(commentData.error) {
                toast.error(
                    commentData.e.response.data || 'Error al obtener al cargar comentarios'
                );
                return;
            }

            setComment(commentData.data);

            return commentData.data
        } catch (error){
            console.error('Error al cargar comentarios', error)
            toast('error al obtener comentarios')
        }
    }

    return{
        comments,
        getComment
    }
}