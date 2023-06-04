import { useState } from "react";
import ListItem from "./ListItem";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (e) => {
        // console.log(todo);
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>

            <ul>
                {todoList.map((item, index) => (
                    // <h3 key={index}>{item}</h3>
                    <ListItem key={index} name={item}></ListItem>

                ))}
            </ul>
        </div>


    )
}
