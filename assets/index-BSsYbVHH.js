(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=()=>{const a=document.querySelector("#content"),n=window.location.pathname,i="/FM-dine-restaurant";document.addEventListener("click",function(e){const t=e.target.closest("a");if(t&&t.getAttribute("href")){e.preventDefault();const r=t.getAttribute("href");o(r)}}),window.addEventListener("popstate",function(e){const t=e.state.page;t&&o(t,!1)});function o(e,t=!0){console.log("page: ",e);const r=e==="index.html"?i:e;console.log("url: ",r),fetch(r).then(c=>c.text()).then(c=>{const l=new DOMParser().parseFromString(c,"text/html");a.innerHTML=l.querySelector("#content").innerHTML;const s=e==="index.html"?"/":e.replace(".html","");t?history.pushState({page:s},"",s):history.replaceState({page:s},"",s)}).catch(c=>{console.error(`Error fetching ${e} page:`,c)})}n!=="/"&&o(n)};document.addEventListener("DOMContentLoaded",function(){u()});
