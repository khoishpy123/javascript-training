import { employeeList } from "./views/template.js";
import { API } from "./constants/api.js";
import {
  getRequest,
  postRequest,
  deleteRequest,
  updateRequest,
} from "./helpers/services.js";

const employeeItems = document.querySelector("#employee-list");
const addEmployeeBtn = document.querySelector(".add-btn");
const addForm = document.getElementById("form-section");

// function get employee list from API and display it
const getEmployees = async () => {
  const employees = await getRequest(`${API}`);
  employees.forEach(
    (employee) => (employeeItems.innerHTML += employeeList(employee)),
  );
};

//function to display insert form
function openFormInsert() {
  addEmployeeBtn.onclick = function showForm() {
    addForm.classList.add("open");
  };
}

// function validate the form when the user input
function validationForm(employee) {
  if (!employee.name) {
    document.getElementById("name-empty").innerHTML =
      "Please enter the product name";
  } else {
    document.getElementById("name-empty").innerHTML = "";
  }
  if (!employee.sirname) {
    document.getElementById("sirname-empty").innerHTML =
      "Please enter the product sirname";
  } else {
    document.getElementById("sirname-empty").innerHTML = "";
  }
  if (!employee.email) {
    document.getElementById("email-empty").innerHTML =
      "Please enter the product email";
  } else {
    document.getElementById("email-empty").innerHTML = "";
  }
  if (!employee.phone) {
    document.getElementById("phone-empty").innerHTML =
      "Please select the product phone ";
  } else {
    document.getElementById("phone-empty").innerHTML = "";
  }
  if (!employee.salary) {
    document.getElementById("salary-empty").innerHTML =
      "Please select the product phone ";
  } else {
    document.getElementById("salary-empty").innerHTML = "";
  }
  return !!(
    employee.name &&
    employee.sirname &&
    employee.email &&
    employee.phone &&
    employee.salary
  );
}

//function to

function init() {
  getEmployees();
  openFormInsert();
}
init();
