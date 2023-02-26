import { useState } from "react"
import { FilteredButtonNameType } from "../App"

type TodolistComponentPropsType = {
    title: string,
    tasks: TasksPropsType[],
    taskRemoveFunc: (taskID: number) => void,
}

type TasksPropsType = {
    id: number,
    title: string,
    isDone: boolean,
}



export const TodolistComponent = (props: TodolistComponentPropsType) => {
    let [filteredButtonName, setFiltedButtonName] = useState<FilteredButtonNameType>('All')
    console.log(filteredButtonName)

    let durshlag = props.tasks;

    if (filteredButtonName === 'Active') {
        durshlag = props.tasks.filter((taskElem) => taskElem.isDone);
    }
    if (filteredButtonName === 'Completed') {
        durshlag = props.tasks.filter((taskElem) => !taskElem.isDone);
    }


    const filteredCurrentTasks = (nameButton: FilteredButtonNameType) => {
        setFiltedButtonName(nameButton);
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {durshlag.map((taskObjecttFromArray, index) => {
                    return (
                        <li key={index}>
                            {/* 4 через пропсы вызвал 2- скобки */}
                            <button onClick={() => props.taskRemoveFunc(taskObjecttFromArray.id)}>X</button>
                            <input type="checkbox" checked={taskObjecttFromArray.isDone} />
                            <span>{taskObjecttFromArray.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => filteredCurrentTasks("All")}>All</button>
                <button onClick={() => filteredCurrentTasks("Active")}>Active</button>
                <button onClick={() => filteredCurrentTasks("Completed")}>Completed</button>
            </div>
        </div>
    )
}