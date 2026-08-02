(function(){
  "use strict";

  /* ============================================================
     MENU DATA — sourced from SMASH ME's NL/EN menu PDFs
     ============================================================ */
  var MENU = {
    mains: [
      { nl:"Special Hotdog", en:"Special Hotdog", price:"12,95", veg:false,
        descNl:"Brioche broodje, gerookte worstjes, ui, Parmezaanse kaas, geraspte kool, knapperige chips, ketchup, mayo & mosterd",
        descEn:"Brioche bun, smoked chicken hotdog, chopped onions, parmesan, grated cabbage, crunchy chips, ketchup, mayo & mustard" },
      { nl:"Black Truffle Chick", en:"Black Truffle Chick", price:"12,95", veg:false,
        descNl:"Zwart sesambroodje, gefrituurde kip, truffelmayonaise, Japanese mayonnaise, Parmezaanse kaas, augurkenrelish, sla",
        descEn:"Sesame black bun, chicken patty, truffle mayonnaise, Japanese mayonnaise, parmesan cheese, pickle relish, lettuce" },
      { nl:"The Double Smasher", en:"The Double Smasher", price:"12,95", veg:false,
        descNl:"Potato bun, dubbele rundvleesburger, cheddar kaas, mustard & ketchup, sla, ui",
        descEn:"Potato bun, double beef patties, cheddar cheese, mustard & ketchup, lettuce, onions" },
      { nl:"The Beyond Double Smasher", en:"The Beyond Double Smasher", price:"12,95", veg:true,
        descNl:"Potato bun, double Beyond patties, cheddar kaas, sla, mustard & ketchup, ui",
        descEn:"Potato bun, double Beyond patties, cheddar cheese, lettuce, mustard & ketchup, onions" },
      { nl:"Legendary Smash Burger", en:"Legendary Smash Burger", price:"12,95", veg:false,
        descNl:"Potato bun, dubbele rundvleesburger, cheddar kaas, SMASH ME saus, sla, knapperige chips",
        descEn:"Potato bun, double beef patties, cheddar cheese, SMASH ME sauce, lettuce, crunchy chips" },
      { nl:"Legendary Beyond Burger", en:"Legendary Beyond Burger", price:"12,95", veg:true,
        descNl:"Potato bun, dubbele Beyond burger, cheddar kaas, SMASH ME saus, sla, knapperige chips",
        descEn:"Potato bun, double Beyond patties, cheddar cheese, SMASH ME sauce, lettuce, crunchy chips" },
      { nl:"The One Smash", en:"The One Smash", price:"10,50", veg:false,
        descNl:"Smashed potato bun, rundvleesburger, cheddar kaas, SMASH ME saus, jalapeños, ui",
        descEn:"Smashed potato bun, single beef patty, cheddar cheese, SMASH ME sauce, jalapeños, onions" },
      { nl:"The Beyond One Smash", en:"The Beyond One Smash", price:"10,50", veg:true,
        descNl:"Potato bun, single Beyond burger, cheddar kaas, SMASH ME saus, jalapeños, ui",
        descEn:"Potato bun, single Beyond patty, cheddar cheese, SMASH ME sauce, jalapeños, onions" }
    ],
    sides: [
      { nl:"Friet", en:"Fries", price:"4,50" },
      { nl:"Kaasfriet", en:"Cheesy Fries", price:"6,95" },
      { nl:"Parmezaanse Truffle Fries", en:"Cheesy Truffle Fries", price:"6,95" },
      { nl:"Koolsla", en:"Coleslaw", price:"4,50" }
    ],
    sweets: [
      { nl:"Brownies", en:"Brownies", price:"4,50" },
      { nl:"Cookie Brownies", en:"Cookie Brownies", price:"4,50" }
    ],
    drinks: [
      { nl:"Water Spa Blauw 50cl", en:"Water Spa Blue 50cl", price:"2,75" },
      { nl:"Water Spa Rood 50cl", en:"Water Spa Red 50cl", price:"2,75" },
      { nl:"Fanta Orange 33cl", en:"Fanta Orange 33cl", price:"2,75" },
      { nl:"Coca Cola Regular Blik 33cl", en:"Coca Cola Regular Can 33cl", price:"2,75" },
      { nl:"Sprite Zero 33cl", en:"Sprite Zero 33cl", price:"2,75" },
      { nl:"Redbull 25cl", en:"Redbull 25cl", price:"3,75" },
      { nl:"Ice Tea Fuze Tea Peach 33cl", en:"Ice Tea Fuze Tea Peach 33cl", price:"2,75" },
      { nl:"Cola Zero 33cl", en:"Cola Zero 33cl", price:"2,75" },
      { nl:"Schulp appelsap 20cl", en:"Schulp apple juice 20cl", price:"3,00" },
      { nl:"Chocomel 25cl", en:"Chocomel 25cl", price:"2,75" }
    ],
    extras: {
      items: [
        { nl:"Patty", en:"Patty", price:"3,00" },
        { nl:"Kip Bacon", en:"Chicken Bacon", price:"3,00" },
        { nl:"Parmezaanse", en:"Parmesan", price:"1,25" },
        { nl:"Alle overige extra's", en:"All other items", price:"1,00" }
      ],
      sauces: [
        { nl:"Mayo", en:"Mayo", price:"1,00" },
        { nl:"Sriracha Mayo", en:"Sriracha Mayo", price:"1,00" },
        { nl:"Truffle Mayo", en:"Truffle Mayo", price:"1,00" },
        { nl:"Ketchup", en:"Ketchup", price:"1,00" },
        { nl:"SMASH ME Saus", en:"SMASH ME Sauce", price:"1,00" }
      ]
    }
  };

  var lang = "nl";

  function euro(price){ return "€ " + price; }

  function renderMains(){
    var grid = document.getElementById("mainsGrid");
    grid.innerHTML = MENU.mains.map(function(item){
      return '<div class="menu-card">' +
        '<div class="menu-card__top">' +
          '<span class="menu-card__name" data-nl="'+item.nl+'" data-en="'+item.en+'">'+
            (item.veg ? '<span class="badge-v">V</span>' : '') + (lang==="nl"?item.nl:item.en) +
          '</span>' +
          '<span class="menu-card__price">'+euro(item.price)+'</span>' +
        '</div>' +
        '<p class="menu-card__desc" data-nl="'+item.descNl+'" data-en="'+item.descEn+'">'+(lang==="nl"?item.descNl:item.descEn)+'</p>' +
      '</div>';
    }).join("");
  }

  function renderSimpleGrid(targetId, list){
    var grid = document.getElementById(targetId);
    grid.innerHTML = list.map(function(item){
      return '<div class="menu-card">' +
        '<div class="menu-card__top">' +
          '<span class="menu-card__name" data-nl="'+item.nl+'" data-en="'+item.en+'">'+(lang==="nl"?item.nl:item.en)+'</span>' +
          '<span class="menu-card__price">'+euro(item.price)+'</span>' +
        '</div>' +
      '</div>';
    }).join("");
  }

  function renderDrinks(){
    var grid = document.getElementById("drinksGrid");
    grid.innerHTML = MENU.drinks.map(function(item){
      return '<div class="drinks-row">' +
        '<span data-nl="'+item.nl+'" data-en="'+item.en+'">'+(lang==="nl"?item.nl:item.en)+'</span>' +
        '<span>'+euro(item.price)+'</span>' +
      '</div>';
    }).join("");
  }

  function renderExtras(){
    var wrap = document.getElementById("extrasWrap");
    function col(title_nl, title_en, list){
      return '<div class="extras-col">' +
        '<h4 data-nl="'+title_nl+'" data-en="'+title_en+'">'+(lang==="nl"?title_nl:title_en)+'</h4>' +
        list.map(function(item){
          return '<div class="extras-row">' +
            '<span data-nl="'+item.nl+'" data-en="'+item.en+'">'+(lang==="nl"?item.nl:item.en)+'</span>' +
            '<span>'+euro(item.price)+'</span>' +
          '</div>';
        }).join("") +
      '</div>';
    }
    wrap.innerHTML = col("Toevoegingen","Add-ons", MENU.extras.items) + col("Sauzen","Sauces", MENU.extras.sauces);
  }

  function renderAllMenu(){
    renderMains();
    renderSimpleGrid("sidesGrid", MENU.sides);
    renderSimpleGrid("sweetsGrid", MENU.sweets);
    renderDrinks();
    renderExtras();
  }

  /* ============================================================
     LANGUAGE TOGGLE
     ============================================================ */
  function applyLang(){
    document.querySelectorAll("[data-nl][data-en]").forEach(function(el){
      // skip menu-generated nodes handled by re-render (still fine to sync anyway)
      var txt = el.getAttribute(lang === "nl" ? "data-nl" : "data-en");
      if (txt !== null) el.textContent = txt;
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-toggle__opt").forEach(function(opt){
      opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
    });
    renderAllMenu();
  }

  var langToggle = document.getElementById("langToggle");
  if (langToggle){
    langToggle.addEventListener("click", function(){
      lang = lang === "nl" ? "en" : "nl";
      applyLang();
    });
  }

  /* ============================================================
     NAV: scroll state + mobile menu
     ============================================================ */
  var nav = document.getElementById("nav");
  function onScroll(){
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  var burgerBtn = document.getElementById("burgerBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  burgerBtn.addEventListener("click", function(){
    var open = mobileMenu.classList.toggle("is-open");
    burgerBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobileMenu.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){
      mobileMenu.classList.remove("is-open");
      burgerBtn.setAttribute("aria-expanded", "false");
    });
  });

  /* ============================================================
     MENU TABS
     ============================================================ */
  var tabs = document.querySelectorAll(".menu-tab");
  tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
      tabs.forEach(function(t){ t.classList.remove("is-active"); });
      tab.classList.add("is-active");
      document.querySelectorAll(".menu-panel").forEach(function(p){ p.classList.remove("is-active"); });
      var panel = document.getElementById("panel-" + tab.getAttribute("data-target"));
      if (panel) panel.classList.add("is-active");
    });
  });

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("is-visible"); });
  }

  /* ============================================================
     SMOOTH ANCHOR SCROLL (account for fixed nav height)
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener("click", function(e){
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = 76;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ============================================================
     DECORATIVE CURSOR (desktop, ambient only)
     ============================================================ */
  var cursor = document.querySelector(".smash-cursor");
  if (cursor && window.matchMedia("(hover:hover) and (min-width:1024px)").matches){
    window.addEventListener("mousemove", function(e){
      cursor.style.opacity = "1";
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
    document.querySelectorAll("a,button").forEach(function(el){
      el.addEventListener("mouseenter", function(){ cursor.style.transform = "translate(-50%,-50%) scale(1.8)"; });
      el.addEventListener("mouseleave", function(){ cursor.style.transform = "translate(-50%,-50%) scale(1)"; });
    });
  }

  /* ============================================================
     FOOTER YEAR
     ============================================================ */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============================================================
     INIT
     ============================================================ */
  renderAllMenu();
})();
