
/*Select all the selectors from the HTML */
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

/*validate the input fields*/
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation(); 
});

let formValidation = () => {
    if (textInput.value === "") {
      console.log("failure");
      msg.innerHTML = "Task cannot be blank";
    } else {
      console.log("success");
      msg.innerHTML = "";
      acceptData(); 
    }
};

//Collect the data from the input fields, using the function named acceptData and an object named data.
let data = {};
let acceptData = () => {
    data["text"] = textInput.value,
    data["date"] = dateInput.value,
    data["description"] = textarea.value,

    console.log(data);
    createTasks();
};

/* Create task, with a function, use template literals to create the HTML elements,
   and use a map to push the data collected from the user inside the template.  */
let createTasks = () => {
    tasks.innerHTML = `
    <div >
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.date}</span>
          <p>${data.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
    </div>`;
  };


