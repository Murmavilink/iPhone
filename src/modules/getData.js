const getData = () => {
    const sellList = document.querySelector('.cross-sell__list');
    const btnAdd = document.querySelector('.cross-sell__add');

    let stack = 4;
    let count = 1;

    const renderGoods = (goods) => {
        sellList.textContent = '';

        goods.forEach(good => {
            sellList.insertAdjacentHTML('beforeend', `
            <li>
                <article class="cross-sell__item">
                    <img class="cross-sell__image" src="./${good.photo}">
                    <h3 class="cross-sell__title">${good.name}</h3>
                    <p class="cross-sell__price">${good.price} ₽</p>
                    <button type="button" class="button button_buy cross-sell__button">Купить</button>
                </article>
            </li>
            `);
        });

    };


    const changeData = (data) => {
        const newStack = stack * count;

        renderGoods(data.slice(0, newStack));

        if (data.length > newStack) {
            count++;
        } else {
            btnAdd.remove();
        }
    };


    const getGoods = async () => {
        try {
            const resp = await fetch('./cross-sell-dbase/dbase.json');
            const data = await resp.json();
            changeData(data);
        } catch (error) {
            console.log(error);
        }
    };

    getGoods();

    btnAdd.addEventListener('click', getGoods);
};

export default getData;