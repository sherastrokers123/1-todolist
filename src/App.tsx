import React from 'react';
import './App.css';
import { TodolistComponent } from './components/TodolistComponent';

function App() {

    const title1 = "First Title";

    const task1 = [
        { id: 1, title: "HTML & CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "REACT JS", isDone: true },
    ]


    return (
        <div className="App">
            <TodolistComponent title={title1} tasks={task1} />
        </div>
    );
}

export default App;
