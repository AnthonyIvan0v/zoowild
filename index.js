/* empty css                      */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const I=document.querySelector("[data-advise-current-slide]"),D=document.querySelector("[data-advise-total-slide]"),w=document.querySelector(".advise-pagination");new Swiper(".advise__swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:"[data-advise-nav-next-btn]",prevEl:"[data-advise-nav-prev-btn]"},loop:!1,on:{init:function(){$.call(this)},slideChange:function(){const e=this.params.slidesPerView,t=this.realIndex+1,s=this.slides.length,n=Math.ceil(s/e);I.textContent=String(t).padStart(2,"0"),D.textContent=`/${String(n).padStart(2,"0")}`}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:23},1200:{slidesPerView:3,spaceBetween:35}}});function $(){const e=this.slides.length,t=this.params.slidesPerView;e<=t?w.style.display="none":w.style.display=""}const G=anime.timeline({easing:"easeOutQuad",duration:2e3});document.querySelector(".hero__title");G.add({targets:".hero__title",scale:[.5,1],opacity:[0,1],duration:2e3,easing:"easeOutBack"}).add({targets:".hero__description",translateY:["50px","0px"],opacity:[0,1],duration:1500,easing:"easeOutQuad"}).add({targets:".hero__button",translateY:["50px","0px"],opacity:[0,1],duration:1e3,easing:"easeOutQuad"},"-=1000").add({targets:".hero__image-caracal",translateX:["-100%","0%"],opacity:[0,1],duration:2500},"-=1500").add({targets:".hero__image-snake",translateX:["100%","0%"],opacity:[0,1],duration:2500},"-=2500").add({targets:".hero__image-parrot-secondary",translateX:["150%","0%"],opacity:[0,1],duration:1500},"-=1500").add({targets:".hero__image-parrot",translateX:["-200%","0%"],opacity:[0,1],duration:1500},"-=2000");const V=document.querySelectorAll(".statistics__number"),H=new IntersectionObserver((e,t)=>{e.forEach(s=>{if(s.isIntersecting){const n=s.target,o=parseInt(n.getAttribute("data-target"),10),a=parseInt(n.textContent,10),r=o>1e3?10:1;anime({targets:n,innerHTML:[a,o],easing:"easeOutExpo",duration:2e3,round:1,update:function(l){const B=Math.floor(l.animations[0].currentValue),L=Math.floor(B/r)*r;o===100?n.innerHTML=`${L}%`:o>1e3?n.innerHTML=`${L}<span aria-hidden="true" class="statistics__plus">+</span>`:n.innerHTML=L}}),t.unobserve(n)}})},{threshold:.5});V.forEach(e=>H.observe(e));function d({targetsSelector:e,animationProps:t,threshold:s=.1}){const n=new IntersectionObserver((a,r)=>{a.forEach(l=>{l.isIntersecting&&(anime({targets:l.target,...t}),r.unobserve(l.target))})},{threshold:s});document.querySelectorAll(e).forEach(a=>n.observe(a))}d({targetsSelector:".animate-up",animationProps:{translateY:["50px","0px"],opacity:[0,1],duration:1e3,easing:"easeOutQuad"}});d({targetsSelector:".zoom-up",animationProps:{scale:[.5,1],opacity:[0,1],duration:1300,easing:"easeOutQuad"},threshold:.3});d({targetsSelector:".zoom-up-rotate",animationProps:{scale:[.5,1],opacity:[0,1],rotate:["240deg","-30deg"],duration:1300,easing:"easeOutQuad"},threshold:.4});d({targetsSelector:".zoom-up-rotate_2",animationProps:{scale:[.3,1],opacity:[0,1],rotate:["360deg","0deg"],duration:1500,easing:"easeOutQuad"},threshold:.4});d({targetsSelector:".animate-right",animationProps:{translateX:["100%","0%"],opacity:[0,1],duration:1500,easing:"easeOutQuad"},threshold:.2});d({targetsSelector:".animate-left",animationProps:{translateX:["-100%","0%"],opacity:[0,1],duration:1500,easing:"easeOutQuad"},threshold:.2});const T=document.querySelector("[data-offer-current-slide]"),X=document.querySelector("[data-offer-total-slide]");new Swiper(".offers__swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:"[data-offer-pagination-button-right]",prevEl:"[data-offer-pagination-button-left]"},loop:!1,on:{slideChange:function(){const e=this.realIndex+1,t=this.slides.length;T.textContent=String(e).padStart(2,"0"),X.textContent=`/${String(t).padStart(2,"0")}`}}});const j=document.querySelector(".hero"),E=document.querySelector(".hero__image-caracal"),k=document.querySelector(".hero__image-snake");j.addEventListener("mousemove",function(e){const t=window.innerWidth>=1200;if(e.target.closest(".hero")&&t){const s=e.clientX/window.innerWidth*20-10,n=e.clientY/window.innerHeight*20-10;E.style.transform=`translate(${s}px, ${n}px)`,k.style.transform=`translate(${-s}px, ${-n}px)`}else E.style.transform="translate(0px, 0px)",k.style.transform="translate(0px, 0px)"});const z=document.querySelector("[data-open-video-modal]"),Q=document.querySelector("[data-close-video-modal]"),g=document.querySelector("[data-video-modal]"),h=document.querySelector(".video-iframe iframe");z.addEventListener("click",F);function F(){g.classList.remove("is-hidden"),g.addEventListener("click",q),document.body.style.overflowY="hidden",Q.addEventListener("click",v),document.addEventListener("keydown",_)}function v(){g.classList.add("is-hidden"),g.removeEventListener("click",q),document.body.style.overflowY="visible",document.removeEventListener("keydown",_),Q.removeEventListener("click",v),U()}function U(){const e=h.src;h.src="",h.src=e}function _(e){e.key==="Escape"&&v()}function q(e){e.target===e.currentTarget&&v()}const K=document.querySelectorAll("[data-modal-form-open]"),P=document.querySelector("[data-close-form-modal]"),x=document.querySelector("[data-close-gratitude-modal]"),m=document.querySelector("[data-form-modal]"),C=document.querySelector("[data-contacts-popup]"),u=document.querySelector("[data-gratitude-modal]"),M=document.querySelector(".form");K.forEach(e=>e.addEventListener("click",J));M.addEventListener("submit",W);function J(){m.classList.contains("is-hidden")&&(m.classList.remove("is-hidden"),m.addEventListener("click",Y),document.body.style.overflowY="hidden",P.addEventListener("click",f),document.addEventListener("keydown",O)),C.classList.contains("is-hidden")||C.classList.add("is-hidden")}function f(){m.classList.add("is-hidden"),m.removeEventListener("click",Y),document.body.style.overflowY="visible",document.removeEventListener("keydown",O),P.removeEventListener("click",f)}function A(){u.classList.add("is-hidden"),x.removeEventListener("click",A)}function O(e){e.key==="Escape"&&f()}function Y(e){e.target===e.currentTarget&&f()}function W(e){e.preventDefault();const t=new FormData(e.target);Object.fromEntries(t.entries()),f(),M.reset(),u.classList.contains("is-hidden")&&(u.classList.remove("is-hidden"),x.addEventListener("click",A)),setTimeout(()=>{u.classList.contains("is-hidden")||u.classList.add("is-hidden")},5e3)}document.querySelectorAll(".product-card__button").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation()})});document.querySelectorAll(".advise__product-button").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation()})});const Z={socialLinks:{trigger:document.querySelector("[data-message-btn]"),modal:document.querySelector("[data-social-links-popup]"),close:document.querySelector("[data-close-media-links]")},contacts:{trigger:document.querySelector("[data-tel-btn]"),modal:document.querySelector("[data-contacts-popup]"),close:document.querySelector("[data-contacts-popup-close]")}},i={trigger:document.querySelector("[data-location-btn]"),modal:document.querySelector("[data-location-popup]"),close:document.querySelector("[data-location-popup-close]")};Object.values(Z).forEach(({trigger:e,modal:t,close:s})=>{e.addEventListener("click",()=>{t.classList.toggle("is-hidden");const n=()=>{t.classList.add("is-hidden"),document.removeEventListener("click",o),s.removeEventListener("click",n)},o=a=>{!t.contains(a.target)&&!e.contains(a.target)&&n()};s.addEventListener("click",n),document.addEventListener("click",o)})});i.trigger.addEventListener("click",ee);function ee(){i.modal.classList.remove("is-hidden"),i.modal.addEventListener("click",R),document.body.style.overflowY="hidden",i.close.addEventListener("click",y),document.addEventListener("keydown",N)}function y(){i.modal.classList.add("is-hidden"),i.modal.removeEventListener("click",R),document.body.style.overflowY="visible",document.removeEventListener("keydown",N),i.close.removeEventListener("click",y)}function N(e){e.key==="Escape"&&y()}function R(e){e.target===e.currentTarget&&y()}const p=document.querySelector("[data-map-modal]"),te=document.querySelector("[data-close-map-modal]"),S=document.querySelector(".map-popup__iframe"),oe=document.querySelectorAll(".location-popup__map-link"),ne={1:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6292.075215840377!2d34.97193218772823!3d48.466280613119125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3bbd93132d7%3A0x86d2be4d506c0512!2z0L_RgNC-0YHQvy4g0JjQstCw0L3QsCDQnNCw0LfQtdC_0YssIDM5LCDQlNC90LXQv9GALCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1733425828470!5m2!1sru!2sua",2:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.665907241469!2d34.97965777593749!3d48.462939428454945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3bb304132cd%3A0xb618d60c0c4e7386!2z0YPQuy4g0J3QvtCy0L7QvtGA0LvQvtCy0YHQutCw0Y8sIDQsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1733425929589!5m2!1sru!2sua",3:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.8179130949306!2d34.93690727593732!3d48.46002312865894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3eff2eae10f%3A0x6bdc25de7986b16e!2z0YPQuy4g0JTQsNC90LjQu9CwINCT0LDQu9C40YbQutC-0LPQviwgMjUsINCU0L3QtdC_0YAsINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1733425986437!5m2!1sru!2sua"};oe.forEach((e,t)=>{e.addEventListener("click",()=>{const s=t+1;S.src=ne[s]||"",p.classList.remove("is-hidden")})});te.addEventListener("click",()=>{p.classList.add("is-hidden"),S.src=""});p.addEventListener("click",e=>{e.target===p&&(p.classList.add("is-hidden"),S.src="")});const c={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),modal:document.querySelector("[data-modal]"),links:document.querySelectorAll("[data-link-mobile-menu]")};c.openMenuBtn.addEventListener("click",b);c.closeMenuBtn.addEventListener("click",b);c.links.forEach(e=>e.addEventListener("click",b));function b(){c.menu.classList.toggle("is-open"),c.modal.classList.toggle("is-hidden"),c.menu.classList.toggle("allow-scroll"),document.body.classList.toggle("not-scroll")}
//# sourceMappingURL=index.js.map
