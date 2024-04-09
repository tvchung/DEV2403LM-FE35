console.log("Running....");
console.log("Ngôn ngữ lập trình js");
//1. Biến, hằng, kiểu dữ liệu
// biến, hằng: từ khóa var, let ,  const

const PI=3.1415; // khai báo hằng PI
console.log("PI:", PI);

var name; // khai báo biến name
name="Chung Trịnh"; // gán giá trị cho biến
console.log("Welcome to,", name);

let company = "Devmaster Academy";
console.log(company);
// let company="DEV"; // error
company="DEV";
console.log(company);

var name="devmaster.edu.vn";
console.log("Welcome to,", name);

//2. Toán tử, toán hạng, phép toán
// Số học: *; /; +; -; %
a=145;
b=20;
c=a*b;
console.log(a,"*",b,"=",c);
c=a/b;
console.log(a,"/",b,"=",c);
c=a+b;
console.log(a,"+",b,"=",c);
c=a-b;
console.log(a,"-",b,"=",c);
c=a%b;
console.log(a,"%",b,"=",c);

c=a++;
console.log(a,"++","=",c);
c=++a;
console.log(a,"++","=",c);

// Phép toán so sánh
a=10
b=15

c=a==b; // false
console.log(a,"==",b,"=>",c);

c=a>b; // false
console.log(a,">",b,"=>",c);

c=a<b; // true
console.log(a,"<",b,"=>",c);
//...

c=a!=b; // true
console.log(a,"!=",b,"=>",c);

a=10; // number
b="10";// string
c=a==b; // true
console.log(a,"==",b,"=>",c);
c=a===b; // false
console.log(a,"===",b,"=>",c);

console.log(typeof(a));
console.log(typeof(b));

// Toàn tử logic &&; ||; !
a=10;
b=15;
c=(a>0) && (b>15); // c= true && flase => false;
console.log(c);
c=(a>=0) && (b>10); // true
console.log(c);
c=(a>0) || (b>15); // c = true || false => true
console.log(c);
c=!a;
console.log(c);
c= !(a>0); // !true => false;

//Toán tử gán
a=10;

a +=15; // a = a+15; // 25
console.log(a);

a="Dev";
a += "master";
console.log(a);

a +=100;
console.log(a);

a *=10;
console.log(a);

// ()?:
a=10;
c = (a>5)?"Đúng":"Sai";
console.log(c);

c = (a>100)? a+10 : a/2; // 5
console.log(c);