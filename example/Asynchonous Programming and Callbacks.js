// async
// console.log('Log1');
// setTimeout(() => {
//     console.log('inside the function')
// }, 1000); // 1 seconds
// console.log('Log2');

// console.log('Chờ đợi');
// setTimeout(function () {
//   console.log('hihi')
// }, 5000)

// console.log('before')
// setTimeout(() => {
// // runs after 2 seconds
// console.log('inside the function')
// }, 2000)
// console.log('after')

// function doHomeWork(subject, callback) {
//     setTimeout(() => {
//         console.log(`bắt đầu làm bài tập:`);
//         subject();
//         callback();
//     }, 3000)
// }

// function subjects() {
//     setTimeout(() => {
//         console.log('Văn');
//     },3500);

// }

// function alertFinished() {
//     setTimeout(() => {
//         console.log('alert finished');
//     },4000);

// }

// doHomeWork(subjects, alertFinished)


//Promise
// const myPromise = new Promise(function (resolve, reject) {

//     // code here
//     const codeIsFine = true;

//     if (codeIsFine) {
//         resolve('fine')
//     } else {
//         reject('error')
//     }
// })
// Promise
// Có 3 trạng thái: Pendding, Fulfilled, Reject()
var promise = new Promise(
    //Excutor function
    function name(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        // Fake call API
        resolve([
            {
                id: 1,
                name: 'javascript'
            }
        ])
    }
);

promise
    .then(function () {
        console.log('Successually!');
    })
    .catch(function () {
        console.log('Failure');
    })
    .finally(function () {
        console.log('Done');
    });