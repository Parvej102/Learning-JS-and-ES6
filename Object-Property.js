
const student =[
    {id : 11, name :' Asif'},
    {id : 21, name : 'Rezwan'},
    {id : 19, name : 'Iftekhar'},
    {id : 44, name : 'Naseem Sah'}
];
const result = student.map( s => s.name);
const result2 = student.filter( s => s.id > 20);
const result3 = student.find(s => s.id > 20);
console.log(result);
console.log(result2);
console.log(result3);