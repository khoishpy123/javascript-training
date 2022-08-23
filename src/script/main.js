import Views from "./views/form-insert.view.js";
// import showFormInsert from "./controllers/home.controller.js";


const view = new Views();

view.bindOpenFormInsert();
// showFormInsert();

// const listAPI = "http://localhost:3000/employee";

// function start(){
//     getEmployees(renderEmployees);

//     handleSubmitForm();
// }

// start();

// //function

// function getEmployees(callback){
//   fetch(listAPI)
//     .then(function(response){
//       return response.json();
//     })
//     .then(callback);
// }

// //Post data by POST method
// function createEmployees(data,callback){
//   let option = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   };
//   fetch(listAPI, option)
//   .then(function(response){
//     response.json();
//   })
//   .then(callback);
// }

// function handleDeleteEmployee(id){
//   let option = {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   };
//   fetch(listAPI + "/" + id, option)
//   .then(function(response){
//     response.json();
//   })
//   .then(function(){
//     const employeeItem = document.querySelector(".employee-item-"+ id);
//     if(employeeItem){
//       employeeItem.remove();
//     }
//   });
// }

// function renderEmployees(employees){
//   const listEmployees = document.querySelector("#list-employees");
//   const htmls = employees.map(function(employee){
//     return`
//       <li class="employee-item-${employee.id}">
//           <p>${employee.name}</p>
//           <p>${employee.surname}</p>
//           <p>${employee.email}</p>
//           <p>${employee.phone}</p>
//           <p>${employee.salary}</p>
//           <button onClick="handleDeleteEmployee(${employee.id})">Delete</button>
//       </li>
//     `;
//   });
//   listEmployees.innerHTML = htmls.join("");
// }

// function handleSubmitForm(){
//   const submitBtn = document.querySelector("#submit-btn");

//   submitBtn.onclick = function(){
//     const name = document.querySelector("input[name = 'name']").value;
//     const surname = document.querySelector("input[name = 'surname']").value;
//     const email = document.querySelector("input[name = 'email']").value;
//     const phone = document.querySelector("input[name = 'phone']").value;
//     const salary = document.querySelector("input[name = 'salary']").value;

//     let formData = {
//       name: name,
//       surname: surname,
//       email: email,
//       phone: phone,
//       salary: salary
//     };

//     createEmployees(formData, function(){
//       getEmployees(renderEmployees);
//     });
//   };
// }
