import React from 'react';
import '../stylesheets/Mytasks.css';
import { AiOutlineCloseSquare } from "react-icons/ai";

function Mytask({ id, text, completed, taskCompleted,taskRemoved }){
    return(
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div 
                className='text-task'
                onClick={() => taskCompleted(id)}>
                {text}
            </div>
            <div className='icon-task-container'
                onClick={() => taskRemoved(id)}>
                <AiOutlineCloseSquare className='task-icon'/>
            </div>
        </div>
    )
}

export default Mytask;