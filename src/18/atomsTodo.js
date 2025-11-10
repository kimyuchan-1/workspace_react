import {atom} from "jotai"
export const todoAtom = atom([
    {id:1, text: 'React 공부', completed: false},
    {id:2, text: 'Next.js 공부', completed: false},
]);

export const completedAtom = atom((get) => {
    const todos = get(todoAtom);
    return todos.filter(todo => todo.completed).length;
});

export const imcompletedAtom = atom((get) => {
    const todos = get(todoAtom);
    return todos.filter(todo => todo.completed == false).length;
});