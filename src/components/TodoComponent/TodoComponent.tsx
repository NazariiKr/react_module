import {ITodo} from "../../models/ITodo.ts";
import './TodoComponent.css';

type TodoType = {
    item: ITodo
}

const TodoComponent = ({item}: TodoType) => {
    return (
        <div className={'todo'}>
            <p>{item.id}</p>
            <h3>{item.todo}</h3>
        </div>
    );
};

export default TodoComponent;