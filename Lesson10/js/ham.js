// khái niệm hàm trong javascript
// hàm không có tham số, trả về giá trị vô hươngs
function display(){
    // các lệnh xử lý
    console.log("Welcome to ham....");
}
// gọi hàm, sủ dụng hàm
display();

// hàm có tham số, hàm không trả về giá trị

function show(name){
    console.log("Welcome to, ", name);
}
// gọi hàm
show();
show("Chung trịnh văn");

// hàm trả về giá trị
// return
function tinh_toan(){
    return "tinh toan";
}
tinh_toan();

let gt = tinh_toan();
console.log(gt);
console.log(tinh_toan());

function tinhToan(a,b){
    return a+b;
}

kq = tinhToan(100, 200);
console.log(kq);

function tinhToan(a, b, phepTinh){
    let kq=0;
    switch(phepTinh){
        case "*":
            kq = a*b; break;
        case "/":
            if(b!=0){
                kq=a/b;
            }
            break;
        case "+":
            kq=a+b; break;
        case "-":
            kq=a-b; break;
        case "%":
            kq=a%b; break;
        default:
            console.log("Sai ....");
    }
    return kq;
}

// gọi thực hiện
console.log(tinhToan(2,5,"*"));
console.log(tinhToan(2,5,"/"));
console.log(tinhToan(2,5,"+"));
console.log(tinhToan(2,5,"-"));
console.log(tinhToan(2,5,"%"));
// console.log(tinhToan(2,5,"%%%%%"));

function tinhToan(a,b,phepTinh){
    return eval(a+phepTinh+b);
}
console.log(tinhToan(2,5,"*"));
console.log(tinhToan(2,5,"/"));
console.log(tinhToan(2,5,"+"));
console.log(tinhToan(2,5,"-"));
console.log(tinhToan(2,5,"%"));
// console.log(tinhToan(2,5,"%%%%%"));

// arrow function
const fn_TinhToan= (a,b,pt)=>{
    return eval(a+pt+b);
}
console.log(fn_TinhToan(100,200,"*"));

const fnDisplay = (name,age)=>{
    console.log("Welcome to, " , name);
    console.log("Tuổi:",age);
}

fnDisplay("Chung Chung",45);

// tham số mặc định

var fnShow = (name, age=0)=>{
    console.log(name);
    console.log(age);
}
fnShow();
fnShow("Devmaster");
fnShow("Devmaster",10);

fnShow = (name, age)=>{
    age = undefined || 100;
    console.log(name);
    console.log(age);
}

console.log("======");
fnShow();
fnShow("Devmaster");
fnShow("Devmaster",10);