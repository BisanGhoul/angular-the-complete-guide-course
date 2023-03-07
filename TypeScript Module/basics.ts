 
 //more cpmlex types
 let person : 
 {
    name:string;
    age:number;
};
 person=
 {
    name : 'bisan',
     age : 22
    };



    // type inference

    let course = "angular";
    // course = 1234; Type 'number' is not assignable to type 'string'


    //allow more than one type - union types
    let phonenum: string | number | boolean;
    phonenum = false;
    phonenum = "0569";
    phonenum = 123456789;