export const modal = () => {
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal__title');
    const btnDelivery = document.querySelector('.card-details__button_delivery');
    const tabsTitle = document.querySelector('.card-details__title');


    const addStyleModal = (value) => {
        modal.style.display = value;
    };

    btnDelivery.addEventListener('click', () => {
        addStyleModal('flex');

        modalTitle.textContent = tabsTitle.textContent;
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__close') || !e.target.closest('.modal__block')) {
            addStyleModal('none');
        }
    });
};


export const sendData = () => {
    const modalBlock = document.querySelector('.modal__block');
    const btnSubmit = modalBlock.querySelector('.modal__submit');
    const labels = modalBlock.querySelectorAll('.modal__label');
    const inputs = modalBlock.querySelectorAll('.modal__input');

    // Объект данных при отправке сообщение 
    const message = {};

    //Статус при отправке сообщение
    const statusBlock = document.createElement('p');
    statusBlock.classList.add('status-block');
    const statusLoading = 'Загрузка..';
    const statusSuccess = 'Успешно отправлено';
    const statusError = 'Ошибка..';
    ////////


    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };

    const sendMessage = (obj) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(data => {
            statusBlock.textContent = statusSuccess;
            console.log(data);
        })
        .catch(error => {
            statusBlock.textContent = statusError; 
        });
    };

    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        labels.forEach(label => {
            const span = label.querySelector('span');
            const input = label.querySelector('input');
            message[span.textContent] = input.value;
        });

        statusBlock.textContent = statusLoading;
        sendMessage(message);
        clearInputs();
    });

    modalBlock.append(statusBlock);
};