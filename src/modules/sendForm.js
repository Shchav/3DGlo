const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется';

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            let reg;
            switch (input.name) {
                case 'user_phone': reg = /^[0-9()+-]*$/; break;
                case 'user_name': reg = /^[а-яА-Я ]*$/; break;
                case 'user_message': reg = /^[а-яА-Я\s\d]*$/; break;
            }
            if (reg && !reg.test(input.value))
                success = false;
        })
        return success;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {}

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        })

        // С этого элемента берем дополнительные данные для 
        // отправки вместе с данными со всех input-ов формы
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            // console.log(elem);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        })

        if (validate(formElements)) { // Валидация input-ов формы
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = ''; // Очистка input-ов формы после отправки
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })
        } else {
            alert('Данные не валидны!!!');
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место)')
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm;