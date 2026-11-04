/**
 * AllSorted HQ — site config & interactions
 * CONTACT + PRICING: keep everything editable in CONFIG below.
 */
const CONFIG = {
  // === CONTACT (never put email/phone as visible page text) ===
  // Full wa.me URL only — number must never appear as visible page text
  WHATSAPP_URL: "https://wa.me/27710347336",
  // Web3Forms access key (public alias — NOT an email). Forwards to inbox without email in source.
  // Swap for a dedicated AllSorted key in the Web3Forms dashboard when ready.
  FORM_ACCESS_KEY: "5084d06a-881f-43cb-b93f-f77ab39dcbbe",
  FORM_ENDPOINT: "https://api.web3forms.com/submit",
  INSTAGRAM: "", // leave empty to hide
  BOOKING_URL: "", // optional Calendly; empty → WhatsApp
  BUSINESS_NAME: "AllSorted HQ",
  LOCATION: "Worldwide · remote-first",

  // === REGIONAL PRICING ===
  // Base prices = ZAR "from" lows (AllSorted pricing, Nov 2026)
  baseCurrency: "ZAR",
  packages: {
    maps: { zar: 1200, period: "once" },
    starter: { zar: 5500, period: "once" },
    growth: { zar: 11000, period: "once" },
    automation: { zar: 6500, period: "once" },
    ai: { zar: 7500, period: "once" },
    care: { zar: 900, period: "month" },
    visibility: { zar: 1500, period: "month" },
    social: { zar: 3500, period: "month" },
    ads: { zar: 2500, period: "month", suffix: "+ ad spend" },
    aiCare: { zar: 1200, period: "month" },
  },

  // Tier multipliers on ZAR→local conversion (easy to tweak)
  tiers: {
    A: {
      id: "A",
      label: "Tier A",
      multiplier: 2.75, // ~2.5–3× — high-income markets
      note: "US, Canada, UK, EU/EEA, CH, Nordics, AU, NZ, UAE, IL, SG, JP…",
    },
    B: {
      id: "B",
      label: "Tier B",
      multiplier: 1.4, // ~1.3–1.5× — middle-income / EE / CIS / LATAM
      note: "Eastern Europe, Russia/CIS, Latin America, Turkey…",
    },
    C: {
      id: "C",
      label: "Tier C",
      multiplier: 1.0, // SA + other African / lower-income = ZAR base
      note: "South Africa and other African / lower-income markets",
    },
  },

  // Approx FX: ZAR per 1 unit of currency (edit anytime). Not live rates.
  fxZarPerUnit: {
    ZAR: 1,
    USD: 18.2,
    EUR: 19.8,
    GBP: 23.5,
    RUB: 0.195, // ~1 ZAR ≈ 5.1 RUB
    MXN: 0.95, // ~1 ZAR ≈ 1.05 MXN
  },

  currencies: {
    ZAR: { code: "ZAR", symbol: "R", locale: "en-ZA", tier: "C", label: "ZAR" },
    USD: { code: "USD", symbol: "$", locale: "en-US", tier: "A", label: "USD" },
    EUR: { code: "EUR", symbol: "€", locale: "de-DE", tier: "A", label: "EUR" },
    GBP: { code: "GBP", symbol: "£", locale: "en-GB", tier: "A", label: "GBP" },
    RUB: { code: "RUB", symbol: "₽", locale: "ru-RU", tier: "B", label: "RUB" },
    MXN: { code: "MXN", symbol: "MX$", locale: "es-MX", tier: "B", label: "MXN" },
  },

  // Country → preferred currency (tier comes from currency or override)
  countryCurrency: {
    ZA: "ZAR", NA: "ZAR", BW: "ZAR", ZW: "ZAR", MZ: "ZAR", LS: "ZAR", SZ: "ZAR",
    NG: "ZAR", KE: "ZAR", GH: "ZAR", EG: "ZAR", MA: "ZAR", TZ: "ZAR", UG: "ZAR",
    US: "USD", CA: "USD", AU: "AUD_AS_USD", NZ: "NZD_AS_USD", SG: "USD",
    JP: "USD", AE: "USD", IL: "USD", KR: "USD", HK: "USD", TW: "USD",
    GB: "GBP", IE: "EUR",
    DE: "EUR", FR: "EUR", ES: "EUR", IT: "EUR", NL: "EUR", BE: "EUR", AT: "EUR",
    SE: "EUR", NO: "EUR", DK: "EUR", FI: "EUR", CH: "EUR", AT: "EUR", PT: "EUR",
    LU: "EUR", GR: "EUR", PL: "EUR", CZ: "EUR", HU: "EUR", RO: "EUR", SK: "EUR",
    SI: "EUR", HR: "EUR", EE: "EUR", LV: "EUR", LT: "EUR", MT: "EUR", CY: "EUR",
    RU: "RUB", BY: "RUB", KZ: "RUB", UA: "RUB", UZ: "RUB", AM: "RUB", GE: "RUB",
    AZ: "RUB", KG: "RUB", MD: "RUB",
    MX: "MXN", AR: "MXN", CO: "MXN", CL: "MXN", PE: "MXN", BR: "MXN", UY: "MXN",
    CR: "MXN", PA: "MXN", EC: "MXN", BO: "MXN", PY: "MXN", GT: "MXN", DO: "MXN",
    TR: "MXN", // Tier B via MXN currency mapping → override tier below
  },

  // Explicit country tier overrides (when currency map alone isn’t enough)
  countryTier: {
    PL: "B", CZ: "B", HU: "B", RO: "B", SK: "B", BG: "B", RS: "B", HR: "B",
    BA: "B", MK: "B", AL: "B", ME: "B", XK: "B",
    RU: "B", BY: "B", KZ: "B", UA: "B", UZ: "B", AM: "B", GE: "B", AZ: "B",
    KG: "B", MD: "B", TR: "B",
    MX: "B", AR: "B", CO: "B", CL: "B", PE: "B", BR: "B", UY: "B", CR: "B",
    PA: "B", EC: "B", BO: "B", PY: "B", GT: "B", DO: "B", VE: "B",
    ZA: "C", NA: "C", BW: "C", ZW: "C", MZ: "C", LS: "C", SZ: "C",
    NG: "C", KE: "C", GH: "C", EG: "C", MA: "C", TZ: "C", UG: "C", RW: "C",
    ET: "C", SN: "C", CI: "C", CM: "C", AO: "C", ZM: "C", MW: "C",
  },

  geoEndpoint: "https://get.geojs.io/v1/ip/country.json",
  defaultCurrency: "USD", // final fallback = Tier A in USD
  defaultTier: "A",
};

(function () {
  "use strict";

  const state = {
    currency: CONFIG.defaultCurrency,
    tier: CONFIG.defaultTier,
    country: null,
    source: "fallback",
  };

  // ---------- Contact wiring ----------
  function wireContact() {
    const waBase = (CONFIG.WHATSAPP_URL || "").trim();
    const waMsg = encodeURIComponent(
      "Hi Yuli — I'd like to chat about AllSorted HQ helping my business."
    );
    const waLink = waBase
      ? `${waBase}${waBase.includes("?") ? "&" : "?"}text=${waMsg}`
      : "#contact";
    const waNumber = waBase ? "ok" : "";
    const bookLink =
      CONFIG.BOOKING_URL && CONFIG.BOOKING_URL.trim()
        ? CONFIG.BOOKING_URL.trim()
        : waLink;

    document.querySelectorAll("[data-cta='whatsapp']").forEach((el) => {
      el.setAttribute("href", waLink);
      if (waNumber) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });
    document.querySelectorAll("[data-cta='book']").forEach((el) => {
      el.setAttribute("href", bookLink);
      if (bookLink.startsWith("http")) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    });

    // Inject Web3Forms access key (never an email address)
    const keyInput = document.getElementById("form-access-key");
    if (keyInput && CONFIG.FORM_ACCESS_KEY) {
      keyInput.value = CONFIG.FORM_ACCESS_KEY;
    }

    document.querySelectorAll("[data-contact='instagram']").forEach((el) => {
      if (!CONFIG.INSTAGRAM) el.hidden = true;
      else {
        el.hidden = false;
        const a = el.querySelector("[data-cta='instagram']");
        if (a) {
          a.setAttribute("href", CONFIG.INSTAGRAM);
          a.setAttribute("target", "_blank");
          a.setAttribute("rel", "noopener noreferrer");
        }
      }
    });
  }

  // ---------- Pricing helpers ----------
  function resolveCurrencyCode(raw) {
    if (!raw) return null;
    if (raw === "AUD_AS_USD" || raw === "NZD_AS_USD") return "USD";
    if (CONFIG.currencies[raw]) return raw;
    return null;
  }

  function tierForCountry(cc) {
    if (!cc) return null;
    const up = cc.toUpperCase();
    if (CONFIG.countryTier[up]) return CONFIG.countryTier[up];
    const cur = resolveCurrencyCode(CONFIG.countryCurrency[up]);
    if (cur && CONFIG.currencies[cur]) return CONFIG.currencies[cur].tier;
    return null;
  }

  function currencyForCountry(cc) {
    if (!cc) return null;
    return resolveCurrencyCode(CONFIG.countryCurrency[cc.toUpperCase()]);
  }

  function roundFriendly(n) {
    if (!isFinite(n) || n <= 0) return 0;
    if (n < 50) return Math.round(n / 5) * 5;
    if (n < 200) return Math.round(n / 5) * 5;
    if (n < 1000) return Math.round(n / 10) * 10;
    if (n < 5000) return Math.round(n / 50) * 50;
    if (n < 20000) return Math.round(n / 100) * 100;
    if (n < 100000) return Math.round(n / 500) * 500;
    return Math.round(n / 1000) * 1000;
  }

  function priceFor(pkgKey, currency, tierId) {
    const pkg = CONFIG.packages[pkgKey];
    if (!pkg) return null;
    const tier = CONFIG.tiers[tierId] || CONFIG.tiers.A;
    const fx = CONFIG.fxZarPerUnit[currency] || CONFIG.fxZarPerUnit.USD;
    const raw = (pkg.zar / fx) * tier.multiplier;
    return roundFriendly(raw);
  }

  function formatPrice(amount, currency) {
    const meta = CONFIG.currencies[currency] || CONFIG.currencies.USD;
    // MXN: force MX$ so it is not confused with USD
    if (currency === "MXN") {
      return `MX$${amount.toLocaleString("en-US")}`;
    }
    if (currency === "ZAR") {
      return `R${amount.toLocaleString("en-ZA")}`;
    }
    try {
      return new Intl.NumberFormat(meta.locale, {
        style: "currency",
        currency: meta.code,
        maximumFractionDigits: 0,
      }).format(amount);
    } catch (_) {
      return `${meta.symbol}${amount.toLocaleString("en-US")}`;
    }
  }

  function periodLabel(period, currency) {
    if (period === "month") {
      return currency === "ZAR" ? "/ month" : "/ mo";
    }
    return currency === "ZAR" ? "once-off" : "once";
  }

  function applyPrices() {
    const { currency, tier } = state;
    document.querySelectorAll("[data-price]").forEach((el) => {
      const key = el.getAttribute("data-price");
      const pkg = CONFIG.packages[key];
      if (!pkg) {
        el.textContent = "Get a quote";
        return;
      }
      const amount = priceFor(key, currency, tier);
      const suffix = pkg.suffix ? ` ${pkg.suffix}` : "";
      el.innerHTML = `from ${formatPrice(amount, currency)} <span>${periodLabel(
        pkg.period,
        currency
      )}${suffix}</span>`;
    });

    const note = document.getElementById("pricing-tier-note");
    if (note) {
      note.textContent = `Prices shown in ${currency}. Final quote confirmed after a free chat.`;
    }

    document.querySelectorAll("[data-currency-btn]").forEach((btn) => {
      const active = btn.getAttribute("data-currency-btn") === currency;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setPricing(currency, tier, source) {
    if (!CONFIG.currencies[currency]) currency = CONFIG.defaultCurrency;
    // Currency switcher: pick tier matching that currency’s main region
    if (!tier) tier = CONFIG.currencies[currency].tier;
    state.currency = currency;
    state.tier = tier;
    if (source) state.source = source;
    // Only remember explicit visitor choices — never lock init/geo into storage
    if (source === "manual") {
      try {
        localStorage.setItem(
          "allsorted_pricing",
          JSON.stringify({ currency, tier, source: "manual" })
        );
      } catch (_) {}
    }
    applyPrices();
  }

  function languageFallback() {
    const raw = navigator.language || navigator.userLanguage || "";
    const lang = String(raw).toLowerCase().replace("_", "-");
    const primary = lang.split("-")[0];
    const region = (lang.split("-")[1] || "").toUpperCase();

    // Explicit region tags first
    if (region === "ZA" || region === "NA" || region === "BW" || region === "ZW")
      return { currency: "ZAR", tier: "C", country: region || "ZA" };
    if (region === "US" || region === "CA" || region === "AU" || region === "NZ" || region === "SG")
      return { currency: "USD", tier: "A", country: region };
    if (region === "GB" || region === "UK")
      return { currency: "GBP", tier: "A", country: "GB" };
    if (region === "MX" || region === "AR" || region === "CO" || region === "CL" || region === "PE" || region === "BR")
      return { currency: "MXN", tier: "B", country: region };
    if (region === "RU" || region === "BY" || region === "KZ" || region === "UA")
      return { currency: "RUB", tier: "B", country: region };
    if (["DE","FR","ES","IT","NL","BE","AT","CH","FI","SE","NO","DK","PT","IE","PL","CZ"].includes(region))
      return { currency: "EUR", tier: "A", country: region };

    // Language-only
    if (primary === "af" || primary === "zu" || primary === "xh")
      return { currency: "ZAR", tier: "C", country: "ZA" };
    if (primary === "ru" || primary === "uk" || primary === "kk" || primary === "be")
      return { currency: "RUB", tier: "B", country: "RU" };
    if (primary === "es" || primary === "pt")
      return { currency: "MXN", tier: "B", country: "MX" };
    if (["de","fr","it","nl","fi","sv","da","nb","nn","pt"].includes(primary) || primary === "el")
      return { currency: "EUR", tier: "A", country: null };
    // plain English with no region → treat as high-income default path handled by final fallback
    return null;
  }

  async function detectRegion() {
    // Honour explicit currency choice from a previous visit
    try {
      const saved = JSON.parse(localStorage.getItem("allsorted_pricing") || "null");
      if (saved && saved.source === "manual" && saved.currency && CONFIG.currencies[saved.currency]) {
        setPricing(saved.currency, saved.tier || CONFIG.currencies[saved.currency].tier, "manual");
        return;
      }
    } catch (_) {}

    let country = null;
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 2500);
      const res = await fetch(CONFIG.geoEndpoint, { signal: ctrl.signal, cache: "no-store" });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        country = (data.country || data.country_code || "").toUpperCase() || null;
      }
    } catch (_) {
      country = null;
    }

    if (country) {
      state.country = country;
      const cur = currencyForCountry(country) || CONFIG.defaultCurrency;
      const tier = tierForCountry(country) || CONFIG.currencies[cur].tier || CONFIG.defaultTier;
      setPricing(cur, tier, "geo");
      return;
    }

    const lang = languageFallback();
    if (lang) {
      state.country = lang.country;
      setPricing(lang.currency, lang.tier, "language");
      return;
    }

    // Final fallback: Tier A in USD
    setPricing(CONFIG.defaultCurrency, CONFIG.defaultTier, "fallback");
  }

  function wireCurrencySwitcher() {
    document.querySelectorAll("[data-currency-btn]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cur = btn.getAttribute("data-currency-btn");
        // Switcher changes display currency AND tier for that currency’s region
        setPricing(cur, CONFIG.currencies[cur].tier, "manual");
      });
    });
  }

  // Expose for console verification / parent report
  window.AllSortedPricing = {
    CONFIG,
    state,
    priceFor,
    formatPrice,
    examples() {
      const keys = ["maps", "starter", "growth", "care"];
      const out = {};
      ["ZAR", "USD", "EUR", "GBP", "RUB", "MXN"].forEach((cur) => {
        const tier = CONFIG.currencies[cur].tier;
        out[cur] = { tier, prices: {} };
        keys.forEach((k) => {
          out[cur].prices[k] = {
            amount: priceFor(k, cur, tier),
            formatted: formatPrice(priceFor(k, cur, tier), cur),
          };
        });
      });
      return out;
    },
  };

  // ---------- UI chrome (nav, FAQ, form, etc.) ----------
  function wireChrome() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav-links");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    const header = document.querySelector(".site-header");
    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }

    document.querySelectorAll(".faq-item").forEach((item) => {
      const btn = item.querySelector(".faq-q");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const open = item.classList.contains("is-open");
        document.querySelectorAll(".faq-item.is-open").forEach((o) => {
          o.classList.remove("is-open");
          const b = o.querySelector(".faq-q");
          if (b) b.setAttribute("aria-expanded", "false");
        });
        if (!open) {
          item.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });

    const form = document.getElementById("contact-form");
    if (form) {
      const status = document.getElementById("form-status");
      const btn = document.getElementById("form-submit-btn");
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!CONFIG.FORM_ACCESS_KEY) {
          if (status) {
            status.hidden = false;
            status.className = "form-status is-error";
            status.textContent =
              "Form is not configured yet (missing FORM_ACCESS_KEY). Please use Chat on WhatsApp.";
          }
          return;
        }
        // Honeypot: bots tick the hidden checkbox
        const hp = form.querySelector('[name="botcheck"]');
        if (hp && hp.checked) {
          if (status) {
            status.hidden = false;
            status.className = "form-status is-success";
            status.textContent = "Thanks — message sent.";
          }
          form.reset();
          return;
        }
        if (status) {
          status.hidden = false;
          status.className = "form-status";
          status.textContent = "Sending…";
        }
        if (btn) btn.disabled = true;
        try {
          const fd = new FormData(form);
          if (!fd.get("access_key")) fd.set("access_key", CONFIG.FORM_ACCESS_KEY);
          const res = await fetch(CONFIG.FORM_ENDPOINT || "https://api.web3forms.com/submit", {
            method: "POST",
            body: fd,
            headers: { Accept: "application/json" },
          });
          const data = await res.json().catch(() => ({}));
          if (res.ok && data.success !== false) {
            if (status) {
              status.className = "form-status is-success";
              status.textContent =
                "Thanks — your message is on its way. We’ll reply soon.";
            }
            form.reset();
            // re-inject key after reset
            const keyInput = document.getElementById("form-access-key");
            if (keyInput) keyInput.value = CONFIG.FORM_ACCESS_KEY;
          } else {
            throw new Error(data.message || "Send failed");
          }
        } catch (err) {
          if (status) {
            status.className = "form-status is-error";
            status.textContent =
              "Sorry — something went wrong. Please try Chat on WhatsApp instead.";
          }
        } finally {
          if (btn) btn.disabled = false;
        }
      });
    }

    const tabBtns = document.querySelectorAll("[data-pkg-tab]");
    const panels = document.querySelectorAll("[data-pkg-panel]");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-pkg-tab");
        tabBtns.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        panels.forEach((p) => {
          p.hidden = p.getAttribute("data-pkg-panel") !== id;
        });
      });
    });
  }

  wireContact();
  wireChrome();
  wireCurrencySwitcher();
  // Start at final fallback (USD / Tier A), then refine via geo → language
  setPricing(CONFIG.defaultCurrency, CONFIG.defaultTier, "fallback");
  detectRegion();
})();
