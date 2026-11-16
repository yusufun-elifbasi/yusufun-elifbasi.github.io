/* =============================================================================
   Google Analytics 4
   Paste your Measurement ID below (Google Analytics → Admin → Data streams).
   The page will not load Google Analytics while this is still the placeholder.
   ============================================================================= */
const GA_ID = 'G-2M1YC97NQQ';

(function () {
  var isPlaceholder = !GA_ID || GA_ID.indexOf('XXXXXXXXXX') !== -1;

  window.elifbaTrack = function (name, params) {
    if (!isPlaceholder && typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  };

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (!el) return;
    window.elifbaTrack(el.getAttribute('data-track'), {
      event_category: 'engagement',
      transport_type: 'beacon'
    });
  });

  if (isPlaceholder) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('set', {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  window.gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    anonymize_ip: true
  });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  document.head.appendChild(s);
})();
