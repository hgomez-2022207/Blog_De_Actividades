import React, { useState } from "react";
import './AddComment.css'
import { useComment } from '../../shared/hooks';
import { Input } from '../../settings/Input.jsx';

export const AddComment = ({}) => {

    const { addComment, isLoading } = useComment();

    const [formState, setFormState] = useState({
        name: {
            value: '',
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

        const isSubmitButtonDisabled = isLoading || !formState.name.isValid || !formState.comment.isValid

        return (
            <div className="add-comment-container">
                <form className="add-comment-form">
                    <Input
                        field='name'
                        label='Name of user'
                        value={formState.name.value}
                        onChangeHandler={handleInputValueChange}
                        type='text'
                        onBlurHandler={handleInputValidationOnBlur}
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
                        <button className="add-comment-bt" onClick={handleAddComment} disabled={isSubmitButtonDisabled}>
                            Add Comment
                        </button>
                        <button className="cancel-comment-bt" onClick={() => window.location.href = '/dashboard'}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
}