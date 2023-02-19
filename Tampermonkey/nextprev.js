// ==UserScript==
// @name         kodok
// @namespace    https://github.com/Jexytd
// @version      0.31
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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var next,prev;
    (async function() {
        const DIVs_1 = await document.getElementsByClassName('nextprev')[0];
        if (DIVs_1) {
            for (const element of DIVs_1.children) {
                if (!element.hasAttribute('rel')) { return 0 };

                if (element.getAttribute('rel') == 'next') {
                    next = element;
                };

                if (element.getAttribute('rel') == 'prev') {
                    prev = element;
                };
            }
        }

        const DIVs_2 = await document.getElementsByClassName('nav-links')[0];
        if (DIVs_2) {
            for (const element of DIVs_2.children) {
                if (element.classList.contains('nav-previous')) {
                    prev = (element.children.length == 1 && element.children[0]);
                };

                if (element.classList.contains('nav-next')) {
                    next = (element.children.length == 1 && element.children[0]);
                };
            }
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

    document.querySelector('body').onmousedown = async function(e) {
        if (e.isTrusted && e.cancelable) {
            if ((e.button == 4 || e.buttons == 16) && !e.relatedTarget) {
                return next ? next.click() : alert('Next button aren\t found!')
            }

            if ((e.button == 3 || e.buttons == 8) && !e.relatedTarget) {
                await sleep(150);
                return prev ? prev.click() : alert('Previous button aren\t found!')
            }
        }
    }
})();
