const product = {
    product_id: 1,
    name: "노트북",
    price: 1200000,
    stock: 5
}

//spread 문법을 사용하여 price 10% 할인, stock 1감소
// product_id는 제거
let newProduct = {
    ...product,
    price: product.price * 0.9,
    stock: product.stock - 1
}
const {product_id , ...productInfo} = newProduct;
console.log(productInfo);
console.log(newProduct);

const productOption = {
    color: "블랙",
    warrenty: 2
}
// spread 문법을 사용하여
// product, productOption 필드를 합친새로운 객체를 만들어주세요
// 새로운 객체에 status: "배송중" 추가

const newProduct2 = {
    ...product,
    ...productOption,
    status: "배송중"
}

console.log(newProduct2);
// passwordConfirm 서버로 보내지 않음
// 두객체를 병합
// 추가로 agreeTrem: treu
const basicFormInput = {
    usrname: "jsman",
    password: "123456",
    password_confirm: "123456",
    email: "jsman@js.com"
}

const optionFormInput = {
    name: "홍길동",
    phone: "010-1111-1111",
    address: "부산시 수영구"
}
const {password_confirm, ...restInfo} = basicFormInput;
console.log(restInfo);

// 두객체를 병합 + 필드추가
const submitInput = {
    ...restInfo,
    ...optionFormInput,
    agreeTrem: true
}
console.log(submitInput);

let products = [
    { name: "노트북", price: 1200000, stock: 5},
    { name: "마우스", price: 30000, stock: 0},
    { name: "키보드", price: 80000, stock: 10},
    { name: "헤드셋", price: 110000, stock: 8}
]

// 1. {name: "스피커", price: 40000, stock: 0 } 추가
// 2. stock 옵션을 제거
// 3. stock값이 0 이면 isAvailable: false, 0이 아니면 isAvailable: true

products = [...products, {name: "스피커", price: 40000, stock: 0 }];

const updateProducts = products.map((product) => {
    // 비구조할당 + rest문법 -> stock을 분리
    // stock = product.stock
    // restInfo -> stock제외한 나머지 필드를 가진 객체
    const {stock, ...restInfo} = product;
    // 새로운객체를 return 
    // -> 그 객체에 stock 값을 참조해서 isAvailable 필드 추가
    const isStockOverZero = stock > 0;
    return {
        ...restInfo,
        isAvailable: isStockOverZero
    };
});
console.log(updateProducts);