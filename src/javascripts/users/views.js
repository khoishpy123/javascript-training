class View {
  constructor() {
    this.employeeList = document.getElementById("employee-list");
    this.employeeModal = document.getElementById("employee-popup");
    this.closeBtn = document.getElementById("close-btn");
    this.addBtn = document.querySelector(".add-btn");
    this.formTitle = document.getElementById("form-title");
    this.employeeName = document.getElementById("name");
    this.employeeSurname = document.getElementById("sirname");
    this.employeeEmail = document.getElementById("email");
    this.employeePhone = document.getElementById("phone");
    this.employeeSalary = document.getElementById("salary");
    this.submitBtn = document.getElementById("submit-btn");
  }

  reserInput = () => {
    this.formTitle.textContent = "Insert Employee Records";
    this.employeeName.value = "";
    this.employeeSurname.value = "";
    this.employeeEmail.value = "";
    this.employeePhone.value = "";
    this.employeeSalary.value = "";
  };

  openEmployeeModal = (employee) =>{
    if(employee){
      // change value of form
      this.formTitle.textContent = "EDIT EMPLOYEE";
      this.employeeName.value = employee.name;
      this.employeeSurname.value = employee.surname;
      this.employeeEmail.value = employee.email;
      this.employeePhone.value = employee.phone;
      this.employeeSalary.value = employee.salary;
    }
    this.employeeModal.style.visibility = "visible";
  };

  closeEmployeeModal = () => {
    this.employeeModal.style.visibility = "hidden";
    this.reserInput();
  };

  displayEmployees = (employees) => {
    let employeeTemplate = "";
    let count = 0;
    if (employees.length) {
      employees.forEach((employee) => {
        count += 1;
        employeeTemplate += `
        <tr id="${employee.id}">
          <td>${count}</td>
          <td class="employee-name" name="employeeName">${employee.name}</td>
          <td class="employee-surname" name="employeeSurname">${employee.surname}</td>
          <td class="employee-email" name="employeeEmail">${employee.email}</td>
          <td class="employee-phone" name="employeePhone"> <span>${employee.phone}</span> </td>
          <td class="employee-salary" name="employeeSalary"> <span>${employee.salary}</span> </td>
          <td>
            <button id="edit-btn" data-id=${employee.id} class="btn-edit">Edit</button>
            <button id="delete-btn" data-id=${employee.id} class="btn-del">Delete</button>
         </td>
        </tr>`;
        this.employeeList.innerHTML = employeeTemplate;
      });
    }
  };

  bindShowEmployeeModal = () => {
    this.addBtn.addEventListener("click", () => {
      this.openEmployeeModal();
    }
  );};

  bindCloseEmployeeModal = () => {
    this.closeBtn.addEventListener("click", () => {
      this.closeEmployeeModal();
    }
  );
};

  bindEditEmployeeModal = (renderEmployeeModal) => {
    this.employeeList.addEventListener("click", (e) => {
      if(e.target.className === "btn-edit"){
        const id = e.target.parentElement.parentElement.id;
        const employee = renderEmployeeModal(id);
        this.openEmployeeModal(employee);
      }
      }
    );
  };

  bindValidateForm(handel){
    this.submitBtn.addEventListener("click", (e)=>{
      e.preventDefault();
      if(this.employeeName.value == ""){
        alert("Please enter your employee name !!");
      }
      if(this.employeeSurname.value == ""){
        alert("Please enter your employee surname !!");
      }
      if(this.employeeEmail.value == ""){
        alert("Please enter your employee email !!");
      }
      if(this.employeePhone.value == ""){ 
        alert("Please enter your employee phone !!");
      }
      if(this.employeeSalary.value == ""){
        alert("Please enter your employee salary !!");
      }
      if(
        this.employeeName.value &&
        this.employeeSurname.value &&
        this.employeeEmail.value && 
        this.employeePhone.value &&
        this.employeeSalary.value
      ){
        const body = {
          name: this.employeeName.value,
          surname: this.employeeSurname.value,
          email: this.employeeEmail.value,
          phone: this.employeePhone.value,
          salary: this.employeeSalary.value
        };
        handel(body);
        this.closeEmployeeModal;
      }else{
        alert("Please enter all before create a new employee!!!");
      }
    });
  }
}

export default View;
