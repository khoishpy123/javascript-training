export const employeeList = (employee) => {
  return `
  <tr class="employee-item-${employee.id}">
    <td class="employee-name">${employee.name}</td>
    <td class="employee-email">${employee.surname}</td>
    <td class="employee-phone">${employee.email}</td>
    <td class="employee-address">${employee.phone}</td>
    <td class="employee-city">${employee.salary}</td>
  </tr>
  `;
};
