const clear = document.querySelector("#clear");
const uList = document.querySelector("#items");
const filter = document.querySelector("#filter");
const form = document.querySelector("#form");
const input = document.querySelector("#input");

//clear button Activate
function onClear() {
   uList.innerHTML = ``;
   check();
}
clear.addEventListener("click", onClear);

//remove each item by click the x icon

function removeItem(e) {
   if (e.target.parentElement.classList.contains("remove-item")) {
      e.target.parentElement.parentElement.remove();
   }
   check();
}
uList.addEventListener("click", removeItem);

// ---------------add item when submit-------------------

function onSubmit(e) {
   e.preventDefault();
   if (input.value == ``) {
      alert("Enter a Task first");
      return;
   }
   const li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   // add button
   const button = createButton("remove-item btn-link text-red");
   // append icon to button
   const icon = createIcon("fa-solid fa-xmark");
   button.appendChild(icon);
   // append to to li
   li.appendChild(button);
   // append li to ul
   uList.appendChild(li);
   input.value = ""; // clear input
   check();
}
function createButton(classes) {
   const button = document.createElement("button");
   button.classList = classes;
   return button;
}
function createIcon(classes) {
   const icon = document.createElement("i");
   icon.classList = classes;
   return icon;
}
form.addEventListener("submit", onSubmit);

// filter function
function onFilter(e) {
   const li = uList.querySelectorAll("li");
   const text = e.target.value.toLowerCase();
   li.forEach((item) => {
      const taskName = item.firstChild.textContent.toLocaleLowerCase();
      console.log(taskName);
      if (taskName.indexOf(text) != -1) {
         item.style.display = "flex";
      } else {
         item.style.display = "none";
      }
   });
   check();
}

filter.addEventListener("input", onFilter);

//--------check if there is no tasks delete clear n filter----

function check() {
   const li = uList.querySelectorAll("li");
   if (li.length == 0) {
      clear.style.display = "none";
      filter.style.display = "none";
      filter.value = "";
   } else {
      clear.style.display = "block";
      filter.style.display = "block";
   }
}
check();
