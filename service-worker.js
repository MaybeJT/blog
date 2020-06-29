/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a9777edcf8ea910f7549e58e40548386"
  },
  {
    "url": "assets/css/0.styles.b1f1698c.css",
    "revision": "b6c0e9cf858c93abd0bd3b893ab286f8"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/timg.jpg",
    "revision": "f585519bc726c9a330b37e8d6d5f0ad8"
  },
  {
    "url": "assets/js/10.30a403e6.js",
    "revision": "922bc4cc03b80b13a7230ebe0a15f1de"
  },
  {
    "url": "assets/js/11.c7799078.js",
    "revision": "d24fbd8273658e6e4e036b3bec3b88b9"
  },
  {
    "url": "assets/js/12.3900d628.js",
    "revision": "15995bc9257e7fdd6060a60a8aa8c7eb"
  },
  {
    "url": "assets/js/2.34d03835.js",
    "revision": "59745b406587607468c979d62144c2b3"
  },
  {
    "url": "assets/js/3.731873e8.js",
    "revision": "dfdb94c10fd54971c59c676c6e7fb76e"
  },
  {
    "url": "assets/js/4.78c9b42e.js",
    "revision": "aa6b98e39b2e0b77b76da58f1dba9871"
  },
  {
    "url": "assets/js/5.2c2219c2.js",
    "revision": "6c63eb7167f560be82d0ae42a28365ef"
  },
  {
    "url": "assets/js/6.e74e4e73.js",
    "revision": "caee5b623a2605cc8a115831c91c84d0"
  },
  {
    "url": "assets/js/7.a8dacabf.js",
    "revision": "69f0c44176c0dcc9a8481475608ae968"
  },
  {
    "url": "assets/js/8.e45d1ae4.js",
    "revision": "752cf06939cd35b03ff951f729dcbcf8"
  },
  {
    "url": "assets/js/9.c4e3ec4d.js",
    "revision": "1de7fc700321a7708248cf09feab4b1d"
  },
  {
    "url": "assets/js/app.db61aee0.js",
    "revision": "874ee844268be0b18a3b39cc0cec71f2"
  },
  {
    "url": "Data Strutures/Hot100.html",
    "revision": "c290c758a1fe2f3de1d9ae268df9445c"
  },
  {
    "url": "Data Strutures/index.html",
    "revision": "3387c1aed2a883c318ef1c3bbdcff62b"
  },
  {
    "url": "Data Strutures/one.html",
    "revision": "83bcaf03e63dfe06e120f0e174582af5"
  },
  {
    "url": "index.html",
    "revision": "b7a784119a886569c77f10f3cf956019"
  },
  {
    "url": "test.html",
    "revision": "298a18dbf3a322fb82004ad324d85186"
  },
  {
    "url": "Tools/index.html",
    "revision": "31fda97e69f1cc4661fc99b2053ca53f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
