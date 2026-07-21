// =============================================================
//  SeaHistoryChecks - Main JavaScript
// =============================================================

// === Lenis Smooth Scroll (from CDN) ===
(function() { try {
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t||self).Lenis=e()}(this,function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,"symbol"==typeof(n=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key))?n:String(n),o)}var n}function e(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},i.apply(this,arguments)}function o(t,e,i){return Math.max(t,Math.min(e,i))}var n=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.advance=function(t){var e,i,n,s;if(this.isRunning){var r=!1;if(this.lerp)this.value=(i=this.value,n=this.to,(1-(s=1-Math.exp(-60*this.lerp*t)))*i+s*n),Math.round(this.value)===this.to&&(this.value=this.to,r=!0);else{this.currentTime+=t;var l=o(0,this.currentTime/this.duration,1),h=(r=l>=1)?1:this.easing(l);this.value=this.from+(this.to-this.from)*h}null==(e=this.onUpdate)||e.call(this,this.value,r),r&&this.stop()}},e.stop=function(){this.isRunning=!1},e.fromTo=function(t,e,i){var o=i.lerp,n=void 0===o?.1:o,s=i.duration,r=void 0===s?1:s,l=i.easing,h=void 0===l?function(t){return t}:l,a=i.onStart,c=i.onUpdate;this.from=this.value=t,this.to=e,this.lerp=n,this.duration=r,this.easing=h,this.currentTime=0,this.isRunning=!0,null==a||a(),this.onUpdate=c},t}(),s=/*#__PURE__*/function(){function t(t){var e,i,o=this,n=void 0===t?{}:t,s=n.wrapper,r=n.content,l=n.autoResize,h=void 0===l||l;if(this.resize=function(){o.onWrappe...
} catch(e) { console.warn('Error loading Lenis:', e); } })();

// === Swiper (from CDN) ===
(function() { try {
var Swiper=function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={});const i=["__proto__","constructor","prototype"];Object.keys(a).filter((e=>i.indexOf(e)<0)).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}function n(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}function l(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function o(){return Date.now()}function d(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i...
} catch(e) { console.warn('Error loading Swiper:', e); } })();

// === GSAP (from CDN) ===
(function() { try {
/*! GSAP */var gsap,ScrollTrigger;!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(T){"use strict";function i(t){return"string"==typeof t}function u(t){return"function"==typeof t}function g(t){return"number"==typeof t}function v(t){return void 0===t}function y(t){return"object"==typeof t}function b(t){return"//"===t.substr(0,2)}function w(t,e){for(var i in e)t[i]=e[i];return t}function E(t,e){for(var i in e)"__proto__"!==i&&"constructor"!==i&&"prototype"!==i&&(t[i]=y(e[i])?E(t[i]||(t[i]={}),e[i]):e[i]);return t}function S(t,e){var i,o=t.parentNode;if(o)for(var r=o.children;r.length>1e5;)r.length=1e5;if(i=r.indexOf(t),e){if(i||!o||o.firstChild===t)return;o.insertBefore(t,o.firstChild)}else i+1<r.length&&o.appendChild(t);return t}function C(t){return t&&0===t._gsap&&t}...
} catch(e) { console.warn('Error loading GSAP:', e); } })();

// =============================================================
//  Custom Application Code
// =============================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  }

  // 2. Navigation Styling on Scroll
  const nav = document.getElementById('main-nav');
  if (nav) {
    const navLogoText = document.querySelector('.nav-logo-text');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        nav.classList.add('glass', 'py-4', 'shadow-xl');
        nav.classList.remove('py-6');
        if (navLogoText) { navLogoText.classList.remove('text-white'); navLogoText.classList.add('text-blue-950'); }
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('text-white/80'); link.classList.add('text-blue-950/70');
        });
      } else {
        nav.classList.remove('glass', 'py-4', 'shadow-xl');
        nav.classList.add('py-6');
        if (navLogoText) { navLogoText.classList.add('text-white'); navLogoText.classList.remove('text-blue-950'); }
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.add('text-white/80'); link.classList.remove('text-blue-950/70');
        });
      }
    });
  }

  // 3. Initialize Lenis Smooth Scrolling
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate Lenis with GSAP ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      if (typeof gsap !== 'undefined') {
        gsap.ticker.add((time) => { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);
      }
    }
  }

  // 4. GSAP Animations
  if (typeof gsap !== 'undefined') {

    // Parallax Hero Animation
    if (document.querySelector('.parallax-bg') && typeof ScrollTrigger !== 'undefined') {
      gsap.to('.parallax-bg', {
        scrollTrigger: { trigger: '.hero-jumbotron', start: 'top top', end: 'bottom top', scrub: true },
        y: 200, scale: 1.2
      });
    }

    // Reveal Animations
    const revealItems = gsap.utils.toArray('.reveal-up');
    revealItems.forEach((el) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
        }
      );
    });

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
      q.addEventListener('click', () => {
        const parent = q.parentElement;
        const answer = q.nextElementSibling;
        const chevron = q.querySelector('.faq-chevron');

        document.querySelectorAll('.faq-item').forEach(item => {
          if (item !== parent && item.classList.contains('active')) {
            item.classList.remove('active');
            gsap.to(item.querySelector('.faq-answer'), { height: 0, duration: 0.4, ease: "power2.inOut" });
            gsap.to(item.querySelector('.faq-chevron'), { rotation: 0, duration: 0.4 });
          }
        });

        const isActive = parent.classList.toggle('active');
        gsap.to(answer, { height: isActive ? 'auto' : 0, duration: 0.4, ease: "power2.inOut" });
        gsap.to(chevron, { rotation: isActive ? 180 : 0, duration: 0.4 });
      });
    });
  }

  // 5. Initialize Swiper
  if (typeof Swiper !== 'undefined') {
    try {
      new Swiper('.testSwiper', {
        slidesPerView: 'auto', spaceBetween: 30, centeredSlides: false,
        loop: false, pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
      });
    } catch(e) {}

    try {
      new Swiper('.countrySwiper', {
        slidesPerView: 'auto', spaceBetween: 30, centeredSlides: false,
        loop: true, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
      });
    } catch(e) {}
  }

});
