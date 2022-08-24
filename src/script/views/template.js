export const employeeList = (employee) => {
  return `
  <tr class="employee-item-${employee.id}">
    <td class="employee-name">${employee.name}</td>
    <td class="employee-sirname">${employee.surname}</td>
    <td class="employee-email">${employee.email}</td>
    <td class="employee-phone">${employee.phone}</td>
    <td class="employee-salary">${employee.salary}</td>
  </tr>
  `;
};
