import React, { useState } from "react";

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
                    comments.map((comment, index) => (
                    comment.estado !== "false" && (
                        <tr key={index}>
                            <td>{comment.name}</td>
                            <td>{comment.comment}</td>
                        </tr>
                    ),
                    console.log(comments)
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