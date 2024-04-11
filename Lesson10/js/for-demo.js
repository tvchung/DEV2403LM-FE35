// cấu trúc lặp for
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// tổng quát
i=1;
console.log(i);  // lặp từ 1 -> 5;

// cú pháp:
/*
    for(init ; expression_condition ; step){

        statement block;

    }

*/
i=1;
for(let i=1; i<=5 ; i++){
    console.log(" Số thứ ",i);
}

// các dạng for
//* for khuyết - init
console.log("Khuyết init:");
i=1;
for ( ; i<=5 ; i++){
    console.log(" Số thứ ",i);
}
console.log("Khuyết expression condition:");
// i=1;
for ( i=1;  ; i++){
    console.log(" Số thứ ",i);
    if(i>=5) break;
}

console.log("Khuyết step:");
// i=1;
for ( i=1; i<=5 ;){
    console.log(" Số thứ ",i);
    i++;
}
//* for khuyết toàn bộ

console.log("for khuyết toàn bộ");
i=1;
for(;;){
    console.log("Số ", i);
    i++;
    if(i>5) break;
}

// * for không thân
for(i=1; i<=5 ; console.log(" số: ",i), i++);

// Bài tập:
// in ra các số nguyên dương chẵn < n; n nhập
n=10;
for(i=2; i<=n ; i +=2){
    console.log(i);
}

for(i=1; i<=n; i++){
    if(i%2==0){
        console.log(i);
    }
}
// in ra các số nguyên tố < n; n (gán giá trị)
n=20;
for(i=1; i<=n ; i++){
    flag = true; // giả sử i là số nguyên tố
    // đi khẳng định
    for(j=2; j<= i/2 ; j++){
        if(i % j == 0){
            flag=false; // tìm thấy ước
            break;
        }
    }

    if(flag==true){
        console.log(i);
    }
}