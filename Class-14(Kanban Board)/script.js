let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector('.remove-btn')
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector('.main-cont')

let textAreaCont = document.querySelector('.textArea-cont')

let allPriorityColors = document.querySelectorAll('.priority-color')


let toolboxColors = document.querySelectorAll('.color-box')
// console.log(toolboxColors)

let colors = ['lightpink' , 'lightgreen' , 'lightblue' , 'black']

let modalPriorityColor = 'lightpink'


let lockClass = 'fa-lock'
let unlockClass =  "fa-lock-open"


let ticketsArr = []

if(localStorage.getItem('tickets')){
    ticketsArr = JSON.parse(localStorage.getItem('tickets'))

    ticketsArr.forEach(function(ticket){
        createTicket(ticket.ticketTask , ticket.ticketColorClass , ticket.ticketID )
    })
}



// console.log(allPriorityColors)

let addTaskFlag = false;
let removeTaskFlag = false

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
       modalCont.style.display = 'none'
       textAreaCont.value = ''
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

        //  console.log(modalPriorityColor)
    })
})


// Get tasks based on color Filter

for(let i=0 ; i<toolboxColors.length ; i++){
    toolboxColors[i].addEventListener('click', function(){
        let selectedToolBoxColor = toolboxColors[i].classList[0]

         let filteredTickets = ticketsArr.filter(function(ticket){
            return selectedToolBoxColor === ticket.ticketColorClass
         })

         console.log(filteredTickets)


        let allTickets = document.querySelectorAll('.ticket-cont')
        for(let i=0 ; i<allTickets.length ; i++){
            allTickets[i].remove()
        }

        filteredTickets.forEach(function(filterdTicket){
            createTicket(filterdTicket.ticketTask ,filterdTicket.ticketColorClass ,  filterdTicket.ticketID)
        })


    })
}








// This function generates a ticket

function createTicket(ticketTask ,  ticketColorClass , ticketID) {
  let id = ticketID|| shortid() // generates unique id for ticket
//   console.log(id)
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color-cont ${ticketColorClass}"></div>
  <div class="ticket-id">
      ${id}
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

   handleLock(ticketCont , id) // lock
   handleRemoval(ticketCont , id) // removal
   handleColor(ticketCont ,id)// change color bands

   if(!ticketID){
    ticketsArr.push({ticketTask , ticketColorClass, ticketID:id})
    localStorage.setItem('tickets' ,JSON.stringify(ticketsArr))
   }

 

   console.log(ticketsArr)
   
}



// handle Lock


function handleLock(ticket , id){

  let ticketLockElem = ticket.querySelector('.ticket-lock')

  let ticketLockIcon = ticketLockElem.children[0]

  let ticketTaskArea = document.querySelector('.ticket-task')

//   console.log(ticketLockIcon)

  ticketLockIcon.addEventListener('click' , function(){

    let ticketIdx = getIdx(id) // hxg6n9QYl
    console.log(ticketIdx)
    if(ticketLockIcon.classList.contains(lockClass)){
        ticketLockIcon.classList.remove(lockClass)
        ticketLockIcon.classList.add(unlockClass)

        ticketTaskArea.setAttribute('contenteditable', 'true')



    }
    else{
        ticketLockIcon.classList.remove(unlockClass)
        ticketLockIcon.classList.add(lockClass)
        ticketTaskArea.setAttribute('contenteditable', 'false')
    }


    ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText
    localStorage.setItem('tickets', JSON.stringify(ticketsArr))
  })
}



//handle Removal of Tickets



removeBtn.addEventListener('click' , function(){
    removeTaskFlag = !removeTaskFlag // true


    if(removeTaskFlag==true){
        alert('delete button Activated')
        removeBtn.style.color = 'red'
    }
    else{
        alert('Delete button Deactivated')
        removeBtn.style.color = 'white'
    }
})


function handleRemoval(ticket ,id){
   ticket.addEventListener('click' , function(){
     
       if(!removeTaskFlag) return

       let idx = getIdx(id)

       ticket.remove()
       ticketsArr.splice(idx , 1)

       localStorage.setItem('tickets' , JSON.stringify(ticketsArr))
   })
}


// handle color band

function handleColor(ticket , id){
   let ticketColorBand = ticket.querySelector(".ticket-color-cont")


   ticketColorBand.addEventListener('click' , function(){
     let ticketIdx = getIdx(id)
     let currentColor = ticketColorBand.classList[1]
    //  console.log(currentColor)

    let currentColorIdx = colors.findIndex(function(color){
         return currentColor === color
    })

    currentColorIdx++

    let newTicketColorIdx = currentColorIdx % colors.length
    let newTicketColorValue = colors[newTicketColorIdx]


    ticketColorBand.classList.remove(currentColor)
    ticketColorBand.classList.add(newTicketColorValue)

    ticketsArr[ticketIdx].ticketColorClass = newTicketColorValue
    localStorage.setItem('tickets' , JSON.stringify(ticketsArr))

    // console.log(currentColorIdx)
   })
}


function getIdx(id){
   let ticketIdx = ticketsArr.findIndex(function(ticketObj){
      return ticketObj.ticketID === id
   })

   return ticketIdx
}