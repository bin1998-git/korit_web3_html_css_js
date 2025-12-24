// 우리가 작성한 Js 코드에 비동기함수(webAPI)함수가 혼합되어있으면
// 이 순서를 어떻게 제어할 수 있을까?

let a = (value) => {
    console.log("a 호출!");
    setTimeout(() => {
        value += 5;
    }, 3000);
    return value;
};

let b = (value) => {
    console.log("b 호출!");
    setTimeout(() => {
        value += 5;
    }, 1000);
    return value;
};

let c = (value) => {
    console.log("c 호출!")
    setTimeout(() => {
        console.log(`결과: ${value}`)
    }, 2000);
};

// let result = a(10);
// result = b(result);
// c(result);
// 동기코드들이 먼저 실행되서 의도대로 코드가 진행되지 못함

// 의도대로 진행하려면?
// 콜백함수

a = (v, callback) => {
    console.log("a 호출!");
    setTimeout(() => {
        callback(v + 5); // 콜백함수로 데이터가 전달가능
    }, 3000)
    // 리턴 x
};

b = (v, callback) => {
    console.log("b 호출!");
    setTimeout(() => {
        callback(v + 5);
    }, 1000);
}

c = (v, callback) => {
    console.log("c 호출!");
    setTimeout(() => {
        console.log(`결과: ${v}`);
    }, 2000);
}

