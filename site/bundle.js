(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // external-global-plugin:react-dom
  var require_react_dom = __commonJS({
    "external-global-plugin:react-dom"(exports, module) {
      module.exports = window.ReactDOM;
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (false) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // index.tsx
  var import_react19 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // parts/Site.tsx
  var import_react18 = __toESM(require_react());

  // node_modules/@remix-run/router/dist/router.js
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var Action;
  (function(Action2) {
    Action2["Pop"] = "POP";
    Action2["Push"] = "PUSH";
    Action2["Replace"] = "REPLACE";
  })(Action || (Action = {}));
  var PopStateEventType = "popstate";
  function createBrowserHistory(options) {
    if (options === void 0) {
      options = {};
    }
    function createBrowserLocation(window2, globalHistory) {
      let {
        pathname,
        search,
        hash
      } = window2.location;
      return createLocation(
        "",
        {
          pathname,
          search,
          hash
        },
        // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null,
        globalHistory.state && globalHistory.state.key || "default"
      );
    }
    function createBrowserHref(window2, to) {
      return typeof to === "string" ? to : createPath(to);
    }
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function createKey() {
    return Math.random().toString(36).substr(2, 8);
  }
  function getHistoryState(location, index) {
    return {
      usr: location.state,
      key: location.key,
      idx: index
    };
  }
  function createLocation(current, to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = _extends({
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey()
    });
    return location;
  }
  function createPath(_ref) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = _ref;
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substr(hashIndex);
        path = path.substr(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substr(searchIndex);
        path = path.substr(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) {
      options = {};
    }
    let {
      window: window2 = document.defaultView,
      v5Compat = false
    } = options;
    let globalHistory = window2.history;
    let action = Action.Pop;
    let listener = null;
    let index = getIndex();
    if (index == null) {
      index = 0;
      globalHistory.replaceState(_extends({}, globalHistory.state, {
        idx: index
      }), "");
    }
    function getIndex() {
      let state = globalHistory.state || {
        idx: null
      };
      return state.idx;
    }
    function handlePop() {
      action = Action.Pop;
      let nextIndex = getIndex();
      let delta = nextIndex == null ? null : nextIndex - index;
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: history.location,
          delta
        });
      }
    }
    function push(to, state) {
      action = Action.Push;
      let location = createLocation(history.location, to, state);
      if (validateLocation)
        validateLocation(location, to);
      index = getIndex() + 1;
      let historyState = getHistoryState(location, index);
      let url = history.createHref(location);
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        window2.location.assign(url);
      }
      if (v5Compat && listener) {
        listener({
          action,
          location: history.location,
          delta: 1
        });
      }
    }
    function replace(to, state) {
      action = Action.Replace;
      let location = createLocation(history.location, to, state);
      if (validateLocation)
        validateLocation(location, to);
      index = getIndex();
      let historyState = getHistoryState(location, index);
      let url = history.createHref(location);
      globalHistory.replaceState(historyState, "", url);
      if (v5Compat && listener) {
        listener({
          action,
          location: history.location,
          delta: 0
        });
      }
    }
    function createURL(to) {
      let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
      let href = typeof to === "string" ? to : createPath(to);
      invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
      return new URL(href, base);
    }
    let history = {
      get action() {
        return action;
      },
      get location() {
        return getLocation(window2, globalHistory);
      },
      listen(fn) {
        if (listener) {
          throw new Error("A history only accepts one active listener");
        }
        window2.addEventListener(PopStateEventType, handlePop);
        listener = fn;
        return () => {
          window2.removeEventListener(PopStateEventType, handlePop);
          listener = null;
        };
      },
      createHref(to) {
        return createHref(window2, to);
      },
      createURL,
      encodeLocation(to) {
        let url = createURL(to);
        return {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash
        };
      },
      push,
      replace,
      go(n) {
        return globalHistory.go(n);
      }
    };
    return history;
  }
  var ResultType;
  (function(ResultType2) {
    ResultType2["data"] = "data";
    ResultType2["deferred"] = "deferred";
    ResultType2["redirect"] = "redirect";
    ResultType2["error"] = "error";
  })(ResultType || (ResultType = {}));
  function isIndexRoute(route) {
    return route.index === true;
  }
  function convertRoutesToDataRoutes(routes2, parentPath, allIds) {
    if (parentPath === void 0) {
      parentPath = [];
    }
    if (allIds === void 0) {
      allIds = /* @__PURE__ */ new Set();
    }
    return routes2.map((route, index) => {
      let treePath = [...parentPath, index];
      let id = typeof route.id === "string" ? route.id : treePath.join("-");
      invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
      invariant(!allIds.has(id), 'Found a route id collision on id "' + id + `".  Route id's must be globally unique within Data Router usages`);
      allIds.add(id);
      if (isIndexRoute(route)) {
        let indexRoute = _extends({}, route, {
          id
        });
        return indexRoute;
      } else {
        let pathOrLayoutRoute = _extends({}, route, {
          id,
          children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : void 0
        });
        return pathOrLayoutRoute;
      }
    });
  }
  function matchRoutes(routes2, locationArg, basename) {
    if (basename === void 0) {
      basename = "/";
    }
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = flattenRoutes(routes2);
    rankRouteBranches(branches);
    let matches = null;
    for (let i = 0; matches == null && i < branches.length; ++i) {
      matches = matchRouteBranch(
        branches[i],
        // Incoming pathnames are generally encoded from either window.location
        // or from router.navigate, but we want to match against the unencoded
        // paths in the route definitions.  Memory router locations won't be
        // encoded here but there also shouldn't be anything to decode so this
        // should be a safe operation.  This avoids needing matchRoutes to be
        // history-aware.
        safelyDecodeURI(pathname)
      );
    }
    return matches;
  }
  function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
    if (branches === void 0) {
      branches = [];
    }
    if (parentsMeta === void 0) {
      parentsMeta = [];
    }
    if (parentPath === void 0) {
      parentPath = "";
    }
    let flattenRoute = (route, index, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
        );
        flattenRoutes(route.children, branches, routesMeta, path);
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    };
    routes2.forEach((route, index) => {
      var _route$path;
      if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
        flattenRoute(route, index);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0)
      return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
  }
  function rankRouteBranches(branches) {
    branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
  }
  var paramRe = /^:\w+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname) {
    let {
      routesMeta
    } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end
      }, remainingPathname);
      if (!match)
        return null;
      Object.assign(matchedParams, match.params);
      let route = meta.route;
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
      };
    }
    let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match)
      return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = paramNames.reduce((memo, paramName, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
      return memo;
    }, {});
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) {
      caseSensitive = false;
    }
    if (end === void 0) {
      end = true;
    }
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    let paramNames = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_, paramName) => {
      paramNames.push(paramName);
      return "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
      paramNames.push("*");
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else
      ;
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, paramNames];
  }
  function safelyDecodeURI(value) {
    try {
      return decodeURI(value);
    } catch (error) {
      warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
      return value;
    }
  }
  function safelyDecodeURIComponent(value, paramName) {
    try {
      return decodeURIComponent(value);
    } catch (error) {
      warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/")
      return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined")
        console.warn(message);
      try {
        throw new Error(message);
      } catch (e) {
      }
    }
  }
  function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) {
      fromPathname = "/";
    }
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1)
          segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
  }
  function getPathContributingMatches(matches) {
    return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) {
      isPathRelative = false;
    }
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = _extends({}, toArg);
      invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
      invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
      invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (isPathRelative || toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
  var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  var AbortedDeferredError = class extends Error {
  };
  var DeferredData = class {
    constructor(data, responseInit) {
      this.pendingKeysSet = /* @__PURE__ */ new Set();
      this.subscribers = /* @__PURE__ */ new Set();
      this.deferredKeys = [];
      invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
      let reject;
      this.abortPromise = new Promise((_, r) => reject = r);
      this.controller = new AbortController();
      let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
      this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
      this.controller.signal.addEventListener("abort", onAbort);
      this.data = Object.entries(data).reduce((acc, _ref) => {
        let [key, value] = _ref;
        return Object.assign(acc, {
          [key]: this.trackPromise(key, value)
        });
      }, {});
      if (this.done) {
        this.unlistenAbortSignal();
      }
      this.init = responseInit;
    }
    trackPromise(key, value) {
      if (!(value instanceof Promise)) {
        return value;
      }
      this.deferredKeys.push(key);
      this.pendingKeysSet.add(key);
      let promise = Promise.race([value, this.abortPromise]).then((data) => this.onSettle(promise, key, null, data), (error) => this.onSettle(promise, key, error));
      promise.catch(() => {
      });
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      return promise;
    }
    onSettle(promise, key, error, data) {
      if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
        this.unlistenAbortSignal();
        Object.defineProperty(promise, "_error", {
          get: () => error
        });
        return Promise.reject(error);
      }
      this.pendingKeysSet.delete(key);
      if (this.done) {
        this.unlistenAbortSignal();
      }
      if (error) {
        Object.defineProperty(promise, "_error", {
          get: () => error
        });
        this.emit(false, key);
        return Promise.reject(error);
      }
      Object.defineProperty(promise, "_data", {
        get: () => data
      });
      this.emit(false, key);
      return data;
    }
    emit(aborted, settledKey) {
      this.subscribers.forEach((subscriber) => subscriber(aborted, settledKey));
    }
    subscribe(fn) {
      this.subscribers.add(fn);
      return () => this.subscribers.delete(fn);
    }
    cancel() {
      this.controller.abort();
      this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
      this.emit(true);
    }
    async resolveData(signal) {
      let aborted = false;
      if (!this.done) {
        let onAbort = () => this.cancel();
        signal.addEventListener("abort", onAbort);
        aborted = await new Promise((resolve) => {
          this.subscribe((aborted2) => {
            signal.removeEventListener("abort", onAbort);
            if (aborted2 || this.done) {
              resolve(aborted2);
            }
          });
        });
      }
      return aborted;
    }
    get done() {
      return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
      invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
      return Object.entries(this.data).reduce((acc, _ref2) => {
        let [key, value] = _ref2;
        return Object.assign(acc, {
          [key]: unwrapTrackedPromise(value)
        });
      }, {});
    }
    get pendingKeys() {
      return Array.from(this.pendingKeysSet);
    }
  };
  function isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
  }
  function unwrapTrackedPromise(value) {
    if (!isTrackedPromise(value)) {
      return value;
    }
    if (value._error) {
      throw value._error;
    }
    return value._data;
  }
  var ErrorResponse = class {
    constructor(status, statusText, data, internal) {
      if (internal === void 0) {
        internal = false;
      }
      this.status = status;
      this.statusText = statusText || "";
      this.internal = internal;
      if (data instanceof Error) {
        this.data = data.toString();
        this.error = data;
      } else {
        this.data = data;
      }
    }
  };
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  var validMutationMethodsArr = ["post", "put", "patch", "delete"];
  var validMutationMethods = new Set(validMutationMethodsArr);
  var validRequestMethodsArr = ["get", ...validMutationMethodsArr];
  var validRequestMethods = new Set(validRequestMethodsArr);
  var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
  var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
  var IDLE_NAVIGATION = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0
  };
  var IDLE_FETCHER = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0
  };
  var IDLE_BLOCKER = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
  };
  var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  var isServer = !isBrowser;
  function createRouter(init) {
    invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let dataRoutes = convertRoutesToDataRoutes(init.routes);
    let unlistenHistory = null;
    let subscribers = /* @__PURE__ */ new Set();
    let savedScrollPositions2 = null;
    let getScrollRestorationKey = null;
    let getScrollPosition = null;
    let initialScrollRestored = init.hydrationData != null;
    let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
    let initialErrors = null;
    if (initialMatches == null) {
      let error = getInternalRouterError(404, {
        pathname: init.history.location.pathname
      });
      let {
        matches,
        route
      } = getShortCircuitMatches(dataRoutes);
      initialMatches = matches;
      initialErrors = {
        [route.id]: error
      };
    }
    let initialized = !initialMatches.some((m) => m.route.loader) || init.hydrationData != null;
    let router2;
    let state = {
      historyAction: init.history.action,
      location: init.history.location,
      matches: initialMatches,
      initialized,
      navigation: IDLE_NAVIGATION,
      // Don't restore on initial updateState() if we were SSR'd
      restoreScrollPosition: init.hydrationData != null ? false : null,
      preventScrollReset: false,
      revalidation: "idle",
      loaderData: init.hydrationData && init.hydrationData.loaderData || {},
      actionData: init.hydrationData && init.hydrationData.actionData || null,
      errors: init.hydrationData && init.hydrationData.errors || initialErrors,
      fetchers: /* @__PURE__ */ new Map(),
      blockers: /* @__PURE__ */ new Map()
    };
    let pendingAction = Action.Pop;
    let pendingPreventScrollReset = false;
    let pendingNavigationController;
    let isUninterruptedRevalidation = false;
    let isRevalidationRequired = false;
    let cancelledDeferredRoutes = [];
    let cancelledFetcherLoads = [];
    let fetchControllers = /* @__PURE__ */ new Map();
    let incrementingLoadId = 0;
    let pendingNavigationLoadId = -1;
    let fetchReloadIds = /* @__PURE__ */ new Map();
    let fetchRedirectIds = /* @__PURE__ */ new Set();
    let fetchLoadMatches = /* @__PURE__ */ new Map();
    let activeDeferreds = /* @__PURE__ */ new Map();
    let blockerFunctions = /* @__PURE__ */ new Map();
    let ignoreNextHistoryUpdate = false;
    function initialize() {
      unlistenHistory = init.history.listen((_ref) => {
        let {
          action: historyAction,
          location,
          delta
        } = _ref;
        if (ignoreNextHistoryUpdate) {
          ignoreNextHistoryUpdate = false;
          return;
        }
        warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
        let blockerKey = shouldBlockNavigation({
          currentLocation: state.location,
          nextLocation: location,
          historyAction
        });
        if (blockerKey && delta != null) {
          ignoreNextHistoryUpdate = true;
          init.history.go(delta * -1);
          updateBlocker(blockerKey, {
            state: "blocked",
            location,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location
              });
              init.history.go(delta);
            },
            reset() {
              deleteBlocker(blockerKey);
              updateState({
                blockers: new Map(router2.state.blockers)
              });
            }
          });
          return;
        }
        return startNavigation(historyAction, location);
      });
      if (!state.initialized) {
        startNavigation(Action.Pop, state.location);
      }
      return router2;
    }
    function dispose() {
      if (unlistenHistory) {
        unlistenHistory();
      }
      subscribers.clear();
      pendingNavigationController && pendingNavigationController.abort();
      state.fetchers.forEach((_, key) => deleteFetcher(key));
      state.blockers.forEach((_, key) => deleteBlocker(key));
    }
    function subscribe(fn) {
      subscribers.add(fn);
      return () => subscribers.delete(fn);
    }
    function updateState(newState) {
      state = _extends({}, state, newState);
      subscribers.forEach((subscriber) => subscriber(state));
    }
    function completeNavigation(location, newState) {
      var _location$state, _location$state2;
      let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
      let actionData;
      if (newState.actionData) {
        if (Object.keys(newState.actionData).length > 0) {
          actionData = newState.actionData;
        } else {
          actionData = null;
        }
      } else if (isActionReload) {
        actionData = state.actionData;
      } else {
        actionData = null;
      }
      let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
      for (let [key] of blockerFunctions) {
        deleteBlocker(key);
      }
      let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
      updateState(_extends({}, newState, {
        actionData,
        loaderData,
        historyAction: pendingAction,
        location,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        revalidation: "idle",
        restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
        preventScrollReset,
        blockers: new Map(state.blockers)
      }));
      if (isUninterruptedRevalidation)
        ;
      else if (pendingAction === Action.Pop)
        ;
      else if (pendingAction === Action.Push) {
        init.history.push(location, location.state);
      } else if (pendingAction === Action.Replace) {
        init.history.replace(location, location.state);
      }
      pendingAction = Action.Pop;
      pendingPreventScrollReset = false;
      isUninterruptedRevalidation = false;
      isRevalidationRequired = false;
      cancelledDeferredRoutes = [];
      cancelledFetcherLoads = [];
    }
    async function navigate(to, opts) {
      if (typeof to === "number") {
        init.history.go(to);
        return;
      }
      let {
        path,
        submission,
        error
      } = normalizeNavigateOptions(to, opts);
      let currentLocation = state.location;
      let nextLocation = createLocation(state.location, path, opts && opts.state);
      nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
      let userReplace = opts && opts.replace != null ? opts.replace : void 0;
      let historyAction = Action.Push;
      if (userReplace === true) {
        historyAction = Action.Replace;
      } else if (userReplace === false)
        ;
      else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
        historyAction = Action.Replace;
      }
      let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
      let blockerKey = shouldBlockNavigation({
        currentLocation,
        nextLocation,
        historyAction
      });
      if (blockerKey) {
        updateBlocker(blockerKey, {
          state: "blocked",
          location: nextLocation,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: nextLocation
            });
            navigate(to, opts);
          },
          reset() {
            deleteBlocker(blockerKey);
            updateState({
              blockers: new Map(state.blockers)
            });
          }
        });
        return;
      }
      return await startNavigation(historyAction, nextLocation, {
        submission,
        // Send through the formData serialization error if we have one so we can
        // render at the right error boundary after we match routes
        pendingError: error,
        preventScrollReset,
        replace: opts && opts.replace
      });
    }
    function revalidate() {
      interruptActiveLoads();
      updateState({
        revalidation: "loading"
      });
      if (state.navigation.state === "submitting") {
        return;
      }
      if (state.navigation.state === "idle") {
        startNavigation(state.historyAction, state.location, {
          startUninterruptedRevalidation: true
        });
        return;
      }
      startNavigation(pendingAction || state.historyAction, state.navigation.location, {
        overrideNavigation: state.navigation
      });
    }
    async function startNavigation(historyAction, location, opts) {
      pendingNavigationController && pendingNavigationController.abort();
      pendingNavigationController = null;
      pendingAction = historyAction;
      isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
      saveScrollPosition(state.location, state.matches);
      pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
      let loadingNavigation = opts && opts.overrideNavigation;
      let matches = matchRoutes(dataRoutes, location, init.basename);
      if (!matches) {
        let error = getInternalRouterError(404, {
          pathname: location.pathname
        });
        let {
          matches: notFoundMatches,
          route
        } = getShortCircuitMatches(dataRoutes);
        cancelActiveDeferreds();
        completeNavigation(location, {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        });
        return;
      }
      if (isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
        completeNavigation(location, {
          matches
        });
        return;
      }
      pendingNavigationController = new AbortController();
      let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
      let pendingActionData;
      let pendingError;
      if (opts && opts.pendingError) {
        pendingError = {
          [findNearestBoundary(matches).route.id]: opts.pendingError
        };
      } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
        let actionOutput = await handleAction(request, location, opts.submission, matches, {
          replace: opts.replace
        });
        if (actionOutput.shortCircuited) {
          return;
        }
        pendingActionData = actionOutput.pendingActionData;
        pendingError = actionOutput.pendingActionError;
        let navigation = _extends({
          state: "loading",
          location
        }, opts.submission);
        loadingNavigation = navigation;
        request = new Request(request.url, {
          signal: request.signal
        });
      }
      let {
        shortCircuited,
        loaderData,
        errors
      } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.replace, pendingActionData, pendingError);
      if (shortCircuited) {
        return;
      }
      pendingNavigationController = null;
      completeNavigation(location, _extends({
        matches
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}, {
        loaderData,
        errors
      }));
    }
    async function handleAction(request, location, submission, matches, opts) {
      interruptActiveLoads();
      let navigation = _extends({
        state: "submitting",
        location
      }, submission);
      updateState({
        navigation
      });
      let result;
      let actionMatch = getTargetMatch(matches, location);
      if (!actionMatch.route.action) {
        result = {
          type: ResultType.error,
          error: getInternalRouterError(405, {
            method: request.method,
            pathname: location.pathname,
            routeId: actionMatch.route.id
          })
        };
      } else {
        result = await callLoaderOrAction("action", request, actionMatch, matches, router2.basename);
        if (request.signal.aborted) {
          return {
            shortCircuited: true
          };
        }
      }
      if (isRedirectResult(result)) {
        let replace;
        if (opts && opts.replace != null) {
          replace = opts.replace;
        } else {
          replace = result.location === state.location.pathname + state.location.search;
        }
        await startRedirectNavigation(state, result, {
          submission,
          replace
        });
        return {
          shortCircuited: true
        };
      }
      if (isErrorResult(result)) {
        let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
        if ((opts && opts.replace) !== true) {
          pendingAction = Action.Push;
        }
        return {
          // Send back an empty object we can use to clear out any prior actionData
          pendingActionData: {},
          pendingActionError: {
            [boundaryMatch.route.id]: result.error
          }
        };
      }
      if (isDeferredResult(result)) {
        throw getInternalRouterError(400, {
          type: "defer-action"
        });
      }
      return {
        pendingActionData: {
          [actionMatch.route.id]: result.data
        }
      };
    }
    async function handleLoaders(request, location, matches, overrideNavigation, submission, replace, pendingActionData, pendingError) {
      let loadingNavigation = overrideNavigation;
      if (!loadingNavigation) {
        let navigation = _extends({
          state: "loading",
          location,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0
        }, submission);
        loadingNavigation = navigation;
      }
      let activeSubmission = submission ? submission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
        formMethod: loadingNavigation.formMethod,
        formAction: loadingNavigation.formAction,
        formData: loadingNavigation.formData,
        formEncType: loadingNavigation.formEncType
      } : void 0;
      let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches);
      cancelActiveDeferreds((routeId) => !(matches && matches.some((m) => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m) => m.route.id === routeId));
      if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
        completeNavigation(location, _extends({
          matches,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: pendingError || null
        }, pendingActionData ? {
          actionData: pendingActionData
        } : {}));
        return {
          shortCircuited: true
        };
      }
      if (!isUninterruptedRevalidation) {
        revalidatingFetchers.forEach((rf) => {
          let fetcher = state.fetchers.get(rf.key);
          let revalidatingFetcher = {
            state: "loading",
            data: fetcher && fetcher.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": true
          };
          state.fetchers.set(rf.key, revalidatingFetcher);
        });
        let actionData = pendingActionData || state.actionData;
        updateState(_extends({
          navigation: loadingNavigation
        }, actionData ? Object.keys(actionData).length === 0 ? {
          actionData: null
        } : {
          actionData
        } : {}, revalidatingFetchers.length > 0 ? {
          fetchers: new Map(state.fetchers)
        } : {}));
      }
      pendingNavigationLoadId = ++incrementingLoadId;
      revalidatingFetchers.forEach((rf) => fetchControllers.set(rf.key, pendingNavigationController));
      let {
        results,
        loaderResults,
        fetcherResults
      } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
      revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
      let redirect2 = findRedirect(results);
      if (redirect2) {
        await startRedirectNavigation(state, redirect2, {
          replace
        });
        return {
          shortCircuited: true
        };
      }
      let {
        loaderData,
        errors
      } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
      activeDeferreds.forEach((deferredData, routeId) => {
        deferredData.subscribe((aborted) => {
          if (aborted || deferredData.done) {
            activeDeferreds.delete(routeId);
          }
        });
      });
      markFetchRedirectsDone();
      let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
      return _extends({
        loaderData,
        errors
      }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {});
    }
    function getFetcher(key) {
      return state.fetchers.get(key) || IDLE_FETCHER;
    }
    function fetch2(key, routeId, href, opts) {
      if (isServer) {
        throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
      }
      if (fetchControllers.has(key))
        abortFetcher(key);
      let matches = matchRoutes(dataRoutes, href, init.basename);
      if (!matches) {
        setFetcherError(key, routeId, getInternalRouterError(404, {
          pathname: href
        }));
        return;
      }
      let {
        path,
        submission
      } = normalizeNavigateOptions(href, opts, true);
      let match = getTargetMatch(matches, path);
      pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
      if (submission && isMutationMethod(submission.formMethod)) {
        handleFetcherAction(key, routeId, path, match, matches, submission);
        return;
      }
      fetchLoadMatches.set(key, {
        routeId,
        path,
        match,
        matches
      });
      handleFetcherLoader(key, routeId, path, match, matches, submission);
    }
    async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
      interruptActiveLoads();
      fetchLoadMatches.delete(key);
      if (!match.route.action) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId
        });
        setFetcherError(key, routeId, error);
        return;
      }
      let existingFetcher = state.fetchers.get(key);
      let fetcher = _extends({
        state: "submitting"
      }, submission, {
        data: existingFetcher && existingFetcher.data,
        " _hasFetcherDoneAnything ": true
      });
      state.fetchers.set(key, fetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      let abortController = new AbortController();
      let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
      fetchControllers.set(key, abortController);
      let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, router2.basename);
      if (fetchRequest.signal.aborted) {
        if (fetchControllers.get(key) === abortController) {
          fetchControllers.delete(key);
        }
        return;
      }
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        fetchRedirectIds.add(key);
        let loadingFetcher = _extends({
          state: "loading"
        }, submission, {
          data: void 0,
          " _hasFetcherDoneAnything ": true
        });
        state.fetchers.set(key, loadingFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return startRedirectNavigation(state, actionResult, {
          isFetchActionRedirect: true
        });
      }
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
      if (isDeferredResult(actionResult)) {
        throw getInternalRouterError(400, {
          type: "defer-action"
        });
      }
      let nextLocation = state.navigation.location || state.location;
      let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
      let matches = state.navigation.state !== "idle" ? matchRoutes(dataRoutes, state.navigation.location, init.basename) : state.matches;
      invariant(matches, "Didn't find any matches after fetcher action");
      let loadId = ++incrementingLoadId;
      fetchReloadIds.set(key, loadId);
      let loadFetcher = _extends({
        state: "loading",
        data: actionResult.data
      }, submission, {
        " _hasFetcherDoneAnything ": true
      });
      state.fetchers.set(key, loadFetcher);
      let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
        init.history,
        state,
        matches,
        submission,
        nextLocation,
        isRevalidationRequired,
        cancelledDeferredRoutes,
        cancelledFetcherLoads,
        {
          [match.route.id]: actionResult.data
        },
        void 0,
        // No need to send through errors since we short circuit above
        fetchLoadMatches
      );
      revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
        let staleKey = rf.key;
        let existingFetcher2 = state.fetchers.get(staleKey);
        let revalidatingFetcher = {
          state: "loading",
          data: existingFetcher2 && existingFetcher2.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(staleKey, revalidatingFetcher);
        fetchControllers.set(staleKey, abortController);
      });
      updateState({
        fetchers: new Map(state.fetchers)
      });
      let {
        results,
        loaderResults,
        fetcherResults
      } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
      if (abortController.signal.aborted) {
        return;
      }
      fetchReloadIds.delete(key);
      fetchControllers.delete(key);
      revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
      let redirect2 = findRedirect(results);
      if (redirect2) {
        return startRedirectNavigation(state, redirect2);
      }
      let {
        loaderData,
        errors
      } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, void 0, revalidatingFetchers, fetcherResults, activeDeferreds);
      let doneFetcher = {
        state: "idle",
        data: actionResult.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
      let didAbortFetchLoads = abortStaleFetchLoads(loadId);
      if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
        invariant(pendingAction, "Expected pending action");
        pendingNavigationController && pendingNavigationController.abort();
        completeNavigation(state.navigation.location, {
          matches,
          loaderData,
          errors,
          fetchers: new Map(state.fetchers)
        });
      } else {
        updateState(_extends({
          errors,
          loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
        }, didAbortFetchLoads ? {
          fetchers: new Map(state.fetchers)
        } : {}));
        isRevalidationRequired = false;
      }
    }
    async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
      let existingFetcher = state.fetchers.get(key);
      let loadingFetcher = _extends({
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
      }, submission, {
        data: existingFetcher && existingFetcher.data,
        " _hasFetcherDoneAnything ": true
      });
      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      let abortController = new AbortController();
      let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
      fetchControllers.set(key, abortController);
      let result = await callLoaderOrAction("loader", fetchRequest, match, matches, router2.basename);
      if (isDeferredResult(result)) {
        result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
      }
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      if (fetchRequest.signal.aborted) {
        return;
      }
      if (isRedirectResult(result)) {
        await startRedirectNavigation(state, result);
        return;
      }
      if (isErrorResult(result)) {
        let boundaryMatch = findNearestBoundary(state.matches, routeId);
        state.fetchers.delete(key);
        updateState({
          fetchers: new Map(state.fetchers),
          errors: {
            [boundaryMatch.route.id]: result.error
          }
        });
        return;
      }
      invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
      let doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
    }
    async function startRedirectNavigation(state2, redirect2, _temp) {
      var _window;
      let {
        submission,
        replace,
        isFetchActionRedirect
      } = _temp === void 0 ? {} : _temp;
      if (redirect2.revalidate) {
        isRevalidationRequired = true;
      }
      let redirectLocation = createLocation(
        state2.location,
        redirect2.location,
        // TODO: This can be removed once we get rid of useTransition in Remix v2
        _extends({
          _isRedirect: true
        }, isFetchActionRedirect ? {
          _isFetchActionRedirect: true
        } : {})
      );
      invariant(redirectLocation, "Expected a location on the redirect navigation");
      if (ABSOLUTE_URL_REGEX.test(redirect2.location) && isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
        let newOrigin = init.history.createURL(redirect2.location).origin;
        if (window.location.origin !== newOrigin) {
          if (replace) {
            window.location.replace(redirect2.location);
          } else {
            window.location.assign(redirect2.location);
          }
          return;
        }
      }
      pendingNavigationController = null;
      let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
      let {
        formMethod,
        formAction,
        formEncType,
        formData
      } = state2.navigation;
      if (!submission && formMethod && formAction && formData && formEncType) {
        submission = {
          formMethod,
          formAction,
          formEncType,
          formData
        };
      }
      if (redirectPreserveMethodStatusCodes.has(redirect2.status) && submission && isMutationMethod(submission.formMethod)) {
        await startNavigation(redirectHistoryAction, redirectLocation, {
          submission: _extends({}, submission, {
            formAction: redirect2.location
          }),
          // Preserve this flag across redirects
          preventScrollReset: pendingPreventScrollReset
        });
      } else {
        await startNavigation(redirectHistoryAction, redirectLocation, {
          overrideNavigation: {
            state: "loading",
            location: redirectLocation,
            formMethod: submission ? submission.formMethod : void 0,
            formAction: submission ? submission.formAction : void 0,
            formEncType: submission ? submission.formEncType : void 0,
            formData: submission ? submission.formData : void 0
          },
          // Preserve this flag across redirects
          preventScrollReset: pendingPreventScrollReset
        });
      }
    }
    async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
      let results = await Promise.all([...matchesToLoad.map((match) => callLoaderOrAction("loader", request, match, matches, router2.basename)), ...fetchersToLoad.map((f) => callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, request.signal), f.match, f.matches, router2.basename))]);
      let loaderResults = results.slice(0, matchesToLoad.length);
      let fetcherResults = results.slice(matchesToLoad.length);
      await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map((f) => f.match), fetcherResults, request.signal, true)]);
      return {
        results,
        loaderResults,
        fetcherResults
      };
    }
    function interruptActiveLoads() {
      isRevalidationRequired = true;
      cancelledDeferredRoutes.push(...cancelActiveDeferreds());
      fetchLoadMatches.forEach((_, key) => {
        if (fetchControllers.has(key)) {
          cancelledFetcherLoads.push(key);
          abortFetcher(key);
        }
      });
    }
    function setFetcherError(key, routeId, error) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      deleteFetcher(key);
      updateState({
        errors: {
          [boundaryMatch.route.id]: error
        },
        fetchers: new Map(state.fetchers)
      });
    }
    function deleteFetcher(key) {
      if (fetchControllers.has(key))
        abortFetcher(key);
      fetchLoadMatches.delete(key);
      fetchReloadIds.delete(key);
      fetchRedirectIds.delete(key);
      state.fetchers.delete(key);
    }
    function abortFetcher(key) {
      let controller = fetchControllers.get(key);
      invariant(controller, "Expected fetch controller: " + key);
      controller.abort();
      fetchControllers.delete(key);
    }
    function markFetchersDone(keys) {
      for (let key of keys) {
        let fetcher = getFetcher(key);
        let doneFetcher = {
          state: "idle",
          data: fetcher.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(key, doneFetcher);
      }
    }
    function markFetchRedirectsDone() {
      let doneKeys = [];
      for (let key of fetchRedirectIds) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          fetchRedirectIds.delete(key);
          doneKeys.push(key);
        }
      }
      markFetchersDone(doneKeys);
    }
    function abortStaleFetchLoads(landedId) {
      let yeetedKeys = [];
      for (let [key, id] of fetchReloadIds) {
        if (id < landedId) {
          let fetcher = state.fetchers.get(key);
          invariant(fetcher, "Expected fetcher: " + key);
          if (fetcher.state === "loading") {
            abortFetcher(key);
            fetchReloadIds.delete(key);
            yeetedKeys.push(key);
          }
        }
      }
      markFetchersDone(yeetedKeys);
      return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
      let blocker = state.blockers.get(key) || IDLE_BLOCKER;
      if (blockerFunctions.get(key) !== fn) {
        blockerFunctions.set(key, fn);
      }
      return blocker;
    }
    function deleteBlocker(key) {
      state.blockers.delete(key);
      blockerFunctions.delete(key);
    }
    function updateBlocker(key, newBlocker) {
      let blocker = state.blockers.get(key) || IDLE_BLOCKER;
      invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
      state.blockers.set(key, newBlocker);
      updateState({
        blockers: new Map(state.blockers)
      });
    }
    function shouldBlockNavigation(_ref2) {
      let {
        currentLocation,
        nextLocation,
        historyAction
      } = _ref2;
      if (blockerFunctions.size === 0) {
        return;
      }
      if (blockerFunctions.size > 1) {
        warning(false, "A router only supports one blocker at a time");
      }
      let entries = Array.from(blockerFunctions.entries());
      let [blockerKey, blockerFunction] = entries[entries.length - 1];
      let blocker = state.blockers.get(blockerKey);
      if (blocker && blocker.state === "proceeding") {
        return;
      }
      if (blockerFunction({
        currentLocation,
        nextLocation,
        historyAction
      })) {
        return blockerKey;
      }
    }
    function cancelActiveDeferreds(predicate) {
      let cancelledRouteIds = [];
      activeDeferreds.forEach((dfd, routeId) => {
        if (!predicate || predicate(routeId)) {
          dfd.cancel();
          cancelledRouteIds.push(routeId);
          activeDeferreds.delete(routeId);
        }
      });
      return cancelledRouteIds;
    }
    function enableScrollRestoration(positions, getPosition, getKey) {
      savedScrollPositions2 = positions;
      getScrollPosition = getPosition;
      getScrollRestorationKey = getKey || ((location) => location.key);
      if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
        initialScrollRestored = true;
        let y = getSavedScrollPosition(state.location, state.matches);
        if (y != null) {
          updateState({
            restoreScrollPosition: y
          });
        }
      }
      return () => {
        savedScrollPositions2 = null;
        getScrollPosition = null;
        getScrollRestorationKey = null;
      };
    }
    function saveScrollPosition(location, matches) {
      if (savedScrollPositions2 && getScrollRestorationKey && getScrollPosition) {
        let userMatches = matches.map((m) => createUseMatchesMatch(m, state.loaderData));
        let key = getScrollRestorationKey(location, userMatches) || location.key;
        savedScrollPositions2[key] = getScrollPosition();
      }
    }
    function getSavedScrollPosition(location, matches) {
      if (savedScrollPositions2 && getScrollRestorationKey && getScrollPosition) {
        let userMatches = matches.map((m) => createUseMatchesMatch(m, state.loaderData));
        let key = getScrollRestorationKey(location, userMatches) || location.key;
        let y = savedScrollPositions2[key];
        if (typeof y === "number") {
          return y;
        }
      }
      return null;
    }
    router2 = {
      get basename() {
        return init.basename;
      },
      get state() {
        return state;
      },
      get routes() {
        return dataRoutes;
      },
      initialize,
      subscribe,
      enableScrollRestoration,
      navigate,
      fetch: fetch2,
      revalidate,
      // Passthrough to history-aware createHref used by useHref so we get proper
      // hash-aware URLs in DOM paths
      createHref: (to) => init.history.createHref(to),
      encodeLocation: (to) => init.history.encodeLocation(to),
      getFetcher,
      deleteFetcher,
      dispose,
      getBlocker,
      deleteBlocker,
      _internalFetchControllers: fetchControllers,
      _internalActiveDeferreds: activeDeferreds
    };
    return router2;
  }
  var UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
  function isSubmissionNavigation(opts) {
    return opts != null && "formData" in opts;
  }
  function normalizeNavigateOptions(to, opts, isFetcher) {
    if (isFetcher === void 0) {
      isFetcher = false;
    }
    let path = typeof to === "string" ? to : createPath(to);
    if (!opts || !isSubmissionNavigation(opts)) {
      return {
        path
      };
    }
    if (opts.formMethod && !isValidMethod(opts.formMethod)) {
      return {
        path,
        error: getInternalRouterError(405, {
          method: opts.formMethod
        })
      };
    }
    let submission;
    if (opts.formData) {
      submission = {
        formMethod: opts.formMethod || "get",
        formAction: stripHashFromPath(path),
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData: opts.formData
      };
      if (isMutationMethod(submission.formMethod)) {
        return {
          path,
          submission
        };
      }
    }
    let parsedPath = parsePath(path);
    let searchParams = convertFormDataToSearchParams(opts.formData);
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
      searchParams.append("index", "");
    }
    parsedPath.search = "?" + searchParams;
    return {
      path: createPath(parsedPath),
      submission
    };
  }
  function getLoaderMatchesUntilBoundary(matches, boundaryId) {
    let boundaryMatches = matches;
    if (boundaryId) {
      let index = matches.findIndex((m) => m.route.id === boundaryId);
      if (index >= 0) {
        boundaryMatches = matches.slice(0, index);
      }
    }
    return boundaryMatches;
  }
  function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches) {
    let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : void 0;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location);
    let defaultShouldRevalidate = (
      // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
      isRevalidationRequired || // Clicked the same link, resubmitted a GET form
      currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
      currentUrl.search !== nextUrl.search
    );
    let boundaryId = pendingError ? Object.keys(pendingError)[0] : void 0;
    let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
    let navigationMatches = boundaryMatches.filter((match, index) => {
      if (match.route.loader == null) {
        return false;
      }
      if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id) => id === match.route.id)) {
        return true;
      }
      let currentRouteMatch = state.matches[index];
      let nextRouteMatch = match;
      return shouldRevalidateLoader(match, _extends({
        currentUrl,
        currentParams: currentRouteMatch.params,
        nextUrl,
        nextParams: nextRouteMatch.params
      }, submission, {
        actionResult,
        defaultShouldRevalidate: defaultShouldRevalidate || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
      }));
    });
    let revalidatingFetchers = [];
    fetchLoadMatches && fetchLoadMatches.forEach((f, key) => {
      if (!matches.some((m) => m.route.id === f.routeId)) {
        return;
      } else if (cancelledFetcherLoads.includes(key)) {
        revalidatingFetchers.push(_extends({
          key
        }, f));
      } else {
        let shouldRevalidate = shouldRevalidateLoader(f.match, _extends({
          currentUrl,
          currentParams: state.matches[state.matches.length - 1].params,
          nextUrl,
          nextParams: matches[matches.length - 1].params
        }, submission, {
          actionResult,
          defaultShouldRevalidate
        }));
        if (shouldRevalidate) {
          revalidatingFetchers.push(_extends({
            key
          }, f));
        }
      }
    });
    return [navigationMatches, revalidatingFetchers];
  }
  function isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = (
      // [a] -> [a, b]
      !currentMatch || // [a, b] -> [a, c]
      match.route.id !== currentMatch.route.id
    );
    let isMissingData = currentLoaderData[match.route.id] === void 0;
    return isNew || isMissingData;
  }
  function isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return (
      // param change for this match, /users/123 -> /users/456
      currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
    );
  }
  function shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
      let routeChoice = loaderMatch.route.shouldRevalidate(arg);
      if (typeof routeChoice === "boolean") {
        return routeChoice;
      }
    }
    return arg.defaultShouldRevalidate;
  }
  async function callLoaderOrAction(type, request, match, matches, basename, isStaticRequest, isRouteRequest, requestContext) {
    if (basename === void 0) {
      basename = "/";
    }
    if (isStaticRequest === void 0) {
      isStaticRequest = false;
    }
    if (isRouteRequest === void 0) {
      isRouteRequest = false;
    }
    let resultType;
    let result;
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    let onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    try {
      let handler = match.route[type];
      invariant(handler, "Could not find the " + type + ' to run on the "' + match.route.id + '" route');
      result = await Promise.race([handler({
        request,
        params: match.params,
        context: requestContext
      }), abortPromise]);
      invariant(result !== void 0, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
    } catch (e) {
      resultType = ResultType.error;
      result = e;
    } finally {
      request.signal.removeEventListener("abort", onReject);
    }
    if (isResponse(result)) {
      let status = result.status;
      if (redirectStatusCodes.has(status)) {
        let location = result.headers.get("Location");
        invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
        if (!ABSOLUTE_URL_REGEX.test(location)) {
          let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
          let routePathnames = getPathContributingMatches(activeMatches).map((match2) => match2.pathnameBase);
          let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
          invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location);
          if (basename) {
            let path = resolvedLocation.pathname;
            resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
          }
          location = createPath(resolvedLocation);
        } else if (!isStaticRequest) {
          let currentUrl = new URL(request.url);
          let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
          if (url.origin === currentUrl.origin) {
            location = url.pathname + url.search + url.hash;
          }
        }
        if (isStaticRequest) {
          result.headers.set("Location", location);
          throw result;
        }
        return {
          type: ResultType.redirect,
          status,
          location,
          revalidate: result.headers.get("X-Remix-Revalidate") !== null
        };
      }
      if (isRouteRequest) {
        throw {
          type: resultType || ResultType.data,
          response: result
        };
      }
      let data;
      let contentType = result.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        data = await result.json();
      } else {
        data = await result.text();
      }
      if (resultType === ResultType.error) {
        return {
          type: resultType,
          error: new ErrorResponse(status, result.statusText, data),
          headers: result.headers
        };
      }
      return {
        type: ResultType.data,
        data,
        statusCode: result.status,
        headers: result.headers
      };
    }
    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: result
      };
    }
    if (result instanceof DeferredData) {
      return {
        type: ResultType.deferred,
        deferredData: result
      };
    }
    return {
      type: ResultType.data,
      data: result
    };
  }
  function createClientSideRequest(history, location, signal, submission) {
    let url = history.createURL(stripHashFromPath(location)).toString();
    let init = {
      signal
    };
    if (submission && isMutationMethod(submission.formMethod)) {
      let {
        formMethod,
        formEncType,
        formData
      } = submission;
      init.method = formMethod.toUpperCase();
      init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
    }
    return new Request(url, init);
  }
  function convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams();
    for (let [key, value] of formData.entries()) {
      searchParams.append(key, value instanceof File ? value.name : value);
    }
    return searchParams;
  }
  function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {};
    results.forEach((result, index) => {
      let id = matchesToLoad[index].route.id;
      invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
      if (isErrorResult(result)) {
        let boundaryMatch = findNearestBoundary(matches, id);
        let error = result.error;
        if (pendingError) {
          error = Object.values(pendingError)[0];
          pendingError = void 0;
        }
        errors = errors || {};
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
        loaderData[id] = void 0;
        if (!foundError) {
          foundError = true;
          statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      } else {
        if (isDeferredResult(result)) {
          activeDeferreds.set(id, result.deferredData);
          loaderData[id] = result.deferredData.data;
        } else {
          loaderData[id] = result.data;
        }
        if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      }
    });
    if (pendingError) {
      errors = pendingError;
      loaderData[Object.keys(pendingError)[0]] = void 0;
    }
    return {
      loaderData,
      errors,
      statusCode: statusCode || 200,
      loaderHeaders
    };
  }
  function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
    let {
      loaderData,
      errors
    } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
    for (let index = 0; index < revalidatingFetchers.length; index++) {
      let {
        key,
        match
      } = revalidatingFetchers[index];
      invariant(fetcherResults !== void 0 && fetcherResults[index] !== void 0, "Did not find corresponding fetcher result");
      let result = fetcherResults[index];
      if (isErrorResult(result)) {
        let boundaryMatch = findNearestBoundary(state.matches, match.route.id);
        if (!(errors && errors[boundaryMatch.route.id])) {
          errors = _extends({}, errors, {
            [boundaryMatch.route.id]: result.error
          });
        }
        state.fetchers.delete(key);
      } else if (isRedirectResult(result)) {
        invariant(false, "Unhandled fetcher revalidation redirect");
      } else if (isDeferredResult(result)) {
        invariant(false, "Unhandled fetcher deferred data");
      } else {
        let doneFetcher = {
          state: "idle",
          data: result.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(key, doneFetcher);
      }
    }
    return {
      loaderData,
      errors
    };
  }
  function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = _extends({}, newLoaderData);
    for (let match of matches) {
      let id = match.route.id;
      if (newLoaderData.hasOwnProperty(id)) {
        if (newLoaderData[id] !== void 0) {
          mergedLoaderData[id] = newLoaderData[id];
        }
      } else if (loaderData[id] !== void 0) {
        mergedLoaderData[id] = loaderData[id];
      }
      if (errors && errors.hasOwnProperty(id)) {
        break;
      }
    }
    return mergedLoaderData;
  }
  function findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
    return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
  }
  function getShortCircuitMatches(routes2) {
    let route = routes2.find((r) => r.index || !r.path || r.path === "/") || {
      id: "__shim-error-route__"
    };
    return {
      matches: [{
        params: {},
        pathname: "",
        pathnameBase: "",
        route
      }],
      route
    };
  }
  function getInternalRouterError(status, _temp4) {
    let {
      pathname,
      routeId,
      method,
      type
    } = _temp4 === void 0 ? {} : _temp4;
    let statusText = "Unknown Server Error";
    let errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
      statusText = "Bad Request";
      if (method && pathname && routeId) {
        errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
      } else if (type === "defer-action") {
        errorMessage = "defer() is not supported in actions";
      }
    } else if (status === 403) {
      statusText = "Forbidden";
      errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
    } else if (status === 404) {
      statusText = "Not Found";
      errorMessage = 'No route matches URL "' + pathname + '"';
    } else if (status === 405) {
      statusText = "Method Not Allowed";
      if (method && pathname && routeId) {
        errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
      } else if (method) {
        errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
      }
    }
    return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
  }
  function findRedirect(results) {
    for (let i = results.length - 1; i >= 0; i--) {
      let result = results[i];
      if (isRedirectResult(result)) {
        return result;
      }
    }
  }
  function stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? parsePath(path) : path;
    return createPath(_extends({}, parsedPath, {
      hash: ""
    }));
  }
  function isHashChangeOnly(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
  }
  function isDeferredResult(result) {
    return result.type === ResultType.deferred;
  }
  function isErrorResult(result) {
    return result.type === ResultType.error;
  }
  function isRedirectResult(result) {
    return (result && result.type) === ResultType.redirect;
  }
  function isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
  }
  function isValidMethod(method) {
    return validRequestMethods.has(method);
  }
  function isMutationMethod(method) {
    return validMutationMethods.has(method);
  }
  async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
    for (let index = 0; index < results.length; index++) {
      let result = results[index];
      let match = matchesToLoad[index];
      let currentMatch = currentMatches.find((m) => m.route.id === match.route.id);
      let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== void 0;
      if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
        await resolveDeferredData(result, signal, isFetcher).then((result2) => {
          if (result2) {
            results[index] = result2 || results[index];
          }
        });
      }
    }
  }
  async function resolveDeferredData(result, signal, unwrap) {
    if (unwrap === void 0) {
      unwrap = false;
    }
    let aborted = await result.deferredData.resolveData(signal);
    if (aborted) {
      return;
    }
    if (unwrap) {
      try {
        return {
          type: ResultType.data,
          data: result.deferredData.unwrappedData
        };
      } catch (e) {
        return {
          type: ResultType.error,
          error: e
        };
      }
    }
    return {
      type: ResultType.data,
      data: result.deferredData.data
    };
  }
  function hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v) => v === "");
  }
  function createUseMatchesMatch(match, loaderData) {
    let {
      route,
      pathname,
      params
    } = match;
    return {
      id: route.id,
      pathname,
      params,
      data: loaderData[route.id],
      handle: route.handle
    };
  }
  function getTargetMatch(matches, location) {
    let search = typeof location === "string" ? parsePath(location).search : location.search;
    if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
      return matches[matches.length - 1];
    }
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
  }

  // node_modules/react-router/dist/index.js
  var React = __toESM(require_react());
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function isPolyfill(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
  }
  var is = typeof Object.is === "function" ? Object.is : isPolyfill;
  var {
    useState: useState2,
    useEffect: useEffect2,
    useLayoutEffect: useLayoutEffect2,
    useDebugValue
  } = React;
  var didWarnOld18Alpha = false;
  var didWarnUncachedGetSnapshot = false;
  function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
    if (true) {
      if (!didWarnOld18Alpha) {
        if ("startTransition" in React) {
          didWarnOld18Alpha = true;
          console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
        }
      }
    }
    const value = getSnapshot();
    if (true) {
      if (!didWarnUncachedGetSnapshot) {
        const cachedValue = getSnapshot();
        if (!is(value, cachedValue)) {
          console.error("The result of getSnapshot should be cached to avoid an infinite loop");
          didWarnUncachedGetSnapshot = true;
        }
      }
    }
    const [{
      inst
    }, forceUpdate] = useState2({
      inst: {
        value,
        getSnapshot
      }
    });
    useLayoutEffect2(() => {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    }, [subscribe, value, getSnapshot]);
    useEffect2(() => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
      const handleStoreChange = () => {
        if (checkIfSnapshotChanged(inst)) {
          forceUpdate({
            inst
          });
        }
      };
      return subscribe(handleStoreChange);
    }, [subscribe]);
    useDebugValue(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    const latestGetSnapshot = inst.getSnapshot;
    const prevValue = inst.value;
    try {
      const nextValue = latestGetSnapshot();
      return !is(prevValue, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
    return getSnapshot();
  }
  var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
  var isServerEnvironment = !canUseDOM;
  var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
  var useSyncExternalStore = "useSyncExternalStore" in React ? ((module) => module.useSyncExternalStore)(React) : shim;
  var DataRouterContext = /* @__PURE__ */ React.createContext(null);
  if (true) {
    DataRouterContext.displayName = "DataRouter";
  }
  var DataRouterStateContext = /* @__PURE__ */ React.createContext(null);
  if (true) {
    DataRouterStateContext.displayName = "DataRouterState";
  }
  var AwaitContext = /* @__PURE__ */ React.createContext(null);
  if (true) {
    AwaitContext.displayName = "Await";
  }
  var NavigationContext = /* @__PURE__ */ React.createContext(null);
  if (true) {
    NavigationContext.displayName = "Navigation";
  }
  var LocationContext = /* @__PURE__ */ React.createContext(null);
  if (true) {
    LocationContext.displayName = "Location";
  }
  var RouteContext = /* @__PURE__ */ React.createContext({
    outlet: null,
    matches: []
  });
  if (true) {
    RouteContext.displayName = "Route";
  }
  var RouteErrorContext = /* @__PURE__ */ React.createContext(null);
  if (true) {
    RouteErrorContext.displayName = "RouteError";
  }
  function useHref(to, _temp) {
    let {
      relative
    } = _temp === void 0 ? {} : _temp;
    !useInRouterContext() ? true ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useHref() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    let {
      basename,
      navigator
    } = React.useContext(NavigationContext);
    let {
      hash,
      pathname,
      search
    } = useResolvedPath(to, {
      relative
    });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator.createHref({
      pathname: joinedPathname,
      search,
      hash
    });
  }
  function useInRouterContext() {
    return React.useContext(LocationContext) != null;
  }
  function useLocation() {
    !useInRouterContext() ? true ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useLocation() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    return React.useContext(LocationContext).location;
  }
  function useNavigate() {
    !useInRouterContext() ? true ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useNavigate() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    let {
      basename,
      navigator
    } = React.useContext(NavigationContext);
    let {
      matches
    } = React.useContext(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
    let activeRef = React.useRef(false);
    React.useEffect(() => {
      activeRef.current = true;
    });
    let navigate = React.useCallback(function(to, options) {
      if (options === void 0) {
        options = {};
      }
      true ? warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.") : void 0;
      if (!activeRef.current)
        return;
      if (typeof to === "number") {
        navigator.go(to);
        return;
      }
      let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
      if (basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [basename, navigator, routePathnamesJson, locationPathname]);
    return navigate;
  }
  function useParams() {
    let {
      matches
    } = React.useContext(RouteContext);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
  }
  function useResolvedPath(to, _temp2) {
    let {
      relative
    } = _temp2 === void 0 ? {} : _temp2;
    let {
      matches
    } = React.useContext(RouteContext);
    let {
      pathname: locationPathname
    } = useLocation();
    let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
    return React.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
  }
  function useRoutes(routes2, locationArg) {
    !useInRouterContext() ? true ? invariant(
      false,
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      "useRoutes() may be used only in the context of a <Router> component."
    ) : invariant(false) : void 0;
    let {
      navigator
    } = React.useContext(NavigationContext);
    let dataRouterStateContext = React.useContext(DataRouterStateContext);
    let {
      matches: parentMatches
    } = React.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    if (true) {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      var _parsedLocationArg$pa;
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? true ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    let matches = matchRoutes(routes2, {
      pathname: remainingPathname
    });
    if (true) {
      true ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
      true ? warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
    }
    let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
      params: Object.assign({}, parentParams, match.params),
      pathname: joinPaths([
        parentPathnameBase,
        // Re-encode pathnames that were decoded inside matchRoutes
        navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
      ]),
      pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
        parentPathnameBase,
        // Re-encode pathnames that were decoded inside matchRoutes
        navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
      ])
    })), parentMatches, dataRouterStateContext || void 0);
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ React.createElement(LocationContext.Provider, {
        value: {
          location: _extends2({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default"
          }, location),
          navigationType: Action.Pop
        }
      }, renderedMatches);
    }
    return renderedMatches;
  }
  function DefaultErrorElement() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
      padding: "0.5rem",
      backgroundColor: lightgrey
    };
    let codeStyles = {
      padding: "2px 4px",
      backgroundColor: lightgrey
    };
    let devInfo = null;
    if (true) {
      devInfo = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ React.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /* @__PURE__ */ React.createElement("code", {
        style: codeStyles
      }, "errorElement"), " props on\xA0", /* @__PURE__ */ React.createElement("code", {
        style: codeStyles
      }, "<Route>")));
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, message), stack ? /* @__PURE__ */ React.createElement("pre", {
      style: preStyles
    }, stack) : null, devInfo);
  }
  var RenderErrorBoundary = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return {
        error
      };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location) {
        return {
          error: props.error,
          location: props.location
        };
      }
      return {
        error: props.error || state.error,
        location: state.location
      };
    }
    componentDidCatch(error, errorInfo) {
      console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
      return this.state.error ? /* @__PURE__ */ React.createElement(RouteContext.Provider, {
        value: this.props.routeContext
      }, /* @__PURE__ */ React.createElement(RouteErrorContext.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  };
  function RenderedRoute(_ref) {
    let {
      routeContext,
      match,
      children
    } = _ref;
    let dataRouterContext = React.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match.route.errorElement) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ React.createElement(RouteContext.Provider, {
      value: routeContext
    }, children);
  }
  function _renderMatches(matches, parentMatches, dataRouterState) {
    if (parentMatches === void 0) {
      parentMatches = [];
    }
    if (matches == null) {
      if (dataRouterState != null && dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
      !(errorIndex >= 0) ? true ? invariant(false, "Could not find a matching route for the current errors: " + errors) : invariant(false) : void 0;
      renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    return renderedMatches.reduceRight((outlet, match, index) => {
      let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
      let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ React.createElement(DefaultErrorElement, null) : null;
      let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
      let getChildren = () => /* @__PURE__ */ React.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2
        }
      }, error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet);
      return dataRouterState && (match.route.errorElement || index === 0) ? /* @__PURE__ */ React.createElement(RenderErrorBoundary, {
        location: dataRouterState.location,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: {
          outlet: null,
          matches: matches2
        }
      }) : getChildren();
    }, null);
  }
  var DataRouterHook;
  (function(DataRouterHook3) {
    DataRouterHook3["UseBlocker"] = "useBlocker";
    DataRouterHook3["UseRevalidator"] = "useRevalidator";
  })(DataRouterHook || (DataRouterHook = {}));
  var DataRouterStateHook;
  (function(DataRouterStateHook3) {
    DataRouterStateHook3["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook3["UseActionData"] = "useActionData";
    DataRouterStateHook3["UseRouteError"] = "useRouteError";
    DataRouterStateHook3["UseNavigation"] = "useNavigation";
    DataRouterStateHook3["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook3["UseMatches"] = "useMatches";
    DataRouterStateHook3["UseRevalidator"] = "useRevalidator";
  })(DataRouterStateHook || (DataRouterStateHook = {}));
  function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
  }
  function useDataRouterState(hookName) {
    let state = React.useContext(DataRouterStateContext);
    !state ? true ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
    return state;
  }
  function useRouteContext(hookName) {
    let route = React.useContext(RouteContext);
    !route ? true ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id ? true ? invariant(false, hookName + ' can only be used on routes that contain a unique "id"') : invariant(false) : void 0;
    return thisRoute.route.id;
  }
  function useNavigation() {
    let state = useDataRouterState(DataRouterStateHook.UseNavigation);
    return state.navigation;
  }
  function useMatches() {
    let {
      matches,
      loaderData
    } = useDataRouterState(DataRouterStateHook.UseMatches);
    return React.useMemo(() => matches.map((match) => {
      let {
        pathname,
        params
      } = match;
      return {
        id: match.route.id,
        pathname,
        params,
        data: loaderData[match.route.id],
        handle: match.route.handle
      };
    }), [matches, loaderData]);
  }
  function useRouteError() {
    var _state$errors;
    let error = React.useContext(RouteErrorContext);
    let state = useDataRouterState(DataRouterStateHook.UseRouteError);
    let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    if (error) {
      return error;
    }
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      true ? warning(false, message) : void 0;
    }
  }
  function RouterProvider(_ref) {
    let {
      fallbackElement,
      router: router2
    } = _ref;
    let state = useSyncExternalStore(
      router2.subscribe,
      () => router2.state,
      // We have to provide this so React@18 doesn't complain during hydration,
      // but we pass our serialized hydration data into the router so state here
      // is already synced with what the server saw
      () => router2.state
    );
    let navigator = React.useMemo(() => {
      return {
        createHref: router2.createHref,
        encodeLocation: router2.encodeLocation,
        go: (n) => router2.navigate(n),
        push: (to, state2, opts) => router2.navigate(to, {
          state: state2,
          preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
        }),
        replace: (to, state2, opts) => router2.navigate(to, {
          replace: true,
          state: state2,
          preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
        })
      };
    }, [router2]);
    let basename = router2.basename || "/";
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(DataRouterContext.Provider, {
      value: {
        router: router2,
        navigator,
        static: false,
        // Do we need this?
        basename
      }
    }, /* @__PURE__ */ React.createElement(DataRouterStateContext.Provider, {
      value: state
    }, /* @__PURE__ */ React.createElement(Router, {
      basename: router2.basename,
      location: router2.state.location,
      navigationType: router2.state.historyAction,
      navigator
    }, router2.state.initialized ? /* @__PURE__ */ React.createElement(Routes, null) : fallbackElement))), null);
  }
  function Route(_props) {
    true ? invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : invariant(false);
  }
  function Router(_ref4) {
    let {
      basename: basenameProp = "/",
      children = null,
      location: locationProp,
      navigationType = Action.Pop,
      navigator,
      static: staticProp = false
    } = _ref4;
    !!useInRouterContext() ? true ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = React.useMemo(() => ({
      basename,
      navigator,
      static: staticProp
    }), [basename, navigator, staticProp]);
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default"
    } = locationProp;
    let location = React.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      };
    }, [basename, pathname, search, hash, state, key]);
    true ? warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
    if (location == null) {
      return null;
    }
    return /* @__PURE__ */ React.createElement(NavigationContext.Provider, {
      value: navigationContext
    }, /* @__PURE__ */ React.createElement(LocationContext.Provider, {
      children,
      value: {
        location,
        navigationType
      }
    }));
  }
  function Routes(_ref5) {
    let {
      children,
      location
    } = _ref5;
    let dataRouterContext = React.useContext(DataRouterContext);
    let routes2 = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
    return useRoutes(routes2, location);
  }
  var AwaitRenderStatus;
  (function(AwaitRenderStatus2) {
    AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
    AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
    AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
  })(AwaitRenderStatus || (AwaitRenderStatus = {}));
  var neverSettledPromise = new Promise(() => {
  });
  function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) {
      parentPath = [];
    }
    let routes2 = [];
    React.Children.forEach(children, (element, index) => {
      if (!/* @__PURE__ */ React.isValidElement(element)) {
        return;
      }
      if (element.type === React.Fragment) {
        routes2.push.apply(routes2, createRoutesFromChildren(element.props.children, parentPath));
        return;
      }
      !(element.type === Route) ? true ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : invariant(false) : void 0;
      !(!element.props.index || !element.props.children) ? true ? invariant(false, "An index route cannot have child routes.") : invariant(false) : void 0;
      let treePath = [...parentPath, index];
      let route = {
        id: element.props.id || treePath.join("-"),
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        index: element.props.index,
        path: element.props.path,
        loader: element.props.loader,
        action: element.props.action,
        errorElement: element.props.errorElement,
        hasErrorBoundary: element.props.errorElement != null,
        shouldRevalidate: element.props.shouldRevalidate,
        handle: element.props.handle
      };
      if (element.props.children) {
        route.children = createRoutesFromChildren(element.props.children, treePath);
      }
      routes2.push(route);
    });
    return routes2;
  }
  function enhanceManualRouteObjects(routes2) {
    return routes2.map((route) => {
      let routeClone = _extends2({}, route);
      if (routeClone.hasErrorBoundary == null) {
        routeClone.hasErrorBoundary = routeClone.errorElement != null;
      }
      if (routeClone.children) {
        routeClone.children = enhanceManualRouteObjects(routeClone.children);
      }
      return routeClone;
    });
  }

  // node_modules/react-router-dom/dist/index.js
  var React2 = __toESM(require_react());
  function _extends3() {
    _extends3 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends3.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  function getFormSubmissionInfo(target, defaultAction, options) {
    let method;
    let action;
    let encType;
    let formData;
    if (isFormElement(target)) {
      let submissionTrigger = options.submissionTrigger;
      method = options.method || target.getAttribute("method") || defaultMethod;
      action = options.action || target.getAttribute("action") || defaultAction;
      encType = options.encType || target.getAttribute("enctype") || defaultEncType;
      formData = new FormData(target);
      if (submissionTrigger && submissionTrigger.name) {
        formData.append(submissionTrigger.name, submissionTrigger.value);
      }
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      }
      method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
      encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
      formData = new FormData(form);
      if (target.name) {
        formData.append(target.name, target.value);
      }
    } else if (isHtmlElement(target)) {
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    } else {
      method = options.method || defaultMethod;
      action = options.action || defaultAction;
      encType = options.encType || defaultEncType;
      if (target instanceof FormData) {
        formData = target;
      } else {
        formData = new FormData();
        if (target instanceof URLSearchParams) {
          for (let [name, value] of target) {
            formData.append(name, value);
          }
        } else if (target != null) {
          for (let name of Object.keys(target)) {
            formData.append(name, target[name]);
          }
        }
      }
    }
    let {
      protocol,
      host
    } = window.location;
    let url = new URL(action, protocol + "//" + host);
    return {
      url,
      method: method.toLowerCase(),
      encType,
      formData
    };
  }
  var _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
  var _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
  var _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
  function createBrowserRouter(routes2, opts) {
    return createRouter({
      basename: opts == null ? void 0 : opts.basename,
      history: createBrowserHistory({
        window: opts == null ? void 0 : opts.window
      }),
      hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
      routes: enhanceManualRouteObjects(routes2)
    }).initialize();
  }
  function parseHydrationData() {
    var _window;
    let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) {
      state = _extends3({}, state, {
        errors: deserializeErrors(state.errors)
      });
    }
    return state;
  }
  function deserializeErrors(errors) {
    if (!errors)
      return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries) {
      if (val && val.__type === "RouteErrorResponse") {
        serialized[key] = new ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
      } else if (val && val.__type === "Error") {
        let error = new Error(val.message);
        error.stack = "";
        serialized[key] = error;
      } else {
        serialized[key] = val;
      }
    }
    return serialized;
  }
  function HistoryRouter(_ref3) {
    let {
      basename,
      children,
      history
    } = _ref3;
    const [state, setState] = React2.useState({
      action: history.action,
      location: history.location
    });
    React2.useLayoutEffect(() => history.listen(setState), [history]);
    return /* @__PURE__ */ React2.createElement(Router, {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    });
  }
  if (true) {
    HistoryRouter.displayName = "unstable_HistoryRouter";
  }
  var isBrowser2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  var Link = /* @__PURE__ */ React2.forwardRef(function LinkWithRef(_ref4, ref) {
    let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset
    } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
    let absoluteHref;
    let isExternal = false;
    if (isBrowser2 && typeof to === "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(to)) {
      absoluteHref = to;
      let currentUrl = new URL(window.location.href);
      let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
      if (targetUrl.origin === currentUrl.origin) {
        to = targetUrl.pathname + targetUrl.search + targetUrl.hash;
      } else {
        isExternal = true;
      }
    }
    let href = useHref(to, {
      relative
    });
    let internalOnClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
      preventScrollReset,
      relative
    });
    function handleClick(event) {
      if (onClick)
        onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ React2.createElement("a", _extends3({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref,
        target
      }))
    );
  });
  if (true) {
    Link.displayName = "Link";
  }
  var NavLink = /* @__PURE__ */ React2.forwardRef(function NavLinkWithRef(_ref5, ref) {
    let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      children
    } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
    let path = useResolvedPath(to, {
      relative: rest.relative
    });
    let location = useLocation();
    let routerState = React2.useContext(DataRouterStateContext);
    let {
      navigator
    } = React2.useContext(NavigationContext);
    let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp({
        isActive,
        isPending
      });
    } else {
      className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp({
      isActive,
      isPending
    }) : styleProp;
    return /* @__PURE__ */ React2.createElement(Link, _extends3({}, rest, {
      "aria-current": ariaCurrent,
      className,
      ref,
      style,
      to
    }), typeof children === "function" ? children({
      isActive,
      isPending
    }) : children);
  });
  if (true) {
    NavLink.displayName = "NavLink";
  }
  var Form = /* @__PURE__ */ React2.forwardRef((props, ref) => {
    return /* @__PURE__ */ React2.createElement(FormImpl, _extends3({}, props, {
      ref
    }));
  });
  if (true) {
    Form.displayName = "Form";
  }
  var FormImpl = /* @__PURE__ */ React2.forwardRef((_ref6, forwardedRef) => {
    let {
      reloadDocument,
      replace,
      method = defaultMethod,
      action,
      onSubmit,
      fetcherKey,
      routeId,
      relative,
      preventScrollReset
    } = _ref6, props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
    let submit = useSubmitImpl(fetcherKey, routeId);
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let formAction = useFormAction(action, {
      relative
    });
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented)
        return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
      submit(submitter || event.currentTarget, {
        method: submitMethod,
        replace,
        relative,
        preventScrollReset
      });
    };
    return /* @__PURE__ */ React2.createElement("form", _extends3({
      ref: forwardedRef,
      method: formMethod,
      action: formAction,
      onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
  });
  if (true) {
    FormImpl.displayName = "FormImpl";
  }
  function ScrollRestoration(_ref7) {
    let {
      getKey,
      storageKey
    } = _ref7;
    useScrollRestoration({
      getKey,
      storageKey
    });
    return null;
  }
  if (true) {
    ScrollRestoration.displayName = "ScrollRestoration";
  }
  var DataRouterHook2;
  (function(DataRouterHook3) {
    DataRouterHook3["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook3["UseSubmitImpl"] = "useSubmitImpl";
    DataRouterHook3["UseFetcher"] = "useFetcher";
  })(DataRouterHook2 || (DataRouterHook2 = {}));
  var DataRouterStateHook2;
  (function(DataRouterStateHook3) {
    DataRouterStateHook3["UseFetchers"] = "useFetchers";
    DataRouterStateHook3["UseScrollRestoration"] = "useScrollRestoration";
  })(DataRouterStateHook2 || (DataRouterStateHook2 = {}));
  function getDataRouterConsoleError2(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
  }
  function useDataRouterContext(hookName) {
    let ctx = React2.useContext(DataRouterContext);
    !ctx ? true ? invariant(false, getDataRouterConsoleError2(hookName)) : invariant(false) : void 0;
    return ctx;
  }
  function useDataRouterState2(hookName) {
    let state = React2.useContext(DataRouterStateContext);
    !state ? true ? invariant(false, getDataRouterConsoleError2(hookName)) : invariant(false) : void 0;
    return state;
  }
  function useLinkClickHandler(to, _temp) {
    let {
      target,
      replace: replaceProp,
      state,
      preventScrollReset,
      relative
    } = _temp === void 0 ? {} : _temp;
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to, {
      relative
    });
    return React2.useCallback((event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
        navigate(to, {
          replace,
          state,
          preventScrollReset,
          relative
        });
      }
    }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
  }
  function useSubmitImpl(fetcherKey, routeId) {
    let {
      router: router2
    } = useDataRouterContext(DataRouterHook2.UseSubmitImpl);
    let defaultAction = useFormAction();
    return React2.useCallback(function(target, options) {
      if (options === void 0) {
        options = {};
      }
      if (typeof document === "undefined") {
        throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
      }
      let {
        method,
        encType,
        formData,
        url
      } = getFormSubmissionInfo(target, defaultAction, options);
      let href = url.pathname + url.search;
      let opts = {
        replace: options.replace,
        preventScrollReset: options.preventScrollReset,
        formData,
        formMethod: method,
        formEncType: encType
      };
      if (fetcherKey) {
        !(routeId != null) ? true ? invariant(false, "No routeId available for useFetcher()") : invariant(false) : void 0;
        router2.fetch(fetcherKey, routeId, href, opts);
      } else {
        router2.navigate(href, opts);
      }
    }, [defaultAction, router2, fetcherKey, routeId]);
  }
  function useFormAction(action, _temp2) {
    let {
      relative
    } = _temp2 === void 0 ? {} : _temp2;
    let {
      basename
    } = React2.useContext(NavigationContext);
    let routeContext = React2.useContext(RouteContext);
    !routeContext ? true ? invariant(false, "useFormAction must be used inside a RouteContext") : invariant(false) : void 0;
    let [match] = routeContext.matches.slice(-1);
    let path = _extends3({}, useResolvedPath(action ? action : ".", {
      relative
    }));
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      path.hash = location.hash;
      if (match.route.index) {
        let params = new URLSearchParams(path.search);
        params.delete("index");
        path.search = params.toString() ? "?" + params.toString() : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
  var savedScrollPositions = {};
  function useScrollRestoration(_temp3) {
    let {
      getKey,
      storageKey
    } = _temp3 === void 0 ? {} : _temp3;
    let {
      router: router2
    } = useDataRouterContext(DataRouterHook2.UseScrollRestoration);
    let {
      restoreScrollPosition,
      preventScrollReset
    } = useDataRouterState2(DataRouterStateHook2.UseScrollRestoration);
    let location = useLocation();
    let matches = useMatches();
    let navigation = useNavigation();
    React2.useEffect(() => {
      window.history.scrollRestoration = "manual";
      return () => {
        window.history.scrollRestoration = "auto";
      };
    }, []);
    usePageHide(React2.useCallback(() => {
      if (navigation.state === "idle") {
        let key = (getKey ? getKey(location, matches) : null) || location.key;
        savedScrollPositions[key] = window.scrollY;
      }
      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
      window.history.scrollRestoration = "auto";
    }, [storageKey, getKey, navigation.state, location, matches]));
    if (typeof document !== "undefined") {
      React2.useLayoutEffect(() => {
        try {
          let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
          if (sessionPositions) {
            savedScrollPositions = JSON.parse(sessionPositions);
          }
        } catch (e) {
        }
      }, [storageKey]);
      React2.useLayoutEffect(() => {
        let disableScrollRestoration = router2 == null ? void 0 : router2.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
        return () => disableScrollRestoration && disableScrollRestoration();
      }, [router2, getKey]);
      React2.useLayoutEffect(() => {
        if (restoreScrollPosition === false) {
          return;
        }
        if (typeof restoreScrollPosition === "number") {
          window.scrollTo(0, restoreScrollPosition);
          return;
        }
        if (location.hash) {
          let el = document.getElementById(location.hash.slice(1));
          if (el) {
            el.scrollIntoView();
            return;
          }
        }
        if (preventScrollReset === true) {
          return;
        }
        window.scrollTo(0, 0);
      }, [location, restoreScrollPosition, preventScrollReset]);
    }
  }
  function usePageHide(callback, options) {
    let {
      capture
    } = options || {};
    React2.useEffect(() => {
      let opts = capture != null ? {
        capture
      } : void 0;
      window.addEventListener("pagehide", callback, opts);
      return () => {
        window.removeEventListener("pagehide", callback, opts);
      };
    }, [callback, capture]);
  }

  // parts/pages/GeneratorPage.tsx
  var import_react4 = __toESM(require_react());

  // parts/components/GeneratorAsBackground.tsx
  var import_react = __toESM(require_react());

  // parts/tools.ts
  function many(n, f) {
    return [...Array(n | 0)].map((_, i) => f(i));
  }
  function pick(arr) {
    return arr[Math.random() * arr.length | 0];
  }
  async function fetchCode(url) {
    return await (await fetch(url)).text();
  }
  function randomFxHash() {
    return "oo" + many(50, () => pick("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ")).join("");
  }
  function randomAbHash() {
    return "0x" + many(64, () => pick("0123456789abcdef")).join("");
  }
  function prepareFxHash(html, hash) {
    return html.split("\n").map((str) => {
      if (str.includes("var fxhash ="))
        return 'var fxhash = "' + hash + '";';
      return str;
    }).join("\n");
  }
  function prepareArtBlocks(html, hash) {
    return html.split("\n").map((str) => {
      if (str.includes("window.tokenData ="))
        return `window.tokenData = {hash:"${hash}"};`;
      return str;
    }).join("\n");
  }

  // parts/vars.ts
  var sitePath = document.location.hostname.includes("localhost") ? "/strangerintheq.github.io" : "";
  var sidePadding = 0.1;

  // parts/components/GeneratorAsBackground.tsx
  function GeneratorAsBackground({ type, id, hash = null }) {
    const [html, setHtml] = (0, import_react.useState)();
    const [code, setCode] = (0, import_react.useState)();
    (0, import_react.useEffect)(() => {
      let url = sitePath + "/site/art/" + type + "/" + id + "/generator.html";
      fetchCode(url).then(setCode);
      console.log(url);
    }, [id]);
    (0, import_react.useEffect)(() => {
      code && setHtml(
        type === "artblocks" ? prepareArtBlocks(code, hash || randomAbHash()) : prepareFxHash(code, hash || randomFxHash())
      );
    }, [code, hash, type]);
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, html ? /* @__PURE__ */ import_react.default.createElement(
      "iframe",
      {
        src: "data:text/html," + encodeURIComponent(html),
        style: {
          backgroundImage: `url(data:image/svg+xml,${encodeURIComponent(`
                    <svg 
                        viewBox="${[-innerWidth / 2, -innerHeight / 2, innerWidth, innerHeight]}" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <text 
                            font-family="monospace" 
                            font-size="3em" 
                            text-anchor="middle" 
                            dominant-baseline="central"
                        >
                            L O A D I N G
                        </text>
                    </svg>
                `)})`,
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          border: 0,
          width: "100vw",
          height: "100vh"
        }
      }
    ) : null);
  }

  // parts/components/Navigation.tsx
  var import_react2 = __toESM(require_react());
  function Navigation({ dark = false }) {
    return /* @__PURE__ */ import_react2.default.createElement("div", { style: { margin: "0 -1rem" } }, dark && /* @__PURE__ */ import_react2.default.createElement("div", { dangerouslySetInnerHTML: {
      __html: `<style>a, a:visited {color: white}</style>`
    } }), /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        style: {
          padding: "0.5rem 1rem",
          backgroundColor: dark ? "#0004" : "unset",
          fontSize: "2rem",
          marginTop: "1rem",
          textAlign: "right"
        }
      },
      /* @__PURE__ */ import_react2.default.createElement(Link, { to: sitePath + "/site/art" }, /* @__PURE__ */ import_react2.default.createElement("span", null, "art")),
      /* @__PURE__ */ import_react2.default.createElement("span", { style: { float: "left", color: dark ? "#fff" : "unset" } }, /* @__PURE__ */ import_react2.default.createElement(Link, { to: sitePath + "/" }, /* @__PURE__ */ import_react2.default.createElement("span", null, "Q")))
    ));
  }

  // parts/components/PageWrapper.tsx
  var import_react3 = __toESM(require_react());
  function PageWrapper(props) {
    return /* @__PURE__ */ import_react3.default.createElement("div", { style: {
      width: `var(--base-size)`,
      margin: `0 calc(50vw - calc(var(--base-size) * 0.5))`,
      padding: `0 calc(var(--base-size) * ${sidePadding})`,
      overflow: `visible`,
      paddingBottom: 100
    } }, props.children);
  }

  // parts/pages/GeneratorPage.tsx
  function GeneratorPage() {
    const navigate = useNavigate();
    const { id, hash, type } = useParams();
    return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(PageWrapper, null, /* @__PURE__ */ import_react4.default.createElement(Navigation, { dark: true })), /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        style: {
          position: "fixed",
          left: 0,
          top: 0,
          lineHeight: 0,
          padding: 0,
          margin: 5
        },
        onClick: () => {
          let newHash = type === "artblocks" ? randomAbHash() : randomFxHash();
          navigate("/site/art/" + type + "/" + id + "/" + newHash);
        }
      },
      /* @__PURE__ */ import_react4.default.createElement(Wand, null)
    ), /* @__PURE__ */ import_react4.default.createElement(
      GeneratorAsBackground,
      {
        id,
        type,
        hash
      }
    ));
  }
  function Wand() {
    return /* @__PURE__ */ import_react4.default.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "icon icon-tabler icon-tabler-wand",
        width: "48",
        height: "48",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#000",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      /* @__PURE__ */ import_react4.default.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ import_react4.default.createElement("polyline", { points: "6 21 21 6 18 3 3 18 6 21" }),
      /* @__PURE__ */ import_react4.default.createElement("line", { x1: "15", y1: "6", x2: "18", y2: "9" }),
      /* @__PURE__ */ import_react4.default.createElement("path", { d: "M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" }),
      /* @__PURE__ */ import_react4.default.createElement("path", { d: "M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" })
    );
  }

  // parts/pages/art/ArtPage.tsx
  var import_react14 = __toESM(require_react());

  // parts/useMediaQuery.ts
  var import_react5 = __toESM(require_react());
  function useMediaQuery(query) {
    const queryRef = (0, import_react5.useRef)(window.matchMedia(query));
    const [matches, setMatches] = (0, import_react5.useState)(queryRef.current.matches);
    (0, import_react5.useEffect)(() => {
      const listener = (e) => setMatches(e.matches);
      queryRef.current.addEventListener("change", listener);
      return () => {
        queryRef.current.removeEventListener("change", listener);
      };
    }, []);
    return { matches };
  }

  // parts/pages/art/SliceSection.tsx
  var import_react9 = __toESM(require_react());

  // parts/components/ProjectItem.tsx
  var import_react6 = __toESM(require_react());
  function ProjectItem({
    name,
    type,
    img,
    hash = null,
    c = null,
    r = null,
    link = null
  }) {
    const to = sitePath + "/site/art/" + type + "/" + name.toLowerCase().replaceAll(" ", "-") + "/" + (hash || makeHash(type));
    return /* @__PURE__ */ import_react6.default.createElement("div", { style: { gridColumn: c, gridRow: r } }, /* @__PURE__ */ import_react6.default.createElement(Link, { to }, /* @__PURE__ */ import_react6.default.createElement(DivWithBackgroundImage, { img })));
  }
  function DivWithBackgroundImage({ img }) {
    const backgroundImage = `url(${img.startsWith("http") ? img : sitePath + img})`;
    return /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        style: {
          backgroundImage,
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          boxShadow: "0 0 3px 0 #9c9898"
        }
      }
    );
  }
  function makeHash(type) {
    if (type === "artblocks")
      return randomAbHash();
    return randomFxHash();
  }

  // parts/components/ProjectsGrid.tsx
  var import_react7 = __toESM(require_react());
  function ProjectsGrid({ children = null, ratio, isMobile, rows }) {
    const gap = isMobile ? 0.02 : 0.01;
    const cellSize = (0.8 - gap * (isMobile ? 1 : 3)) / (isMobile ? 2 : 4);
    const w = fromBaseSize(cellSize);
    const h = fromBaseSize(cellSize * ratio);
    return /* @__PURE__ */ import_react7.default.createElement("div", { style: {
      margin: "2rem 0 6rem 0",
      display: "grid",
      gap: `calc(var(--base-size) * ${gap})`,
      gridTemplateColumns: isMobile ? `${w} ${w}` : `${w} ${w} ${w} ${w}`,
      gridTemplateRows: `repeat(${rows}, ${h})`
    } }, children);
  }
  function fromBaseSize(s) {
    return `calc(var(--base-size) * ${s})`;
  }

  // parts/components/ProjectSectionHeader.tsx
  var import_react8 = __toESM(require_react());
  function ProjectSectionHeader({ children = null }) {
    return /* @__PURE__ */ import_react8.default.createElement("div", { style: { fontSize: "2rem", marginTop: "2rem" } }, children);
  }

  // parts/pages/art/SliceSection.tsx
  function SliceSection({ isMobile }) {
    const imgSize = 640;
    const mainNet = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/https://artblocks-mainnet.s3.amazonaws.com/";
    const staging = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/https://art-blocks-artist-staging-goerli.s3.amazonaws.com/";
    const link = "https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419/tokens/";
    const slice = {
      type: "artblocks",
      name: "Slice"
    };
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(ProjectSectionHeader, null, /* @__PURE__ */ import_react9.default.createElement("a", { href: "https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419" }, "SL/CE @ ArtBlocks 2023")), /* @__PURE__ */ import_react9.default.createElement(ProjectsGrid, { isMobile, rows: isMobile ? 4 : 2, ratio: 1.618 }, /* @__PURE__ */ import_react9.default.createElement(
      ProjectItem,
      {
        ...slice,
        c: isMobile ? "1/3" : "2/4",
        r: "1/3",
        link: link + "419000000",
        hash: "0x61464f239e4a9706c864eaf3d8ccc966fe3ec89089752d803ee51adbea37e82c",
        img: mainNet + "419000000.png"
      }
    ), /* @__PURE__ */ import_react9.default.createElement(
      ProjectItem,
      {
        ...slice,
        link: link + "419000000",
        hash: "0x7905f21577209c5fccc82170001218c7281e1991f6c42f7717adb819e2846805",
        img: staging + "48000189.png"
      }
    ), /* @__PURE__ */ import_react9.default.createElement(
      ProjectItem,
      {
        ...slice,
        link: link + "419000000",
        hash: "0x0c8313ca762c7c8aa3b4c078435fd0a84aa17fb0872cc152103b8ff6f22f71a3",
        img: staging + "48000161.png"
      }
    ), /* @__PURE__ */ import_react9.default.createElement(
      ProjectItem,
      {
        ...slice,
        link: link + "419000000",
        hash: "0xecfcfa98860f8fb143d54065186118cc2f429316982597494dc8cffd7f4e4283",
        img: staging + "48000015.png"
      }
    ), /* @__PURE__ */ import_react9.default.createElement(
      ProjectItem,
      {
        ...slice,
        link: link + "419000000",
        hash: "0xfb031983bdfc22fb8e1c8956d6feb654dfef92b5a7f5de4b08e39681b0f68cd3",
        img: staging + "48000055.png"
      }
    )));
  }

  // parts/pages/art/TenturaSection.tsx
  var import_react10 = __toESM(require_react());
  function TenturaSection({ isMobile }) {
    const imgSize = 640;
    const img = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/https://artblocks-mainnet.s3.amazonaws.com/";
    const link = "https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265/tokens/";
    const tentura = {
      type: "artblocks",
      name: "Tentura"
    };
    return /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(ProjectSectionHeader, null, /* @__PURE__ */ import_react10.default.createElement("a", { href: "https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265" }, "Tentura @ ArtBlocks 2022")), /* @__PURE__ */ import_react10.default.createElement(ProjectsGrid, { ratio: 1, isMobile, rows: isMobile ? 4 : 2 }, /* @__PURE__ */ import_react10.default.createElement(
      ProjectItem,
      {
        ...tentura,
        c: isMobile ? "1/3" : "2/4",
        r: "1/3",
        link: link + "265000000",
        hash: "0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930",
        img: img + "265000000.png"
      }
    ), /* @__PURE__ */ import_react10.default.createElement(
      ProjectItem,
      {
        ...tentura,
        link: link + "265000031",
        hash: "0x8cf4266960518b81ae27bd417c0b68e4141a2d531dfc44460708e00b98dfb7f4",
        img: img + "265000031.png"
      }
    ), /* @__PURE__ */ import_react10.default.createElement(
      ProjectItem,
      {
        ...tentura,
        link: link + "265000197",
        hash: "0xe359ebb5e9a5cc2f24b964fc2f33b4e3635b56c08cc77d4cc0290f28ef1656da",
        img: img + "265000197.png"
      }
    ), /* @__PURE__ */ import_react10.default.createElement(
      ProjectItem,
      {
        ...tentura,
        link: link + "265000212",
        hash: "0xa23afc7294ee196ec119d6a55820b507c227821d4608899f8f1a7ddc06b7af4e",
        img: img + "265000212.png"
      }
    ), /* @__PURE__ */ import_react10.default.createElement(
      ProjectItem,
      {
        ...tentura,
        link: link + "265000269",
        hash: "0xa7ececac02b48d8f78121349382d77a6134f5d0a6d6f8e7df7afca27d6369a52",
        img: img + "265000269.png"
      }
    )));
  }

  // parts/pages/art/FxHashSection.tsx
  var import_react11 = __toESM(require_react());
  function FxHashSection({ isMobile }) {
    let link = "https://www.fxhash.xyz/generative/";
    let img = "https://media.fxhash.xyz/w_768/";
    return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(ProjectSectionHeader, null, /* @__PURE__ */ import_react11.default.createElement("a", { href: "https://www.fxhash.xyz/u/StrangerintheQ" }, "fx(hash) 2022-2023")), /* @__PURE__ */ import_react11.default.createElement(ProjectsGrid, { isMobile, ratio: 1, rows: isMobile ? 6 : 3 }, /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Magic Ritual",
        link: link + "24704",
        hash: "ookiXAnGJw28AAv6JVLXiyZceTF9nJSRAxgytsUDV9Gu3na4zeN",
        img: img + "QmbABZquDop8bhVWb49HcU7t4vFgHU1s9ZFomPxeznmr4J"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Mayan Carpet",
        link: link + "24611",
        hash: "oo2WuxbvWm77MLimMCfrt54zXRHhe8HcFqPVPfGxF53Be85Rnhe",
        img: img + "QmScLVUE7HzUvSWy1hTVsqA2WCU6icED9BQbgVDHt4xJV2"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Other side of the Amulet",
        link: link + "15301",
        hash: "oo274c4kMq5xbm7CpvJ6rDHatuuZwhEACfgaQ4BXy9XX4eTu4q7",
        img: img + "QmWs8VMiyr5FTSSfjvf1g3bprS8JNxM8wzAbXFRvVnR3aG"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Hyperspacers",
        link: link + "14107",
        hash: "ooXtaB52GRHraEgQEnT7k9oJzWYPbYbiycXFGmUqNa34bwV53ZX",
        img: img + "QmP67iCt3gayuZGVLafGSYfXUgkJ35hbyiDxgNsGN6LZNQ"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Amulet",
        link: link + "13115",
        hash: "ooognYT3x6SRXbUCKcu34Z7ffDJDrR1KmZE4G4NMo15fZ3pMyuf",
        img: img + "QmNrMUYWUWMWjMyN6focKCBKMMqGcFofhvxMHBGNmUxYG6"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Mitosis",
        link: link + "4058",
        hash: "ooFeDgPwQRjiVXkupQn7wUBdbUjBQaAvFBPDpMN6iGqc5Wgv9N3",
        img: img + "QmeNYkvW72PY1FA14E3NP2fnHfuNvpQQhowFgJ7cZbGuXf"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Cellulae",
        link: link + "1393",
        hash: "oohTtY7QKgRpUDnvbrPdAgUgxgd7p1BpyKZK3BKZqfNmWGv5qrL",
        img: img + "QmTP2YDBnWNohuAD5mtvDsEMdPa6Edf4Tf8rCS5MyhKAzX"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Arachna",
        link: link + "959",
        hash: "ooZxg5naW6KQxijqjDQfFLtGDSBgG2HsMGPtymKfq7PxgRvRdB6",
        img: img + "QmXzaZC1CfSQBm9f7CoBjsBAM153HNYermqY8CPoSdkSYB"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Gravitzappa",
        link: link + "430",
        hash: "oo1WHxm95PJeziDbtPvqtZsEHyufnKZSiY8nJMMDCMxoTVEcLRk",
        img: img + "Qmd2NxZiw3kxWowXcu3ZBfCT633UVfstYDV3zJSaLAmcJn"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Plexus",
        link: link + "206",
        hash: "oopWDMeU2jwUksfUee8yjfU8EqN3Sh4osBbdymLya5xTmiGhoVg",
        img: img + "QmY81Ege4BLhYetp4JTH1Z7KMZmvKmy5vZmtjsSyr2YsH2"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Squatree",
        link: link + "45",
        hash: "oo1M8TxFJQ7T1vSHoUgMCA3zAxLHeNcjHQ45RoomKyCdc57ModH",
        img: img + "QmbBzpLyJAitVDn8hkv6JAF6kZRkk46Eba3UKfNXrTWGc8"
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      ProjectItem,
      {
        type: "fx-hash",
        name: "Hidden Square",
        link: link + "19",
        hash: "ooJgyLKPdBbW1YbNk8cXbHpDdWV9886cJyx934pKwoNUru3RNKD",
        img: img + "QmQ8TYQ8qb29BxTp8kASocMirfuGf5nMXpArEohpG9tzuX"
      }
    )));
  }

  // parts/pages/art/TeiaSection.tsx
  var import_react12 = __toESM(require_react());
  function TeiaSection({ isMobile }) {
    const img = "/site/art/teia/";
    const link = "https://objkt.com/asset/hicetnunc/";
    return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(ProjectSectionHeader, null, /* @__PURE__ */ import_react12.default.createElement("a", { href: "https://objkt.com/profile/tz2MHcnM7fEVtExELMPBZb5njDweqMGvbn8A/created?faContracts=KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton" }, "teia.art (ex Hic Et Nunc) 2021")), /* @__PURE__ */ import_react12.default.createElement(ProjectsGrid, { isMobile, ratio: 1, rows: isMobile ? 6 : 3 }, /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Needlework",
        link: link + "520033",
        img: img + "needlework/preview.jpeg"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Warp Engine",
        link: link + "490373",
        img: img + "warp-engine/preview.jpeg"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Re-Tiler",
        link: link + "468682",
        img: img + "re-tiler/preview.jpeg"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Neural Interface",
        link: link + "447479",
        img: img + "neural-interface/preview.jpeg"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Artificial Eye",
        link: link + "440706",
        img: img + "artificial-eye/preview.jpeg"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "The Nest",
        link: link + "404417",
        img: img + "the-nest/preview.jpeg"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Mozaic Perception",
        link: link + "393547",
        img: img + "mozaic-perception/preview.jpeg"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Dancing Souls",
        link: link + "384125",
        img: img + "dancing-souls/preview.jpeg"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Nucle",
        link: link + "343072",
        img: img + "nucle/preview.png"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Inner Sight",
        link: link + "324272",
        img: img + "inner-sight/preview.png"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Simplicity",
        link: link + "279928",
        img: img + "simplicity/preview.png"
      }
    ), /* @__PURE__ */ import_react12.default.createElement(
      ProjectItem,
      {
        type: "teia",
        name: "Steam Cells",
        link: link + "274293",
        img: img + "steam-cells/preview.png"
      }
    )));
  }

  // parts/components/PageHeader.tsx
  var import_react13 = __toESM(require_react());
  function PageHeader({ children = null }) {
    return /* @__PURE__ */ import_react13.default.createElement("div", { style: { fontSize: "5rem", marginTop: "2rem" } }, children);
  }

  // parts/pages/art/ArtPage.tsx
  function ArtPage() {
    const { matches: isMobile } = useMediaQuery("(max-width: 980px)");
    return /* @__PURE__ */ import_react14.default.createElement(PageWrapper, null, /* @__PURE__ */ import_react14.default.createElement(Navigation, null), /* @__PURE__ */ import_react14.default.createElement(PageHeader, null, "Art"), /* @__PURE__ */ import_react14.default.createElement(SliceSection, { isMobile }), /* @__PURE__ */ import_react14.default.createElement(TenturaSection, { isMobile }), /* @__PURE__ */ import_react14.default.createElement(FxHashSection, { isMobile }), /* @__PURE__ */ import_react14.default.createElement(TeiaSection, { isMobile }));
  }

  // parts/pages/HomePage.tsx
  var import_react15 = __toESM(require_react());
  function HomePage() {
    const navigate = useNavigate();
    (0, import_react15.useEffect)(() => {
      const path = document.location.href, route = "?route=";
      path.includes(route) && navigate(sitePath + "/" + path.split(route)[1]);
    }, []);
    let generators = [
      ["fx-hash", "mayan-carpet"],
      // ["fx-hash", "amulet"],
      ["fx-hash", "cellulae"],
      ["fx-hash", "gravitzappa"],
      ["fx-hash", "hidden-square"],
      ["fx-hash", "magic-ritual"],
      ["fx-hash", "mitosis"],
      // ["fx-hash", "other-side-of-the-amulet"],
      ["teia", "artificial-eye"],
      ["teia", "dancing-souls"],
      ["teia", "inner-sight"],
      ["teia", "mozaic-perception"],
      ["teia", "neural-interface"],
      ["teia", "nucle"],
      ["teia", "re-tiler"],
      ["teia", "simplicity"],
      ["teia", "steam-cells"],
      ["teia", "the-nest"],
      ["teia", "warp-engine"]
    ];
    const [type, id] = generators[Math.random() * generators.length | 0];
    return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(GeneratorAsBackground, { type, id }), /* @__PURE__ */ import_react15.default.createElement(PageWrapper, null, /* @__PURE__ */ import_react15.default.createElement(Navigation, { dark: true })));
  }

  // parts/pages/AboutPage.tsx
  var import_react16 = __toESM(require_react());
  function AboutPage() {
    return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(PageWrapper, null, /* @__PURE__ */ import_react16.default.createElement(Navigation, { dark: false }), /* @__PURE__ */ import_react16.default.createElement("div", { style: { fontSize: "1.5rem", marginTop: "2rem" } }, "Hello there! I'm Stranger in the Q and i'm making art with code."), /* @__PURE__ */ import_react16.default.createElement("div", { style: { fontSize: "1.2rem", marginTop: "2rem" } }, "I have been a software developer for about 2 decades now. I develop different user interfaces and other things related to computer graphics. At some point I started creating images with code to teach myself math and algorithms. As time went on I learned more about it and became more interested in it. That's how I realized that it's an art, a\xA0", /* @__PURE__ */ import_react16.default.createElement("span", { style: { fontWeight: "bold" } }, "Generative Art"), ".")));
  }

  // parts/pages/CodePage.tsx
  var import_react17 = __toESM(require_react());
  function CodePage() {
    return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(PageWrapper, null, /* @__PURE__ */ import_react17.default.createElement(Navigation, { dark: false }), /* @__PURE__ */ import_react17.default.createElement("div", { style: { fontSize: "1.5rem", marginTop: "2rem" } }, "I like to create stuff for myself, so there are several"), /* @__PURE__ */ import_react17.default.createElement("div", { style: { fontSize: "1.2rem", marginTop: "2rem" } })));
  }

  // parts/Site.tsx
  var routes = [
    {
      path: sitePath + "/site/art/:type/:id/:hash",
      element: /* @__PURE__ */ import_react18.default.createElement(GeneratorPage, null)
    },
    {
      path: sitePath + "/site/art",
      element: /* @__PURE__ */ import_react18.default.createElement(ArtPage, null)
    },
    {
      path: sitePath + "/site/about",
      element: /* @__PURE__ */ import_react18.default.createElement(AboutPage, null)
    },
    {
      path: sitePath + "/site/code",
      element: /* @__PURE__ */ import_react18.default.createElement(CodePage, null)
    },
    {
      path: sitePath + "/*",
      exact: false,
      element: /* @__PURE__ */ import_react18.default.createElement(HomePage, null)
    }
  ];
  var router = createBrowserRouter(routes);
  var globalStyle = `<style>
    * {
        margin: 0;
        font-weight: unset;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
        --base-size: min(1600px, 100vw);
    }
</style>`;
  function Site() {
    return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement("div", { dangerouslySetInnerHTML: { __html: globalStyle } }), /* @__PURE__ */ import_react18.default.createElement(RouterProvider, { router }));
  }

  // index.tsx
  var div = document.createElement("div");
  document.body.append(div);
  (0, import_client.createRoot)(div).render(/* @__PURE__ */ import_react19.default.createElement(Site, null));
})();
/*! Bundled license information:

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.3.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.8.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
