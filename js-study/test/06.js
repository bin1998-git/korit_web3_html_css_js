/*
`https://jsonplaceholder.typicode.com/todos/${todoId}` 
fetch하는 함수 (getTodo)

todo id 1,2,3,4,5 인 todo의 데이터들을 []담아서 출력!
*/

const getTodo = async (todoId) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`
    let todo = await fetch(url);
    todo = await todo.json();

    return todo;
}


let todos = [];
for (let i = 1; i < 6; i++) {
    // await은 코드진행을 함수가 완료될때까지 멈춤
    const todo = await getTodo(i);
    todos = [...todos, todo];
}

console.log(todos);

// 병령진행을 시켜야 할떄?
// Promise.all([promise객체1, promise객체2])
// -> 각 promise객체들이 병렬로 실행됨

const todoIds = [1, 2, 3, 4, 5];
// [gettodo(1), gettodo(2)..., gettodo(5)]
const todoPromises = todoIds.map((id) => {
    return getTodo(id);
});

todos = await Promise.all(todoPromises);
console.log(todos.map((todo) => {
    return todo.title;
}));