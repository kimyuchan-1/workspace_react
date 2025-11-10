import TailButton from "../component/TailButton";
import { useAtom } from "jotai";
import { todoAtom } from "./atomsTodo";
import { useRef } from "react";

export default function TodoInput() {
    const [todo, setTodo] = useAtom(todoAtom);
    const txtRef = useRef();

    const insertTodo = (e) => {
        e.preventDefault();
        const temp = txtRef.current.value;

        if (temp == "") {
            alert("할 일을 입력하세요.");
            return;
        }

        const tm = [...todo , { id: Date.now(), text: temp, completed: false }]
        setTodo(tm);
        txtRef.current.value = "";
        txtRef.current.focus();
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
