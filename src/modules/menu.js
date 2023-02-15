export const smoothScroll = () => {
    const links = [...document.querySelectorAll('.header-menu a'), document.querySelector('.card-details__link-characteristics')];

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            let id = link.getAttribute('href').substring(1);
            let section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                });
            }
        });
    });

};


export const burgerMenu = () => {
    const menuItems = document.querySelectorAll('.header-menu__item');
    const menuBurger = document.querySelector('.header-menu__burger');
    const burgerList = document.createElement('div');
    burgerList.classList.add('burger-list');

    const handleMenu = () => {
        burgerList.classList.toggle('burger-list--open');
    };

    const showMenu = () => {
        menuItems.forEach(item => {
            item.style.whiteSpace = 'normal';
            burgerList.append(item);
        });

        menuBurger.append(burgerList);
        
        handleMenu();
    };

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('header-menu__burger')) {
            showMenu();
        }

        if(e.target.matches('.header-menu__item > a')) {
            handleMenu();
        } else if(burgerList.classList.contains('burger-list--open') && !e.target.closest('.header-menu__burger')) {
            handleMenu();
        }
    });

};