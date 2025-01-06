import {useEffect, useState} from "react";
import {ITodo} from "../../../models/ITodo.ts";
import TodoComponent from "../../TodoComponent/TodoComponent.tsx";
import {getAllTodos} from "../../../services/api.service.ts";


const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        getAllTodos().then((value) => {
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