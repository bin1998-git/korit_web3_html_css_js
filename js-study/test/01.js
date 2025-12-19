const name = "홍길동";
const email = "abc@mail.com";
const follwer = [];

// 이름이 "김"으로 시작하면 "김씨입니다" 출력
// 문자열.startswith()
// 이메일에 "@" 있으면 "이메일입니다" 출력
// 문자열.includes()

// 팔로워가 존재하면 "팔로워가 존재합니다" 출력
// // 리스트.Length 사용

// if(name.startsWith("김")) {
//     console.log("김씨입니다")
// }

name.startsWith("김") && console.log("김씨입니다");

// if(email.includes("@")) {
//     console.log("이메일입니다")
// }

email.includes("@") && console.log("이메일입니다");

// if(follwer.length > 0) {
//     console.log("팔로워가 존재합니다")
// }

follwer.length && console.log("팔로워가 존재합니다");


if(name.startsWith("홍") 
    && email.includes("@")
    && follwer.length) {
    console.log("모든 조건 통과완료")
    }


name.startsWith("홍") 
    && email.includes("@") 
    && follwer.length
    && console.log("모든 조건 통과 완료")