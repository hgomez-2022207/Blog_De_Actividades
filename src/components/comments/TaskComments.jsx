import React, { useState } from "react";
import './TaskComments.css'

export const TaskComments = ({comments}) => {

    return(
        <table className="comment-table">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Comment</td>
                </tr>
            </thead>
            <tbody>
                {comments && comments.length > 0 ? (
                    comments.map((comm, index) => (
                        console.log('Comentario completo:', comm),
                    comm.estado !== "false" && (
                        <tr key={index}>
                            <td>{comm.name}</td>
                            <td>{comm.comment}</td>
                        </tr>
                    )
                    ))
                ) : (
                    
                    <tr>
                        <td colSpan="2" className="no-comments">No hay comentarios disponibles</td>
                    </tr>
                )}
                
            </tbody>
        </table>
        
    )
}