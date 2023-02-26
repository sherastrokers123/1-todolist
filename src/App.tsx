import React, { useState } from 'react';
import './App.css';
import { TodolistComponent } from './components/TodolistComponent';

function App() {

    const title1 = "First Title";

    // let tasks = [
    //     { id: 1, title: "HTML & CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "REACT JS", isDone: false },
    //     { id: 4, title: "ANGULAR JS JS", isDone: false },
    // ]

    let [tasks, setTasks] = useState([
        { id: 1, title: "HTML & CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "REACT JS", isDone: false },
        { id: 4, title: "ANGULAR JS JS", isDone: false },
    ])

    // 1 функция
    const taskRemoveFunc = (taskID: number) => {
        // tasks = tasks.filter(taskElem => taskElem.id !== taskID) // можно оставить а можно запихнуть в сеттаскс // функция начинается с того что мы сетаем и кладем туда результат фильтрации 
        setTasks(tasks.filter((taskElem) => taskElem.id !== taskID))
    }

    // let durshlag = tasks
    // durshlag = tasks.filter((taskElem) => !taskElem.isDone);
    // console.log(durshlag);

    let [filtedButtonName, setFiltedButtonName] = useState('All')

    let durshlag = tasks;

    if (filtedButtonName === 'Active') {
        durshlag = tasks.filter((taskElem) => !taskElem.isDone);
    }
    if (filtedButtonName === 'Completed') {
        durshlag = tasks.filter((taskElem) => taskElem.isDone);
    }


    const filteredCurrentTasks = (nameButton: string) => {
        setFiltedButtonName(nameButton);
    }

    return (
        <div className="App">
            <TodolistComponent
                title={title1}
                tasks={durshlag}
                taskRemoveFunc={taskRemoveFunc}
                filteredCurrentTasks={filteredCurrentTasks}
            />
        </div>
    );
}

export default App;
