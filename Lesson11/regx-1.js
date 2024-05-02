// regular expression
//ex1:
var regx = /Devmaster academy/i;
if(regx.test("Chao mung ban den voi Devmaster Academy")){
    console.log("Co chua Devmaster Academy");
}else{
    console.log("Khong co");
}

// ex2:
regx = /n?/;
if(regx.test("Hello n n n ")){
    console.log("Có ky n");
}else{
    console.log("khong co n");
}

// ex3: test email
const fn_CheckMail = (email)=>{
    // quy tac
    // let regx = /^[a-z0-9]+[@][a-z0-9]{2,50}[.][a-z]{2,4}$/i;
    let regx = /^[a-z0-9.]*[a-z0-9]+[@][a-z0-9]{2,50}[.][a-z]{2,4}$/i;
    if(regx.test(email)){
        console.log("Đúng");
    }else{
        console.log("Sai");
    }
}

fn_CheckMail("Chung@gmail.com");
fn_CheckMail("Chung@gmail.co.m");
fn_CheckMail("Chung@g.com");
fn_CheckMail("Ch.ung@gmail.com");
fn_CheckMail("Chung.@gmail.com");
fn_CheckMail("Chung@gmail.commm");
