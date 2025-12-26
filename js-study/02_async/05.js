// https://jsonplaceholder.typicode.com/posts/{id}

const getPostById = (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const postPromise = fetch(url)
        .then((result) => {
            // .json() : json문자열 -> js객체 변환(webAPI)
            return result.json();
        })

    return postPromise;
}

getPostById(1)
    .then((post) => {
        console.log("데이터 수신성공!");
        const {title, body} = post;
        console.log(`${title} : ${body}`);
    })
    .catch((e) => {
        console.log(e.message);
    });

// https://jsonplaceholder.typicode.com/users/{id}
// fetch -> json을 js객체화 -> 함수호출 
// -> 출력창에 수신해온 user의 정보중 username, email 출력!

const getUserInfoById = (userId) => {
    const url
    = `https://jsonplaceholder.typicode.com/users/${userId}`
    const userPromise = fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((user) => {
            const userInfo = {
                username: user.username,
                email: user.email
            }
            return userInfo; // resolve(userInfo)랑 같음
        })

    return userPromise;
        
}

getUserInfoById(1)
    .then((info) => {
        const {username, email} = info;
        console.log(`username: ${username}`);
        console.log(`email: ${email}`);
    })
    .catch((error) => {
        console.log(error.message);
    });