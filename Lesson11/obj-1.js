// đối tượng trong javascript
// Khởi tạo:
var emp = {
    // các thuộc tính của đối tượng
    fullName:'',
    email:'',
    address:'',
    
    // các phương thức của đối tượng
    addInfor:function(){
        this.fullName='Chung Chung';
        this.email="chungtrinhj@gmail.com";
        this.address="25 Vũ Ngọc Phan"
    },
    display:function(){
        console.log(this.fullName, this.email, this.address);
    }
}
// Sử dụng đối tượng
emp.display();

emp.addInfor(); // gọi thực hiện phương thức

emp.display();

// 
var student = {};
student.name="Nguyen Van An";
student.age=22;
student.display = function(name, age){
    console.log(name, age);
}

student.display();
student.display("Chung Chung", 45);
