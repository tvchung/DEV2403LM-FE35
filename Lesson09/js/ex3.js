// Các cấu trúc điều khiển: 3 loại 
// - lựa chọn / rẽ nhánh: if / switch

// - lặp: for, do...while, while, foreach (for...in)

// - Lệnh nhảy: return; break; continue; ...

// ===========================
// ============1. Cấu trúc lựa chọn rẽ nhánh
// 1.1: if => 4 dạng if khác nhau
// Dạng 1: if đơn
a=10;
if(a>5){
    console.log(a, ">5");
}
/// 
if(a>15){
    console.log(a, ">15");
}
// Dạng 2: if đầy đủ
// Kiểm tra nếu a>0 thì in ra màn hình số a là số dương;
// ngược lại: số a là số âm
a=-10;
if(a>0){
    console.log(a, " Là số dương");
}else{
    console.log(a," là số âm");
}

a=101;
// kiểm tra xem a là số chẵn hay số lẻ
if(a % 2 == 0){
    console.log(a, " là số chẵn");
}else{
    console.log(a, " Là số lẻ");
}

// Dạng 3: if bậc thang: if ... else if ...
// kiểm tra xem số a là số dương, âm hay số 0
if ( a > 0 ){
    console.log(a, " Số dương");
}else if(a==0){
    console.log(a, " là số 0");
}else{
    console.log(a, " là số âm");
}

// Dạng 4: if lồng nhau(nested if)
// nếu a là số dương:
/*
    thực hiện kiểm tra: nếu b là số chẵn dương thì
    tính c=a/b; ngược lại c=a*b;
*/
a=10;
b=21;
if(a>0){
    if(b%2==0 && b > 0){
        c=a/b;
    }else{
        c=a*b;
    }
}

console.log(c);
// Bài toán: giải phương trình bậc nhất a.X + b = 0 
// a, b là hệ số, biến x
// Test:
//a=1; b = 2;
// a=0; b=0
 a=0; b=1
// 10'

if(a==0){
    if(b==0){
        console.log("PT: a.x+b=0 => Có vô số nghiệm");
        // 0.x + 0 =0 => x? (bao nhiêu cũng được)
    }else{// b!=0
        // 0.x + b = 0? 
        console.log("PT vô nghiệm");
    }
}else{ // a!=0
    x = -b/a;
    console.log("Nghiệm pt:",x);
}

// Bài tập: Giải phương trình bậc 2: a.x2+b.x+c=0

// 1.2 switch case

// nhập vào một giá trị thu: 1-7
// => in ra thứ trong tuần tương ứng: 
// 1 => Chủ nhật
// 5 => Thứ năm
thu=3;
switch(thu){
    case 1:
        console.log(thu, "=> Chủ nhật");
        break;
        case 1:
            console.log(thu, "=> Chủ nhật");
            break;
        case 2:
            console.log(thu, "=> Thứ hai");
            break;
        case 3:
            console.log(thu, "=> Thứ ba");
            break;
        case 4:
            console.log(thu, "=> Thứ tư");
            break;
        case 5:
            console.log(thu, "=> Thứ năm");
            break;
        case 6:
            console.log(thu, "=> Thứ sáu");
            break;
        case 7:
            console.log(thu, "=> Thứ bảy");
            break;
        default:
            console.log("Bạn nhập sai");
}
