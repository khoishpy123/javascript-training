"use strict";
// import { employeeList } from "./template.js";
// import { API } from "../constants/api.js";
// import {getRequest } from "../helpers/services.js";

// export default class Views{
//     constructor(){
//       this.addEmployeeBtn = document.querySelector(".add-btn");
//       this.addForm = document.getElementById("#form-section");
//       this.inputEmployeeName = document.getElementById("#name");
//     }

//     openFormInsert(){
//       this.addForm.classList.add("open");
//     }

//     bindOpenFormInsert(){
//       this.addEmployeeBtn.addEventListener("click", event => {
//         this.openFormInsert();
//         this.inputEmployeeName.focus();
//       });
//     }

// getProducts = async () => {
//   const employeeItems = document.querySelector("#employee-list");
//   const employees = await getRequest(
//   `${API}`
// );
// employees.forEach(
//   (employee) =>
//     (employeeItems.innerHTML += employeeList(employee))
// );
// };
