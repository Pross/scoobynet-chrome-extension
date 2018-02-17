// ==UserScript==
// @name         Better Scoobynet
// @version      0.1
// @description  try to take over the world!
// @author       Pross
// @match        https://www.scoobynet.com/*
// @require       https://code.jquery.com/jquery-1.11.0.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var elements = [
        '#sidebar_ads_container',
        '.ibautomotive',
        'aside[id^="div-gpt-ad"]',
        '.large-ads',
        '#right-rail',
        '.top-large-ads',
        '#vbseo_vhtml_0',
        'form#notices',
        'td:nth-of-type(1) > div:nth-of-type(1) > strong',
        '.fb_iframe_widget',
        '#___plusone_0',
        '#___plusone_1',
        '#twitter-widget-0',
        '#twitter-widget-1',
        'a[href="https://www.reddit.com/submit"]',
        '#gpt-adslot-1',
        '#gpt-adslot-2',
        '#gpt-adslot-3',
        '#gpt-adslot-4',
        '#gpt-adslot-5',
        '#qbox_widget'
    ];

    for (var i = 0, len = elements.length; i < len; i++) {
        GM_addStyle( elements[i] + '{display:none !important}' );
    }

    $('.kxct').remove();
})();
