let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector('.main-cont')

let textAreaCont = document.querySelector('.textArea-cont')

let allPriorityColors = document.querySelectorAll('.priority-color')


// let colors = ['lightpink' , 'lightblue' , 'lightgreen' , 'black']

let modalPriorityColor = 'lightpink'

console.log(allPriorityColors)

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

       createTicket(textAreaCont.value , modalPriorityColor)
  }
});


// Add tasks according to active color


allPriorityColors.forEach(function(colorElem){
   
    colorElem.addEventListener('click' , function(){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove('active')
        })

         colorElem.classList.add('active')

         modalPriorityColor = colorElem.classList[0] // lp lb ...

         console.log(modalPriorityColor)
    })
})








// This function generates a ticket

function createTicket(ticketTask ,  ticketColorClass) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColorClass}"></div>
  <div class="ticket-id">
      1234567
   </div>

   <div class="ticket-task">
      ${ticketTask}
   </div>

   <div class="ticket-lock">
      <i class="fa-solid fa-lock"></i>
   </div>
   `;

   mainCont.appendChild(ticketCont)
   modalCont.style.display = "none";
   
}
