//more cpmlex types
var person;
person =
    {
        name: 'bisan',
        age: 22
    };
// type inference
var course = "angular";
// course = 1234; Type 'number' is not assignable to type 'string'
//allow more than one type - union types
var phonenum;
phonenum = false;
phonenum = "0569";
phonenum = 123456789;
