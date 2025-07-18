const users = [
  { id: 1, name: "apple", price: 20 },
  { id: 2, name: "mango", price: 30 },
  { id: 3, name: "pineapple", price: 50 },
  { id: 6, name: "apple", price: 90 },
  { id: 7, name: "mango", price: 110 },
  { id: 10, name: "pineapple", price: 150 },
];

const result = users.findLastIndex((item) => item.price > 50);
console.log(result);
