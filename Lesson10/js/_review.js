// Review:
/*
Cấu trúc lựa chọn rẽ nhánh:
- if: 4 Dạng if
    * if đơn:
        if(condition){
            statement block;
        }
    * if đầy đủ:
        if(expression_condition){
            statement block (true);
        }else{
            statement block (false);
        }
    * if bậc thang
        if(expression_condition-1){
            statement block 1; 
        }else if(expression_condition-2){
            statement block 2;
        }else if(expression_condition-3){
            statement block 3;
        }
        .....

        }else {
            statement block n+1
        }
    * nested if: if lồng nhau
        if(expression_condition-1){
            if(....){....}
        }else{
            if(...){

            }else if(....){
                ....
            }else{
                .....
            }
        }
-switch:
    switch(expression){
        case constant-1:
            statement block 1;
            break;
        case constant-2:
            statement block 2;
        .......

        [default:
            statement block n+1;
        ]
    }
*/

thang=4;
nam=2024;
// đếm số ngày trong tháng, năm
soNgay=0;
switch(thang){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        soNgay=31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        soNgay=30;
        break;
    case 2:
        if(nam % 4 == 0 && nam % 100 !=0){
            soNgay=29;
        }else{
            soNgay=28;
        }
        break;
    default:
        console.log("Bạn nhập sai tháng năm");
}

if(soNgay>0){
    console.log("Tháng ", thang , " Năm ", nam , " có ", soNgay ," ngày!.");
}