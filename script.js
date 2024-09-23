// const billInput = document.querySelector('#bill-amount')
// const tipInput = document.querySelector("#tip-amount")
// const people = document.querySelector("#no-of-people")

// const form = document.querySelector('form')

// let allTipBoxes = document.querySelectorAll('.tips')

// let showTipAmount = document.querySelector("h4.tip-amount")
// let showBillAmount = document.querySelector(".total-bill")
// let showDividedAmount = document.querySelector(".divided-bill")

// let submitBtn = document.querySelector('[type="submit"]')
// let resetBtn = document.querySelector('[type="reset"]')

// const allInput = document.querySelectorAll('input')

// submitBtn.disabled = true
// resetBtn.disabled = true

// allInput.forEach((input) => {
//     input.addEventListener('input', () => {
//         if (input.id === 'no-of-people') {
//             console.log('working');
//             submitBtn.disabled = false
//         }
//     })
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let tipAmount = parseInt((billInput.value * tipInput.value) / 100)
//     let totalAmount = parseInt(`${+billInput.value + +tipAmount}`)
//     let dividedAmount = totalAmount / people.value

//     showTipAmount.innerText = tipAmount
//     showBillAmount.innerText = totalAmount
//     showDividedAmount.innerText = dividedAmount

//     resetBtn.disabled = false
//     submitBtn.disabled = true

//     allTipBoxes.forEach((e)=> {
//         e.classList.add('disable')
//     })

// })

// resetBtn.addEventListener('click', (e) => {
//     showTipAmount.innerText = ''
//     showBillAmount.innerText = ''
//     showDividedAmount.innerText = ''

//     billInput.value = ''
//     tipInput.value = ''
//     people.value = ''

//     resetBtn.disabled = true

//     allTipBoxes.forEach((e)=> {
//         e.classList.remove('selected')
//     })

// })

// function selectingBoxes(element, className) {
//     element.forEach((box) => {
//         box.addEventListener('click', () => {
//             if(!box.classList.contains(className)) { 
//                 allTipBoxes.forEach((e) => {
//                     e.classList.remove(className);
//                 })
//                 box.classList.add(className)
//             } 
//             selectingPreDefineTip(box.id)
//         })
//     })
// }

// selectingBoxes(allTipBoxes, 'selected')

// function selectingPreDefineTip(boxId) {

//     if (boxId === 'one') {
//         tipInput.value = 5
//     } else if (boxId === 'two') {
//         tipInput.value = 10
//     } else if (boxId === 'three') {
//         tipInput.value = 15
//     } else if (boxId === 'four') {
//         tipInput.value = 25
//     } else if (boxId === 'five') {
//         tipInput.value = 50
//     } else {
//         tipInput.value = 75
//     }
// }


//2nd Approach, Expert Logic/code=====> (note: also changes the html and css littel bit)

const billInput = document.querySelector('#bill-amount')
const tipInput = document.querySelector("#tip-amount")
const people = document.querySelector("#no-of-people")

let TipBoxes = document.querySelector('.tip-boxes')

let submitBtn = document.querySelector('[type="submit"]')
let resetBtn = document.querySelector('[type="reset"]')

let showTipAmount = document.querySelector("h4.tip-amount")
let showBillAmount = document.querySelector(".total-bill")
let showDividedAmount = document.querySelector(".divided-bill")

submitBtn.disabled = true
resetBtn.disabled = true
let setTipAmount = 0;

submitBtn.addEventListener('click', (e) => {
    let billAmount = parseInt(billInput.value)
    let dividedPeople = parseInt(people.value)

    const tipAmount = billAmount * (setTipAmount / 100)
    const totalBill = billAmount + tipAmount
    const dividedAmount = totalBill / dividedPeople

    showTipAmount.innerText = `₹ ${tipAmount}`
    showBillAmount.innerText = `₹ ${totalBill}`
    showDividedAmount.innerText = `₹ ${dividedAmount}`

    resetBtn.disabled = false;
})


TipBoxes.addEventListener('click', (e) => {
    if (TipBoxes.classList.contains('disable')) {
        return
    }
    if (TipBoxes !== e.target) {
        [...TipBoxes.children].forEach((tip) => {
            tip.classList.remove('selected')
        })
        e.target.classList.add('selected')
        setTipAmount = parseInt(e.target.innerText)
    }

    if (e.target.classList.contains('selected')) {
        tipInput.value = ''
    }

    billBtnEnabled()
})


tipInput.addEventListener('input', () => {
    setTipAmount = parseInt(tipInput.value)

    if (tipInput.value) {
        [...TipBoxes.children].forEach((tip) => {
            tip.classList.remove('selected')
        })
    }

    billBtnEnabled()

})

billInput.addEventListener('input', () => {
    if (billInput.value) {
        TipBoxes.classList.remove('disable')
        tipInput.disabled = false
        people.disabled = false
    } else {
        TipBoxes.classList.add('disable');
        [...TipBoxes.children].forEach((tip) => {
            tip.classList.remove('selected')

            tipInput.disabled = true
            people.disabled = true

            tipInput.value = ''
            people.value = ''
        })
    }

    billBtnEnabled()
})

people.addEventListener('input', () => {
    billBtnEnabled()
})


function billBtnEnabled() {
    if (setTipAmount && people.value) {
        submitBtn.disabled = false
    } else {
        submitBtn.disabled = true

    }
}

resetBtn.addEventListener('click', (e) => {
    showTipAmount.innerText = ''
    showBillAmount.innerText = ''
    showDividedAmount.innerText = ''

    billInput.value = ''
    tipInput.value = ''
    people.value = ''

    tipInput.disabled = true
    people.disabled = true
    TipBoxes.classList.add('disable')
    resetBtn.disabled = true;

    [...TipBoxes.children].forEach((tip) => {
        tip.classList.remove('selected')
    })
    submitBtn.disabled = true

})