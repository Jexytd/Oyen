// ==UserScript==
// @name         kodok
// @namespace    https://github.com/Jexytd
// @version      0.3
// @description  Side project kodok
// @author       Oyen
// @match        https://komikcast.site/chapter/*
// @match        https://reaperscans.id/series/*
// @match        https://example.com/chapter/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var next,prev,DIVs;
    (function() {
        DIVs = document.getElementsByClassName('nextprev')[0];
        if (DIVs !== undefined) {
            for (const element of DIVs.children) {
                if (!element.hasAttribute('rel')) { return 0 };

                if (element.getAttribute('rel') == 'next') {
                    next = element;
                };

                if (element.getAttribute('rel') == 'prev') {
                    prev = element;
                };
            }
        }

        DIVs = document.getElementsByClassName('nav-links')[0];
        for (const element of DIVs.children) {
            if (element.classList.contains('nav-previous')) {
                prev = (element.children.length == 1 && element.children[0]);
            };

            if (element.classList.contains('nav-next')) {
                next = (element.children.length == 1 && element.children[0]);
            };
        }
    })()

    document.querySelector('body').onkeydown = function(k) {
        if (k.isTrusted) {
            if (k.key == 'ArrowRight' || k.code == 'ArrowRight' || k.keyCode == 39) {
                return next ? next.click() : alert('Next button aren\t found!')
            };

            if (k.key == 'ArrowLeft' || k.code == 'ArrowLeft' || k.keyCode == 37) {
                return prev ? prev.click() : alert('Previous button aren\'t found!')
            };
        }
    }

    document.querySelector('body').onmousedown = function(e) {
        if (e.isTrusted && e.cancelable) {
            if ((e.button == 4 || e.buttons == 16) && !e.relatedTarget) {
                return next ? next.click() : alert('Next button aren\t found!')
            }
        }
    }
})();
