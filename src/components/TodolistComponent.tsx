

type TodolistComponentPropsType = {
    title: string,
    tasks: TasksPropsType[],
    taskRemoveFunc: (taskID: number) => void,
    filteredCurrentTasks: (nameButton: string) => void,

}

type TasksPropsType = {
    id: number,
    title: string,
    isDone: boolean,
}



export const TodolistComponent = (props: TodolistComponentPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((taskObjecttFromArray, index) => {
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
                <button onClick={() => props.filteredCurrentTasks("All")}>All</button>
                <button onClick={() => props.filteredCurrentTasks("Active")}>Active</button>
                <button onClick={() => props.filteredCurrentTasks("Completed")}>Completed</button>
            </div>
        </div>
    )
}