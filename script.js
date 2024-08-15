const form = document.querySelector("#item-form");
const input = document.querySelector("#item-input");
const uList = document.querySelector("#item-list");
const clear = document.querySelector("#clear");
const close = document.querySelectorAll(".remove-item");
const filter = document.querySelector("#filter");

function onSubmit(e) {
   e.preventDefault();

   // if input empty retry

   if (input.value === "") {
      alert("enter something");
      return;
   }
   //create Li
   const li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   //create button
   const button = createButton("remove-item btn-link text-red");
   //create icon
   const icon = createIcon("fa-solid fa-xmark");
   //append child
   button.appendChild(icon);
   //append button to li
   li.appendChild(button);
   //add everything to page

   uList.appendChild(li);
   check(); // after we add li , we check that it !== 0 then run the f
   input.value = "";
}

function createButton(classes) {
   const button = document.createElement("button");
   button.className = classes;
   return button;
}
function createIcon(classes) {
   const icon = document.createElement("i");
   icon.className = classes;
   return icon;
}

form.addEventListener("submit", onSubmit);

// ----------------------------clear all--------------
function onClick() {
   uList.innerHTML = ``;
   check();
}
clear.addEventListener("click", onClick);

// ----------------- remove each item----------------

function removeItem(e) {
   if (e.target.parentElement.classList.contains("remove-item")) {
      e.target.parentElement.parentElement.remove();
      check();
   }
}
uList.addEventListener("click", removeItem);

//----------------when clear all , delete filter -----------

function check() {
   const listLi = uList.querySelectorAll("li");
   if (listLi.length == 0) {
      filter.style.display = "none";
      clear.style.display = "none";
   } else {
      filter.style.display = "block";
      clear.style.display = "block";
   }
}
check();
