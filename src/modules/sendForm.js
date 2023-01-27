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
