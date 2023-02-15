export const openModal = (btn, title) => {
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal__title');
   
    
    const addStyleModal = (value) => {
        modal.style.display = value;
    };

    btn.addEventListener('click', () => {
        addStyleModal('flex');

        modalTitle.textContent = title.textContent;
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__close') || !e.target.closest('.modal__block')) {
            addStyleModal('none');
        }
    });
};