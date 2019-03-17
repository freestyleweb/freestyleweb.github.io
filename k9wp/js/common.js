$(function() {

	$('#my-menu').mmenu({
        extensions: [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black', ],
        navbar: {
            title: '<img src="../img/Logo.svg" alt="К9 Днепр">'
        },
        offCanvas: {
            position: 'right'
        }
    })
    
	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active');
    });

	$('.carousel-main').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        smartSpeed: 700,
        //navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
    });

    $('a.animated').hover(function() {
        $(this).addClass('rotateIn');
    },
    function(){
        $(this).removeClass('rotateIn');
    });

    $('.carousel-reviews').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        smartSpeed: 700,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsiveClass: true,
    });
});



// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

        // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
        map = new google.maps.Map(document.getElementById('map'), {
                // При создании объекта карты необходимо указать его свойства
                // center - определяем точку на которой карта будет центрироваться
                center: {lat: 48.377398, lng: 34.996167},
                // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                zoom: 15
                // Создаем маркер на карте
        });

        var marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 48.377398, lng: 34.996167},

        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,

        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'Школа "К9 Днепр"'
        });
}
