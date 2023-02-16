export const accordion = () => {
    const charList = document.querySelector('.characteristics__list');

    charList.addEventListener('click', (e) => {

        if(e.target.classList.contains('characteristics__title')) {
            const content = e.target.nextElementSibling;

            e.target.classList.toggle('active');

            if(e.target.classList.contains('active')) {
                content.style.height = content.scrollHeight + 'px';
            } else {
                content.style.height = 0;
            }
        }
        
    });

};