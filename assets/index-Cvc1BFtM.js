(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=()=>{const a=document.querySelector("#content"),r=window.location.pathname,i="/FM-dine-restaurant";document.addEventListener("click",function(e){const t=e.target.closest("a");if(t&&t.getAttribute("href")){e.preventDefault();const o=t.getAttribute("href");n(o)}}),window.addEventListener("popstate",function(e){const t=e.state.page;t&&n(t,!1)});function n(e,t=!0){fetch(e==="index.html"?i:e).then(c=>c.text()).then(c=>{const u=new DOMParser().parseFromString(c,"text/html");a.innerHTML=u.querySelector("#content").innerHTML;const s=e==="index.html"?"/":e.replace(".html","");t?history.pushState({page:s},"",s):history.replaceState({page:s},"",s)}).catch(c=>{console.error(`Error fetching ${e} page:`,c)})}r!=="/"&&n(r)};document.addEventListener("DOMContentLoaded",function(){l()});