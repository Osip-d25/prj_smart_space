// Подключение функционала "Чертогов Фрилансера"
//import { $LG } from "lightgallery/lgQuery.js";
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


$(document).ready(function() {

    //открываем мобильное меню 
    const $burger = $('.icon-menu');
    const $mobMenu = $('#mobile-menu');

    $burger.on('click', function() {
        $mobMenu.toggleClass('mobile-menu-open');
    });

});