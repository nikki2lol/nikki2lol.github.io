(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u=()=>{const t=document.querySelector(".js-header");if(!t)return null;const o="header--triggered";t.querySelector(".js-burger").addEventListener("click",()=>{t.classList.toggle(o)})},l=()=>{const t=document.querySelector(".form"),o=t.querySelector('input[name="name"]'),n=t.querySelector('input[name="email"]'),s=function(e){e?this.classList.remove("error"):this.classList.add("error")};o.addEventListener("focus",function(){s.call(this,!0)}),n.addEventListener("focus",function(){s.call(this,!0)}),t.addEventListener("submit",function(e){e.preventDefault();const r=new FormData(t),c=t.getAttribute("action"),a=/^[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*@(?:([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,7})$/;o.value.trim()===""&&o.classList.add("error"),a.test(n.value)||n.classList.add("error"),fetch(c,{method:"POST",body:r}).then(i=>{i.ok&&t.classList.add("success")}).catch(i=>{console.error("Error:",i)})})},d=()=>{const t=document.querySelector(".js-header");document.querySelectorAll(".js-anchor-button").forEach(o=>{o.addEventListener("click",function(n){n.preventDefault(),t.classList.remove("header--triggered");const s=this.getAttribute("href"),e=document.querySelector(s);e&&window.scrollTo({top:e.offsetTop-t.offsetHeight,behavior:"smooth"})})})};u();d();document.addEventListener("DOMContentLoaded",l);
//# sourceMappingURL=index-ScvaKf0V.js.map
