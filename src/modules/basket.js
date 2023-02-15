import { openModal } from "./modal";

export const basket = () => {

    const productList = document.querySelector('.cross-sell__list');
    const basket = document.querySelector('.basket');
    const basketBlock = document.querySelector('.basket__inner');
    const cart = document.querySelector('.cart');


    const arrayProducts = [];


    const renderProducts = () => {

        basketBlock.innerHTML = '';

        arrayProducts.forEach(product => {
            basketBlock.insertAdjacentHTML('beforeend', `
                <article class="basket__item">
                    <img class="basket__image" src="${product.image}">
                    <h3 class="basket__title">${product.title}</h3>
                    <p class="basket__price">${product.price}</p>
                    <button type="button" class="basket__btn button-buy">Купить</button>
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

        renderProducts();

    });


    const buttonlListeners = () => {
        const buttons = basketBlock.querySelectorAll('.button-buy');
        const headings = basketBlock.querySelectorAll('.basket__title');

        buttons.forEach((btn, index) => {
            openModal(btn, headings[index]);
        });
    };


    const addCart = () => {
        if(arrayProducts.length > 0) {
            cart.style.display = 'block';
        }
    };


    cart.addEventListener('click', () => {
        basket.classList.toggle('active');
    });

};

