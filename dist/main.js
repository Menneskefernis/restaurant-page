!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i=(e,t)=>{const n=document.createElement("div"),i=document.createElement(t);return n.id=e,n.appendChild(i),n},r=e=>{const t=document.createElement("span");return t.id=e+"-btn",t.classList.add("nav-btn"),t.textContent=e[0].toUpperCase()+e.slice(1),t},a=e=>{const t=document.createElement("nav");return e.forEach(e=>{t.appendChild(e)}),t},o={title:"Reach us here:",name:"THE Restaurant",address:"THE Road 2000",zip:"8000 Awesomeness",mail:"Mail: THE@restaurant.com",phone:"Phone: 500-8008135"},s=e=>{const t=document.createElement("p");return t.textContent=e,t};var c=()=>{const e=document.createElement("div");e.id="contact";for(let t in o)e.appendChild(s(o[t]));return e};var d={1:{name:"THE Dish!",description:"This is a delicious dish with absolutely no potatoes, but with lots of pasta and a grain of salt.",image:"./images/bucatini-allamatriciana-30639-1.jpg",price:"$14.95"},2:{name:"Delush Dush",description:"This is another delicious dish with no potatoes. It has great colors, though. And black pepper. Black pepper is undervalued",image:"./images/greek-style-nachos-14170-1.jpg",price:"$7.50"},3:{name:"Delish Dish",description:"Another dish with another description. Maybe my favorite description. This dish has EGGPLANT!",image:"./images/eggplant-rotolo-ragu-15155-1.jpg",price:"$19.75"}};const l=e=>`\n        <div class="menu-item">\n            <img src=${e.image}>\n            <div>\n                <h3 class="dish-title">${e.name}</h3>\n                <p class="dish-description">${e.description}</p>\n                <p class="price">${e.price}</p>\n            </div>\n        </div>\n    `;var u=()=>{const e=document.createElement("div");e.id="menu";for(let t=0;t<6;t++)for(let t=0;t<Object.keys(d).length;t++)e.insertAdjacentHTML("beforeend",l(d[t+1]));return e};const p=document.querySelector("body"),h=document.getElementById("content");p.insertAdjacentElement("afterbegin",(()=>{const e=[];return e.push(r("menu")),e.push(r("contact")),e[0].classList.add("active"),a(e)})()),p.insertAdjacentElement("afterbegin",(()=>{const e=document.createElement("p");return e.id="page-description",e.textContent="THE is a really nice restaurant. Actually, it doesn't exist, but if it did, it would be really nice because it would serve food that was nice. The food would be so good that it would be even better than this copy!",e})()),p.insertAdjacentElement("afterbegin",(()=>{const e=document.createElement("header"),t=i("banner","img"),n=i("title","h1");return t.firstChild.src="./images/Restaurant-banner-1024x373.jpg",t.firstChild.alt="Banner image showing the restaurant",n.firstChild.textContent="THE Restaurant",e.appendChild(t),e.appendChild(n),e})());const m=document.querySelectorAll(".nav-btn");function f(e){!function(e){if(e.target.classList.contains("active"))return;m.forEach(e=>e.classList.remove("active")),e.target.classList.toggle("active")}(e),function(e){h.innerHTML="","contact-btn"===e.target.id?h.appendChild(c()):h.appendChild(u())}(e)}m.forEach(e=>e.addEventListener("click",f)),window.onload=h.appendChild(u())}]);