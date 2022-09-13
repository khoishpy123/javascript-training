class View {
  constructor() {
    this.employeeList = document.getElementById("employee-list");
  }
  displayEmployees(employees) {
    let employeeTemplate = "";
    if (employees.length) {
      employees.forEach((employee) => {
        employeeTemplate += `
        <tr class ="employee-item-${employee.id}">
          <td class = "employee-id" name="employeeId">${employee.id}</td>
          <td class = "employee-name" name="employeeName">${employee.name}</td>
          <td class = "employee-surname" name="employeeSurname">${employee.surname}</td>
          <td class = "employee-email" name="employeeEmail">${employee.email}</td>
          <td class = "employee-phone" name="employeePhone"> <span>${employee.phone}</span> </td>
          <td class = "employee-salary" name="employeeSalary"> <span>${employee.salary}</span> </td>
          <td>
            <button id="edit-btn" data-id=${employee.id} class="btn-edit btn btn-primary btn-sm">Edit</button>
            <button class = "employee-id="delete-btn" data-id=${employee.id} class="btn-del btn btn-danger btn-sm">Delete</button>
         </td>
        </tr>`;
        this.employeeList.innerHTML = employeeTemplate;
      });
    }
  }
}

export default View;
