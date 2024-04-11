console.log("Mảng trong javascript");
// khai báo
var arr = new Array(); // khai báo mảng rỗng
console.log(arr);

arr = []; // khai báo mảng rỗng
console.log(arr);

// gán giá trị cho phần tử trong mảng
arr[0] = 100;
arr[1] = "Chung";
arr[5] = 45; 
console.log(arr);
console.log(arr.length);

//  duyệt mảng
for(let i in arr){
    console.log(arr[i]);
}

for(let i=0; i<arr.length ; i++){
    console.log(arr[i]);
}

// bài tập: 
// sinh mảng ngẫu nhiên các số nguyên có 2 chữ số
// từ 10 - 99; 
// mảng gồm 10 phần tử
// random in javascript
// 10'

console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.random()*99);
console.log(Math.floor(Math.random()*89) + 10);

arr=[];
for(i=0; i<10; i++){
    arr[i] = Math.floor(Math.random()*89) + 10;
}

console.log(arr);

// một số hàm thường dùng
arr = [1,4,6,2,7];
console.log(arr);
//  thêm phân tử vào cuối mảng
arr.push(100);
console.log(arr);
// thêm vào đầu mảng
arr.unshift(200);
console.log(arr);

// sắp xếp
arr.sort();
console.log(arr);

arr.sort((x,y)=>x-y);
console.log(arr);
arr.sort((x,y)=>y-x);
console.log(arr);

var temp = arr.slice(1,4);
console.log(temp);

//arr.splice(1,5);
//console.log(arr);

// filter: lọc
var temp = arr.filter(x=>x>50);
console.log("filter:",temp);
var temp = arr.filter(x=>x%2!=0);
console.log("filter:",temp);
