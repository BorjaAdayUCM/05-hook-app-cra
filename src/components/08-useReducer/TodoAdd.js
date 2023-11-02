import React from 'react'

import useForm from '../../hooks/useForm'
import PropTypes from 'prop-types';

const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, handleReset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);

        handleReset();
    }


    return (
        <>
            <h4>Agregar Tarea</h4>
            <hr />

            <form onSubmit = {handleSubmit}>

                <input 
                    type = 'text'
                    name = 'description'
                    className = 'form-control'
                    placeholder = 'Aprender ...'
                    autoComplete = 'off'
                    value = {description}
                    onChange = {handleInputChange} 
                />

                <button
                    type = 'submit'
                    className = 'btn btn-outline-primary mt-1 w-100'
                >
                    Agregar
                </button>

            </form>
        </>
    )
}

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
}

export default TodoAdd;
