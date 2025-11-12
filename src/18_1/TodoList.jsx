import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useState, useEffect } from "react";

export default function TodoList() {
    //const todo = useAtomValue(todoAtom);
    //let completed = useAtomValue(completedAtom);
    //let imcompleted = useAtomValue(imcompletedAtom);
    const [ todos, setTodos ] = useState([]);
    const [ completed, setCompleted ] = useState(0);
    const [ imcompleted, setImcompleted ] = useState(0);
    const [ itemTags, setItemTags ] = useState([]);

    const handleLocalSave = (todos) => {
        localStorage.setItem("todo",JSON.stringify(todos));
        setTodos(todos);
    };

    useEffect(()=>{
        /*
        const newItem = [
            {
            id: 1,
            text: "React 공부",
            completed: false
            },
            {
            id: 2,
            text: "Next.js 공부",
            completed: false
            },
        ];
        */
        //localStorage.setItem("todo",JSON.stringify(newItem)); // 자바스크립트 객체를 문자열로 변경
        const temp = JSON.parse(localStorage.getItem("todo")); // 문자열을 자바스크립트 배열로 변경
        console.log(temp);
        setTodos(temp);
    },[]);

    useEffect(()=>{
        const c = todos.filter(item => item.completed == true).length;
        const ic = todos.filter(item => item.completed == false).length;
        const temp = todos.map(item => <TodoItem key = {item.id} 
                                         id = {item.id} 
                                         text = {item.text} 
                                         completed ={item.completed}
                                         todos = {todos}
                                         setTodos = {handleLocalSave}/>);
        setItemTags(temp);
        setCompleted(c);
        setImcompleted(ic);
        
    },[todos]);


    return (
        <div className='w-49/50 flex flex-col justify-center items-center'>
            <div className='w-full max-w-3xl flex flex-col justify-center items-center py-4'>
                <div className='flex justify-center items-center text-3xl font-bold pb-4 text-center'>To do list</div>
                <div className='w-full px-4 py-2 bg-amber-100 rounded-md'>
                    전체 : {todos.length}개 | 완료 : {completed}개 | 미완료 : {imcompleted}개
                </div>
            </div>
            <div className='w-full max-w-3xl flex flex-col justify-center items-center'>
            <TodoInput todos={todos} setTodos={handleLocalSave} />
            {itemTags}
            </div>
        </div>
    )
}
