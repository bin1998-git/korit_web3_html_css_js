// 연산자
// 사칙연산자, 대입연산자, 삼항연산자.. 자바와 동일

// 비교연산자
let num1 = 10;
let num2 = "10";

// 주의: == -> 사람이 예상하지 못하는 결과가 나옴
// 강력권장) 쓰지말기
console.log(num1 == num2);
console.log(0 == false);

// 비교표준
console.log(num1 === num2);
console.log(num1 !== num2);

// null 병합 연산자
// A ?? B -> A 가 null 혹은 undifined라면 B를 반환 아니면 A반환

let a; // undifined
let b = 10;
console.log(a ?? 10); // 10
console.log(b ?? 20); // 10

// 옵셔널 체이닝(연산자 x)
// Js 객체 JSON()
let userInfo = {
    profile: {
        name: "길동이"
    }
}
let name = userInfo.profile.name;
console.log(name);


userInfo = {};
// undifined에 .으로 참조해서 에러발생

// userinfo안에 profile이 있으면 참조, 없으면 undifined 반환
// profile안에 name이 있으면 참조, 없으면 undifined 반환
name = userInfo?.profile?.name ?? "익명";
console.log(name);

// 삼항연산자는 따로 존재한다
const age = 30;
const isAdult = age > 20
    ? true
    : false
console.log(isAdult);

/**
 * role === "ADMIN"
 * ? <ADMIN />
 * : <USER />
 */

// truthy / falsy
// 자바스크립트의 모든 값은 boolean 변환이 가능
// 조건문 뒤에 바로 값을 사용할 수 있음
// -> 변환된 결과가 true -> truthy 값
// -> 변환된 결과가 false -> falsy 값
// false, 0 , -0, 빈값, null, undifined, NaN -> falsy

// !! -> 값을 boolean 타입으로 바꾸는법
console.log(!!!0, !!"", !!null, !!undefined, !!NaN);
// 헷갈리는 truthy들
console.log(!![], !!"0", !!"false");

if([]) {
    console.log("실행됩니다~!!!")
}

// 논리연산자
// 모든값이 boolean가능

// A를 실행하고 결과가 truthy면, B를 실행한다.
// A && B

const isLogin = true;
// 간단한 if문 처럼 사용가능.
isLogin && console.log("로그인 상태입니다");
!isLogin && console.log("로그아웃 상태입니다");

// A||B
// 기본값 처리
let page;

page = page || 1;
console.log(page);
