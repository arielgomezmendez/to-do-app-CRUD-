
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
};


