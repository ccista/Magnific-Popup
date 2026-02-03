$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    mainClass: 'mfp-fade',
    removalDelay: 300,
    closeOnBgClick: false, // отключает закрытие по клику на фон
    enableEscapeKey: false, // отключает закрытие по клавише ESC
    showCloseBtn: true, // показывает кнопку закрытия (по умолчанию true)
    callbacks: {
        beforeOpen: function() {
          // Отключаем прокрутку при открытии
          $('body').css('overflow', 'hidden');
        },
        close: function() {
          // Восстанавливаем прокрутку при закрытии
          $('body').css('overflow', 'auto');
        }
    }
});
