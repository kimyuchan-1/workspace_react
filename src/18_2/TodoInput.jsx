import TailButton from "../component/TailButton";
import { useRef } from "react";

export default function TodoInput({getTodos}) {
    const txtRef = useRef();

    const baseUrl = import.meta.env.VITE_SUPABASE_URL;
    const apiKey = import.meta.env.VITE_SUPABASE_API;
    let url = `${baseUrl}/rest/v1/todos`;

    const insertTodo = async () => {
        const temp = txtRef.current.value;

        if (temp == "") {
            alert("할 일을 입력하세요.");
            txtRef.current.focus();
            return;
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "apikey": apiKey,
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text : temp, completed : false}),
        });

        if (response.ok) {
            getTodos();
            txtRef.current.value = "";
            txtRef.current.focus();
        } else {
            console.error("Error inserting todo: ", response.statusText);
        }

    };

    return (
        <div className="w-full flex flex-row justify-between items-center">
            <input className="flex-1 h-10 border rounded-md 
                                  px-4 py-2 border-gray-400"
                type='text' placeholder="새로운 할 일을 입력하세요." ref={txtRef} />
            <TailButton caption="추가" color="blue" onHandle={insertTodo} />
        </div>
    )
}
