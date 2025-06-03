export const  testFunction = () => {
    const  message: string = "hello world";
    console.log(message);


// type Typescript
// định  nghĩa data-types
// tất cả kiểu dữ liệu của javascript thì typescript có
// nguyen thủy và tham chiếu
const nameTS='Long';
console.log('length=', nameTS.length);
console.log('uppercase = ', nameTS.toUpperCase());

//type Annotations

const  count2:number =1;
// count2="name"; báo lỗi 
console.log("check count :" , count2);

//kiểu dữ liệu refenrence 
const  list:string[] =["php", "Java", "Nodejs"];
list.push("25");
 console.log(list);
 
//type Inference - tự động dán type
// number type
//  const test:number =9.6;

// String type
const name2:string =`hoir`;
const name3=`Long ${name2}`;
console.log(">>> check name = ", name3);

//Boolean 
const pro:boolean=Boolean("");
 console.log("check ", pro);
//Object 

const pro2:{
    name:string,
    age:number
}
={
    name:"Long",
    age:25

}
console.log(pro2.name);

// Tuple Types
//bộ: kiểu dữ liệu/kích thước/thứ tự

//tuple: dataType/size/order

// let skills2: [string, number] = ['Ask IT People', 25];

// let skills3: [boolean, string, number?];

// skills3 = [true, 'Eric',25;]

//enum
// enum API_STATUS {

//     PENDDING
    
//     FULFILLED = "FULFILLED",
    
//     REJECTED = "FULFILLED" //PROMISE
    
//     }
    
//     //constant
    
//     //java
    
//     let a1 = API_STATUS.PENDDING;
    
//     let a2 = API_STATUS.FULFILLED;

//any type
// khi mình chuyển javascript sang type mới dùng từ khóa any , kiểu dữ liệu phức tạp

//keyword never và void 
// never khi xử lý lỗi , ko muốn trả về 1 gia strij nào cả
}


