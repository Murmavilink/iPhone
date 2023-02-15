import { openModal } from "./modal";

const tabs = () => {
    const buttons = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsImage = document.querySelector('.card__image_item');
    const tabsDescr = document.querySelector('.card-details__description-list');

    const tabsOptions = [
        {
            name: 'Смартфон Apple iPhone 13 Pro 128GB Graphite',
            color: 'Graphite',
            memory: '128',
            price: 65000,
            image: 'img/iPhone-graphite.webp',
            description: 'Характеристики: ОС iOS 15, Тип корпуса: классический, Экран: 6.1", Оперативная память: 6 Гб, Встроенная память: 128Гб, SIM: 1 SIM, Основная камера: 12 Mpx, Количество модулей камеры: 3, Фронтальная камера: 12Mpx, Аккумулятор: 3125 мАч, сенсорный экран, поддержка 4G, поддержка 5G, NFC, Bluetooth, Wi-Fi, GPS, Сканер лица, Быстрая зарядка, Беспроводная зарядка'
        },
        {
            name: 'Смартфон Apple iPhone 13 Pro Max 256GB Silver',
            color: 'Silver',
            memory: '256',
            price: 72000,
            image: 'img/iPhone-silver.webp',
            description: 'Характеристики: ОС iOS 15, Тип корпуса: классический, Экран: 6.7", Оперативная память: 6 Гб, Встроенная память: 256Гб, SIM: 1 SIM, Основная камера: 12 Mpx, Количество модулей камеры: 3, Фронтальная камера: 12Mpx, Аккумулятор: 4373 мАч, сенсорный экран, поддержка 4G, поддержка 5G, NFC, Bluetooth, Wi-Fi, GPS, Сканер лица, Быстрая зарядка, Беспроводная зарядка'
        },
        {
            name: 'Смартфон Apple iPhone 13 Pro 1TB Sierra Blue',
            color: 'Sierra Blue',
            memory: '1TB',
            price: 80000,
            image: 'img/iPhone-sierra_blue.webp',
            description: 'Характеристики: ОС iOS 15, Тип корпуса: классический, Экран: 6.1", Оперативная память: 6 Гб, Встроенная память: 1024Гб, SIM: 1 SIM, Основная камера: 12 Mpx, Количество модулей камеры: 3, Фронтальная камера: 12Mpx, Аккумулятор: 3125 мАч, сенсорный экран, поддержка 4G, поддержка 5G, NFC, Bluetooth, Wi-Fi, GPS, Сканер лица, Быстрая зарядка, Беспроводная зарядка'
        },
    ];


    const showContentTab = (index = 0) => {
        tabsTitle.textContent = tabsOptions[index].name;
        tabsImage.setAttribute('src', tabsOptions[index].image);
        tabsPrice.textContent = `${tabsOptions[index].price} ₽`;
        tabsDescr.textContent = tabsOptions[index].description;
        document.title = `iPhone ${tabsOptions[index].color}`;
    };
    
    const removeClass = () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
    };

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            removeClass();

            if(btn === e.target) {
                btn.classList.add('active');
                showContentTab(index);
            }

        });
    });


    const buttonlListeners = () => {
        const btnDelivery = document.querySelector('.card-details__button_delivery');
        const tabsTitle = document.querySelector('.card-details__title');

        console.log(btnDelivery);
        console.log(tabsTitle);
        openModal(btnDelivery, tabsTitle);
    };

    buttonlListeners();
    showContentTab(0);

};


export default tabs;