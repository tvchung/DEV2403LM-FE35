// cấu trúc lặp do...while
/*
    do{
        statement block;
    }while(expression);
==> khối lệnh sẽ được thực hiện ít nhất 1 lần

*/
i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

// while
/*
cú pháp:
while(expression_condition){
    statement block;
}
*/
i=1;
while(i<=5){
    console.log(i);
    i++;
}

// for...in: lặp trong tập hợp
var arr = [1,4,2,6,8];
for(let i in arr){
    console.log("arr[",i,"]=", arr[i]);
}
// đối tượng sinh viên
var student = {
    id:100,
    name:"Chung Chung",
    age:45
}
for(let i in student){
    console.log(i ,":", student[i]);
}