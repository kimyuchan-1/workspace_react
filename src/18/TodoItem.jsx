import { useAtom } from "jotai"
import { todoAtom } from './atomsTodo'
import TailButton from "../component/TailButton";
import { useRef, useState } from "react";

export default function TodoItem({ text, completed }) {
    const [todo, setTodo] = useAtom(todoAtom);
    const txtRef = useRef();
    const [flag, setFlag] = useState(false);


    const delTodo = (e) => {
        e.preventDefault();
        setTodo(todo.filter(item => item.text != text));

    };

    const insertField = (e) => {
        e.preventDefault();
        setFlag(true);
    };

    const updateTodo = () => {
        const temp = txtRef.current.value;

        if (temp == "") {
            alert("수정할 내용을 입력하세요.");
            return;
        }

        const tm = todo.map(item => {
            if (item.text == text) {
                item.text = temp;
            }
            return item;
        });
        setTodo(tm);
        setFlag(false);

    };

    const handleCheck = () => {
        setTodo(
            prev => prev.map(item => item.text == text ? { ...item, completed: !item.completed } : item)
        );
    };

    return (
        <div className="w-full mt-4 flex flex-row items-center  
                                        py-2 h-13 " >
            <input type="checkbox" className="mx-2 w-5 h-5 cursor-pointer"
                checked={completed}
                onChange={handleCheck} />
            <div className="flex-1">{text}</div>
            {flag &&
                <div className="flex flex-col justify-between items-center z-2 mx-2 py-4 bg-gray-50 rounded-md px-2">
                    <div>수정할 내용 : </div>
                    <input type="text" className=" px-4 py-2 h-10 bg-white
                                                  border-gray-400 border rounded-md"
                        ref={txtRef} />
                    <div className="flex flex-row">
                        <TailButton caption="저장" color="lime" onHandle={updateTodo} />
                        <TailButton caption="취소" color="orange" onHandle={() => setFlag(false)} />
                    </div>
                </div>
            }
            <TailButton caption="수정" color="lime" onHandle={insertField} />
            <TailButton caption="삭제" color="orange" onHandle={delTodo} />
        </div>

    )
}
