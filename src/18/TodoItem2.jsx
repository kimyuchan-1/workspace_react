import { useAtom } from "jotai"
import { todoAtom } from './atomsTodo'
import TailButton from "../component/TailButton";
import { useState } from "react";

export default function TodoItem2({ id, text, completed }) {
    const [todo, setTodo] = useAtom(todoAtom);
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(text);


    const delTodo = (e) => {
        e.preventDefault();
        setTodo(todo.filter(item => item.id != id));

    };

    const insertField = (e) => {
        e.preventDefault();
        setIsEdit(true);
    };

    const cancelTodo = (e) => {
        e.preventDefault();
        setValue(text);
        setIsEdit(false);
    };

    const updateTodo = () => {
        const temp = value;

        if (temp == "") {
            alert("수정할 내용을 입력하세요.");
            return;
        }

        const tm = todo.map(item => {
            if (item.id == id) {
                item.text = temp;
            }
            return item;
        });
        setTodo(tm);
        setIsEdit(false);

    };

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleCheck = () => {
        setTodo(
            prev => prev.map(item => item.id == id ? { ...item, completed: !item.completed } : item)
        );
    };

    return (
        <div >
            {isEdit ?
                <div className="w-full mt-4 flex flex-row items-center py-2 h-13 ">
                    <input type="checkbox" className="mx-2 w-5 h-5 cursor-pointer" checked={completed} onChange={handleCheck} />
                    <input type="text" name = {id} value={value} className="flex-1 h-10 p-2" onChange={handleInputChange} autoFocus />
                    <TailButton caption="완료" color="lime" onHandle={updateTodo} />
                    <TailButton caption="취소" color="orange" onHandle={cancelTodo} />
                </div>
                :
                <div className="w-full mt-4 flex flex-row items-center py-2 h-13 " >
                    <input type="checkbox" className="mx-2 w-5 h-5 cursor-pointer" checked={completed} onChange={handleCheck} />
                    <div className={`flex-1 p-2 ${completed ? "line-through" : ""}`} name={id}>{text}</div>
                    <TailButton caption="수정" color="lime" onHandle={insertField} />
                    <TailButton caption="삭제" color="orange" onHandle={delTodo} />
                </div>
            }
        </div>
    )
}
