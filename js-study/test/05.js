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
