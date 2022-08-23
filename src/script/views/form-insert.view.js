"use strict";


export default class Views{
    constructor(){
      this.addEmployeeBtn = document.querySelector(".add-btn");
      this.addForm = document.querySelector("#form-section");
      this.inputEmployeeName = document.querySelector("#name");
    }

    openFormInsert(){
      this.addForm.classList.add("open");
    }

    bindOpenFormInsert(){
      this.addEmployeeBtn.addEventListener("click", event => {
        this.openFormInsert();
        this.inputEmployeeName.focus();
      });
    }
}
