

// iphone  handler

// copy code
const decrement = document.getElementById('minusButton');
const increment = document.getElementById('addButton');
const $counter = document.getElementById('amountInput');
const updatePhonePrice = parseInt(document.getElementById('phonePrice').innerText);


// console.log(subtotalPrice);


increment.addEventListener('click', function(){
    $counter.value = parseInt($counter.value) + 1;
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
    const casePrice = updateCasePrice * (numberInput.value);
    document.getElementById('casePrice').innerText = casePrice;
});

minusCaseButton.addEventListener('click', function(){
    numberInput.value = parseInt(numberInput.value) - 1;
    const removeCasePrice = updateCasePrice * (numberInput.value);
    document.getElementById('casePrice').innerText = removeCasePrice;
})

// total Price section

const subtotal = parseInt(document.getElementById('subtotalPrice').innerText);

console.log(subtotal);




