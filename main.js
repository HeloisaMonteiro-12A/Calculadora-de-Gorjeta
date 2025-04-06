let bill = 0
let tipPercentage = 0 
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNunber 
    
}

function receiveNumberOfPeople(){
    numberOfPeople = document.querySelector("#people").valueAsNunber
}

function receiveTipPercentageValue(value){
    tipPercentage = value / 100

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}