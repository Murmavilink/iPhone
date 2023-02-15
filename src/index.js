import tabs from "./modules/tabs";
import accordion from "./modules/accordeon";
import getData from "./modules/getData";

import { smoothScroll } from "./modules/menu";
import { burgerMenu } from "./modules/menu";
import { sendData } from "./modules/sendForm";
import { basket } from "./modules/basket";

smoothScroll();
burgerMenu();
tabs();
accordion();
getData();
sendData();
basket();