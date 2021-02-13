(function () {
    'use strict';
    function setPadding() {
        var e = document.getElementsByClassName("wrapper")[0],
            headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
        e.style.paddingTop = ((headerHeight * 1.125) + "px");
        e.style.paddingBottom = ((document.getElementsByTagName("footer")[0].offsetHeight + ((headerHeight * 1.125) - headerHeight)) + "px");
    }
    window.addEventListener("resize", setPadding);
    setPadding();
})();
