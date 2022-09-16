"use strict";
// const iphone7 = {
//     name: 'iphone7',
//     type: 'mobile',
//     price: '700',

//     takePhoto(){
//         console.log('takePhoto');
//     },
// }

// console.log(iphone7.takePhoto());
this.lastName = 'thu';
this.firstName = 'Minh';

const teacher = {
    firstName: 'Minh',
    lastName: 'Thao',
    getFullName (){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

console.log(teacher.getFullName());

const getTeacher = teacher.getFullName.bind(window);
console.log(getTeacher());