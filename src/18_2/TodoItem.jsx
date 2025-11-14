import TailButton from "../component/TailButton";
import { useState } from "react";

export default function TodoItem({ id, text, completed, getTodos }) {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(text);

    const baseUrl = import.meta.env.VITE_SUPABASE_URL;
    const apiKey = import.meta.env.VITE_SUPABASE_API;
    let url = `${baseUrl}/rest/v1/todos`;


    const delTodo = async () => {
        const response = await fetch(`${url}?id=eq.${id}`, {
            method: "DELETE",
            headers: {
                "apikey": apiKey,
                "Authorization": `Bearer ${apiKey}`,
            },
        });

        if (response.ok) {
            getTodos();
        } else {
            console.error("Error deleting todo: ", response.statusText);
        }

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

    const updateTodo = async() => {
        const temp = value;

        if (temp == "") {
            alert("수정할 내용을 입력하세요.");
            return;
        }

        const response = await fetch(`${url}?id=eq.${id}`, {
            method: "PATCH",
            headers: {
                "apikey": apiKey,
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text:temp})
        });

        if (response.ok) {
            getTodos();
            setIsEdit(false);
        } else {
            console.error("Error updating todo: ", response.statusText);
        }

    };

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleCheck = async () => {
        const response = await fetch(`${url}?id=eq.${id}`, {
            method: "PATCH",
            headers: {
                "apikey": apiKey,
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({completed: !completed})
        });

        if (response.ok) {
            getTodos();
        } else {
            console.error("Error toggling todo: ", response.statusText);
        }
    };

    return (
        <div className="w-full">
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
