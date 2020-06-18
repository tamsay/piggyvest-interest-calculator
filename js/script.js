let body = document.querySelector('body')
let investmentPlans = document.querySelectorAll('option')
let investmentGroup = document.querySelector('#plans')
let interestBtn = document.querySelector('#calcInterestBtn')
let rateDisplay = document.querySelector('#rateDisplay')
let unitsInput = document.querySelector('#unitsDiv input')
let time = document.querySelector('#monthsDiv input')
let basePriceDisplay = document.querySelector('#investmentPlanDiv p')
let baseDisplay = document.querySelector('#investmentPlanDiv p span')
let interestSpan = document.querySelector('#interest')
let totalAmountSpan = document.querySelector('#total')

       
investmentGroup.addEventListener('change', ()=>{
    displayInterest()
    basePriceDisplay.style.visibility = 'visible'
    baseDisplay.innerText = getBasePrice(getPlan());
}) 

let plansObj = [
    {plan: '', interest: 0, basePrice: 0},
    {plan: 'Maize', interest: 20, basePrice: 5000},
    {plan: 'Transport', interest: 25, basePrice: 99999},
    {plan: 'Estate', interest: 30, basePrice: 1500},
    {plan: 'Uber', interest: 15, basePrice: 50000},
]


let displayInterest=()=>{
    let plan = (investmentGroup.options[investmentGroup.selectedIndex].value);

    plansObj.forEach(element=>{
        if(plan.toLowerCase() === element.plan.toLowerCase()){
            rateDisplay.innerText = element.interest
        }
    })
}
getPlan=()=>{
    return investmentGroup.options[investmentGroup.selectedIndex].value;
}
getBasePrice=(plan)=>{
    let price = 0
    plansObj.forEach(element=>{
        if(plan.toLowerCase() === element.plan.toLowerCase()){
            price = (element.basePrice)
        }
    })
    return price;
}
getInterest=(plan)=>{
    let rate = 0
    plansObj.forEach(element=>{
        if(plan.toLowerCase() === element.plan.toLowerCase()){
            rate = (element.interest)
        }
    })
    return rate;
}
calculateInterest=(basePrice, rate, month, units)=>{
    return interest = (((basePrice * rate * (month/12) * units)/100)).toFixed(2);
}
interestBtn.addEventListener('click', ()=>{
    // investmentGroup.options[investmentGroup.selectedIndex].value
    let basePrice = getBasePrice(getPlan());
    let rate = getInterest(getPlan());
    let month = Number(time.value);
    let units = Number(unitsInput.value)
    // console.log(units)
    let total
    let interest = calculateInterest(basePrice, rate, month, units);
    interestSpan.innerText = interest;
    totalAmountSpan.innerText = basePrice * units;
})

