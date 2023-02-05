let myForm = document.querySelector('#myForm');
let elements = myForm.elements;
let text = document.querySelector('#text');
let str = elements.str;
let addText = elements.addText;
let sum = elements.sum;
let sumOutput = document.querySelector('#sumOutput');
let quest = elements.quest;
let surname = document.querySelector('#surname');
let userName = document.querySelector('#name');
let secondName = document.querySelector('#secondName');
let count = elements.count;
let countValue = document.querySelector('#countValue');


// Дан инпут и абзац. При клике на кнопку запишите значение инпута в конец текста абзаца.

addText.addEventListener('click', function(event){
    event.preventDefault();
    text.append(`${str.value}`)
})

// Дан инпут. В него вводится число. При клике на кнопку найдите сумму цифр этого числа.

sum.addEventListener('click', function(event) {
    event.preventDefault();
    let massiv = str.value.split('');
    let sum = 0;
    massiv.forEach(element => {
        sum += Number(element);
    });
    sumOutput.append(sum);
})

// В инпут вводится ФИО через пробел. При клике на кнопку запишите фамилию, имя и отчество в анкету.

quest.addEventListener('click', function(event) {
    event.preventDefault();
    let massiv = str.value.split(' ');
    surname.append(massiv[0]);
    userName.append(massiv[1]);
    secondName.append(massiv[2]);
})

// Дан инпут. В него вводится текст. При клике на кнопку узнайте количество слов в этом тексте.


