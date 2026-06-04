/* GA4 - Calc-HQ Network Analytics (single injection point) */
(function(){if(!window.__GA4_LOADED){window.__GA4_LOADED=true;var id="G-W4SWZ1YRS2";var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}gtag("js",new Date());gtag("config",id);}})();

/**
 * network.js — Ontario Raise Calculator
 * CA Network Tools Registry.
 * Only tools with live: true will be displayed.
 * This site must NOT include itself (filtered at render time).
 * Hub: https://calc-hq.ca
 */

const NETWORK_TOOLS = [
  {
    name: "Ontario Take Home Calc",
    url: "https://ontariotakehomecalc.ca",
    live: true
  },
  {
    name: "Ontario Income Tax Calc",
    url: "https://ontarioincometaxcalc.ca",
    live: true
  },
  {
    name: "Ontario Marginal Tax Calc",
    url: "https://ontariomarginaltaxcalc.ca",
    live: true
  },
  {
    name: "CPP Calc",
    url: "https://cppcalc.ca",
    live: true
  },
  {
    name: "EI Calc",
    url: "https://eicalc.ca",
    live: true
  }
];

(function () {
  'use strict';

  var CURRENT_HOST = window.location.hostname.replace(/^www\./, '');

  function renderRelatedTools() {
    var container = document.getElementById('related-tools');
    if (!container) return;

    var tools = NETWORK_TOOLS.filter(function (t) {
      return t.live && t.url.indexOf(CURRENT_HOST) === -1;
    });

    var html = '';
    for (var i = 0; i < tools.length; i++) {
      html += '<a href="' + tools[i].url + '" rel="noopener">' + tools[i].name + '</a>';
    }
    container.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderRelatedTools();
  });

})();
