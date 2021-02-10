//customer's constructor
class Customer {
  constructor(firstName, lastName, phone, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.id = id;
  }
}

//UI constructor
class UI {
  addCustomer(customer) {
    //new div for a customer
    const newDiv = document.createElement("div");
    //seting a class for the div
    newDiv.className = "flex-child";

    const parentDiv = document.getElementById("row");
    newDiv.innerHTML = `<table class="customer-details">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Customer's ID</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${customer.firstName} ${customer.lastName}</td>
          <td>${customer.phone}</td>
          <td>${customer.id}</td>
        </tr>
      </tbody>
    </table>
    <button class="button u-full-width costomer-btn">
          DELETE COSTUMER
        </button>`;
    //appending the customer div to the parent div
    parentDiv.appendChild(newDiv);
  }
  clearFileds() {
    //clearing all fileds after data entery
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("id").value = "";
  }
  //to clear all customers
  deletAllCustomers() {
    document.getElementById("row");
  }
  erroMessage(message, className) {
    //creat error div
    const errorDiv = document.createElement("div");
    //set class name
    errorDiv.className = className;
    //creat error message
    errorDiv.appendChild(document.createTextNode(message));
    //getting form to insert the message befor
    const form = document.getElementById("form");
    //inserting the div
    document.getElementById("container").insertBefore(errorDiv, form);
    //removing the error div after 3 seconds
    setInterval(() => {
      document.querySelector(".errorMessage").remove();
    }, 3000);
  }
  successMessage(message, className) {
    //creat error div
    const errorDiv = document.createElement("div");
    //set class name
    errorDiv.className = className;
    //creat error message
    errorDiv.appendChild(document.createTextNode(message));
    //getting form to insert the message befor
    const form = document.getElementById("form");
    //inserting the div
    document.getElementById("container").insertBefore(errorDiv, form);
    //removing the error div after 3 seconds
    setInterval(() => {
      document.querySelector(".successMessage").remove();
    }, 3000);
  }
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  //getting Ui variables
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const id = document.getElementById("id").value;
  //instantiating a customer
  const customer = new Customer(firstName, lastName, phone, id);
  //instantiating a UI
  const ui = new UI();
  //validate inputs
  if (firstName === "" || lastName === "" || phone === "" || id === "") {
    //error
    ui.erroMessage("Please fill all fields", "errorMessage");
  } else {
    //Adding a customer
    ui.addCustomer(customer);
    //clearing the fields
    ui.clearFileds();
    //success message
    ui.successMessage("Book Added", "successMessage");
  }
});

//delet all customers
document.getElementById("clear").addEventListener("click", () => {
  //instantiating a UI

  const ui = new UI();

  ui.deletAllCustomers();
});
