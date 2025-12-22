const id ="user1";
const pw = "password123";

// id, pw 입력감지 -> 검증 -> 저장
const submit = (cb) => {
    console.log("폼 제출");
    cb({
        id: id,
        pw: pw
    });
}

const validate = (data, cb) => {
    console.log("검증!");
    const isValid = data.id.Length >= 4 && data.pw.Length >= 8;
    cb(isValid, data);
}

const save = (isValid, data) => {
    console.log(isValid ? `${data} 저장성공` : "검증 실패");
}

submit((data) => {
    validate(data, (isValid, data) => {
        save(isValid, data);
    })
});