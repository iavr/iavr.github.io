(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "researchgate": [448, 512, [], "f4f8", "M0 32v448h448V32H0zm262.2 334.4c-6.6 3-33.2 6-50-14.2-9.2-10.6-25.3-33.3-42.2-63.6-8.9 0-14.7 0-21.4-.6v46.4c0 23.5 6 21.2 25.8 23.9v8.1c-6.9-.3-23.1-.8-35.6-.8-13.1 0-26.1.6-33.6.8v-8.1c15.5-2.9 22-1.3 22-23.9V225c0-22.6-6.4-21-22-23.9V193c25.8 1 53.1-.6 70.9-.6 31.7 0 55.9 14.4 55.9 45.6 0 21.1-16.7 42.2-39.2 47.5 13.6 24.2 30 45.6 42.2 58.9 7.2 7.8 17.2 14.7 27.2 14.7v7.3zm22.9-135c-23.3 0-32.2-15.7-32.2-32.2V167c0-12.2 8.8-30.4 34-30.4s30.4 17.9 30.4 17.9l-10.7 7.2s-5.5-12.5-19.7-12.5c-7.9 0-19.7 7.3-19.7 19.7v26.8c0 13.4 6.6 23.3 17.9 23.3 14.1 0 21.5-10.9 21.5-26.8h-17.9v-10.7h30.4c0 20.5 4.7 49.9-34 49.9zm-116.5 44.7c-9.4 0-13.6-.3-20-.8v-69.7c6.4-.6 15-.6 22.5-.6 23.3 0 37.2 12.2 37.2 34.5 0 21.9-15 36.6-39.7 36.6z"],
    "researchgate2": [448, 512, [], "f4f8", "M262 82v7c-10 0 -20 7 -27 15c-12 13 -28 34 -42 58c22 5 39 27 39 48c0 31 -24 46 -56 46c-18 0 -45 -2 -71 -1v-8c16 -3 22 -1 22 -24v-109c0 -23 -6 -21 -22 -24v-8h34h35v8c-20 3 -25 1 -25 24v46c7 -1 12 -1 21 -1c17 -30 33 -52 42 -63c17 -20 43 -17 50 -14zM285 217c39 0 34 30 34 50h-30v-11h18c0 -16 -8 -27 -22 -27c-11 0 -18 10 -18 23v27c0 12 12 20 20 20c14 0 20 -13 20 -13l10 8s-5 17 -30 17s-34 -18 -34 -30v-32c0 -16 9 -32 32 -32zM169 172c-9 0 -14 1 -20 1v69c6 1 14 1 22 1c23 0 37 -13 37 -35s-14 -36 -39 -36z"],
    "academia": [448, 512, [], "f4f8", "M106,124.8c5,11.8,7,19.5,7,20.6,0,2.6-105,270-107,274-2.8,5-9.7,8-19.1,10l-4.5,1-0.2,9-0.2,9h50.7,51.1v-9-9h-3c-1,0-5-1-9-1-23.4-3-28.5-13-18.1-36,2.3-5,15.1-38,17.1-45l1-2h62l62-1,9,23c19,50,16,59-20,62h-7v9,9h80,80v-9l-1-9-4-1c-10-2-17-5-21-10-2-3-7-17-93-231l-32-82.1-44-0.1h-45l8,19m75,185c1,1-2,1-48,1s-49,0-49-1c1,0,5-11,9-23,10-24,25-64,33-86l6-14,24,61c14,33,25,62,25,62"],
    "dblp": [448, 512, [], "f4f8", "M31.6,3.53c-1-0.01-3.5,0.19-5.1,2.72-1.27,2.03-0.889,2.59-0.906,3.16-0.0176,0.565-0.0088,1.01,0.0312,1.44,0.08,0.865,0.248,1.74,0.438,2.81,0.379,2.14,0.942,4.9,1.69,8.16,1.49,6.51,3.61,15,5.88,23.5,1.61,6.03,3.21,11.5,4.78,16.9-0.739,0.398-1.77,0.865-2.47,1.25-2.84,1.57-5.3,3.04-7.25,4.38-0.977,0.666-1.83,1.29-2.62,2-0.799,0.709-1.63,1.24-2.44,3.22-0.805,1.98-0.598,2.84-0.562,3.91,0.0355,1.07,0.167,2.16,0.344,3.41,0.353,2.49,0.92,5.53,1.69,9,1.54,6.93,3.78,15.6,6.19,24.1,2.41,8.56,4.98,17,7.19,23.6,1.1,3.27,2.13,6.05,3.03,8.22,0.45,1.09,0.846,2.01,1.31,2.88,0.467,0.866,0.264,1.63,2.78,3.19,2.84,1.76,3.87,0.989,4.91,0.844s2-0.379,3.06-0.688c2.12-0.617,4.65-1.54,7.56-2.69,5.83-2.29,13.1-5.51,20.4-8.88,4.54-2.1,8.4-4.07,12.5-6.09,0.241,0.82,0.55,1.98,0.781,2.75,1.02,3.41,1.92,6.32,2.66,8.56,0.371,1.12,0.698,2.08,1,2.88,0.302,0.797,0.329,1.18,1.16,2.44,1,1.52,1.43,1.63,2.09,2.19,0.665,0.553,1.44,1.15,2.34,1.81,1.82,1.33,4.17,2.96,6.94,4.81,5.53,3.7,12.6,8.26,19.7,12.7,7.08,4.4,14.1,8.63,19.6,11.7,2.72,1.53,5.02,2.76,6.88,3.62,0.927,0.433,1.7,0.772,2.66,1.06,0.477,0.145,0.954,0.301,1.94,0.344,0.492,0.0215,1.15,0.0276,2.12-0.281,0.973-0.309,2.42-1.16,3.25-2.59,1.26-2.17,0.779-2.62,0.781-3.16,0.003-0.54-0.0161-0.919-0.0625-1.34-0.0929-0.849-0.236-1.76-0.438-2.84-0.403-2.17-1.04-4.99-1.81-8.31-1.55-6.65-3.73-15.3-6.06-23.9-1.51-5.61-2.98-10.6-4.47-15.7,0.787-0.418,1.92-0.948,2.66-1.34,2.76-1.49,5.1-2.8,6.88-3.88,0.889-0.536,1.64-0.993,2.31-1.47,0.336-0.238,0.657-0.484,1.03-0.812,0.374-0.329,0.828-0.461,1.59-2.03,0.921-1.89,0.623-2.35,0.625-2.88,0.002-0.528-0.017-0.937-0.0625-1.38-0.091-0.876-0.267-1.81-0.469-2.94-0.404-2.26-1-5.18-1.78-8.62-1.56-6.89-3.78-15.8-6.12-24.7-2.35-8.86-4.83-17.7-6.97-24.4-1.07-3.39-2.05-6.27-2.94-8.5-0.443-1.11-0.847-2.05-1.34-2.97-0.248-0.457-0.499-0.912-0.938-1.47-0.438-0.557-0.927-1.39-2.88-2.09-2.91-1.05-3.37-0.326-4.28-0.125-0.916,0.201-1.8,0.471-2.81,0.812-2.03,0.683-4.51,1.68-7.38,2.88-5.73,2.39-12.9,5.65-20.1,9.06-4.37,2.08-8.09,4.02-12.1,6.03-0.337-1.12-0.74-2.69-1.06-3.72-1.07-3.43-2.03-6.33-2.91-8.56-0.437-1.12-0.835-2.03-1.31-2.94-0.239-0.452-0.485-0.914-0.906-1.47-0.157-0.207-0.387-0.476-0.625-0.75-0.136-0.196-0.185-0.355-0.344-0.562-1.42-1.86-2.63-2.7-4.56-4.19s-4.35-3.21-7.12-5.12c-9.6-4.6-16.5-9.2-23.4-13.5s-13.6-8.4-18.9-11.3c-2.6-1.46-4.9-2.64-6.7-3.47-0.9-0.41-1.7-0.75-2.6-1.03-0.492-0.137-0.996-0.275-2-0.281zm7,15.2c4.85,2.74,10.9,6.36,17.3,10.3,6.75,4.24,13.6,8.71,18.9,12.4,1.22,0.843,1.99,1.44,3.03,2.19-0.488,0.194-0.798,0.291-1.31,0.5-5.77,2.34-13.1,5.57-20.4,9-2.72,1.28-4.9,2.51-7.53,3.81-1.38-4.82-2.72-9.4-4.12-14.7-2.24-8.4-4.34-16.8-5.78-23.1-0.0507-0.222-0.0759-0.315-0.125-0.531zm106,33c0.146-0.032,0.108,0.102-0.312,0.0938,0.0711-0.0183,0.267-0.0837,0.312-0.0938zm-59.4,1.1c0.69,1.95,1.42,4.14,2.28,6.91,0.471,1.52,1.03,3.71,1.53,5.41-1.43,0.789-3.01,1.65-4.09,2.31-0.911,0.555-1.7,1.04-2.41,1.56-0.711,0.523-1.28,0.459-2.5,2.69-0.398,0.729-0.567,1.26-0.656,1.69-0.0034,0.0164-0.0281,0.0464-0.0312,0.0625-0.953,1.51-0.459,2.09-0.469,2.56-0.0119,0.599,0.0149,0.983,0.0625,1.41,0.0952,0.846,0.262,1.75,0.469,2.81,0.414,2.13,1.04,4.88,1.84,8.19,0.583,2.41,1.55,5.87,2.28,8.72-0.3-0.4-0.6-0.5-0.9-0.7-6.9-4.6-13.9-9.4-19.3-13.3-2.8-2-5.1-3.7-6.8-5-1.57-1.22-2.67-2.36-2.25-1.81-0.0511-0.0901-0.074-0.132-0.125-0.25-0.219-0.508-0.518-1.31-0.875-2.31-0.52-1.46-1.22-3.7-1.91-5.88,3.14-1.57,5.8-3.03,9.12-4.59,7.13-3.36,14.3-6.55,19.8-8.78,2.03-0.823,3.49-1.33,4.94-1.84zm56.2,0.0312c0.653,1.73,1.38,3.82,2.25,6.59,2.05,6.5,4.53,15.2,6.84,23.9,2.32,8.75,4.48,17.6,6,24.2,0.758,3.35,1.37,6.17,1.72,8.12,0.003,0.0141-0.002,0.0173,0,0.0312-1.5,0.902-3.62,2.13-6.22,3.53-0.152,0.0823-0.407,0.198-0.562,0.281-0.726-2.3-1.46-4.64-2.06-6.31-0.416-1.15-0.8-2.13-1.19-3-0.387-0.874-0.459-1.47-1.69-2.84-1.55-1.74-2.41-2.1-4.25-3.41-1.84-1.3-4.24-2.9-7-4.72-5.52-3.63-12.5-8.12-19.5-12.4-3.66-2.26-6.69-3.99-10.1-6.03-0.009-0.0343-0.0222-0.0594-0.0312-0.0938-0.965-3.66-1.9-6.59-2.88-10.1,4.37-2.23,8.76-4.48,13.8-6.88,7.05-3.36,14.1-6.6,19.6-8.88,2.19-0.913,3.82-1.52,5.31-2.06zm-100,20.3c0.498,1.55,1.03,3.35,1.47,4.56,0.407,1.14,0.782,2.1,1.16,2.97,0.374,0.867,0.543,1.49,1.53,2.72,1.5,1.87,2.42,2.34,4.28,3.78s4.25,3.19,7.03,5.19c5.57,3.99,12.7,8.87,19.7,13.5,4.1,2.72,7.53,4.78,11.3,7.12,0.97,3.55,1.85,6.49,2.81,9.91-4.46,2.23-8.98,4.49-14.1,6.88-7.12,3.3-14.3,6.44-19.8,8.59-2.25,0.886-3.93,1.47-5.41,1.94-0.701-1.74-1.54-3.99-2.5-6.84-2.11-6.26-4.66-14.6-7.03-23-2.5-9-4.7-17.5-6.2-24.1-0.7-3.3-1.2-6.2-1.5-8.1-0.0795-0.561-0.0874-0.848-0.125-1.25,0.23-0.171,0.321-0.261,0.625-0.469,1.46-0.995,3.68-2.34,6.34-3.81,0.0849-0.047,0.227-0.109,0.312-0.156zm51.2,12.9c0.805,0.464,1.94,1.18,2.81,1.69,1.74,6.7,3.48,13.5,4.66,18.7,0.119,0.524,0.171,0.785,0.281,1.28-0.766-0.452-1.92-1.21-2.75-1.72-1.88-7.14-3.74-14.3-5-19.9zm16.8,10.1c0.171,0.106,0.297,0.175,0.469,0.281,6.9,4.27,13.9,8.7,19.3,12.2,2.7,1.77,5.01,3.35,6.69,4.53,1.5,1.06,2.41,1.89,2.12,1.53,0.0241,0.0443,0.0412,0.0456,0.0625,0.0937,0.213,0.482,0.513,1.28,0.875,2.28,0.684,1.89,1.55,4.6,2.5,7.69-3.09,1.58-5.7,2.98-8.97,4.59-7.16,3.53-14.4,6.92-19.8,9.31-2.02,0.88-3.45,1.42-4.88,1.97-0.636-1.78-1.36-3.8-2.22-6.53-0.463-1.48-1.06-3.76-1.56-5.44,1.47-0.79,3.12-1.63,4.22-2.28,0.91-0.536,1.68-1.01,2.38-1.5,0.698-0.488,1.19-0.264,2.53-2.53l0.0312-0.0625c0.923-1.59,0.773-2.28,0.812-2.88,0.0405-0.601,0.0306-1.08,0-1.56-0.0612-0.968-0.189-1.97-0.375-3.16-0.373-2.37-0.981-5.38-1.75-8.91-0.595-2.73-1.61-6.49-2.38-9.69zm35.2,39.6c1.28,4.48,2.52,8.57,3.81,13.4,2.31,8.58,4.46,17.1,5.97,23.6,0.0575,0.246,0.0694,0.354,0.125,0.594-5.1-2.88-11.5-6.75-18.2-10.9-6.99-4.34-14-8.84-19.4-12.4-0.348-0.233-0.51-0.368-0.844-0.594,0.385-0.166,0.63-0.231,1.03-0.406,5.76-2.51,13-5.98,20.3-9.56,2.61-1.29,4.67-2.41,7.19-3.69zm-95.8,5c0.0336-0.00095,0.179,0.0908,0.219,0.0937-0.137,0.0294-0.456,0.119-0.5,0.125-0.0642,0.009-0.0627-0.209,0.281-0.219zm3.38,1.81c0.245,0.273,0.162,0.341,0.0625,0.156-0.0134-0.0248-0.0472-0.127-0.0625-0.156zm104,39.3c0.0165,0.119,0.085,0.389,0.0937,0.469-0.0223-0.0807-0.122-0.172-0.0937-0.469z"],
    "file-pdf2": [384, 512, [], "f1c1", "M407 243c21 21 16 77 -35 77c-30 0 -74 -14 -112 -34c-43 7 -91 26 -136 41c-100 173 -159 94 -152 62c8 -40 62 -71 102 -92c21 -37 50 -101 70 -149c-15 -57 -23 -102 -14 -134c10 -35 78 -41 86 11c9 31 -3 80 -11 112c16 43 39 72 73 93c35 -4 105 -11 129 13zM11 399c0 1 23 -9 61 -70c-12 11 -51 43 -61 70zM174 17c-5 0 -5 54 4 82c10 -17 11 -82 -4 -82zM125 291c32 -12 68 -30 110 -39c-22 -17 -43 -41 -60 -71c-13 35 -31 76 -50 110zM388 281c7 -5 -4 -21 -74 -16c65 28 74 16 74 16z"],
  };

  bunker(function () {
    defineIcons('faa', icons);
    defineIcons('fa-custom', icons);
  });

}());
/*!
 * Font Awesome Pro 6.0.0-beta1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "facebook": [512, 512, [62000], "f09a", "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"],
    "github": [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"],
    "linkedin-in": [448, 512, [], "f0e1", "M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"],
    "skype": [448, 512, [], "f17e", "M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"],
    "twitter": [512, 512, [], "f099", "M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"],
  };

  bunker(function () {
    defineIcons('fab', icons);
    defineIcons('fa-brands', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
  };

  bunker(function () {
    defineIcons('fad', icons);
    defineIcons('fa-duotone', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "address-card": [576, 512, [62140, "contact-card", "vcard"], "f2bb", "M480 288h-128c-8.836 0-16 7.164-16 16S343.2 320 352 320h128c8.836 0 16-7.164 16-16S488.8 288 480 288zM192 256c35.35 0 64-28.65 64-64S227.3 128 192 128S128 156.7 128 192S156.7 256 192 256zM192 160c17.64 0 32 14.36 32 32S209.6 224 192 224S160 209.6 160 192S174.4 160 192 160zM224 288H160c-44.18 0-80 35.82-80 80C80 376.8 87.16 384 96 384s16-7.164 16-16C112 341.5 133.5 320 160 320h64c26.51 0 48 21.49 48 48c0 8.836 7.164 16 16 16s16-7.164 16-16C304 323.8 268.2 288 224 288zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM544 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32V416zM480 224h-128c-8.836 0-16 7.164-16 16S343.2 256 352 256h128c8.836 0 16-7.164 16-16S488.8 224 480 224zM480 160h-128c-8.836 0-16 7.164-16 16S343.2 192 352 192h128c8.836 0 16-7.164 16-16S488.8 160 480 160z"],
    "at": [512, 512, [129664, 61946], "40", "M259.7 16.03C116.5 13.94 2.766 140.5 17.25 283.1c11.96 117.8 102.2 205.2 221.5 212.8c9.275 .5957 17.18-6.739 17.18-16.04c0-8.395-6.552-15.39-14.92-15.92c-106.1-6.828-185.7-86.38-192.7-192.5c-7.852-119.6 82.95-220.8 202.6-223.4c118.1-2.607 212.1 89.77 212.1 208.2V278.7c0 26.43-17.55 50.57-43.34 56.27c-36.37 8.039-68.67-19.59-68.67-54.64v-120.1c0-8.846-7.168-16.02-16.01-16.02c-8.838 0-16.02 7.165-16.02 16.01v17.88c-24.95-25.56-61.83-39.39-101.6-31.85C173.5 154.7 137.8 190.7 129.8 235.6c-12.72 70.86 41.68 132.8 110.2 132.8c37.39 0 70.32-18.63 90.68-46.9c16.48 30.84 50.34 51.03 88.7 46.15c44.44-5.656 76.63-45.58 76.63-90.42V256.3C495.1 122.8 392.5 17.96 259.7 16.03zM239.9 336.3c-44.13 0-80.02-35.93-80.02-80.09S195.8 176.2 239.9 176.2s80.02 35.93 80.02 80.09S284.1 336.3 239.9 336.3z"],
    "atom": [512, 512, [62930], "269b", "M444.9 256c15.5-20.25 26.56-40.63 31.68-60c6-22.62 4-43.38-6-60.25c-18.25-30.5-60.38-42.88-113.5-38.38C333.9 37.75 297.6 0 256 0S178.1 37.75 155 97.38c-53.25-4.5-95.38 7.875-113.5 38.38C31.38 152.6 29.38 173.4 35.38 196C40.5 215.4 51.56 235.8 67.06 256C51.56 276.3 40.5 296.6 35.38 316c-6 22.62-4 43.38 6 60.25c15.88 26.5 49.63 39.5 93.13 39.5c6.375 0 13.5-1.25 20.25-1.75C177.1 473.9 214.3 512 256 512s77.1-38.13 101.3-97.1c6.75 .4997 13.88 1.75 20.25 1.75c43.5 0 77.25-13 93-39.5c10.12-16.88 12.12-37.63 6.125-60.25C471.5 296.6 460.4 276.3 444.9 256zM68.88 359.8c-5.5-9.25-6.375-21.25-2.625-35.5C69.1 310.5 77.88 295.9 88.63 281c13.5 13.88 28 26.62 43.25 38.38c2.625 21.62 6.875 43 12.62 64C106.8 385.3 79.13 376.9 68.88 359.8zM128.4 274.8C121.6 268.5 115.3 262.3 109.3 256c6-6.25 12.38-12.5 19.12-18.75C128.3 243.5 128 249.6 128 256S128.3 268.5 128.4 274.8zM131.9 192.5C116.6 204.3 102.1 217.1 88.63 231C77.88 216.1 69.1 201.4 66.25 187.8C62.5 173.5 63.38 161.5 68.88 152.3c9.25-15.5 32.75-24 65.25-24c3.25 0 6.875 .25 10.38 .375C138.8 149.6 134.5 171 131.9 192.5zM343.8 167c-8.375-5.25-16.88-10.5-25.88-15.5C311.5 147.9 305 144.6 298.6 141.4c12-3.625 24.25-6.5 36.5-8.875C337.1 142 341.9 157.4 343.8 167zM256 32c24.12 0 49.5 26 68.25 70C300.9 106.8 278.1 113.5 256 122.3C233.9 113.5 211.1 106.8 187.8 102C206.5 58 231.9 32 256 32zM176.9 132.5c12.25 2.375 24.5 5.25 36.5 8.875C207 144.6 200.5 148 194.1 151.5c-9 5-17.5 10.25-25.88 15.5C170.1 157.4 173.1 142 176.9 132.5zM168.3 345c8.375 5.25 16.88 10.5 25.88 15.5c6.75 3.75 13.38 6.5 20.12 9.875c-12.25 3.75-24.75 6.75-37.38 9.125C173.4 368.1 170.6 356.6 168.3 345zM256 480c-24.12 0-49.75-26.25-68.38-70.5C211 404.8 233.9 398 256 389.3c22.12 8.75 45 15.5 68.38 20.25C305.8 453.8 280.1 480 256 480zM335.1 379.5c-12.62-2.375-25-5.375-37.25-9.125c6.625-3.375 13.38-6.125 20-9.875c9-5 17.5-10.25 25.88-15.5C341.4 357.1 338.4 368.6 335.1 379.5zM349.9 302c-15.25 11.12-31.12 21.37-47.5 30.5c-15.12 8.375-30.5 16-46.38 22.62c-15.88-6.625-31.25-14.25-46.38-22.62c-16.38-9.125-32.25-19.38-47.5-30.38C160.8 287.4 160 272 160 256s.7443-31.38 2.119-45.1c15.25-11.13 31.12-21.38 47.5-30.5C224.8 171 240.1 163.5 256 156.8C271.9 163.5 287.3 171 302.4 179.5c16.38 9.125 32.25 19.38 47.5 30.38C351.3 224.6 351.1 240 351.1 256S351.3 287.4 349.9 302zM377.1 128.3c32.38 0 55.88 8.5 65.13 24c5.5 9.25 6.375 21.25 2.625 35.5c-3.75 13.62-11.62 28.38-22.38 43.25c-13.5-13.88-28-26.75-43.25-38.38c-2.625-21.62-6.875-43-12.62-63.88C371 128.5 374.6 128.3 377.1 128.3zM383.6 237.3C390.4 243.5 396.8 249.8 402.8 256c-6 6.25-12.38 12.5-19.12 18.75C383.8 268.5 384 262.4 384 256S383.8 243.5 383.6 237.3zM443.1 359.8c-10.25 17.12-37.88 25.5-75.63 23.62c5.75-21 10-42.38 12.62-64c15.25-11.62 29.75-24.5 43.25-38.38c10.75 14.88 18.62 29.5 22.38 43.25C449.5 338.5 448.6 350.5 443.1 359.8zM256 232C242.8 232 232 242.8 232 256S242.8 280 256 280S280 269.3 280 256S269.3 232 256 232z"],
    "bank": [512, 512, ["institution", "university"], "f19c", "M496 480h-480C7.164 480 0 487.2 0 496C0 504.8 7.164 512 16 512h480c8.836 0 16-7.164 16-16C512 487.2 504.8 480 496 480zM472 448c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16H40c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16H472zM497.2 97.81l-232-96C262.2 .5938 259.1-.0039 256-.0039S249.8 .5938 246.8 1.812l-232 96C5.844 101.5 0 110.3 0 120v48C0 181.3 10.75 192 24 192H64v160c-8.836 0-16 7.162-16 16C48 376.8 55.16 384 64 384h384c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16V192h40C501.3 192 512 181.3 512 168v-48C512 110.3 506.2 101.5 497.2 97.81zM176 352H96V192h80V352zM304 352h-96V192h96V352zM232 136C232 122.8 242.8 112 256 112s24 10.78 24 24S269.2 160 256 160S232 149.2 232 136zM416 352h-80V192H416V352zM480 160h-173.6C309.9 152.7 312 144.6 312 136c0-30.88-25.12-56-56-56S200 105.1 200 136c0 8.621 2.121 16.7 5.617 24H32V125.3l224-92.69l224 92.69V160z"],
    "binary-lock": [640, 512, [], "e33d", "M591.1 320L592 256c0-35.28-28.72-63.1-64-63.1S464 220.7 464 256l-.001 64c-26.51 0-48 21.49-48 47.1V464c0 26.51 21.49 48 48 48h128c26.51 0 48-21.49 48-48v-96C639.1 341.5 618.5 320 591.1 320zM496 256c0-17.66 14.34-32 31.1-32S560 238.3 560 256v64h-64V256zM608 464c0 8.822-7.178 16-16 16h-128c-8.822 0-16-7.178-16-16v-96c0-8.822 7.178-16 16-16h128c8.822 0 16 7.178 16 16V464zM144 480H96V304c0-5.141-2.469-9.969-6.656-12.98c-4.156-3-9.609-3.985-14.48-2.313L26.94 304.8c-8.375 2.781-12.91 11.84-10.12 20.23c2.812 8.391 11.91 12.92 20.25 10.11L64 326.2V480H16C7.156 480 0 487.2 0 496S7.156 512 16 512h128C152.8 512 160 504.8 160 496S152.8 480 144 480zM368 192H320V16.01c0-5.141-2.469-9.969-6.656-12.98c-4.188-3-9.578-3.986-14.48-2.314L250.9 16.84C242.6 19.62 238 28.69 240.8 37.08c2.812 8.391 11.88 12.91 20.25 10.11L288 38.22v153.8H240c-8.844 0-16 7.156-16 16s7.156 16 16 16h128c8.844 0 16-7.156 16-16S376.8 192 368 192zM304 288h-32c-44.13 0-80 35.89-80 80v63.1C192 476.1 227.9 512 272 512h32c44.13 0 80-35.89 80-79.1v-63.1C384 323.9 348.1 288 304 288zM352 432C352 458.5 330.5 480 304 480h-32C245.5 480 224 458.5 224 432v-63.1c0-26.47 21.53-47.1 48-47.1h32c26.47 0 48 21.53 48 47.1V432zM192 80.01c0-44.11-35.88-80-80-80h-32c-44.13 0-80 35.9-80 80v63.1c0 44.11 35.88 79.99 80 79.99h32c44.13 0 80-35.88 80-79.99V80.01zM160 144c0 26.47-21.53 47.1-48 47.1h-32c-26.47 0-48-21.53-48-47.1v-63.1c0-26.47 21.53-47.1 48-47.1h32c26.47 0 48 21.53 48 47.1V144z"],
    "book-open-reader": [512, 512, ["book-reader"], "f5da", "M459.9 192c-.625 0-1.375 0-2 .125C408 194.9 317.4 205.1 256 239.6c-61.38-34.5-152-44.75-201.9-47.5C53.5 192 52.75 192 52.12 192C31.75 192 0 206.4 0 242.2v177.1C0 447 21.25 469 48.38 470.4c34.38 1.875 120.5 9.125 177 37.5C229.1 510.2 235 511.5 240 511.9l32 .0208c5-.375 9.1-1.688 14.62-4.062c56.5-28.38 142.6-35.63 177-37.5C490.8 469 512 447 512 420.2V242.2C512 206.4 480.3 192 459.9 192zM239.9 479.3C239.8 479.2 240 479.4 239.9 479.3c-59.63-30-144.6-38.44-189.9-40.81C39.88 437.9 32 429.9 32 420.2V242.2c0-6.125 1.75-10 5.875-13.25C42.38 225.6 48.38 224 52.38 224C89.38 226.1 181.6 234.6 240 267.4L239.9 479.3zM480 420.2c0 9.625-7.875 17.63-18 18.25c-45.25 2.375-130.2 10.81-189.9 40.81c-.125 .125 .125 0 0 0L272 267.4C330.4 234.6 422.6 226.1 459.5 224h.375C460.1 224 480 224.5 480 242.2V420.2zM256 192c53 0 96-43 96-96s-43-96-96-96S160 43 160 96S203 192 256 192zM256 32c35.25 0 64 28.75 64 64s-28.75 64-64 64S192 131.2 192 96S220.8 32 256 32z"],
    "books": [512, 512, [62939], "1f4da", "M510.4 435.4l-107.7-399.9C396.9 14.07 377.5 0 356.4 0c-4.111 0-8.296 .5313-12.46 1.641l-61.82 16.48c-1.281 .3438-2.375 .9922-3.592 1.445C269.7 7.758 255.8 0 240 0h-64c-12.35 0-23.49 4.797-32 12.46C135.5 4.797 124.3 0 112 0h-64C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h64c12.35 0 23.49-4.797 32-12.46C152.5 507.2 163.7 512 176 512h64c26.51 0 48-21.49 48-48V224.7l67.8 251.9C361.6 497.9 380.9 512 402.1 512c4.111 0 8.293-.5313 12.46-1.641l61.82-16.48C502 487 517.2 460.8 510.4 435.4zM32 48C32 39.18 39.18 32 48 32h64C120.8 32 128 39.18 128 48l.0011 48L32 96V48zM32 128l96 .0014v255.1L32 384V128zM112 480h-64C39.18 480 32 472.8 32 464V416l96 0L128 464C128 472.8 120.8 480 112 480zM256 464c0 8.824-7.178 16-16 16h-64C167.2 480 160 472.8 160 464l.0011-47.1L256 416V464zM256 384l-95.1 .0002V128L256 128V384zM256 96L160 96L160 48C160 39.18 167.2 32 176 32h64C248.8 32 256 39.18 256 48V96zM288 101.6V50.29c.834-.3906 1.322-.9727 2.322-1.242l61.82-16.48C353.5 32.19 354.1 32 356.4 32c7.225 0 13.57 4.828 15.43 11.74l12.4 46.07l-92.71 24.73L288 101.6zM366 391.4l-66.26-246.1l92.71-24.73l66.26 246.1L366 391.4zM477.9 455.5c-1.23 2.133-4.133 5.934-9.729 7.43l-61.82 16.48C404.1 479.8 403.5 480 402.1 480c-7.227 0-13.57-4.828-15.43-11.74l-12.4-46.07l92.71-24.73l12.44 46.22C480.9 449.1 479.1 453.4 477.9 455.5z"],
    "briefcase": [512, 512, [61617], "1f4bc", "M448 96h-64V48C384 21.53 362.5 0 336 0h-160C149.5 0 128 21.53 128 48V96H64C28.65 96 0 124.7 0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM160 48C160 39.17 167.2 32 176 32h160C344.8 32 352 39.17 352 48V96H160V48zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V288h144v64c0 8.844 7.156 16 16 16h128c8.844 0 16-7.156 16-16V288H480V416zM208 336V288h96v48H208zM480 256H32V160c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32V256z"],
    "browser": [512, 512, [62334], "1f5d4", "M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96C512 60.65 483.3 32 448 32zM32 96c0-17.6 14.4-32 32-32h64v64H32V96zM480 416c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V160h448V416zM480 128H160V64h288c17.6 0 32 14.4 32 32V128z"],
    "building": [384, 512, [61869, 61687], "1f3e2", "M176 296v-48C176 234.7 165.3 224 152 224h-48C90.75 224 80 234.7 80 248v48C80 309.3 90.75 320 104 320h48C165.3 320 176 309.3 176 296zM144 288h-32V256h32V288zM104 192h48C165.3 192 176 181.3 176 168v-48C176 106.7 165.3 96 152 96h-48C90.75 96 80 106.7 80 120v48C80 181.3 90.75 192 104 192zM112 128h32v32h-32V128zM192 384c-35.28 .0508-64 28.47-64 63.85v48.09c0 8.824 7.199 16.05 16 16.05S160 504.8 160 495.1v-48.09c0-17.6 14.45-31.26 32-31.3c17.55 .043 32 13.7 32 31.3v48.09c0 8.824 7.199 16.05 16 16.05s16-7.23 16-16.05v-48.09C256 412.5 227.3 384.1 192 384zM280 96h-48c-13.25 0-24 10.74-24 24v48C208 181.3 218.7 192 232 192h48c13.25 0 24-10.75 24-24v-48C304 106.7 293.3 96 280 96zM272 160h-32v-32h32V160zM320 0H64C28.65 0 0 28.65 0 64v432C0 504.8 7.164 512 16 512S32 504.8 32 496V64c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v432c0 8.836 7.164 16 16 16s16-7.164 16-16V64C384 28.65 355.3 0 320 0zM280 224h-48c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24v-48C304 234.7 293.3 224 280 224zM272 288h-32V256h32V288z"],
    "chalkboard-user": [640, 512, ["chalkboard-teacher"], "f51c", "M160 320c53.02 0 96-42.98 96-96c0-53.02-42.98-96-96-96C106.1 128 64 170.1 64 224C64 277 106.1 320 160 320zM160 160c35.29 0 64 28.71 64 64S195.3 288 160 288S96 259.3 96 224S124.7 160 160 160zM192 352H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32C320 409.3 262.7 352 192 352zM32 480c0-52.94 43.07-96 96-96h64c52.94 0 96 43.06 96 96H32zM592 0h-384C181.5 0 160 21.53 160 48v32C160 88.84 167.2 96 176 96S192 88.84 192 80v-32C192 39.19 199.2 32 208 32h384C600.8 32 608 39.19 608 48v320c0 8.812-7.172 16-16 16H576v-48C576 309.5 554.5 288 528 288h-96C405.5 288 384 309.5 384 336V384h-32c-8.844 0-16 7.156-16 16S343.2 416 352 416h240C618.5 416 640 394.5 640 368v-320C640 21.53 618.5 0 592 0zM544 384h-128v-48c0-8.812 7.172-16 16-16h96c8.828 0 16 7.188 16 16V384z"],
    "chart-network": [640, 512, [], "f78a", "M64 240c-28.28 0-64 21.84-64 64c0 35.25 28.75 64 64 64s64-28.75 64-64C128 262.1 92.68 240 64 240zM64 336c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S81.63 336 64 336zM184 288H167.1C159.2 288 152 295.2 152 303.1S159.2 320 167.1 320h16.05C192.8 320 200 312.8 200 304S192.8 288 184 288zM576 192c28.28 0 64-21.84 64-64c0-42.01-35.62-64-64-64c-28.28 0-64 21.84-64 64C512 163.3 540.8 192 576 192zM576 96c17.62 0 32 14.38 32 32s-14.38 32-32 32s-32-14.38-32-32S558.4 96 576 96zM576 384c-13.25 0-25.62 4-35.75 10.88c-3.375 2.25-6.375 4.75-9.125 7.5l-91.88-55.13C444.9 334 448 319.3 448 304C448 242.1 397.9 192 336 192c-11.25 0-21.88 2.25-32.25 5.25L264.5 113.1C278.8 101.4 288 83.88 288 64c0-41.93-35.32-64-64-64C182.1 0 160 35.31 160 64c0 35.25 28.75 64 64 64c4 0 7.875-.5 11.75-1.25l39 83.63C244.3 230.4 224 264.8 224 304c0 61.88 50.13 112 112 112c35 0 65.75-16.38 86.38-41.5l92.38 55.38C513.1 435.8 512 441.8 512 448c0 35.25 28.62 64 64 64C618.2 512 640 476.4 640 448C640 420.5 618.4 384 576 384zM224 96C206.4 96 192 81.63 192 64s14.38-32 32-32s32 14.38 32 32S241.6 96 224 96zM336 384C291.9 384 256 348.1 256 304S291.9 224 336 224S416 259.9 416 304S380.1 384 336 384zM576 480c-17.62 0-32-14.38-32-32s14.38-32 32-32s32 14.38 32 32S593.6 480 576 480zM478.4 229.2l22.44-16.83c7.074-5.307 8.492-15.35 3.166-22.41c-5.305-7.025-15.29-8.436-22.34-3.154l-22.44 16.83c-7.074 5.305-8.492 15.35-3.166 22.4C461.3 233.1 471.3 234.5 478.4 229.2z"],
    "coins": [512, 512, [], "f51e", "M192 160C85.96 160 0 195.8 0 240v192C0 476.2 85.96 512 192 512s192-35.82 192-80v-192C384 195.8 298 160 192 160zM352 432c0 12.34-55.01 48-160 48s-160-35.66-160-48v-51.81C66.39 401.8 125.2 416 192 416s125.6-14.24 160-35.81V432zM352 336c0 12.34-55.01 48-160 48s-160-35.66-160-48V284.2C66.39 305.8 125.2 320 192 320s125.6-14.24 160-35.81V336zM192 288C87.01 288 32 252.3 32 240S87.01 192 192 192s160 35.66 160 48S296.1 288 192 288zM320 0C224 0 128 26.36 128 79.09v32.13c0 8.881 7.156 16.07 16 16.07S160 120.1 160 111.2V79.09c0-19.19 63.81-48.19 160-48.19s160 29.01 160 48.19c0 14.31-39.5 38.22-113.6 45.86c-8.252 .8523-14.37 7.826-14.37 15.96c0 13.83 13.2 16.09 15.96 16.09c5.268 0 71.08-6.493 112-31.8v34.22c0 8.816-16.47 23.28-52.59 34.18c-6.927 2.091-11.41 8.465-11.41 15.37c0 1.537 .2221 3.1 .6887 4.648C418.8 220.6 425.1 225.1 432 225.1c5.233 0 30.28-8.46 48-19.48v34.16c0 8.816-16.47 23.28-52.59 34.18c-6.927 2.091-11.41 8.465-11.41 15.37c0 1.537 .2221 3.1 .6887 4.648C418.8 300.9 425.1 305.4 432 305.4c1.882 0 80-18.58 80-65.64V79.09C512 26.36 416 0 320 0z"],
    "database": [448, 512, [], "f1c0", "M224 0c-123.7 0-224 35.82-224 80v352c0 44.18 100.3 80 224 80s224-35.82 224-80v-352C448 35.82 347.7 0 224 0zM224 32c123 0 188.1 35.2 192 48l.0156 80.08C364.9 180.2 296.8 192 224 192C151.2 192 83.1 180.2 31.95 160.1L31.94 80.57C35.91 67.2 100.1 32 224 32zM416 193.5l.0234 126.6C364.9 340.2 296.8 352 224 352c-72.81 0-140.9-11.84-192-31.93L31.96 193.4C85.68 212.5 152.7 224 223.1 224C295.3 224 362.3 212.5 416 193.5zM224 480c-123 0-188.1-35.2-192-48l-.0137-78.55C85.7 372.5 152.7 384 223.1 384c71.31 0 138.3-11.48 192.1-30.56l.0137 77.98C412.1 444.8 347 480 224 480z"],
    "diploma": [640, 512, ["scroll-ribbon"], "f5ea", "M539.3 144h-62.42C483.9 132.2 488 118.3 488 104c0-39.7-28.42-72-63.36-72C394.1 32 373.2 41.84 320 128.9C266.8 41.84 245.9 32 215.4 32C180.4 32 152 64.3 152 104c0 14.34 4.072 28.19 11.16 40H96c-53.02 0-96 48.47-96 128S42.98 416 96 416l144-30.86V464c0 5.531 2.875 10.69 7.594 13.62c4.688 2.844 10.59 3.156 15.56 .6875L320 449.9l56.84 28.44C379.1 479.4 381.6 480 384 480c2.938 0 5.844-.8125 8.406-2.375C397.1 474.7 400 469.5 400 464v-78.48L539.3 416C594.9 416 640 351.5 640 272C640 192.5 594.9 144 539.3 144zM240 352.4l-146.8 31.46C63.7 381.2 32 335.1 32 272c0-56.52 26.32-96 64-96h144V352.4zM215.4 144C198.1 144 184 126.1 184 104S198.1 64 215.4 64c14.05 0 27.44 .1953 76.38 80H215.4zM368 438.1l-40.84-20.44c-4.5-2.25-9.812-2.25-14.31 0L272 438.1V176h96V438.1zM348.3 144c48.95-79.8 62.34-80 76.38-80C441.9 64 456 81.95 456 104S441.9 144 424.6 144H348.3zM542.2 383.9L400 352.8V176h139.3C580.4 176 608 214.6 608 272C608 331.1 578.2 381.3 542.2 383.9z"],
    "download": [512, 512, [], "f019", "M245.4 379.1C248.4 382.7 252.2 384 256 384s7.594-1.344 10.62-4.047l144-128c6.594-5.859 7.219-15.98 1.344-22.58c-5.875-6.625-16.06-7.234-22.59-1.328L272 332.4V16C272 7.156 264.8 0 256 0S240 7.156 240 16v316.4L122.6 228C116.1 222.1 105.9 222.8 100 229.4C94.16 235.1 94.78 246.1 101.4 251.1L245.4 379.1zM448 320h-48c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16H448c17.67 0 32 14.33 32 32v64c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32v-64c0-17.67 14.33-32 32-32h48C120.8 352 128 344.8 128 336C128 327.2 120.8 320 112 320H64c-35.35 0-64 28.65-64 64v64c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-64C512 348.7 483.3 320 448 320zM440 416c0-13.25-10.75-24-24-24s-24 10.75-24 24s10.75 24 24 24S440 429.3 440 416z"],
    "gears": [640, 512, ["cogs"], "f085", "M160 120c-30.88 0-56 25.12-56 56S129.1 232 160 232S216 206.9 216 176S190.9 120 160 120zM160 200c-13.23 0-24-10.78-24-24S146.8 152 160 152S184 162.8 184 176S173.2 200 160 200zM627.8 318.3c-2.422-11.69-12.95-20.11-25.03-20.11H582.9c-3.531-7.812-7.828-15.23-12.84-22.23l9.969-17.27c2.234-3.906 3.461-8.401 3.461-12.87c0-7.25-3.078-14.15-8.469-18.97C558 211.7 538.4 200.4 516.8 193.3c-11.34-3.688-23.98 1.102-30.07 11.57l-9.641 16.69c-8.781-.9375-17.22-.9766-26.28-.0078L441.2 204.9c-6.062-10.47-18.66-15.4-30.04-11.59c-21.59 7.125-41.1 18.36-58.21 33.52c-5.344 4.781-8.508 11.74-8.508 18.99c0 4.469 1.18 8.901 3.445 12.87l9.812 16.98c-5.109 7.094-9.461 14.62-13.04 22.52h-19.5c-12.08 0-22.62 8.477-25.02 20.13c-2.375 11.31-3.57 22.66-3.57 33.72s1.203 22.46 3.562 33.74c2.422 11.69 12.95 20.1 25.03 20.1h19.5c3.578 7.906 7.93 15.43 13.04 22.52l-9.797 16.98c-2.234 3.906-3.461 8.396-3.461 12.87c0 7.312 3.117 14.26 8.461 18.95c17.05 15.12 36.65 26.4 58.23 33.55c11.41 3.719 23.99-1.086 30.05-11.55l9.641-16.7c9.047 .9687 17.36 .9766 26.28-.0234l9.656 16.73C491.5 507.3 500.1 512 508.1 512c2.609 0 5.266-.3965 7.844-1.271c21.61-7.156 41.28-18.48 58.25-33.55c5.422-4.75 8.469-11.65 8.469-18.96c0-4.469-1.195-8.896-3.461-12.87l-9.969-17.27c5.016-7 9.312-14.43 12.84-22.24h19.87c12.08 0 22.62-8.468 25.02-20.12C630.2 374.4 631.4 363.1 631.4 352S630.2 329.5 627.8 318.3zM597.5 373.8h-36.73l-3.75 10.72c-4.062 11.62-10.23 22.31-18.33 31.72l-7.391 8.625l18.39 31.84c-11.39 9.312-24.08 16.62-37.88 21.81l-18.11-31.41l-11.17 2.125c-12.03 2.312-25.05 2.312-37.14 .0313l-11.16-2.125l-18.08 31.38c-13.77-5.156-26.45-12.47-37.88-21.81l18.27-31.62l-7.438-8.625c-8.188-9.469-14.42-20.22-18.52-31.94l-3.75-10.72h-36.38C329.2 366.5 328.6 359.2 328.6 352c0-7.125 .625-14.47 1.891-21.84h36.38l3.75-10.72c4.094-11.72 10.33-22.47 18.52-31.94l7.438-8.625l-18.28-31.62c11.41-9.312 24.11-16.62 37.89-21.81l18.08 31.38l11.16-2.125c12.06-2.281 25.05-2.344 37.08 .0313l11.22 2.188l18.12-31.47c13.78 5.188 26.5 12.5 37.89 21.81l-18.41 31.84l7.391 8.625c8.094 9.406 14.27 20.09 18.33 31.72l3.75 10.72h36.73c1.25 7.375 1.891 14.69 1.891 21.84C599.4 359.1 598.8 366.5 597.5 373.8zM307.1 198.8L290.5 189.2c.5-4.469 .7344-8.781 .7344-12.97c0-4.375-.25-8.781-.75-13.31l16.72-9.656C317.6 147.1 322.5 134.5 318.7 123.2C311.5 101.5 300.3 81.94 285.1 64.88C277.4 56.16 263.4 54.06 253.4 59.94L236.1 69.91c-7-5.031-14.42-9.312-22.23-12.84V37.19c0-12-8.422-22.53-20.12-25.03c-22.5-4.75-44.86-4.75-67.52 0c-11.62 2.5-20.06 13.03-20.06 25.03v19.88C98.34 60.59 90.91 64.88 83.92 69.91L66.7 59.97c-10.19-5.938-24.17-3.75-31.89 4.969c-15.06 17-26.36 36.59-33.53 58.22C-2.5 134.5 2.359 147.1 12.86 153.2l16.69 9.656c-.5 4.531-.75 8.938-.75 13.31c0 4.188 .2344 8.5 .7344 12.97L12.91 198.8C2.359 204.8-2.531 217.4 1.266 228.8c7.203 21.66 18.48 41.25 33.47 58.13c7.688 8.844 21.83 10.94 31.91 5.156l16.98-9.812c7.047 5.094 14.58 9.438 22.52 13.03v19.5c0 12 8.438 22.53 20.14 25.03C137.5 342.2 148.9 343.4 160 343.4s22.47-1.188 33.8-3.562c11.62-2.5 20.05-13.03 20.05-25.03v-19.5c7.938-3.594 15.47-7.938 22.52-13.03l16.94 9.75C263.5 297.1 277.5 295.8 285.2 287.1c15.08-17 26.36-36.59 33.55-58.22C322.5 217.5 317.7 204.8 307.1 198.8zM257.3 157.5c1.156 6.062 1.906 12.31 1.906 18.72c0 6.312-.7656 12.44-1.891 18.44L255.2 205.8l31.33 18.09c-5.188 13.78-12.5 26.47-21.81 37.84L233.1 243.5L224.5 250.9c-9.422 8.125-20.17 14.38-31.95 18.5L181.8 273.2v36.38c-14.67 2.5-29.09 2.5-43.7 0V273.2L127.4 269.4C115.6 265.3 104.9 259 95.5 250.9L86.91 243.4L55.25 261.7c-9.297-11.34-16.61-24.03-21.81-37.84l31.33-18.09L62.69 194.6c-1.125-6-1.891-12.12-1.891-18.44c0-6.406 .75-12.66 1.906-18.72l2.125-11.16l-31.39-18.16c5.188-13.78 12.5-26.47 21.8-37.88l31.86 18.41l8.609-7.375c9.438-8.125 20.11-14.28 31.72-18.34l10.72-3.75V42.47c14.7-2.5 29.09-2.5 43.7 0v36.78l10.73 3.719c11.59 4.062 22.28 10.22 31.72 18.34l8.609 7.375l31.86-18.41c9.297 11.41 16.59 24.09 21.8 37.88l-31.39 18.16L257.3 157.5zM464 296c-30.88 0-56 25.12-56 56s25.12 56 56 56s56-25.12 56-56S494.9 296 464 296zM464 376c-13.23 0-24-10.78-24-24s10.77-24 24-24s24 10.78 24 24S477.2 376 464 376z"],
    "heart": [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 10084, 61444, 61578], "2665", "M462.3 62.71c-54.5-46.5-136.1-38.99-186.6 13.27l-19.69 20.61l-19.71-20.61C195.6 33.85 113.3 8.71 49.76 62.71C-13.11 116.2-16.31 212.5 39.81 270.5l193.2 199.7C239.3 476.7 247.8 480 255.9 480c8.25 0 16.33-3.25 22.58-9.751l193.6-199.8C528.5 212.5 525.1 116.2 462.3 62.71zM449.3 248.2l-192.9 199.9L62.76 248.2C24.39 208.7 16.39 133.2 70.51 87.09C125.3 40.21 189.8 74.22 213.3 98.59l42.75 44.13l42.75-44.13c23.13-24 88.13-58 142.8-11.5C495.5 133.1 487.6 208.6 449.3 248.2z"],
    "house": [576, 512, [61461, "home"], "1f3e0", "M570.6 244l-271.1-240C295.6 1.344 291.8 .0029 288 .0029S280.4 1.344 277.4 4l-272 240C1.83 247.2 .0002 251.6 .0002 256c0 8.924 7.242 15.99 16.05 15.99c3.758 0 7.52-1.312 10.53-3.992L64 234.1l.0059 197c0 44.13 35.89 79.1 80 79.1h287.1c44.11 0 80-35.87 80-79.1l.001-197L549.4 268C552.5 270.7 556.2 272 559.1 272c8.727 0 16-7.063 16-15.1C575.1 251.6 574.2 247.2 570.6 244zM336.4 480h-96v-160h96V480zM479.1 208v224c0 26.47-21.53 48-48 48h-63.58V314.6C368.4 300 356.4 288 341.7 288H235C220.4 288 208.4 300 208.4 314.6V480H144C117.5 480 96 458.5 96 432v-224c0-.377-.1895-.6914-.2148-1.062L288 37.34l192.2 169.6C480.2 207.3 479.1 207.6 479.1 208z"],
    "location-dot": [384, 512, ["map-marker-alt"], "f3c5", "M192 0C85.97 0 0 85.97 0 192c0 77.41 26.97 99.03 172.3 309.7C177 508.6 184.5 512 192 512s14.95-3.441 19.72-10.32C357 291 384 269.4 384 192C384 85.97 298 0 192 0zM192 473.9C51.93 271.4 32 255.1 32 192c0-88.22 71.78-160 160-160s160 71.78 160 160C352 255.9 332.6 270.7 192 473.9zM192 111.1c-44.18 0-80 35.82-80 80S147.8 271.1 192 271.1c44.18 0 80-35.82 80-80S236.2 111.1 192 111.1zM192 239.1c-26.47 0-48-21.53-48-48S165.5 143.1 192 143.1s48 21.53 48 48S218.5 239.1 192 239.1z"],
    "newspaper": [512, 512, [61930], "1f4f0", "M464 32h-320C117.5 32 96 53.53 96 80V416c0 17.66-14.36 32-32 32s-32-14.34-32-32V112C32 103.2 24.84 96 16 96S0 103.2 0 112V416c0 35.28 28.7 64 64 64h368c44.11 0 80-35.88 80-80v-320C512 53.53 490.5 32 464 32zM480 400c0 26.47-21.53 48-48 48H119.4C124.9 438.6 128 427.7 128 416V80C128 71.19 135.2 64 144 64h320C472.8 64 480 71.19 480 80V400zM272 304h-96C167.2 304 160 311.2 160 320s7.156 16 16 16h96c8.844 0 16-7.156 16-16S280.8 304 272 304zM432 304h-96C327.2 304 320 311.2 320 320s7.156 16 16 16h96c8.844 0 16-7.156 16-16S440.8 304 432 304zM272 368h-96C167.2 368 160 375.2 160 384s7.156 16 16 16h96c8.844 0 16-7.156 16-16S280.8 368 272 368zM432 368h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c8.844 0 16-7.156 16-16S440.8 368 432 368zM416 96H192C174.3 96 160 110.3 160 128v96c0 17.67 14.33 32 32 32h224c17.67 0 32-14.33 32-32V128C448 110.3 433.7 96 416 96zM416 224H192V128h224V224z"],
    "pen-nib": [512, 512, [62893], "2711", "M496 73.72l-58.23-58.3C427.5 5.12 413.3 0 399.2 0c-14.15 0-28.26 5.118-38.42 15.29L283.8 88.51L138 134.4C115.8 140.7 98.11 157.6 90.63 179.1L.2983 501.8c-.7812 2.801 0 5.786 2.047 7.837C3.861 511.2 5.908 512 8.001 512c.7187 0 1.453-.0939 2.172-.297l321.8-90.55c22.02-7.383 38.92-25.14 45.16-47.24l45.86-146l72.1-76.9C506.3 140.7 512 126.1 512 112.4C512 97.75 506.3 84.03 496 73.72zM346.4 365.2c-3.385 12.01-12.56 21.57-23.02 25.12l-249.2 70.11l101.5-101.5C185.2 364.6 196.2 368 208 368c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64c0 11.83 3.447 22.79 9.066 32.31l-101.6 101.6l69.51-247.8C125.1 177.9 134.7 168.6 147.7 164.9l141.9-44.67l101.7 101.7L346.4 365.2zM176 304c0-17.64 14.36-32 32-32s32 14.36 32 32s-14.36 32-32 32S176 321.6 176 304zM472.8 128.1L409.9 195.3l-93.55-93.55l67.05-63.81C387.1 34.15 392.9 32 399.2 32c6.326 0 12.15 2.201 15.99 6.041l58.23 58.3C477.7 100.7 480 106.2 480 112.4C480 118.5 477.7 124.1 472.8 128.1z"],
    "person-snowboarding": [512, 512, [63438, "snowboarding"], "1f3c2", "M507.3 228.7L485.4 206.8c-39.5-39.5-83.81-74.1-131.7-102.8c-7.859-4.735-16.44-8.063-25.48-9.86l-35.14-7.031c-15.95-3.188-29.09-14.13-35.14-29.24l-19.13-47.81c-3.281-8.219-12.64-12.22-20.8-8.922C209.9 4.437 205.9 13.75 209.1 21.95l19.13 47.81c10.08 25.2 31.98 43.42 58.59 48.74l11.64 2.328L241.5 159.9c-20.98 14.98-33.5 39.33-33.5 65.1v51.53L122.9 304.9c-8.375 2.781-12.91 11.84-10.11 20.24c2.234 6.703 8.469 10.94 15.17 10.94c1.672 0 3.375-.2657 5.063-.8282l96-32c6.531-2.172 10.94-8.282 10.94-15.17V224.1c0-15.47 7.516-30.06 19.84-38.88l77.19-52.86c.4766-.3262 .7266-.8242 1.156-1.189c16.04 9.662 31.5 20.23 46.64 31.23L279.8 226.3c-4.563 2.734-7.469 7.578-7.75 12.89c-.2656 5.328 2.125 10.44 6.391 13.63l55.19 41.39l-28.98 101.4c-2.422 8.485 2.5 17.34 11 19.78c1.469 .4062 2.938 .6094 4.406 .6094c6.953 0 13.36-4.578 15.38-11.61l32-112c1.812-6.375-.4844-13.22-5.797-17.19l-44.95-33.72l95.52-57.32c17.6 14.27 34.63 29.25 50.65 45.28l21.88 21.88c3.125 3.125 7.219 4.688 11.31 4.688c4.094 0 8.188-1.563 11.31-4.688C513.6 245.1 513.6 234.1 507.3 228.7zM422.8 113.2c30.88 0 56-25.13 56-56s-25.13-56-56-56c-30.88 0-56 25.13-56 56S391.9 113.2 422.8 113.2zM422.8 33.22c13.23 0 24 10.77 24 24s-10.77 24-24 24c-13.23 0-24-10.77-24-24S409.6 33.22 422.8 33.22zM474.7 473.2c-27.38 9.578-57.28 8.985-84.27-1.625L96.1 356.4c-25.05-9.844-46.16-27.41-61.08-50.85L29.48 295.4C24.71 287.9 14.82 285.7 7.387 290.5C-.051 295.3-2.239 305.2 2.512 312.6l6.422 10.08c18.56 29.17 44.97 51.1 76.38 63.42l293.5 115.3C396.7 508.5 415.8 512 434.8 512c17.05 0 34.13-2.844 50.45-8.547c8.344-2.922 12.75-12.05 9.844-20.39C492.2 474.7 483.1 470.3 474.7 473.2z"],
    "phone": [512, 512, [128379, 61589], "1f4de", "M484.6 330.6C484.6 330.6 484.6 330.6 484.6 330.6l-101.8-43.66c-18.5-7.688-40.2-2.375-52.75 13.08l-33.14 40.47C244.2 311.8 200.3 267.9 171.6 215.2l40.52-33.19c15.67-12.92 20.83-34.16 12.84-52.84L181.4 27.37C172.7 7.279 150.8-3.737 129.6 1.154L35.17 23.06C14.47 27.78 0 45.9 0 67.12C0 312.4 199.6 512 444.9 512c21.23 0 39.41-14.44 44.17-35.13l21.8-94.47C515.7 361.1 504.7 339.3 484.6 330.6zM457.9 469.7c-1.375 5.969-6.844 10.31-12.98 10.31c-227.7 0-412.9-185.2-412.9-412.9c0-6.188 4.234-11.48 10.34-12.88l94.41-21.91c1-.2344 2-.3438 2.984-.3438c5.234 0 10.11 3.094 12.25 8.031l43.58 101.7C197.9 147.2 196.4 153.5 191.8 157.3L141.3 198.7C135.6 203.4 133.8 211.4 137.1 218.1c33.38 67.81 89.11 123.5 156.9 156.9c6.641 3.313 14.73 1.531 19.44-4.219l41.39-50.5c3.703-4.563 10.16-6.063 15.5-3.844l101.6 43.56c5.906 2.563 9.156 8.969 7.719 15.22L457.9 469.7z"],
    "podium": [448, 512, [], "f680", "M432 160H96V144c0-39.75 29.25-72.63 67.38-78.75C170.3 83.25 187.6 96 208 96h62.39c24.41 0 46.15-17.54 49.22-41.75C323.3 24.97 300.6 0 272 0h-64C186.6 0 168.8 14 162.5 33.38C107.1 40.13 64 86.88 64 144V160H16C7.199 160 0 167.2 0 176C0 184.8 7.199 192 16 192h416C440.8 192 448 184.8 448 176C448 167.2 440.8 160 432 160zM208 32h64C280.9 32 288 39.13 288 48S280.9 64 272 64h-64C199.1 64 192 56.88 192 48S199.1 32 208 32zM385.8 224.1c-9.109-.9062-16.72 5.344-17.7 14.09l-26.22 230.7C341.2 475.2 335.6 480 328.9 480H119.1c-6.688 0-12.28-4.781-13.02-11.12L79.89 238.2C78.91 229.4 71.22 223.2 62.19 224.1C53.41 225.1 47.11 233 48.11 241.8l26.22 230.7C76.89 495 96.14 512 119.1 512h209.8c22.98 0 42.23-16.97 44.8-39.5l26.22-230.7C400.9 233 394.6 225.1 385.8 224.1z"],
    "scale-balanced": [640, 512, [62030, "balance-scale"], "2696", "M528 480H336V125.8c27.5-7.125 47.1-32 47.1-61.75h144c8.801 0 16-7.201 16-16c0-8.801-7.201-16-16-16h-153.1c-.125-.25-4.375-11.12-19.13-21.12C345.6 4 333.3 0 320 0S294.4 4 284.2 10.88C269.5 20.88 265.2 31.75 265.1 32H111.1c-8.801 0-16 7.199-16 16c0 8.799 7.201 16 16 16h144c0 29.75 20.5 54.63 47.1 61.75V480H111.1c-8.801 0-15.99 7.199-15.99 16c0 8.799 7.2 16 16 16h416c8.801 0 16-7.201 16-16C544 487.2 536.8 480 528 480zM287.1 64c0-17.62 14.38-32 32-32s32 14.38 32 32S337.6 96 320 96S287.1 81.63 287.1 64zM634.4 279.1l-109-175.1C522.1 98.38 517.1 96 512 96c-5.127 0-10.11 2.375-13.36 7.125l-109 175.1c-3.875 5.75-6.125 12.63-5.5 19.63C389.5 364.4 444.7 416 512 416c67.25 0 122.5-51.63 127.9-117.3C640.5 291.7 638.3 284.9 634.4 279.1zM512 384c-41.63 0-77.51-27.12-90.76-64h181.1C589 357.3 553.3 384 512 384zM421.8 288l90.26-145.8L603 288H421.8zM255.9 298.7c.625-7-1.625-13.88-5.5-19.63l-109-175.1C138.1 98.38 133.1 96 127.1 96C122.9 96 117.9 98.38 114.6 103.1L5.599 279.1C1.724 284.9-.5255 291.7 .0995 298.7C5.474 364.4 60.74 416 127.1 416C195.3 416 250.5 364.4 255.9 298.7zM127.1 142.3L218.1 288H37.73L127.1 142.3zM37.23 320h181.1c-13.38 37.25-49.13 64-90.38 64C86.36 384 50.48 356.9 37.23 320z"],
    "stopwatch": [448, 512, [62194], "23f1", "M224 176C215.2 176 208 183.2 208 192v144c0 8.844 7.156 16 16 16s16-7.156 16-16V192C240 183.2 232.8 176 224 176zM427.3 139.3c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-37.08 37.08C333.9 121.5 289.4 100.6 240 96.81V32l64.01 .0007C312.8 32 320 24.84 320 16S312.8 0 304 0h-160C135.2 0 128 7.164 128 16s7.168 16 16 16L208 32v64.81C100.6 105 16 194.5 16 304c0 114.9 93.13 208 208 208s208-93.13 208-208c0-47.58-16.15-91.29-43.04-126.3L427.3 139.3zM400 304c0 97.05-78.95 176-176 176s-176-78.95-176-176S126.1 128 224 128S400 206.1 400 304z"],
    "user-graduate": [512, 512, [], "f501", "M359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.31-120.8 87.19-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8zM445.3 479.1H66.66c-1.469 0-2.664-1.197-2.664-2.668c0-55.04 31.85-104 80.95-127.1L233.4 438.6c6.248 6.248 14.44 9.373 22.63 9.373c8.189 0 16.38-3.125 22.63-9.373l88.43-88.43c49.09 23.08 80.95 72.09 80.95 127.1C448 478.8 446.8 479.1 445.3 479.1zM44.41 79.59L64 84.11v89.31L32.83 266.9C31.19 271.8 32.02 277.2 35.02 281.4c3.016 4.172 7.844 6.641 12.98 6.641H112c5.141 0 9.969-2.469 12.98-6.641c2.1-4.172 3.828-9.547 2.187-14.42L96 173.4V91.49L128 98.88l.0016 29.12c0 5.734 3.076 11.05 8.061 13.89l64.37 36.78c17.14 9.797 36.34 14.69 55.56 14.69c19.22 0 38.42-4.891 55.56-14.69l64.37-36.78c4.984-2.844 8.063-8.156 8.063-13.89L384 98.88l83.59-19.29c7.266-1.672 12.39-8.141 12.39-15.59s-5.126-13.92-12.39-15.59l-207.1-48c-2.344-.5313-4.844-.5313-7.187 0L44.41 48.4C37.14 50.07 31.99 56.56 31.99 64.01S37.14 77.92 44.41 79.59zM352 118.7l-56.31 32.17c-24.47 13.97-54.91 13.97-79.37 0L160 118.7V106.3l92.41 21.32c1.172 .2656 2.33 .4063 3.533 .4063s2.483-.1406 3.654-.4063l92.41-21.32V118.7zM256 32.41l136.8 31.58l-136.8 31.58L119.2 63.99L256 32.41zM80 226.6l9.797 29.41H70.2L80 226.6zM368 159.1c-8.844 0-16 7.157-16 16c0 52.94-43.06 96-95.1 96S160 228.9 160 175.1c0-8.844-7.155-16-15.1-16S128 167.2 128 175.1c0 70.58 57.42 128 127.1 128s127.1-57.42 127.1-128C384 167.2 376.8 159.1 368 159.1z"],
  };

  bunker(function () {
    defineIcons('fal', icons);
    defineIcons('fa-light', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    "chevron-down": [448, 512, [], "f078", "M432.6 209.3l-191.1 183.1C235.1 397.8 229.1 400 224 400s-11.97-2.219-16.59-6.688L15.41 209.3C5.814 200.2 5.502 184.1 14.69 175.4c9.125-9.625 24.38-9.938 33.91-.7187L224 342.8l175.4-168c9.5-9.219 24.78-8.906 33.91 .7187C442.5 184.1 442.2 200.2 432.6 209.3z"],
  };

  bunker(function () {
    defineIcons('far', icons);
    defineIcons('fa-regular', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
  };

  bunker(function () {
    defineIcons('fas', icons);
    defineIcons('fa-solid', icons);
  });

}());
(function () {
  'use strict';

  var _WINDOW = {};
  var _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
  };

  bunker(function () {
    defineIcons('fat', icons);
    defineIcons('fa-thin', icons);
  });

}());
(function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var noop = function noop() {};

  var _GLOBAL = {};
  var _SET_TIMEOUT = undefined; // eslint-disable-line no-undef-init

  var _SET_IMMEDIATE = undefined; // eslint-disable-line no-undef-init

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof global !== 'undefined') _GLOBAL = global;
    if (typeof setTimeout === 'function') _SET_TIMEOUT = setTimeout;
    if (typeof setImmediate === 'function') _SET_IMMEDIATE = setImmediate;
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var GLOBAL = _GLOBAL;
  var SET_TIMEOUT = _SET_TIMEOUT;
  var SET_IMMEDIATE = _SET_IMMEDIATE;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var PENDING = 'pending';
  var SETTLED = 'settled';
  var FULFILLED = 'fulfilled';
  var REJECTED = 'rejected';

  var NOOP = function NOOP() {};

  var isNode = typeof GLOBAL !== 'undefined' && typeof GLOBAL.process !== 'undefined' && typeof GLOBAL.process.emit === 'function';
  var asyncSetTimer = typeof SET_IMMEDIATE !== 'undefined' ? SET_IMMEDIATE : SET_TIMEOUT;
  var asyncQueue = [];
  var asyncTimer;

  function asyncFlush() {
    // run promise callbacks
    for (var i = 0; i < asyncQueue.length; i++) {
      asyncQueue[i][0](asyncQueue[i][1]);
    } // reset async asyncQueue


    asyncQueue = [];
    asyncTimer = false;
  }

  function asyncCall(callback, arg) {
    asyncQueue.push([callback, arg]);

    if (!asyncTimer) {
      asyncTimer = true;
      asyncSetTimer(asyncFlush, 0);
    }
  }

  function invokeResolver(resolver, promise) {
    function resolvePromise(value) {
      resolve(promise, value);
    }

    function rejectPromise(reason) {
      reject(promise, reason);
    }

    try {
      resolver(resolvePromise, rejectPromise);
    } catch (e) {
      rejectPromise(e);
    }
  }

  function invokeCallback(subscriber) {
    var owner = subscriber.owner;
    var settled = owner._state;
    var value = owner._data;
    var callback = subscriber[settled];
    var promise = subscriber.then;

    if (typeof callback === 'function') {
      settled = FULFILLED;

      try {
        value = callback(value);
      } catch (e) {
        reject(promise, e);
      }
    }

    if (!handleThenable(promise, value)) {
      if (settled === FULFILLED) {
        resolve(promise, value);
      }

      if (settled === REJECTED) {
        reject(promise, value);
      }
    }
  }

  function handleThenable(promise, value) {
    var resolved;

    try {
      if (promise === value) {
        throw new TypeError('A promises callback cannot return that same promise.');
      }

      if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
        // then should be retrieved only once
        var then = value.then;

        if (typeof then === 'function') {
          then.call(value, function (val) {
            if (!resolved) {
              resolved = true;

              if (value === val) {
                fulfill(promise, val);
              } else {
                resolve(promise, val);
              }
            }
          }, function (reason) {
            if (!resolved) {
              resolved = true;
              reject(promise, reason);
            }
          });
          return true;
        }
      }
    } catch (e) {
      if (!resolved) {
        reject(promise, e);
      }

      return true;
    }

    return false;
  }

  function resolve(promise, value) {
    if (promise === value || !handleThenable(promise, value)) {
      fulfill(promise, value);
    }
  }

  function fulfill(promise, value) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = value;
      asyncCall(publishFulfillment, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state === PENDING) {
      promise._state = SETTLED;
      promise._data = reason;
      asyncCall(publishRejection, promise);
    }
  }

  function publish(promise) {
    promise._then = promise._then.forEach(invokeCallback);
  }

  function publishFulfillment(promise) {
    promise._state = FULFILLED;
    publish(promise);
  }

  function publishRejection(promise) {
    promise._state = REJECTED;
    publish(promise);

    if (!promise._handled && isNode) {
      GLOBAL.process.emit('unhandledRejection', promise._data, promise);
    }
  }

  function notifyRejectionHandled(promise) {
    GLOBAL.process.emit('rejectionHandled', promise);
  }

  var P = /*#__PURE__*/function () {
    function P(resolver) {
      _classCallCheck(this, P);

      if (typeof resolver !== 'function') {
        throw new TypeError('Promise resolver ' + resolver + ' is not a function');
      }

      if (this instanceof P === false) {
        throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
      }

      this._then = [];
      this._state = PENDING;
      this._data = undefined;
      this._handled = false;
      invokeResolver(resolver, this);
    }

    _createClass(P, [{
      key: "then",
      value: function then(onFulfillment, onRejection) {
        var subscriber = {
          owner: this,
          then: new this.constructor(NOOP),
          fulfilled: onFulfillment,
          rejected: onRejection
        };

        if ((onRejection || onFulfillment) && !this._handled) {
          this._handled = true;

          if (this._state === REJECTED && isNode) {
            asyncCall(notifyRejectionHandled, this);
          }
        }

        if (this._state === FULFILLED || this._state === REJECTED) {
          // already resolved, call callback async
          asyncCall(invokeCallback, subscriber);
        } else {
          // subscribe
          this._then.push(subscriber);
        }

        return subscriber.then;
      }
    }, {
      key: "catch",
      value: function _catch(onRejection) {
        return this.then(null, onRejection);
      }
    }], [{
      key: "all",
      value: function all(promises) {
        if (!Array.isArray(promises)) {
          throw new TypeError('You must pass an array to Promise.all().');
        }

        return new P(function (resolve, reject) {
          var results = [];
          var remaining = 0;

          function resolver(index) {
            remaining++;
            return function (value) {
              results[index] = value;

              if (! --remaining) {
                resolve(results);
              }
            };
          }

          for (var i = 0, promise; i < promises.length; i++) {
            promise = promises[i];

            if (promise && typeof promise.then === 'function') {
              promise.then(resolver(i), reject);
            } else {
              results[i] = promise;
            }
          }

          if (!remaining) {
            resolve(results);
          }
        });
      }
    }, {
      key: "resolve",
      value: function resolve(value) {
        if (value && _typeof(value) === 'object' && value.constructor === P) {
          return value;
        }

        return new P(function (resolve) {
          resolve(value);
        });
      }
    }, {
      key: "reject",
      value: function reject(reason) {
        return new P(function (resolve, reject) {
          reject(reason);
        });
      }
    }]);

    return P;
  }();

  var PromisePonyfill = {
    provides: function provides(providers) {
      if (typeof providers.Promise === 'undefined') {
        providers.Promise = P;
      }
    }
  };

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e) {
      return false;
    }
  }();
  var PREFIX_TO_STYLE = {
    'fas': 'solid',
    'fa-solid': 'solid',
    'far': 'regular',
    'far-regular': 'regular',
    'fal': 'light',
    'fa-light': 'light',
    'fat': 'thin',
    'fa-thin': 'thin',
    'fad': 'duotone',
    'fa-duotone': 'duotone',
    'fab': 'brands',
    'fa-brands': 'brands',
    'fak': 'kit',
    'fa-kit': 'kit',
    'fa': 'solid'
  };
  var STYLE_TO_PREFIX = {
    'solid': 'fas',
    'regular': 'far',
    'light': 'fal',
    'thin': 'fat',
    'duotone': 'fad',
    'brands': 'fab',
    'kit': 'fak'
  };
  var ICON_SELECTION_SYNTAX_PATTERN = /fa[srltdbk\-\ ]/; // eslint-disable-line no-useless-escape

  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = /Font ?Awesome ?([6 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

  var FONT_WEIGHT_TO_PREFIX = {
    '900': 'fas',
    '400': 'far',
    'normal': 'far',
    '300': 'fal',
    '100': 'fat'
  };
  var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = {
    GROUP: 'group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var RESERVED_CLASSES = ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', 'beat', 'border', 'fade', 'flash', 'flip-both', 'flip-horizontal', 'flip-vertical', 'flip', 'fw', 'inverse', 'layers-counter', 'layers-text', 'layers', 'li', 'pull-left', 'pull-right', 'pulse', 'rotate-180', 'rotate-270', 'rotate-90', 'rotate-by', 'spin-pulse', 'spin-reverse', 'spin', 'stack-1x', 'stack-2x', 'stack', 'ul', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
    return "".concat(n, "x");
  })).concat(oneToTwenty.map(function (n) {
    return "w-".concat(n);
  }));

  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    styleDefault: 'solid',
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  var _config = _objectSpread2(_objectSpread2({}, _default), initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_config).forEach(function (key) {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function set(val) {
        _config[key] = val;

        _onChangeCb.forEach(function (cb) {
          return cb(config);
        });
      },
      get: function get() {
        return _config[key];
      }
    });
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);

    return function () {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }

  var d = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }
  function toArray(obj) {
    var array = [];

    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }

    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }
  function transformForCss(_ref2) {
    var transform = _ref2.transform,
        _ref2$width = _ref2.width,
        width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
        _ref2$startCentered = _ref2.startCentered,
        startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';

    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
    }

    val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var baseStyles = "svg:not(:root).svg-inline--fa{overflow:visible;-webkit-box-sizing:content-box;box-sizing:content-box}.svg-inline--fa{display:inline-block;display:var(--fa-display,inline-block);height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-2xs{vertical-align:.1em}.svg-inline--fa.fa-xs{vertical-align:0}.svg-inline--fa.fa-sm{vertical-align:-.0714285714em}.svg-inline--fa.fa-lg{vertical-align:-.2em}.svg-inline--fa.fa-xl{vertical-align:-.25em}.svg-inline--fa.fa-2xl{vertical-align:-.3125em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;margin-right:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;margin-left:var(--fa-pull-margin,.3em);width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em;width:var(--fa-li-width,2em);top:.25em}.svg-inline--fa.fa-fw{width:1.25em;width:var(--fa-fw-width,1.25em)}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;background-color:var(--fa-counter-background-color,#ff253a);border-radius:1em;border-radius:var(--fa-counter-border-radius,1em);-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;color:var(--fa-inverse,#fff);line-height:1;line-height:var(--fa-counter-line-height,1);max-width:5em;max-width:var(--fa-counter-max-width,5em);min-width:1.5em;min-width:var(--fa-counter-min-width,1.5em);overflow:hidden;padding:.25em .5em;padding:var(--fa-counter-padding,.25em .5em);right:0;right:var(--fa-right,0);text-overflow:ellipsis;top:0;top:var(--fa-top,0);-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-counter-scale,.25));transform:scale(var(--fa-counter-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;bottom:var(--fa-bottom,0);right:0;right:var(--fa-right,0);top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;bottom:var(--fa-bottom,0);left:0;left:var(--fa-left,0);right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{top:0;top:var(--fa-top,0);right:0;right:var(--fa-right,0);-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;left:var(--fa-left,0);right:auto;top:0;top:var(--fa-top,0);-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform:scale(var(--fa-layers-scale,.25));transform:scale(var(--fa-layers-scale,.25));-webkit-transform-origin:top left;transform-origin:top left}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-2xs{font-size:.625em;line-height:.1em;vertical-align:.225em}.fa-xs{font-size:.75em;line-height:.0833333333em;vertical-align:.125em}.fa-sm{font-size:.875em;line-height:.0714285714em;vertical-align:.0535714286em}.fa-lg{font-size:1.25em;line-height:.05em;vertical-align:-.075em}.fa-xl{font-size:1.5em;line-height:.0416666667em;vertical-align:-.125em}.fa-2xl{font-size:2em;line-height:.03125em;vertical-align:-.1875em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;margin-left:var(--fa-li-margin,2.5em);padding-left:0}.fa-ul>li{position:relative}.fa-li{left:calc(2em * -1);left:calc(var(--fa-li-width,2em) * -1);position:absolute;text-align:center;width:2em;width:var(--fa-li-width,2em);line-height:inherit}.fa-border{border-color:#eee;border-color:var(--fa-border-color,#eee);border-radius:.1em;border-radius:var(--fa-border-radius,.1em);border-style:solid;border-style:var(--fa-border-style,solid);border-width:.08em;border-width:var(--fa-border-width,.08em);padding:.2em .25em .15em;padding:var(--fa-border-padding,.2em .25em .15em)}.fa-pull-left{float:left;margin-right:.3em;margin-right:var(--fa-pull-margin,.3em)}.fa-pull-right{float:right;margin-left:.3em;margin-left:var(--fa-pull-margin,.3em)}.fa-beat{-webkit-animation-name:fa-beat;animation-name:fa-beat;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-fade{-webkit-animation-name:fa-fade;animation-name:fa-fade;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:cubic-bezier(.4,0,.6,1);animation-timing-function:cubic-bezier(.4,0,.6,1);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flash{-webkit-animation-name:fa-flash;animation-name:fa-flash;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:cubic-bezier(.4,0,.6,1);animation-timing-function:cubic-bezier(.4,0,.6,1);-webkit-animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1));animation-timing-function:var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))}.fa-flip{-webkit-animation-name:fa-flip;animation-name:fa-flip;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-timing-function:var(--fa-animation-timing,ease-in-out);animation-timing-function:var(--fa-animation-timing,ease-in-out)}.fa-spin{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-delay:0;animation-delay:0;-webkit-animation-delay:var(--fa-animation-delay,0);animation-delay:var(--fa-animation-delay,0);-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-duration:var(--fa-animation-duration,2s);animation-duration:var(--fa-animation-duration,2s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-timing-function:var(--fa-animation-timing,linear);animation-timing-function:var(--fa-animation-timing,linear)}.fa-spin-reverse{--fa-animation-direction:reverse}.fa-pulse,.fa-spin-pulse{-webkit-animation-name:fa-spin;animation-name:fa-spin;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-direction:var(--fa-animation-direction,normal);animation-direction:var(--fa-animation-direction,normal);-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-duration:var(--fa-animation-duration,1s);animation-duration:var(--fa-animation-duration,1s);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-iteration-count:var(--fa-animation-iteration-count,infinite);animation-iteration-count:var(--fa-animation-iteration-count,infinite);-webkit-animation-timing-function:steps(8);animation-timing-function:steps(8);-webkit-animation-timing-function:var(--fa-animation-timing,steps(8));animation-timing-function:var(--fa-animation-timing,steps(8))}@media (prefers-reduced-motion:reduce){.fa-beat,.fa-fade,.fa-flash,.fa-flip,.fa-pulse,.fa-spin,.fa-spin-pulse{-webkit-animation-delay:-1ms;animation-delay:-1ms;-webkit-animation-duration:1ms;animation-duration:1ms;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0s;transition-duration:0s}}@-webkit-keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(1.25);transform:scale(1.25);-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@keyframes fa-beat{0%,90%{-webkit-transform:scale(1);transform:scale(1)}45%{-webkit-transform:scale(1.25);transform:scale(1.25);-webkit-transform:scale(var(--fa-beat-scale,1.25));transform:scale(var(--fa-beat-scale,1.25))}}@-webkit-keyframes fa-fade{50%{opacity:.4;opacity:var(--fa-fade-opacity,.4)}}@keyframes fa-fade{50%{opacity:.4;opacity:var(--fa-fade-opacity,.4)}}@-webkit-keyframes fa-flash{0%,100%{opacity:.4;opacity:var(--fa-flash-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125);-webkit-transform:scale(var(--fa-flash-scale,1.125));transform:scale(var(--fa-flash-scale,1.125))}}@keyframes fa-flash{0%,100%{opacity:.4;opacity:var(--fa-flash-opacity,.4);-webkit-transform:scale(1);transform:scale(1)}50%{opacity:1;-webkit-transform:scale(1.125);transform:scale(1.125);-webkit-transform:scale(var(--fa-flash-scale,1.125));transform:scale(var(--fa-flash-scale,1.125))}}@-webkit-keyframes fa-flip{50%{-webkit-transform:rotate3d(0,1,0,-180deg);transform:rotate3d(0,1,0,-180deg);-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@keyframes fa-flip{50%{-webkit-transform:rotate3d(0,1,0,-180deg);transform:rotate3d(0,1,0,-180deg);-webkit-transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg));transform:rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}.fa-rotate-by{-webkit-transform:rotate(none);transform:rotate(none);-webkit-transform:rotate(var(--fa-rotate-angle,none));transform:rotate(var(--fa-rotate-angle,none))}.fa-stack{display:inline-block;vertical-align:middle;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;z-index:auto;z-index:var(--fa-stack-z-index,auto)}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff;color:var(--fa-inverse,#fff)}.fa-sr-only,.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.fa-sr-only-focusable:not(:focus),.sr-only-focusable:not(:focus){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.svg-inline--fa .fa-primary{fill:currentColor;fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:currentColor;fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fa-duotone.fa-inverse,.fad.fa-inverse{color:#fff;color:var(--fa-inverse,#fff)}";

  function css() {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var _cssInserted = false;

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }

  var InjectCSS = {
    mixout: function mixout() {
      return {
        dom: {
          css: css,
          insertCss: ensureCss
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg: function beforeI2svg() {
          ensureCss();
        }
      };
    }
  };

  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];

  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  /**
   * ucs2decode() and codePointAt() are both works of Mathias Bynens and licensed under MIT
   *
   * Copyright Mathias Bynens <https://mathiasbynens.be/>

   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:

   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.

   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */
  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        var extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // eslint-disable-line eqeqeq
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }

  function toHex(unicode) {
    var decoded = ucs2decode(unicode);
    return decoded.length === 1 ? decoded[0].toString(16) : null;
  }

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var _plugins = [];
  var _hooks = {};
  var providers = {
    Promise: typeof Promise !== 'undefined' ? Promise : undefined
  };
  var defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref) {
    var obj = _ref.mixoutsTo;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach(function (k) {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });

    _plugins.forEach(function (plugin) {
      var mixout = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout).forEach(function (tk) {
        if (typeof mixout[tk] === 'function') {
          obj[tk] = mixout[tk];
        }

        if (_typeof(mixout[tk]) === 'object') {
          Object.keys(mixout[tk]).forEach(function (sk) {
            if (!obj[tk]) {
              obj[tk] = {};
            }

            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });

      if (plugin.hooks) {
        var hooks = plugin.hooks();
        Object.keys(hooks).forEach(function (hook) {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }

          _hooks[hook].push(hooks[hook]);
        });
      }

      if (plugin.provides) {
        plugin.provides(providers);
      }
    });

    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      accumulator = hookFn.apply(null, [accumulator].concat(args)); // eslint-disable-line no-useless-call
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      hookFn.apply(null, args);
    });
    return undefined;
  }
  function callProvided() {
    var hook = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : undefined;
  }

  var styles = namespace.styles,
      shims = namespace.shims;
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byAlias = {};
  var PREFIXES = Object.keys(PREFIX_TO_STYLE);

  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }

  function getIconName(familyPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');

    if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'number';
        });
        aliases.forEach(function (alias) {
          acc[alias.toString(16)] = iconName;
        });
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      acc[iconName] = iconName;

      if (icon[2]) {
        var aliases = icon[2].filter(function (a) {
          return typeof a === 'string';
        });
        aliases.forEach(function (alias) {
          acc[alias] = iconName;
        });
      }

      return acc;
    });
    _byAlias = lookup(function (acc, icon, iconName) {
      var aliases = icon[2];
      acc[iconName] = iconName;
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
      return acc;
    }); // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.

    var hasRegular = 'far' in styles || config.autoFetchSvg;
    _byOldName = reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = {
        prefix: prefix,
        iconName: iconName
      };
      return acc;
    }, {});
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault);
  };
  onChange(function (c) {
    _defaultUsablePrefix = getCanonicalPrefix(c.styleDefault);
  });
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getCanonicalPrefix(styleOrPrefix) {
    var style = PREFIX_TO_STYLE[styleOrPrefix];
    var prefix = STYLE_TO_PREFIX[styleOrPrefix] || STYLE_TO_PREFIX[style];
    var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    return prefix || defined || null;
  }
  function getCanonicalIcon(values) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$skipLookups = params.skipLookups,
        skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
    var givenPrefix = null;
    var canonical = values.reduce(function (acc, cls) {
      var iconName = getIconName(config.familyPrefix, cls);

      if (styles[cls]) {
        givenPrefix = cls;
        acc.prefix = cls;
      } else if (PREFIXES.indexOf(cls) > -1) {
        givenPrefix = cls;
        acc.prefix = getCanonicalPrefix(cls);
      } else if (iconName) {
        acc.iconName = iconName;
      } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
        acc.rest.push(cls);
      }

      if (!skipLookups && acc.prefix && acc.iconName) {
        var shim = givenPrefix === 'fa' ? byOldName(acc.iconName) : {};
        var aliasIconName = byAlias(acc.prefix, acc.iconName);

        if (shim.prefix) {
          givenPrefix = null;
        }

        acc.iconName = shim.iconName || aliasIconName || acc.iconName;
        acc.prefix = shim.prefix || acc.prefix;

        if (acc.prefix === 'far' && !styles['far'] && styles['fas']) {
          // Allow a fallback from the regular style to solid if regular is not available
          acc.prefix = 'fas';
        }
      }

      return acc;
    }, emptyCanonicalIcon());

    if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
      // The fa prefix is not canonical. So if it has made it through until this point
      // we will shift it to the correct prefix.
      canonical.prefix = getDefaultUsablePrefix() || 'fas';
    }

    return canonical;
  }

  var Library = /*#__PURE__*/function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
          defineIcons(key, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          var aliases = icon[2];
          if (!additions[prefix]) additions[prefix] = {};

          if (aliases.length > 0) {
            aliases.forEach(function (alias) {
              if (typeof alias === 'string') {
                additions[prefix][alias] = icon;
              }
            });
          }

          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === 'fa') {
      iconLookup.prefix = 'fas';
    }

    var iconName = iconLookup.iconName;
    var prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks('noAuto');
  };
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (IS_DOM) {
        callHooks('beforeI2svg', params);
        callProvided('pseudoElements2svg', params);
        return callProvided('i2svg', params);
      } else {
        return providers.Promise.reject('Operation requires a DOM of some kind.');
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot;

      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }

      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        callHooks('watch', params);
      });
    }
  };
  var parse = {
    icon: function icon(_icon) {
      if (_icon === null) {
        return null;
      }

      if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
        return {
          prefix: _icon.prefix,
          iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
        };
      }

      if (Array.isArray(_icon) && _icon.length === 2) {
        var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
        var prefix = getCanonicalPrefix(_icon[0]);
        return {
          prefix: prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }

      if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.familyPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }

      if (typeof _icon === 'string') {
        var _prefix = getDefaultUsablePrefix();

        return {
          prefix: _prefix,
          iconName: byAlias(_prefix, _icon) || _icon
        };
      }
    }
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    parse: parse,
    library: library,
    findIconDefinition: findIconDefinition,
    toHtml: toHtml
  };

  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
        autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };

  function bootstrap(plugins) {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }

      domready(function () {
        autoReplace();
        callHooks('bootstrap');
      });
    }

    namespace.hooks = _objectSpread2(_objectSpread2({}, namespace.hooks), {}, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        build();
        autoReplace();
      },
      addPacks: function addPacks(packs) {
        packs.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prefix = _ref2[0],
              icons = _ref2[1];

          namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        });
        build();
        autoReplace();
      },
      addShims: function addShims(shims) {
        var _namespace$shims;

        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));

        build();
        autoReplace();
      }
    });
  }

  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function asIcon (_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol (_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        maskId = params.maskId,
        titleId = params.titleId,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var isUploadedIcon = prefix === 'fak';
    var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
      width: "".concat(width / height * 16 * 0.0625, "em")
    } : {};

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
      },
      children: [title]
    });

    var args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread2(_objectSpread2({}, uploadedIconWidthStyle), extra.styles)
    });

    var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
      children: [],
      attributes: {}
    } : callProvided('generateAbstractIcon', args) || {
      children: [],
      attributes: {}
    },
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    var content = params.content,
        width = params.width,
        height = params.height,
        transform = params.transform,
        title = params.title,
        extra = params.extra,
        _params$watchable2 = params.watchable,
        watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }

    var styles = _objectSpread2({}, extra.styles);

    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }

    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }
  function makeLayersCounterAbstract(params) {
    var content = params.content,
        title = params.title,
        extra = params.extra;

    var attributes = _objectSpread2(_objectSpread2(_objectSpread2({}, extra.attributes), title ? {
      'title': title
    } : {}), {}, {
      'class': extra.classes.join(' ')
    });

    var styleString = joinStyles(extra.styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });

    if (title) {
      val.push({
        tag: 'span',
        attributes: {
          class: 'sr-only'
        },
        children: [title]
      });
    }

    return val;
  }

  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }
  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;

  var styles$1 = namespace.styles;
  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }
  function findIcon(iconName, prefix) {
    var givenPrefix = prefix;

    if (prefix === 'fa' && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }

    return new providers.Promise(function (resolve, reject) {
      var val = {
        found: false,
        width: 512,
        height: 512,
        icon: callProvided('missingIconAbstract') || {}
      };

      if (givenPrefix === 'fa') {
        var shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }

      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        var icon = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }

      if (iconName && prefix && !config.showMissingIcons) {
        reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
      } else {
        resolve(val);
      }
    });
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"6.0.0-beta1\"";

  var begin = function begin(name) {
    p.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };

  var end = function end(name) {
    p.mark("".concat(preamble, " ").concat(name, " ends"));
    p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };

  var perf = {
    begin: begin,
    end: end
  };

  var noop$2 = function noop() {};

  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }

  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }

    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }

  function convertSVG(abstractObj) {
    if (typeof abstractObj === 'string') {
      return DOCUMENT.createTextNode(abstractObj);
    }

    var tag = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function (key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    var children = abstractObj.children || [];
    children.forEach(function (child) {
      tag.appendChild(convertSVG(child));
    });
    return tag;
  }

  function nodeAsComment(node) {
    var comment = " ".concat(node.outerHTML, " ");
    return comment;
  }

  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];
      var nodeTagName = node.tagName.toLowerCase();

      if (node.parentNode) {
        mutation[1].forEach(function (abstract) {
          node.parentNode.insertBefore(convertSVG(abstract), node);
        });
        var comment = DOCUMENT.createComment(config.keepOriginalSource && nodeTagName.toLowerCase() !== 'svg' ? nodeAsComment(node) : '');
        node.parentNode.replaceChild(comment, node);
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement

      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }

      var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
      delete abstract[0].attributes.style;
      delete abstract[0].attributes.id;
      var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }

        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');
      var newInnerHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      node.setAttribute('class', splitClasses.toNode.join(' '));
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };

  function performOperationSync(op) {
    op();
  }

  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;

    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;

      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }

      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }

    if (!config.observeMutations) {
      return;
    }

    var _options$treeCallback = options.treeCallback,
        treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
        _options$nodeCallback = options.nodeCallback,
        nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
        _options$pseudoElemen = options.pseudoElementsCallback,
        pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
        _options$observeMutat = options.observeMutationsRoot,
        observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      var defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }

          treeCallback(mutationRecord.target);
        }

        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target.parentNode);
        }

        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class') {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                prefix = _getCanonicalIcon.prefix,
                iconName = _getCanonicalIcon.iconName;

            mutationRecord.target.setAttribute('data-prefix', prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
          } else {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser (node) {
    var style = node.getAttribute('style');
    var val = [];

    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);

        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }

        return acc;
      }, {});
    }

    return val;
  }

  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));

    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }

    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }

    if (val.prefix && innerText.length > 1) {
      val.iconName = byLigature(val.prefix, node.innerText);
    } else if (val.prefix && innerText.length === 1) {
      val.iconName = byUnicode(val.prefix, toHex(node.innerText));
    }

    return val;
  }

  function attributesParser (node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }

      return acc;
    }, {});
    var title = node.getAttribute('title');
    var titleId = node.getAttribute('data-fa-title-id');

    if (config.autoA11y) {
      if (title) {
        extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        extraAttributes['aria-hidden'] = 'true';
        extraAttributes['focusable'] = 'false';
      }
    }

    return extraAttributes;
  }

  function blankMeta() {
    return {
      iconName: null,
      title: null,
      titleId: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    var _classParser = classParser(node),
        iconName = _classParser.iconName,
        prefix = _classParser.prefix,
        extraClasses = _classParser.rest;

    var extraStyles = styleParser(node);
    var extraAttributes = attributesParser(node);
    var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
    return _objectSpread2({
      iconName: iconName,
      title: node.getAttribute('title'),
      titleId: node.getAttribute('data-fa-title-id'),
      prefix: prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }

  var styles$2 = namespace.styles;

  function generateMutation(node) {
    var nodeMeta = parseMeta(node);

    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided('generateLayersText', node, nodeMeta);
    } else {
      return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
  }

  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return providers.Promise.resolve();
    var htmlClassList = DOCUMENT.documentElement.classList;

    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };

    var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$2);
    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
      return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');

    if (prefixesDomQuery.length === 0) {
      return providers.Promise.resolve();
    }

    var candidates = [];

    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e) {// noop
    }

    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return providers.Promise.resolve();
    }

    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);

        if (mutation) {
          acc.push(mutation);
        }
      } catch (e) {
        if (!PRODUCTION) {
          if (e.name === 'MissingIcon') {
            console.error(e);
          }
        }
      }

      return acc;
    }, []);
    return new providers.Promise(function (resolve, reject) {
      providers.Promise.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function () {
        mark();
        reject();
      });
    });
  }

  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask: mask
      }));
    };
  }

  var render = function render(iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$maskId = params.maskId,
        maskId = _params$maskId === void 0 ? null : _params$maskId,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$titleId = params.titleId,
        titleId = _params$titleId === void 0 ? null : _params$titleId,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return domVariants(_objectSpread2({
      type: 'icon'
    }, iconDefinition), function () {
      callHooks('beforeDOMElementCreation', {
        iconDefinition: iconDefinition,
        params: params
      });

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol: symbol,
        title: title,
        maskId: maskId,
        titleId: titleId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout: function mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.i2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node,
            _params$callback = params.callback,
            callback = _params$callback === void 0 ? function () {} : _params$callback;
        return onTree(node, callback);
      };

      providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
        var iconName = nodeMeta.iconName,
            title = nodeMeta.title,
            titleId = nodeMeta.titleId,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            maskId = nodeMeta.maskId,
            extra = nodeMeta.extra;
        return new providers$$1.Promise(function (resolve, reject) {
          providers$$1.Promise.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                main = _ref2[0],
                mask = _ref2[1];

            resolve([node, makeInlineSvgAbstract({
              icons: {
                main: main,
                mask: mask
              },
              prefix: prefix,
              iconName: iconName,
              transform: transform,
              symbol: symbol,
              mask: mask,
              maskId: maskId,
              title: title,
              titleId: titleId,
              extra: extra,
              watchable: true
            })]);
          });
        });
      };

      providers$$1.generateAbstractIcon = function (_ref3) {
        var children = _ref3.children,
            attributes = _ref3.attributes,
            main = _ref3.main,
            transform = _ref3.transform,
            styles = _ref3.styles;
        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }

        var nextChild;

        if (transformIsMeaningful(transform)) {
          nextChild = callProvided('generateAbstractTransformGrouping', {
            main: main,
            transform: transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }

        children.push(nextChild || main.icon);
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var Layers = {
    mixout: function mixout() {
      return {
        layer: function layer(assembler) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes;
          return domVariants({
            type: 'layer'
          }, function () {
            callHooks('beforeDOMElementCreation', {
              assembler: assembler,
              params: params
            });
            var children = [];
            assembler(function (args) {
              Array.isArray(args) ? args.map(function (a) {
                children = children.concat(a.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: 'span',
              attributes: {
                class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
              },
              children: children
            }];
          });
        }
      };
    }
  };

  var LayersCounter = {
    mixout: function mixout() {
      return {
        counter: function counter(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'counter',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    }
  };

  var LayersText = {
    mixout: function mixout() {
      return {
        text: function text(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$transform = params.transform,
              transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
              _params$title = params.title,
              title = _params$title === void 0 ? null : _params$title,
              _params$classes = params.classes,
              classes = _params$classes === void 0 ? [] : _params$classes,
              _params$attributes = params.attributes,
              attributes = _params$attributes === void 0 ? {} : _params$attributes,
              _params$styles = params.styles,
              styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'text',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersTextAbstract({
              content: content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.generateLayersText = function (node, nodeMeta) {
        var title = nodeMeta.title,
            transform = nodeMeta.transform,
            extra = nodeMeta.extra;
        var width = null;
        var height = null;

        if (IS_IE) {
          var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          var boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }

        if (config.autoA11y && !title) {
          extra.attributes['aria-hidden'] = 'true';
        }

        return providers.Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width: width,
          height: height,
          transform: transform,
          title: title,
          extra: extra,
          watchable: true
        })]);
      };
    }
  };

  var HEX_FROM_CONTENT_PATTERN = new RegExp("\"|\uFE01|\uFE02", 'ug');
  var VS2 = String.fromCodePoint(0xfe01);
  var VS3 = String.fromCodePoint(0xfe02);

  function hexValueFromContent(content) {
    var vs2 = content.indexOf(VS2) > -1;
    var vs3 = content.indexOf(VS3) > -1;
    return {
      value: toHex(content.replace(HEX_FROM_CONTENT_PATTERN, '')),
      uvs: {
        vs2: vs2,
        vs3: vs3
      }
    };
  }

  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new providers.Promise(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }

      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c) {
        return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');
      var content = styles.getPropertyValue('content');

      if (alreadyProcessedPseudoElement && !fontFamily) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamily && content !== 'none' && content !== '') {
        var _content = styles.getPropertyValue('content');

        var prefix = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];

        var _hexValueFromContent = hexValueFromContent(_content),
            hexValue = _hexValueFromContent.value,
            secondaryLayer = _hexValueFromContent.uvs.vs3;

        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName; // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
        // already done so with the same prefix and iconName

        if (iconName && !secondaryLayer && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);

          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }

          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconIdentifier,
              extra: extra,
              watchable: true
            }));
            var element = DOCUMENT.createElement('svg');

            if (position === '::before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }

            element.outerHTML = abstract.map(function (a) {
              return toHtml(a);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }

  function replace(node) {
    return providers.Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
  }

  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }

  function searchPseudoElements(root) {
    if (!IS_DOM) return;
    return new providers.Promise(function (resolve, reject) {
      var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      providers.Promise.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      }).catch(function () {
        end();
        enableObservation();
        reject();
      });
    });
  }

  var PseudoElements = {
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.pseudoElements2svg = function (params) {
        var _params$node = params.node,
            node = _params$node === void 0 ? DOCUMENT : _params$node;

        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };

  var _unwatched = false;
  var MutationObserver$1 = {
    mixout: function mixout() {
      return {
        dom: {
          unwatch: function unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        bootstrap: function bootstrap() {
          observe(chainHooks('mutationObserverCallbacks', {}));
        },
        noAuto: function noAuto() {
          disconnect();
        },
        watch: function watch(params) {
          var observeMutationsRoot = params.observeMutationsRoot;

          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks('mutationObserverCallbacks', {
              observeMutationsRoot: observeMutationsRoot
            }));
          }
        }
      };
    }
  };

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout: function mixout() {
      return {
        parse: {
          transform: function transform(transformString) {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var transformString = node.getAttribute('data-fa-transform');

          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }

          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractTransformGrouping = function (_ref) {
        var main = _ref.main,
            transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;
        var outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        var operations = {
          outer: outer,
          inner: inner,
          path: path
        };
        return {
          tag: 'g',
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }

    return abstract;
  }

  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }

  var Masks = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var maskData = node.getAttribute('data-fa-mask');
          var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
            return i.trim();
          }));

          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }

          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute('data-fa-mask-id');
          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractMask = function (_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            explicitMaskId = _ref.maskId,
            transform = _ref.transform;
        var mainWidth = main.width,
            mainPath = main.icon;
        var maskWidth = mask.width,
            maskPath = mask.icon;
        var trans = transformForSvg({
          transform: transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        var maskRect = {
          tag: 'rect',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: 'white'
          })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        var maskTag = {
          tag: 'mask',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse'
          }),
          children: [maskRect, maskOuterGroup]
        };
        var defs = {
          tag: 'defs',
          children: [{
            tag: 'clipPath',
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: 'rect',
          attributes: _objectSpread2({
            fill: 'currentColor',
            'clip-path': "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var MissingIconIndicator = {
    provides: function provides(providers) {
      providers.missingIconAbstract = function () {
        var FILL = {
          fill: 'currentColor',
          test: 2
        };
        var ANIMATION_BASE = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s'
        };
        var RING = {
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          })
        };

        var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: 'opacity'
        });

        var DOT = {
          tag: 'circle',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: '256',
            cy: '364',
            r: '28'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: 'r',
              values: '28;14;28;28;14;28;'
            })
          }, {
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;1;1;0;1;'
            })
          }]
        };
        var QUESTION = {
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '1',
            d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;0;0;0;1;'
            })
          }]
        };
        var EXCLAMATION = {
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        };
        return {
          tag: 'g',
          children: [RING, DOT, QUESTION, EXCLAMATION]
        };
      };
    }
  };

  var SvgSymbols = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var symbolData = node.getAttribute('data-fa-symbol');
          var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
          accumulator['symbol'] = symbol;
          return accumulator;
        }
      };
    }
  };

  var plugins = [PromisePonyfill, InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

  registerPlugins(plugins, {
    mixoutsTo: api
  });
  bunker(bootstrap);

}());
