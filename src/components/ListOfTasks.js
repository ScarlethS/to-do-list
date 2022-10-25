import React, { useState } from 'react';
import FormsTasks from './FormTask';
import Mytask from './Mytasks';
import '../stylesheets/ListOfTasks.css';


function ListOfTasks(){

    const [tasks, setTasks] = useState ([]);

    const addTasks = task => {
        console.log(task);
        
        if (task.text.trim()){
            task.text = task.text.trim();
            const taskUpdated = [task, ...tasks];
            setTasks(taskUpdated);
        }        
    };

    const taskRemoved = id =>{
        const taskUpdated = tasks.filter(task => task.id !== id);
        setTasks(taskUpdated)
    };

    const taskCompleted = id =>{
        const taskUpdated = tasks.map(task => {
            if(task.id === id){
                task.completed = !task.completed
            }
            return task;
        })
        setTasks(taskUpdated);
    };


    return(
        <>
            <FormsTasks onSubmit={addTasks} />
            <div className='task-list-container'>
             {
                tasks.map((task) =>
                <Mytask 
                key={task.id}
                id={task.id}
                text={task.text} 
                completed={task.completed}
                taskRemoved={taskRemoved}
                taskCompleted={taskCompleted} /> )
            }
            </div>
        </>
    )
}

export  default ListOfTasks; 