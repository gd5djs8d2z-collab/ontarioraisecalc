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
    desc: "Estimate your net take-home pay after federal tax, Ontario provincial tax, CPP, EI, and the Ontario Health Premium.",
    url: "https://ontariotakehomecalc.ca",
    domain: "ontariotakehomecalc.ca",
    live: true
  },
  {
    name: "Ontario Income Tax Calc",
    desc: "See your full federal + Ontario tax breakdown, marginal rates, surtax, and OHP by income level.",
    url: "https://ontarioincometaxcalc.ca",
    domain: "ontarioincometaxcalc.ca",
    live: true
  },
  {
    name: "CPP Calc",
    desc: "Calculate your CPP and CPP2 contributions for 2026 — employee, employer, and self-employed.",
    url: "https://cppcalc.ca",
    domain: "cppcalc.ca",
    live: true
  },
  {
    name: "EI Calc",
    desc: "Estimate your Employment Insurance premiums and eligibility hours using 2026 ESDC rates.",
    url: "https://eicalc.ca",
    domain: "eicalc.ca",
    live: true
  }
];

/**
 * Render related tools grid into #related-tools, excluding current site.
 */
function renderNetworkTools() {
  var container = document.getElementById("related-tools");
  if (!container) return;
  var currentDomain = window.location.hostname.replace(/^www\./, '');
  var tools = NETWORK_TOOLS.filter(function(t) {
    return t.live && t.domain !== currentDomain;
  });
  if (!tools.length) return;
  container.innerHTML = tools.map(function(t) {
    return '<a href="' + t.url + '" class="network-tool-card" target="_blank" rel="noopener">' +
      '<span class="network-tool-name">' + t.name + '</span>' +
      '<span class="network-tool-domain">' + t.domain + '</span>' +
      '<span class="network-tool-desc">' + t.desc + '</span>' +
    '</a>';
  }).join('');
}

document.addEventListener("DOMContentLoaded", renderNetworkTools);
