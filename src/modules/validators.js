const validators = () => {

    const allCalcInput = document.querySelectorAll(
        '.calc-count, .calc-day, .calc-square')
    allCalcInput.forEach((calcInput) => {
        calcInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        })
    });

    const allInputText = document.querySelectorAll(
        'input[type=text]:not(.calc-count):not(.calc-day):not(.calc-square), \
        [placeholder="Ваше сообщение"]'
    )
    allInputText.forEach((inputText) => {
        inputText.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^-a-zA-Z ]/, '');
        })
    });

    const allEmail = document.querySelectorAll(
        'input[type=email]'
    )
    allEmail.forEach((email) => {
        email.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z0-9@-_.!~*\']/, '');
        })
    });

    const allTel = document.querySelectorAll(
        'input[type=tel]'
    )
    allTel.forEach((tel) => {
        tel.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9()-]/, '');
        })
    });
}

module.exports = validators;