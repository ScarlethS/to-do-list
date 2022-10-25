import React, { useState } from 'react';
import '../stylesheets/Formtask.css';
import { v4 as uuidv4 } from 'uuid';

function FormsTasks(props){

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
   };

   const handleShipment = e => {
        e.preventDefault();
        // console.log('Enviando Formulario');

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTask);
   };

    return(
        <form 
            className='form-task' 
            onSubmit={handleShipment}>
            <input 
            className='input-task' 
            type='text' 
            placeholder='Add a task' 
            name='text' 
            onChange={handleChange} />
            <button className='button-task'>
                Add Task
            </button>
        </form>
    );
}

export default FormsTasks;