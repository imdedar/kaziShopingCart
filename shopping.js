/* const iphonePrice = parseFloat(document.getElementById('phonePrice').innerText);
const phoneInput = parseFloat(document.getElementById('amountInput').value);
// console.log(iphonePrice);

const plusButton = document.getElementById('addButton');
plusButton.addEventListener('click', function(){
    console.log('Plus button clicked');
})

const deleteButton = document.getElementById('minusButton');
deleteButton.addEventListener('click', function(){
    console.log('minus button clicked');
}) 
*/
// var count = 1;
// const handleIncrement = () => {
//     count++;
//     totalCount.innerText = count;
// };

// const handleDecrement = () => {
//     count--;
//     totalCount.innerText = count;
// };

// // Select increment and decrement buttons
// const incrementCount = document.getElementById('addButton');
// const decrementCount = document.getElementById('minusButton');

// // Add click event to buttons
// plusButton.addEventListener("click", handleIncrement);
// deleteButton.addEventListener("click", handleDecrement);
// const iphoneCost = parseFloat(iphonePrice);
// console.log(iphoneCost);

// iphonePrice.addEventListener('mouseover', function(){
//     const iphoneCost = document.getElementById('phonePrice').innerText;
//     const priceOfPhone  = parseFloat(iphoneCost);
//     console.log(priceOfPhone);
// })



// console.log(typeof(phoneInput));

// iphone  handler
const decrement = document.getElementById('minusButton');
const increment = document.getElementById('addButton');
const $counter = document.getElementById('amountInput');
const updatePhonePrice = parseInt(document.getElementById('phonePrice').innerText);

// console.log(updatePhonePrice);

increment.addEventListener('click', function(){
    $counter.value = parseInt($counter.value) + 1;
    // console.log($counter.value);
    // document.getElementById('phonePrice').innerText = updatePhonePrice;
    // const newPrice = updatePhonePrice * $counter;
    const unitCost = updatePhonePrice * ($counter.value);
     document.getElementById('phonePrice').innerText = unitCost;
       
});

decrement.addEventListener('click', function(){
    $counter.value = parseInt($counter.value) - 1;
    const priceOfPhone = updatePhonePrice * ($counter.value);
    document.getElementById('phonePrice').innerText = priceOfPhone;
});

// iphone case handler
const minusCaseButton = document.getElementById('minusCase');
const plusCaseButton = document.getElementById('plusCase');
const numberInput = document.getElementById('caseInput');
const updateCasePrice = parseInt(document.getElementById('casePrice').innerText);

plusCaseButton.addEventListener('click', function(){
    numberInput.value = parseInt(numberInput.value) + 1;
    var casePrice = updateCasePrice * (numberInput.value);
    document.getElementById('casePrice').innerText = casePrice;
});

minusCaseButton.addEventListener('click', function(){
    numberInput.value = parseInt(numberInput.value) - 1;
    var removeCasePrice = updateCasePrice * (numberInput.value);
    document.getElementById('casePrice').innerText = removeCasePrice;
})

// total Price section


const subtotalPrice = parseInt(document.getElementById('subtotalPrice').
innerText);

// document.getElementById('subtotalPrice').innerText = subtotalPrice;

    subtotalPrice.addEventListener(function(){
    const lastPrice =  updateCasePrice + updatePhonePrice;
    lastPrice = subtotalPrice;
    document.getElementById('subtotalPrice').innerText = subtotalPrice;
   
    
})
// document.getElementById('subtotalPrice').innerText = subtotalPrice;

console.log(subtotalPrice);





