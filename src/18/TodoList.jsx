import TodoInput from './TodoInput'
import TodoItem2 from './TodoItem2'
import { useAtomValue } from "jotai"
import { completedAtom, imcompletedAtom, todoAtom } from './atomsTodo'

export default function TodoList() {
    const todo = useAtomValue(todoAtom);
    let completed = useAtomValue(completedAtom);
    let imcompleted = useAtomValue(imcompletedAtom);

    return (
        <div className='align-baseline'>
            <div className='w-full flex flex-col justify-center items-center p-4'>
                <div className='text-3xl font-bold pb-4'>To do list</div>
                <div className='w-full px-4 py-2 bg-amber-100 rounded-md'>
                    전체 : {todo.length}개 | 완료 : {completed}개 | 미완료 : {imcompleted}개
                </div>
            </div>
            <TodoInput />
            {todo.map(item => <TodoItem2 key = {item.id} 
                                        id = {item.id} 
                                        text = {item.text} 
                                        completed ={item.completed}/>)}
        </div>
    )
}
