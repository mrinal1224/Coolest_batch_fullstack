let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector('.main-cont')

let addTaskFlag = false;

addBtn.addEventListener("click", function () {
  addTaskFlag = !addTaskFlag;
  //   console.log(addTaskFlag)

  if (addTaskFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

modalCont.addEventListener("keydown", function (e) {
  let key = e.key; // a ,b , shift....

  //    console.log(key)

  if (key == "Shift") {
    console.log("ticket created");

       createTicket()
  }
});

function createTicket() {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color"></div>
  <div class="ticket-id">
      1234567
   </div>

   <div class="ticket-task">
      demo task
   </div>

   <div class="ticket-lock">
      <i class="fa-solid fa-lock"></i>
   </div>
   `;

   mainCont.appendChild(ticketCont)
   modalCont.style.display = "none";
   
}
