import {ITodo} from "../../models/ITodo.ts";
import {useEffect, useState} from "react";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import {getTodos} from "../../services/api.service.ts";


const TodosComponent = () => {
    const [todo, setTodo] = useState<ITodo[]>([])
    useEffect(() => {

           getTodos().then(({todos}) => {
                setTodo(todos)
            });
    }, []);

    return (
        <div>
            {todo.map(value => <TodoComponent key={value.id} item={value}/>)}

        </div>
    );
};

export default TodosComponent;