import React, { useState } from "react";
import './TaskComments.css'

export const TaskComments = ({comments}) => {
    console.log('Comentario completo:', comments)
    const filteredComments = comments.filter(comment => comment.estado !== "false");

    return(
        <table className="comment-table">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Comment</td>
                </tr>
            </thead>
            <tbody>
                {filteredComments.length > 0 ? (
                    filteredComments.map((comm, index) => (
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