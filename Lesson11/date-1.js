// // đối tượng date
// var date = new Date();
// console.log(date);
// // lấy ra ngày trong tháng
// var dd = date.getDate();
// console.log(dd);
// var MM = date.getMonth()+1 
// console.log(MM);
// var yy=date.getFullYear()
// console.log(yy);

// hh = date.getHours();
// console.log(hh);
// mm=date.getMinutes();
// console.log(mm);
// ss = date.getSeconds();
// console.log(ss);

// str = "Hôm nay " + dd + "/" + MM + "/"+yy; 
// document.write(str)
// document.write("<br/>")
// time = "Bay giờ là " + hh + ":" + mm + ":" + ss;
// document.write(time);

function thoiGian(){
    // đối tượng date
    var date = new Date();
    console.log(date);
    // lấy ra ngày trong tháng
    var dd = date.getDate();
    var MM = date.getMonth()+1 
    var yy=date.getFullYear()

    hh = date.getHours();
    mm=date.getMinutes();
    ss = date.getSeconds();

    str = "Hôm nay " + dd + "/" + MM + "/"+yy; 
    // document.write(str)
    // document.write("<br/>")
    time = "Bay giờ là " + hh + ":" + mm + ":" + ss;
    // document.write(time);

    document.getElementById("tg").innerHTML = str+"<br/>"+time;
}
setInterval(thoiGian,1000);