document.addEventListener('DOMContentLoaded', () => {

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const nav = document.getElementById('main-nav');
  if (nav) {
    const navLogoText = document.querySelector('.nav-logo-text');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 100;
      if (scrolled) {
        nav.classList.add('glass', 'py-4', 'shadow-xl');
        nav.classList.remove('py-6');
        if (navLogoText) { navLogoText.classList.remove('text-white'); navLogoText.classList.add('text-blue-950'); }
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('text-blue-950/70'); link.classList.add('text-white/80');
        });
      } else {
        nav.classList.remove('glass', 'py-4', 'shadow-xl');
        nav.classList.add('py-6');
        if (navLogoText) { navLogoText.classList.add('text-white'); navLogoText.classList.remove('text-blue-950'); }
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('text-blue-950/70'); link.classList.add('text-white/80');
        });
      }
      if (backToTop) {
        backToTop.style.display = scrolled ? 'flex' : 'none';
      }
    });
  }

  if (typeof gsap !== 'undefined') {

    if (document.querySelector('.parallax-bg') && typeof ScrollTrigger !== 'undefined') {
      gsap.to('.parallax-bg', {
        scrollTrigger: { trigger: '.hero-jumbotron', start: 'top top', end: 'bottom top', scrub: true },
        y: 200, scale: 1.2
      });
    }

    const revealItems = gsap.utils.toArray('.reveal-up');
    revealItems.forEach((el) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
        }
      );
    });

    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const parent = q.closest('.faq-item');
        const answer = parent.querySelector('.faq-answer');
        const chevron = parent.querySelector('.faq-chevron');
        const isOpen = parent.classList.contains('active');

        document.querySelectorAll('.faq-item.active').forEach(item => {
          if (item !== parent) {
            item.classList.remove('active');
            const a = item.querySelector('.faq-answer');
            gsap.to(a, { height: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => { a.classList.add('h-0'); a.style.height = ''; } });
            gsap.to(item.querySelector('.faq-chevron'), { rotation: 0, duration: 0.3 });
          }
        });

        if (isOpen) {
          parent.classList.remove('active');
          gsap.to(answer, { height: 0, duration: 0.3, ease: "power2.inOut", onComplete: () => { answer.classList.add('h-0'); answer.style.height = ''; } });
          gsap.to(chevron, { rotation: 0, duration: 0.3 });
        } else {
          answer.classList.remove('h-0');
          parent.classList.add('active');
          gsap.set(answer, { height: 'auto' });
          const h = answer.offsetHeight;
          gsap.set(answer, { height: 0 });
          gsap.to(answer, { height: h, duration: 0.3, ease: "power2.inOut", onComplete: () => { answer.style.height = ''; } });
          gsap.to(chevron, { rotation: 180, duration: 0.3 });
        }
      });
    });
  }

  if (typeof Swiper !== 'undefined') {
    try {
      new Swiper('.testSwiper', {
        slidesPerView: 'auto', spaceBetween: 30, centeredSlides: false,
        loop: false, pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
      });
    } catch(e) {}

    try {
      const countrySwiper = new Swiper('.countrySwiper', {
        slidesPerView: 'auto', spaceBetween: 20, centeredSlides: false,
        loop: true, allowTouchMove: true,
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 320: { spaceBetween: 12 }, 640: { spaceBetween: 16 }, 1024: { spaceBetween: 20 } }
      });
      let interval = setInterval(() => { try { countrySwiper.slideNext(); } catch(e) {} }, 2500);
      const sliderEl = document.querySelector('.countrySwiper');
      if (sliderEl) {
        sliderEl.addEventListener('mouseenter', () => clearInterval(interval));
        sliderEl.addEventListener('mouseleave', () => {
          clearInterval(interval);
          interval = setInterval(() => { try { countrySwiper.slideNext(); } catch(e) {} }, 2500);
        });
      }
    } catch(e) {}
  }

  const chatbotBtn = document.getElementById('chatbot-btn');
  const chatbotPanel = document.getElementById('chatbot-panel');
  const chatbotMessages = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const suggestions = document.querySelectorAll('#chatbot-suggestions button');

  if (chatbotBtn && chatbotPanel && chatbotMessages && chatbotInput && chatbotSend) {

    const knowledge = [
      { q: /services|offer|what do you do/i,
        a: 'SeaHistoryChecks provides comprehensive vessel reports using HIN (Hull Identification Number) or HULL number. Our reports include: Accident & Salvage History, Title & Lien Checks, Recall Lookups, Technical Specifications, Ownership History, and Theft Records.' },
      { q: /price|cost|pricing|how much|fee|charges/i,
        a: 'Our standard vessel report is priced at <b>$29.99</b>. For detailed pricing and any current discounts, please visit our <a href="pricings.html">Pricing page</a>.' },
      { q: /how long|delivery|time|wait|when/i,
        a: 'Reports are typically delivered within <b>12 hours</b> of placing your order. Most reports are ready in under 6 hours. You will receive an email notification once your report is ready.' },
      { q: /country|coverage|global|serve|where/i,
        a: 'We serve <b>29 countries</b> globally including USA, Canada, UK, Ireland, New Zealand, Australia, Germany, France, Netherlands, Spain, Italy, Greece, and many more across Europe and North America.' },
      { q: /how (does it|to) work|process|how (can|do) i/i,
        a: 'Simply enter your vessel\'s HIN or HULL number in the search bar on our homepage. We verify the data through USCG, Lloyds, NMVTIS, and NICB. Your report is delivered within 12 hours via email.' },
      { q: /what (information|data) (is )?included|what.*report|report contain/i,
        a: 'Each report includes: Accident & Salvage History, Title & Lien Information, Recall Notices, Technical Specs (length, year, make), Ownership Records, Theft & Recovery Status, and NMVTIS compliance data.' },
      { q: /contact|support|email|phone|reach/i,
        a: 'You can reach us at <b>seahistorychecksofficial@gmail.com</b> or visit our <a href="contact.html">Contact page</a>. We typically respond within 24 hours.' },
      { q: /hi|hello|hey|good morning|good afternoon|good evening/i,
        a: 'Hello! Welcome to SeaHistoryChecks. How can I assist you today? You can ask about our vessel reports, pricing, coverage, or anything else.' },
      { q: /about|company|who are you/i,
        a: 'SeaHistoryChecks is a maritime data intelligence service that provides detailed boat and ship reports. We aggregate data from USCG, Lloyds, NMVTIS, NICB, and other trusted sources to ensure transparency for buyers, sellers, and researchers.' },
      { q: /refund|cancel|money back|guarantee/i,
        a: 'We strive for accuracy. If you have an issue with your report, please contact us at <b>seahistorychecksofficial@gmail.com</b> and we will address your concerns promptly.' },
      { q: /safe|secure|privacy|data|trust/i,
        a: 'Your data and privacy are important to us. We use secure encryption for all transactions. Please see our <a href="policy.html">Privacy Policy</a> for full details.' },
      { q: /report (type|type of)|what (kinds|types)|difference/i,
        a: 'We offer comprehensive reports that bundle accident history, title checks, recall lookups, specs, ownership records, and theft data into one complete package.' },
    ];

    function findAnswer(text) {
      for (const item of knowledge) {
        if (item.q.test(text)) return item.a;
      }
      return 'I\'m not sure about that. Please try one of the suggestions above, or contact us at <b>seahistorychecksofficial@gmail.com</b> for more help.';
    }

    function addMessage(text, type) {
      const msg = document.createElement('div');
      msg.className = 'chatbot-msg ' + type;
      msg.innerHTML = text;
      chatbotMessages.appendChild(msg);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function showTyping() {
      const el = document.createElement('div');
      el.className = 'chatbot-msg bot typing-wrap';
      el.id = 'typing-el';
      el.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
      chatbotMessages.appendChild(el);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function hideTyping() {
      const el = document.getElementById('typing-el');
      if (el) el.remove();
    }

    function handleQuery(query) {
      if (!query.trim()) return;
      addMessage(query, 'user');
      chatbotInput.value = '';
      showTyping();
      setTimeout(function() {
        hideTyping();
        addMessage(findAnswer(query), 'bot');
      }, 600 + Math.random() * 400);
    }

    chatbotBtn.addEventListener('click', function() {
      chatbotBtn.classList.toggle('active');
      chatbotPanel.classList.toggle('active');
      if (chatbotPanel.classList.contains('active')) {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }
    });

    chatbotSend.addEventListener('click', function() { handleQuery(chatbotInput.value); });
    chatbotInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') handleQuery(chatbotInput.value);
    });

    suggestions.forEach(function(btn) {
      btn.addEventListener('click', function() {
        handleQuery(btn.getAttribute('data-query'));
      });
    });
  }
});
