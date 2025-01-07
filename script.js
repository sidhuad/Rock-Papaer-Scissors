// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  
  // Variable to keep while loop run till the value comes out false
    let condition = true;

  // empty employee object created
    let employees = [];
    
  while(condition)
  {
    const fname = prompt("Enter First name");  
    const lname = prompt("Enter Last name");    
    const salary = prompt("Enter salary");    

    // created a blueprint as how an object should be initialized.
    employees.push({firstName:fname,lastName:lname,salary:salary});

    // confirms with user if they want to add another employee, it return a boolean value
    condition = confirm("Add another Employee");

  }
  //returning values of object array
  return employees;
  
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let totalSalary = 0;

  // loop to extract individual employee salary and add it to the totalSalary variable which gets updated after every loop.
  for (let index = 0; index < employeesArray.length; index++)
    {
    
    // Gets the current employee salary.
    const currentEmployee = employeesArray[index];

    // storing that salary in a varaible .
    let currentEmployeeSalary = parseFloat(currentEmployee.salary);

    // adding the current salary to total salary variable.
    totalSalary += currentEmployeeSalary;

  }
  
  // Average salary is calculated by total salary dividing by number of employees.
  let avgSalaryDec = (totalSalary / employeesArray.length).toFixed(2);

  // logging average salary with no decimal to console.
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgSalaryDec}`);
  // console.log(typeof(totalSalary));
  
}



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // New array to store employee first and last name.
  const newEmployeeArray = [];
  
  for (let index = 0; index < employeesArray.length; index++) {
    
    const employee = employeesArray[index];
    const fname = employee.firstName;
    const lname = employee.lastName;

    newEmployeeArray.push({firstName:fname,lastName:lname});

  }

  const randomName = Math.floor(Math.random() * newEmployeeArray.length);

  // console.log(randomName);
  console.log(`Congratulations to ${newEmployeeArray[randomName].firstName} ${newEmployeeArray[randomName].lastName}, our random drawing winner!`);
  
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
