import {useEffect, useState} from "react";
import {ITodo} from "../../../models/ITodo.ts";
import TodoComponent from "../../TodoComponent/TodoComponent.tsx";


const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then((value: ITodo[]) => {
              setTodos(value)
            });
    }, []);


    return (
        <div>
            {
                todos.map(value => <TodoComponent key={value.id} item={value}/>)
            }

        </div>
    );
};

export default TodosComponent;