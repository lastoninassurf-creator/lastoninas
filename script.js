/* Las Toninas — idiomas, WhatsApp y menú */
(function () {
  "use strict";

  // Siempre arrancar desde el principio de la página
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  window.scrollTo(0, 0);
  window.addEventListener("pageshow", function (e) { if (e.persisted) window.scrollTo(0, 0); });

  // Links del menú: bajan a la sección sin dejar "#seccion" en la dirección
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      var target = id === "top" ? document.body : document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var T = {
    "es": {
      "title": "Escuela de Surf en Punta del Este | Clases y alquiler de tablas | Las Toninas",
      "nav.about": "Nosotros",
      "nav.classes": "Clases",
      "nav.boards": "Alquiler de tablas",
      "nav.where": "Ubicación",
      "nav.contact": "Contacto",
      "cta.book": "Reservá tu clase",
      "cta.boards": "Alquilar una tabla",
      "cta.classInfo": "Consultar horarios",
      "cta.avail": "Consultar disponibilidad",
      "hero.eyebrow": "Escuela de surf · Playa Brava · Punta del Este",
      "hero.title": "Aprendé a surfear<br>en Punta del Este.",
      "hero.lead": "Clases de surf para todas las edades y niveles, y alquiler de tablas en la Parada 32–33 de La Brava.",
      "about.note": "¡al agua!",
      "about.kicker": "Quiénes somos",
      "about.title": "Una escuela de surf en La Brava",
      "about.p1": "Somos Las Toninas, una escuela de surf en Playa Brava, Punta del Este. Hace cinco temporadas que acompañamos a chicos y grandes a pararse en una tabla por primera vez, y a los que ya surfean a seguir mejorando.",
      "about.p2": "Estamos en la playa todo el verano, de diciembre a abril, con tablas, buena onda y muchas ganas de compartir el mar.",
      "about.s1": "temporadas",
      "about.s2n": "Todas",
      "about.s2": "las edades",
      "about.s3n": "Todos",
      "about.s3": "los niveles",
      "in.kicker": "Nuestros instructores",
      "in.title": "Surfistas que enseñan",
      "in.sub": "Nuestro equipo vive el surf en Punta del Este y comparte esa experiencia en cada clase.",
      "cl.kicker": "Clases de surf",
      "cl.title": "Para todas las edades y niveles",
      "cl.sub": "De tu primera ola a mejorar tu técnica: te acompañamos en cada paso.",
      "cl.c1t": "Iniciación",
      "cl.c1": "Tu primera vez en el agua. Seguridad, remada y cómo pararte en la tabla.",
      "cl.c2t": "Intermedio y avanzado",
      "cl.c2": "Para quienes ya surfean: lectura de olas, maniobras y mejorar la técnica.",
      "cl.c3t": "Niños",
      "cl.c3": "Clases pensadas para los más chicos, en grupo y siempre acompañados.",
      "cl.gift": "¿Buscás un regalo? También podés regalar clases de surf.",
      "bd.kicker": "Alquiler de tablas",
      "bd.title": "Alquilá tu tabla de surf",
      "bd.sub": "Tablas para cada nivel, en la playa.",
      "bd.b1s": "7 a 9 pies",
      "bd.b1": "Tabla blanda, estable y segura. Ideal para aprender.",
      "bd.b2s": "Largo medio",
      "bd.b2": "Buena flotación y más maniobrabilidad. Para seguir progresando.",
      "bd.b3s": "Tabla corta",
      "bd.b3": "Liviana y rápida, para surfistas con experiencia.",
      "bd.note": "Las imágenes son ilustrativas. Consultá modelos y disponibilidad por WhatsApp.",
      "wh.kicker": "Ubicación",
      "wh.title": "Playa Brava, Parada 32–33",
      "wh.p": "Nos encontrás en la arena, entre las paradas 32 y 33 de la Playa Brava, en Punta del Este.",
      "wh.l1": "Dónde",
      "wh.l2": "Temporada",
      "wh.season": "Diciembre a abril",
      "wh.map": "Cómo llegar",
      "faq.kicker": "Preguntas frecuentes",
      "faq.title": "Antes de meterte al agua",
      "faq.q1": "¿Necesito experiencia?",
      "faq.a1": "No. La mayoría de nuestros alumnos se para en una tabla por primera vez con nosotros.",
      "faq.q2": "¿Desde qué edad pueden tomar clases?",
      "faq.a2": "Tenemos clases para chicos y grandes. Escribinos y te recomendamos la clase ideal.",
      "faq.q3": "¿Cómo reservo?",
      "faq.a3": "Por WhatsApp: contanos cuántas personas son, el nivel y el día que te queda bien.",
      "faq.q4": "¿Cuánto cuesta?",
      "faq.a4": "Escribinos y te pasamos las tarifas vigentes de clases y alquiler de tablas.",
      "ct.kicker": "Contacto",
      "ct.title": "¿Nos vemos en el agua?",
      "ct.sub": "Escribinos para reservar tu clase o alquilar una tabla.",
      "ft.tag": "Escuela de surf y alquiler de tablas",
      "ft.privacy": "Política de privacidad",
      "wa.pick": "¿Con quién querés hablar?",
      "msg.general": "¡Hola Las Toninas! Quiero hacer una consulta.",
      "msg.clase": "¡Hola Las Toninas! Quiero reservar una clase de surf.",
      "msg.softboard": "¡Hola Las Toninas! Quiero consultar disponibilidad para alquilar una softboard.",
      "msg.midlength": "¡Hola Las Toninas! Quiero consultar disponibilidad para alquilar una midlength.",
      "msg.shortboard": "¡Hola Las Toninas! Quiero consultar disponibilidad para alquilar una shortboard."
    },
    "en": {
      "title": "Surf School in Punta del Este | Surf lessons & board rental | Las Toninas",
      "nav.about": "About us",
      "nav.classes": "Lessons",
      "nav.boards": "Board rental",
      "nav.where": "Location",
      "nav.contact": "Contact",
      "cta.book": "Book a lesson",
      "cta.boards": "Rent a board",
      "cta.classInfo": "Check schedules",
      "cta.avail": "Check availability",
      "hero.eyebrow": "Surf school · Playa Brava · Punta del Este",
      "hero.title": "Learn to surf<br>in Punta del Este.",
      "hero.lead": "Surf lessons for all ages and levels, and surfboard rental at Parada 32–33, Playa Brava.",
      "about.note": "let's go!",
      "about.kicker": "Who we are",
      "about.title": "A surf school on La Brava",
      "about.p1": "We are Las Toninas, a surf school on Playa Brava, Punta del Este. For five seasons we've helped kids and adults stand up on a board for the first time, and helped those who already surf keep improving.",
      "about.p2": "We're on the beach all summer, from December to April, with boards, good vibes and a love for the ocean.",
      "about.s1": "seasons",
      "about.s2n": "All",
      "about.s2": "ages",
      "about.s3n": "All",
      "about.s3": "levels",
      "in.kicker": "Our instructors",
      "in.title": "Surfers who teach",
      "in.sub": "Our team lives and breathes surf in Punta del Este and brings that experience to every lesson.",
      "cl.kicker": "Surf lessons",
      "cl.title": "For all ages and levels",
      "cl.sub": "From your first wave to improving your technique: we're with you every step.",
      "cl.c1t": "Beginners",
      "cl.c1": "Your first time in the water. Safety, paddling and how to stand up on the board.",
      "cl.c2t": "Intermediate & advanced",
      "cl.c2": "For those who already surf: reading waves, maneuvers and technique.",
      "cl.c3t": "Kids",
      "cl.c3": "Lessons designed for little ones, in groups and always supervised.",
      "cl.gift": "Looking for a gift? You can also gift surf lessons.",
      "bd.kicker": "Board rental",
      "bd.title": "Rent your surfboard",
      "bd.sub": "Boards for every level, right on the beach.",
      "bd.b1s": "7 to 9 ft",
      "bd.b1": "Soft, stable and safe. Perfect for learning.",
      "bd.b2s": "Mid length",
      "bd.b2": "Good float and more maneuverability. To keep progressing.",
      "bd.b3s": "Short board",
      "bd.b3": "Light and fast, for experienced surfers.",
      "bd.note": "Images are for illustration only. Ask about models and availability on WhatsApp.",
      "wh.kicker": "Location",
      "wh.title": "Playa Brava, Parada 32–33",
      "wh.p": "Find us on the sand, between stops 32 and 33 of Playa Brava, Punta del Este.",
      "wh.l1": "Where",
      "wh.l2": "Season",
      "wh.season": "December to April",
      "wh.map": "Get directions",
      "faq.kicker": "FAQ",
      "faq.title": "Before you paddle out",
      "faq.q1": "Do I need experience?",
      "faq.a1": "No. Most of our students stand up on a board for the first time with us.",
      "faq.q2": "From what age?",
      "faq.a2": "We have lessons for kids and adults. Message us and we'll recommend the right one.",
      "faq.q3": "How do I book?",
      "faq.a3": "On WhatsApp: tell us how many people, your level and the day that suits you.",
      "faq.q4": "How much does it cost?",
      "faq.a4": "Message us and we'll send you current rates for lessons and board rental.",
      "ct.kicker": "Contact",
      "ct.title": "See you in the water?",
      "ct.sub": "Message us to book a lesson or rent a board.",
      "ft.tag": "Surf school and board rental",
      "ft.privacy": "Privacy policy",
      "wa.pick": "Who would you like to talk to?",
      "msg.general": "Hi Las Toninas! I have a question.",
      "msg.clase": "Hi Las Toninas! I'd like to book a surf lesson.",
      "msg.softboard": "Hi Las Toninas! I'd like to check availability to rent a softboard.",
      "msg.midlength": "Hi Las Toninas! I'd like to check availability to rent a midlength.",
      "msg.shortboard": "Hi Las Toninas! I'd like to check availability to rent a shortboard."
    },
    "pt": {
      "title": "Escola de Surf em Punta del Este | Aulas e aluguel de pranchas | Las Toninas",
      "nav.about": "Quem somos",
      "nav.classes": "Aulas",
      "nav.boards": "Aluguel de pranchas",
      "nav.where": "Localização",
      "nav.contact": "Contato",
      "cta.book": "Reserve sua aula",
      "cta.boards": "Alugar uma prancha",
      "cta.classInfo": "Consultar horários",
      "cta.avail": "Consultar disponibilidade",
      "hero.eyebrow": "Escola de surf · Playa Brava · Punta del Este",
      "hero.title": "Aprenda a surfar<br>em Punta del Este.",
      "hero.lead": "Aulas de surf para todas as idades e níveis, e aluguel de pranchas na Parada 32–33 da Brava.",
      "about.note": "pro mar!",
      "about.kicker": "Quem somos",
      "about.title": "Uma escola de surf na Brava",
      "about.p1": "Somos a Las Toninas, uma escola de surf na Playa Brava, Punta del Este. Há cinco temporadas ajudamos crianças e adultos a ficar de pé na prancha pela primeira vez, e quem já surfa a continuar evoluindo.",
      "about.p2": "Estamos na praia o verão todo, de dezembro a abril, com pranchas, boa energia e vontade de compartilhar o mar.",
      "about.s1": "temporadas",
      "about.s2n": "Todas",
      "about.s2": "as idades",
      "about.s3n": "Todos",
      "about.s3": "os níveis",
      "in.kicker": "Nossos instrutores",
      "in.title": "Surfistas que ensinam",
      "in.sub": "Nossa equipe vive o surf em Punta del Este e compartilha essa experiência em cada aula.",
      "cl.kicker": "Aulas de surf",
      "cl.title": "Para todas as idades e níveis",
      "cl.sub": "Da sua primeira onda a melhorar a técnica: acompanhamos você em cada passo.",
      "cl.c1t": "Iniciação",
      "cl.c1": "Sua primeira vez na água. Segurança, remada e como ficar de pé na prancha.",
      "cl.c2t": "Intermediário e avançado",
      "cl.c2": "Para quem já surfa: leitura de ondas, manobras e técnica.",
      "cl.c3t": "Crianças",
      "cl.c3": "Aulas pensadas para os pequenos, em grupo e sempre acompanhados.",
      "cl.gift": "Procurando um presente? Você também pode presentear aulas de surf.",
      "bd.kicker": "Aluguel de pranchas",
      "bd.title": "Alugue sua prancha de surf",
      "bd.sub": "Pranchas para cada nível, na praia.",
      "bd.b1s": "7 a 9 pés",
      "bd.b1": "Prancha macia, estável e segura. Ideal para aprender.",
      "bd.b2s": "Tamanho médio",
      "bd.b2": "Boa flutuação e mais manobrabilidade. Para continuar evoluindo.",
      "bd.b3s": "Prancha curta",
      "bd.b3": "Leve e rápida, para surfistas experientes.",
      "bd.note": "Imagens ilustrativas. Consulte modelos e disponibilidade pelo WhatsApp.",
      "wh.kicker": "Localização",
      "wh.title": "Playa Brava, Parada 32–33",
      "wh.p": "Estamos na areia, entre as paradas 32 e 33 da Playa Brava, em Punta del Este.",
      "wh.l1": "Onde",
      "wh.l2": "Temporada",
      "wh.season": "Dezembro a abril",
      "wh.map": "Como chegar",
      "faq.kicker": "Perguntas frequentes",
      "faq.title": "Antes de entrar no mar",
      "faq.q1": "Preciso de experiência?",
      "faq.a1": "Não. A maioria dos nossos alunos fica de pé na prancha pela primeira vez com a gente.",
      "faq.q2": "A partir de que idade?",
      "faq.a2": "Temos aulas para crianças e adultos. Fale com a gente e indicamos a aula ideal.",
      "faq.q3": "Como faço a reserva?",
      "faq.a3": "Pelo WhatsApp: conte quantas pessoas, o nível e o dia que prefere.",
      "faq.q4": "Quanto custa?",
      "faq.a4": "Fale com a gente e enviamos os valores atuais de aulas e aluguel de pranchas.",
      "ct.kicker": "Contato",
      "ct.title": "Nos vemos no mar?",
      "ct.sub": "Fale com a gente para reservar sua aula ou alugar uma prancha.",
      "ft.tag": "Escola de surf e aluguel de pranchas",
      "ft.privacy": "Política de privacidade",
      "wa.pick": "Com quem você quer falar?",
      "msg.general": "Olá Las Toninas! Quero fazer uma pergunta.",
      "msg.clase": "Olá Las Toninas! Quero reservar uma aula de surf.",
      "msg.softboard": "Olá Las Toninas! Quero consultar a disponibilidade para alugar uma softboard.",
      "msg.midlength": "Olá Las Toninas! Quero consultar a disponibilidade para alugar uma midlength.",
      "msg.shortboard": "Olá Las Toninas! Quero consultar a disponibilidade para alugar uma shortboard."
    }
  };

  var current = "es";

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  function waUrl(phone, key) {
    var msg = (T[current] && T[current]["msg." + key]) || T.es["msg." + key] || T.es["msg.general"];
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
  }

  function refreshWaLinks() {
    document.querySelectorAll("[data-wa-link]").forEach(function (a) {
      a.href = waUrl(a.getAttribute("data-wa-link"), a.getAttribute("data-wa-topic") || "general");
    });
  }

  function setLang(lang) {
    if (!T[lang]) lang = "es";
    current = lang;
    var d = T[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.title = d.title;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); if (d[k]) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html"); if (d[k]) el.innerHTML = d[k];
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    refreshWaLinks();
    store("lt-lang", lang);
  }

  // Idioma inicial: guardado > navegador > español
  var saved = store("lt-lang");
  var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
  // Los buscadores (Google, etc.) siempre ven la versión en español
  var isBot = /bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent);
  setLang(isBot ? "es" : (saved || (T[nav] ? nav : "es")));

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  // Botón flotante de WhatsApp
  var waBtn = document.querySelector(".wa-btn");
  var waPanel = document.getElementById("waPanel");
  function togglePanel(open, topic) {
    var isOpen = open === undefined ? waPanel.hidden : open;
    waPanel.hidden = !isOpen;
    waBtn.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      waPanel.querySelectorAll("[data-wa-link]").forEach(function (a) {
        a.setAttribute("data-wa-topic", topic || "general");
      });
      refreshWaLinks();
    }
  }
  waBtn.addEventListener("click", function (e) { e.stopPropagation(); togglePanel(); });
  document.addEventListener("click", function (e) {
    if (!waPanel.hidden && !waPanel.contains(e.target)) togglePanel(false);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") togglePanel(false); });

  // Botones "Reservar / Consultar": abren el selector de número con el mensaje de esa bici
  document.querySelectorAll("[data-wa]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      togglePanel(true, b.getAttribute("data-wa"));
      waPanel.querySelector("a").focus();
    });
  });

  // Menú mobile
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mainNav");
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
  });

  // Fotos opcionales: si existe la foto se muestra; si no, queda la ilustración
  document.querySelectorAll("img[data-optional]").forEach(function (img) {
    function ok() { img.parentElement.classList.add("has-photo"); if (img.closest(".hero-art")) img.closest(".hero-art").classList.add("has-photo"); }
    function fail() { img.remove(); }
    if (img.complete) { img.naturalWidth ? ok() : fail(); }
    else { img.addEventListener("load", ok); img.addEventListener("error", fail); }
  });


  // Slider de fotos de la portada
  (function () {
    var slides = document.querySelectorAll(".hero-slides img");
    var dots = document.querySelectorAll(".slide-dots button");
    if (slides.length < 2) return;
    var i = 0, timer = null;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function show(n) {
      slides[i].classList.remove("active"); dots[i] && dots[i].removeAttribute("aria-current");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active"); dots[i] && dots[i].setAttribute("aria-current", "true");
      var cap = document.getElementById("slideCaption");
      if (cap) { cap.classList.remove("show"); void cap.offsetWidth; cap.textContent = slides[i].getAttribute("data-caption") || ""; cap.classList.add("show"); }
    }
    function start() { if (!reduce) { stop(); timer = setInterval(function () { show(i + 1); }, 5000); } }
    function stop() { if (timer) clearInterval(timer); timer = null; }
    dots.forEach(function (d, n) { d.addEventListener("click", function () { show(n); start(); }); });
    // Deslizar con el dedo en el celular
    var x0 = null, art = document.querySelector(".hero-art");
    art.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    art.addEventListener("touchend", function (e) {
      if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { show(dx < 0 ? i + 1 : i - 1); start(); }
    });
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
    start();
  })();

  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
