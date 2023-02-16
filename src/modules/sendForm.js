import { maskPhone } from "./validate";
import { validateName } from "./validate";
import { validate } from "./validate";


export const sendData = () => {
    const modalBlock = document.querySelector('.modal__block');
    const form = modalBlock.querySelector('.modal__form');
    const labels = modalBlock.querySelectorAll('.modal__label');
    const inputs = modalBlock.querySelectorAll('.modal__input');

    //Объект данных при отправке сообщение 
    const message = {};

    //Статус при отправке сообщение
    const statusBlock = document.createElement('p');
    statusBlock.classList.add('status-block');
    const statusLoading = 'Загрузка...';
    const statusSuccess = 'Успешно отправлено';
    const statusError = 'Ошибка!';



    const clearStatusBlock = () => {
        setTimeout(() => {
            statusBlock.style = '';
            statusBlock.textContent = '';
        }, 5000);
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    const sendMessage = (messageData) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(messageData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(data => {
            statusBlock.style.color = 'green';
            statusBlock.textContent = statusSuccess;
            clearStatusBlock();
        })
        .catch(error => {
            statusBlock.style.color = 'red';
            statusBlock.textContent = statusError;
            clearStatusBlock();
        });
    };
    
    form.addEventListener('input', (e) => {
        validate(inputs);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if(validate(inputs)) {
            labels.forEach(label => {
                const span = label.querySelector('span');
                const input = label.querySelector('input');
                message[span.textContent] = input.value;
            });
            
            message['title'] = form.querySelector('.modal__title').textContent;
    
            modalBlock.append(statusBlock);
            statusBlock.textContent = statusLoading;
            sendMessage(message);
            clearInputs();
        }

        
    });

    maskPhone('.form-phone');
    validateName();
};