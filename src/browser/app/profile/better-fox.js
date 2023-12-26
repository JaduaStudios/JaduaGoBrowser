// Ignore license in this file
//
// The code in this file was created by @yokoffing and is licensed under the
// MIT license:
// MIT License
//
// Copyright (c) 2020 yokoffing
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 121                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
pref('content.notify.interval', 100000);

/** GFX ***/
pref('gfx.canvas.accelerated.cache-items', 4096);
pref('gfx.canvas.accelerated.cache-size', 512);
pref('gfx.content.skia-font-cache-size', 20);

/** DISK CACHE ***/
pref('browser.cache.jsbc_compression_level', 3);

/** MEDIA CACHE ***/
pref('media.memory_cache_max_size', 65536);
pref('media.cache_readahead_limit', 7200);
pref('media.cache_resume_threshold', 3600);

/** IMAGE CACHE ***/
pref('image.mem.decode_bytes_at_a_time', 32768);

/** NETWORK ***/
pref('network.buffer.cache.size', 262144);
pref('network.buffer.cache.count', 128);
pref('network.http.max-connections', 1800);
pref('network.http.max-persistent-connections-per-server', 10);
pref('network.http.max-urgent-start-excessive-connections-per-host', 5);
pref('network.http.pacing.requests.enabled', false);
pref('network.dnsCacheExpiration', 3600);
pref('network.dns.max_high_priority_threads', 8);
pref('network.ssl_tokens_cache_capacity', 10240);

/** SPECULATIVE LOADING ***/
pref('network.dns.disablePrefetch', true);
pref('network.prefetch-next', false);
pref('network.predictor.enabled', false);

/** EXPERIMENTAL ***/
pref('layout.css.grid-template-masonry-value.enabled', true);
pref('dom.enable_web_task_scheduling', true);
pref('layout.css.has-selector.enabled', true);
pref('dom.security.sanitizer.enabled', true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
pref('browser.contentblocking.category', 'strict');
pref(
  'urlclassifier.trackingSkipURLs',
  '*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com'
);
pref(
  'urlclassifier.features.socialtracking.skipURLs',
  '*.instagram.com, *.twitter.com, *.twimg.com'
);
pref('network.cookie.sameSite.noneRequiresSecure', true);
pref('browser.download.start_downloads_in_tmp_dir', true);
pref('browser.helperApps.deleteTempFileOnExit', true);
pref('browser.uitour.enabled', false);
pref('privacy.globalprivacycontrol.enabled', true);

/** OCSP & CERTS / HPKP ***/
pref('security.OCSP.enabled', 0);
pref('security.remote_settings.crlite_filters.enabled', true);
pref('security.pki.crlite_mode', 2);

/** SSL / TLS ***/
pref('security.ssl.treat_unsafe_negotiation_as_broken', true);
pref('browser.xul.error_pages.expert_bad_cert', true);
pref('security.tls.enable_0rtt_data', false);

/** DISK AVOIDANCE ***/
pref('browser.privatebrowsing.forceMediaMemoryCache', true);
pref('browser.sessionstore.interval', 60000);

/** HTTPS-FIRST POLICY ***/
pref('dom.security.https_first', true);

/** MIXED CONTENT + CROSS-SITE ***/
pref('security.mixed_content.block_display_content', true);
pref('security.mixed_content.upgrade_display_content', true);
pref('security.mixed_content.upgrade_display_content.image', true);
pref('pdfjs.enableScripting', false);
pref('extensions.postDownloadThirdPartyPrompt', false);

/** HEADERS / REFERERS ***/
pref('network.http.referer.XOriginTrimmingPolicy', 2);

/** CONTAINERS ***/
pref('privacy.userContext.ui.enabled', true);

/** WEBRTC ***/
pref('media.peerconnection.ice.proxy_only_if_behind_proxy', true);
pref('media.peerconnection.ice.default_address_only', true);

/** SAFE BROWSING ***/
pref('browser.safebrowsing.downloads.remote.enabled', false);

/** MOZILLA ***/
pref('permissions.default.desktop-notification', 2);
pref('permissions.default.geo', 2);
pref(
  'geo.provider.network.url',
  'https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%'
);
pref('permissions.manager.defaultsUrl', '');
pref('webchannel.allowObject.urlWhitelist', '');

/** TELEMETRY ***/
pref('datareporting.policy.dataSubmissionEnabled', false);
pref('datareporting.healthreport.uploadEnabled', false);
pref('toolkit.telemetry.unified', false);
pref('toolkit.telemetry.enabled', false);
pref('toolkit.telemetry.server', 'data:,');
pref('toolkit.telemetry.archive.enabled', false);
pref('toolkit.telemetry.newProfilePing.enabled', false);
pref('toolkit.telemetry.shutdownPingSender.enabled', false);
pref('toolkit.telemetry.updatePing.enabled', false);
pref('toolkit.telemetry.bhrPing.enabled', false);
pref('toolkit.telemetry.firstShutdownPing.enabled', false);
pref('toolkit.telemetry.coverage.opt-out', true);
pref('toolkit.coverage.opt-out', true);
pref('toolkit.coverage.endpoint.base', '');
pref('browser.ping-centre.telemetry', false);
pref('browser.newtabpage.activity-stream.feeds.telemetry', false);
pref('browser.newtabpage.activity-stream.telemetry', false);

/** EXPERIMENTS ***/
pref('app.shield.optoutstudies.enabled', false);
pref('app.normandy.enabled', false);
pref('app.normandy.api_url', '');

/** CRASH REPORTS ***/
pref('breakpad.reportURL', '');
pref('browser.tabs.crashReporting.sendReport', false);
pref('browser.crashReports.unsubmittedCheck.autoSubmit2', false);

/** DETECTION ***/
pref('captivedetect.canonicalURL', '');
pref('network.captive-portal-service.enabled', false);
pref('network.connectivity-service.enabled', false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
pref('browser.privatebrowsing.vpnpromourl', '');
pref('extensions.getAddons.showPane', false);
pref('extensions.htmlaboutaddons.recommendations.enabled', false);
pref('browser.discovery.enabled', false);
pref('browser.shell.checkDefaultBrowser', false);
pref('browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons', false);
pref(
  'browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features',
  false
);
pref('browser.preferences.moreFromMozilla', false);
pref('browser.tabs.tabmanager.enabled', false);
pref('browser.aboutConfig.showWarning', false);
pref('browser.aboutwelcome.enabled', false);

/** THEME ADJUSTMENTS ***/
pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);
pref('browser.compactmode.show', true);
pref('browser.display.focus_ring_on_anything', true);
pref('browser.display.focus_ring_style', 0);
pref('browser.display.focus_ring_width', 0);
pref('layout.css.prefers-color-scheme.content-override', 2);
pref('browser.privateWindowSeparation.enabled', false); // WINDOWS

/** COOKIE BANNER HANDLING ***/
pref('cookiebanners.service.mode', 1);
pref('cookiebanners.service.mode.privateBrowsing', 1);

/** FULLSCREEN NOTICE ***/
pref('full-screen-api.transition-duration.enter', '100 100');
pref('full-screen-api.transition-duration.leave', '100 100');
pref('full-screen-api.warning.delay', -1);
pref('full-screen-api.warning.timeout', 0);

/** URL BAR ***/
pref('browser.urlbar.suggest.calculator', true);
pref('browser.urlbar.unitConversion.enabled', true);
pref('browser.urlbar.trending.featureGate', false);

/** NEW TAB PAGE ***/
pref('browser.newtabpage.activity-stream.feeds.topsites', false);
pref('browser.newtabpage.activity-stream.feeds.section.topstories', false);

/*** POCKET ***/
pref('extensions.pocket.enabled', false);

/** DOWNLOADS ***/
pref('browser.download.always_ask_before_handling_new_types', true);
pref('browser.download.manager.addToRecentDocs', false);

/** PDF ***/
pref('browser.download.open_pdf_attachments_inline', true);

/** TAB BEHAVIOR ***/
pref('browser.bookmarks.openInTabClosesMenu', false);
pref('browser.menu.showViewImageInfo', true);
pref('findbar.highlightAll', true);
pref('layout.word_select.eat_space_to_next_word', false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/
