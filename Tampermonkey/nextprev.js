// ==UserScript==
// @name         kodok
// @namespace    https://github.com/Jexytd
// @version      0.1
// @description  Side project kodok
// @author       Oyen
// @match        https://komikcast.site/chapter/*
// @match        https://example.com/chapter/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var next,prev;
    (function() {
        const DIVs = document.getElementsByClassName('nextprev')[0];
        for (const element of DIVs.children) {
            if (!element.hasAttribute('rel')) { return 0 };

            if (element.getAttribute('rel') == 'next') {
                next = element;
            };

            if (element.getAttribute('rel') == 'prev') {
                prev = element;
            };
        }
    })()

    document.querySelector('body').onkeydown = function(k) {
        if (k.isTrusted) {
            if (k.key == 'ArrowRight' || k.code == 'ArrowRight' || k.keyCode == 39) {
                return next ? next.click() : console.log('Next button aren\t found!')
            };

            if (k.key == 'ArrowLeft' || k.code == 'ArrowLeft' || k.keyCode == 37) {
                return prev ? prev.click() : console.log('Previous button aren\'t found!')
            };
        }
    }
})();
