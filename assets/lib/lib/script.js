(function () {
    'use strict';
    Array.prototype.forEach
        .call(document.getElementsByClassName('nav-link'), function (e) {
            if (e.href === location.href.split('?')[0]) e.classList.add('link-current');
        });
    window.addEventListener('resize', (function resize() {
        document.getElementsByClassName('wrapper')[0].style
            .paddingBottom = document.getElementsByTagName('footer')[0].offsetHeight + 'px';
        return resize;
    })());
})();