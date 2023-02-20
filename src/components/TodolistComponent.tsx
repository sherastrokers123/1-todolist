
type TodolistComponentPropsType = {
    title: string,
    tasks: TasksPropsType[]
}

type TasksPropsType = {
    id: number,
    title: string,
    isDone: boolean
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
                            <button onClick={() => console.log("HELLO")}>X</button>
                            <input type="checkbox" checked={taskObjecttFromArray.isDone} />
                            <span>{taskObjecttFromArray.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}