// 콜백함수를 매개변수로 받는 배열 내장함수들

const people = [
    {
        name: "홍길동",
        age: 20
    },
      {
        name: "김길동",
        age: 60
    },
      {
        name: "정길동",
        age: 40
    },
      {
        name: "박길동",
        age: 30
    },
]

// 1. forEach((배열에서 꺼내온 요소, 인덱스) => {})
// 반복용, 인덱스는 선언하지 않아도 상관없음.
// 리턴x
people.forEach((person, idx) => {
    console.log(`${idx}번: ${person.name}`)
});

// 2. filter((배열에서 꺼내온 요소, 인덱스) => {})
// 배열에서 조건에 맞는 요소만 남기고 제거(기존 배열은 유지)
// 리턴 존재 : boolean

const adults = people.filter((person) => {
    return person.age > 20;
});
console.log(adults);

// 3. map((배열에서 꺼내온 요소, 인덱스) => {})
// 배열의 각 요소들을 조작
// 리턴으로 여러가지 가능
const peopleWithNim = people.map((person) => {
    const addNim = {
        name: person.name + "님",
        age: person.age
    };
    return addNim;
})
console.log(peopleWithNim);

// 4. 정렬 sort((pre, next) => {pre - next})
// 원본이 정렬 됨.
// 리턴이 존재 리턴의 결과가 양수, 음수, 0
// pre > next : 양수 -> next가 index 앞으로
// pre < next : 음수 -> prev가 index 앞으로
// 0 : 순서유지

// 나이순 정렬 오름차순
people.sort((p1, p2) => { return p1.age - p2.age});
console.log(people);
// 나이순 정렬 내림차순
people.sort((p1, p2) => { return p2.age - p1.age});
console.log(people);