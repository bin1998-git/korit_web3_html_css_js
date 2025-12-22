const scores = {
    math: 80,
    eng: 60,
    kor: 75,
    sci: 50
}

const passed = {};
// 각 과목의 합격 컷트라인이 70점이다.
// 반복문을 돌면서, 각 과목을 검사하여
// passed 객체안에 scores에서 70점이 이상인 
// 과목들을 추가하는 코드를 작성해주세요.


const entries = Object.entries(scores);
console.log(scores);
for (let entry of entries) {
    let key = entry[0];
    let value = entry[1];
    if(value >= 80) {
        passed[key] = value;
    }
};

// 각 가격을 10% 올려서 업데이트!
// 객체는 map이 없음
let prices = {
    apple: 1000,
    banana: 1500,
    orange: 2000
}

// 객체 -> 배열 -> 순회가능
const entriesOfPrice = Object.entries(prices);
for(let entry of entriesOfPrice) {
    let key = entry[0];
    let val = entry[1];
    prices[key] = val * 1.1; //객체 업데이트
}

// keys() 사용!
const following = {
    민수: true,
    철수: false,
    지우: true,
    나연: true
}
const follower = { 정우: true, 민수: true,
    나연: false
}

// 맞팔 이름 저장
// 배열.push
const followEachOthers = [];


//[["민수", true]..["나연", true]]
const followEntries = Object.entries(following);
console.log(following);

for (let entry of followEntries) {
    let name = entry[0];
    let isFollowing = entry[1];
    let isFollower = follower[name];
    // isFOllowing 이 true && name으로 follower 조회시 true
    if(isFollowing && isFollower) {
        followEachOthers.push(name);
    }
}
console.log(followEachOthers);

