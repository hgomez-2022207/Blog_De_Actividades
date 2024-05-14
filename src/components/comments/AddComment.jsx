import React, { useState } from "react";
import './AddComment.css'
import { useComment } from '../../shared/hooks';
import { Input } from '../../settings/Input.jsx';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const AddComment = ({}) => {
    const location = useLocation();
    const initialText = location.state?.initialText || '';
    const navigate = useNavigate()

    const { addComment, isLoading } = useComment();
    console.log('add',initialText)
    const [formState, setFormState] = useState({
        name: {
            value: initialText,
            isValid: false,
            showError: false
        },
        comment: {
            value: '',
            isValid: false,
            showError: false
        },})

        const handleInputValueChange = (value, field) => {
            setFormState((prevState) => ({
                ...prevState,
                [field]: {
                    ...prevState[field],
                    value
                }
            }))
        }

        const handleInputValidationOnBlur = (value, field) => {
            let isValid = false;
            switch (field) {
                case 'name':
                    isValid = value.length > 0;
                    break;
                case 'comment':
                    isValid = value.length > 0;
                    break;
                    default:
                        break;
            }
            setFormState((prevState) => ({
                ...prevState,
                [field]: {
                    ...prevState[field],
                    isValid,
                    showError: !isValid
                }
            }))
        }

        const handleAddComment = async (event) => {
            console.log("eokf")
            event.preventDefault();
            const response = await addComment(formState.name.value, formState.comment.value);
            window.location.reload();
    
        }

        const handleNavigateStart = () => {
            navigate('/')
        }

        const isSubmitButtonDisabled = isLoading || !formState.name.isValid || !formState.comment.isValid

        return (
            <div className="add-comment-container">
                <form className="add-comment-form">
                    <Input
                        field='name'
                        label='Name of work'
                        value={formState.name.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        readOnly
                        className="input-field"
                    />
                    <Input
                        field='comment'
                        label='Comment'
                        value={formState.comment.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
                        className="input-field"
                    />
                    
                    <br />
                    <br />
                    <div className="button-container">
                        <button className="add-comment-bt" onClick={handleAddComment}>
                            Add Comment
                        </button>
                        <button className="cancel-comment-bt" onClick={handleNavigateStart}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
}