import {ITodo} from "../../models/ITodo.ts";
type TodoType={
    item:ITodo
}

const TodoComponent = ({item}:TodoType) => {
    return (

        <div>
            <h3>{item.title}</h3>

        </div>
    );
};

export default TodoComponent;