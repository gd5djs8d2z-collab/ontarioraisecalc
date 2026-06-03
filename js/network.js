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
    label: "Ontario Take Home Calc",
    desc: "Estimate your net take-home pay after federal tax, Ontario provincial tax, CPP, EI, and the Ontario Health Premium.",
    url: "https://ontariotakehomecalc.ca",
    live: true
  },
  {
    name: "Ontario Income Tax Calc",
    label: "Ontario Income Tax Calc",
    desc: "See your full federal + Ontario tax breakdown, marginal rates, surtax, and OHP by income level.",
    url: "https://ontarioincometaxcalc.ca",
    live: true
  },
  {
    name: "Ontario Marginal Tax Calc",
    label: "Ontario Marginal Tax Calc",
    desc: "Find your Ontario marginal tax rate on additional income — federal + provincial brackets, CPP, EI, and surtax combined.",
    url: "https://ontariomarginaltaxcalc.ca",
    live: true
  },
  {
    name: "CPP Calc",
    label: "CPP Calc",
    desc: "Calculate your CPP and CPP2 contributions for 2026 — employee, employer, and self-employed.",
    url: "https://cppcalc.ca",
    live: true
  },
  {
    name: "EI Calc",
    label: "EI Calc",
    desc: "Estimate your Employment Insurance premiums and eligibility hours using 2026 ESDC rates.",
    url: "https://eicalc.ca",
    live: true
  }
];

(function () {
  'use strict';

  var CURRENT_HOST = window.location.hostname.replace(/^www\./, '');

  function renderFooter() {
    var container = document.getElementById('network-footer');
    if (!container) return;

    var tools = NETWORK_TOOLS.filter(function (t) {
      return t.live && t.url.indexOf(CURRENT_HOST) === -1;
    });

    var toolLinks = '';
    tools.forEach(function (t) {
      toolLinks += '<a href="' + t.url + '" rel="noopener">' + t.label + '</a>';
    });

    container.innerHTML =
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<div class="logo">🍁 Ontario Raise Calc</div>' +
          '<p>Find out how much of your raise you actually keep after Ontario income tax, federal tax, CPP, and EI deductions. 2026 CRA and ESDC rates.</p>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>PAGES</h4>' +
          '<a href="index.html">Home</a>' +
          '<a href="faq.html">FAQ</a>' +
          '<a href="about.html">About</a>' +
          '<a href="contact.html">Contact</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>LEGAL</h4>' +
          '<a href="privacy-policy.html">Privacy Policy</a>' +
          '<a href="disclaimer.html">Disclaimer</a>' +
          '<a href="terms.html">Terms of Use</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>RELATED TOOLS</h4>' +
          toolLinks +
          '<a href="https://calc-hq.ca/" class="more-tools-link" rel="noopener"><strong>More Tools</strong> → Calc-HQ.ca</a>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span>© 2026 Ontario Raise Calc — Part of the <a href="https://calc-hq.ca/" rel="noopener">Calc-HQ.ca</a> network</span>' +
        '<span>For informational purposes only. Not tax advice.</span>' +
      '</div>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderFooter();
  });

})();
