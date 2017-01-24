;
    var wDelta = 120;
    function scrollDoc(e) {
        if (!e) e = event;
        if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
        var __delta = e.wheelDelta || -e.detail;
        __delta /= Math.abs(__delta);
        document.documentElement.scrollLeft -= __delta * wDelta; // FF, Opera, IE
        if (this.attachEvent) return false;
        document.body.scrollLeft -= __delta * wDelta; // Chrome
    }
   document.getElementById("tableScroll") = function() {
        var html = document.documentElement;
        if (html.attachEvent) {
            html.attachEvent("onmousewheel", scrollDoc); // IE and Opera
        } else {
            html.addEventListener("DOMMouseScroll", scrollDoc, false); // FF
            html.addEventListener("mousewheel", scrollDoc, false); // Chrome
        }
    }

