export const smoothScroll = () => {
    const links = document.querySelectorAll('.header-menu__list > .header-menu__item > a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            let id = link.getAttribute('href').substring(1);
            let section = document.getElementById(id);

            if(section) {
                section.scrollIntoView({
                    block: "center", 
                    behavior: "smooth"
                });
            }
        });
    });

};
