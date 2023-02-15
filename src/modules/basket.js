import { openModal } from "./modal";

export const basket = () => {

    const productList = document.querySelector('.cross-sell__list');
    const basket = document.querySelector('.basket');
    const basketBlock = document.querySelector('.basket__inner');
    const cart = document.querySelector('.cart');


    const arrayProducts = JSON.parse(localStorage.getItem('products')) || [];


    const addToLocalStorage = () => {
        localStorage.setItem('products', JSON.stringify(arrayProducts));
    };


    const renderProducts = () => {

        basketBlock.innerHTML = '';

        arrayProducts.forEach(product => {
            basketBlock.insertAdjacentHTML('beforeend', `
                <article class="basket__item">
                    <img class="basket__image" src="${product.image}">
                    <h3 class="basket__title">${product.title}</h3>
                    <p class="basket__price">${product.price}</p>
                    <button type="button" class="basket__btn button-buy">Купить</button>
                    <button type="button" class="basket__btn button-reomve">Удалить</button>
                </article>
                `);
        });

        buttonlListeners();
        addCart();
    };

    productList.addEventListener('click', (e) => {

        if (e.target.classList.contains('button-basket')) {
            const product = {};

            const productItem = e.target.closest('.cross-sell__item');
            const productImage = productItem.querySelector('.cross-sell__image');
            const productTitle = productItem.querySelector('.cross-sell__title');
            const productPrice = productItem.querySelector('.cross-sell__price');


            product.image = productImage.getAttribute('src');
            product.title = productTitle.textContent;
            product.price = productPrice.textContent;


            arrayProducts.forEach((product, index) => {
                if (product.title == productTitle.textContent) {
                    arrayProducts.splice(index, 1);
                }
            });

            arrayProducts.push(product);
        }

        addToLocalStorage();
        renderProducts();

    });


    const buttonlListeners = () => {
        const buttons = basketBlock.querySelectorAll('.button-buy');
        const headings = basketBlock.querySelectorAll('.basket__title');
        const buttonsRemove = basketBlock.querySelectorAll('.button-reomve');

        buttons.forEach((btn, index) => {
            openModal(btn, headings[index]);
        });

        buttonsRemove.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                arrayProducts.splice(index, 1);
                addToLocalStorage();
                renderProducts();

                if(arrayProducts.length === 0) {
                    basket.classList.remove('active');
                    cart.classList.remove('active');
                }

            });
        });
    };


    const addCart = () => {
        if(arrayProducts.length > 0) {
            cart.classList.add('active');
        }
    };


    cart.addEventListener('click', () => {
        basket.classList.toggle('active');
    });


    addCart();
    renderProducts();
};

