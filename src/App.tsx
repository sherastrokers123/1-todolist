import { TodoList } from './TodoList';
import './App.css';

function App() {
    const title = 'What to learn?';

    const task1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
    ]
    const task2 = [
        { id: 1, title: "Hello World", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false },
        { id: 4, title: "Yo", isDone: true },
        { id: 5, title: "Yos", isDone: false },
        { id: 6, title: "Yosh", isDone: false },
        { id: 7, title: "Yoshi", isDone: false },
        { id: 8, title: "Alisher", isDone: false },
    ]
    return (
        <div className="App">
            <TodoList title={title} tasks={task1} />
            <TodoList title={"hello"} tasks={task2} />
        </div>
    );
}

export default App;