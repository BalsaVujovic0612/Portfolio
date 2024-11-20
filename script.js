let messageBtn = document.getElementById('messageBtn')
let nameInput = document.getElementById('nameInput')
let emailInput = document.getElementById('emailInput')
let phoneInput = document.getElementById('phoneInput')
let subjectInput = document.getElementById('subjectInput')
let textArea = document.getElementById('text-area')

messageBtn.addEventListener('click', function(){
    nameInput.value = ''
    emailInput.value = ''
    phoneInput.value = ''
    subjectInput.value = ''
    textArea.value = ''
})
 