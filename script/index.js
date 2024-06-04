let age=document.querySelectorAll('input')[0]
let ageDays=document.querySelectorAll('input')[1]
let batini=document.querySelector('button')

function ageToDays(){
 let output = age.value*365
 return ("You are " + output +" days old .")

 ageDays.value = output
}
function ageToDay(){
    ageDays.value = ageToDays()
}
ageToDays()
batini.addEventListener('click',ageToDay)



// let age 
// function ageToDays(age){
// return age *365
// }
// console.log("You are " + ageToDays(14) +" days old .")