"use strict";
// function createCounter(){
//     let counter = 0;
//     function increase(){
//         return ++counter;
//     }

//     return increase;
// }


// const counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());

// function createLogger(namespace){
//     function logger(message){
//         console.log(`${namespace} ${message}`);
//     }

//     return logger;
// }

// ================= APP===================

// Register a logger
// const infoLogger = createLogger('[info]');

// infoLogger('Start send email');
// infoLogger('gui mail loi lan 1. thu gui lai...');
// infoLogger('Gui mai thanh cong cho user xxx...');

// //Forgot password
// const errorLogger = createLogger('[Error]');

// errorLogger('Email khong ton tai trong DB!');
// errorLogger('gui mail loi lan 1. thu gui lai...');
// errorLogger('Gui mai thanh cong cho user xxx...');

function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};
    
    const save = () =>{
            localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key){
            return store[key];
        },
        set(key, value){
            store[key] = value;
            save(); 
        },
        remove(key){
            delete store[key];
            save();
    },

}
return storage;
}

//profile.js
const profileSettings = createStorage('[profile-user]');
console.log(profileSettings.get('age'));
profileSettings.set('fullName', 'Minh khoi')
profileSettings.set('age', 22)
profileSettings.set('address', 'Da Nang')