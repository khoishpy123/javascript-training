"use strict";
export default function showFormInsert(){
  const addEmployeeBtn = document.querySelector(".add-btn");
  const addForm = document.querySelector("#form-section");
  // const formInsert = document.querySelector("#insert-form");
  // const closeBtn = document.querySelector(".close-btn");

  addEmployeeBtn.onclick = function showForm(){
    addForm.classList.toggle("open");
  };

  // closeBtn.onclick = function hideForm(){
  //   addForm.classList.remove("open");

  // };
  
}
