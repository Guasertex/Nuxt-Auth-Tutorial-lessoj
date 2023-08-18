globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setCookie, appendHeader, parseCookies, getHeaders, getMethod, getQuery as getQuery$1, createError, isMethod, readBody, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, deleteCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn, defu as defu$1 } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { AuthHandler } from 'next-auth/core';
import { getToken as getToken$1 } from 'next-auth/jwt';
import getURL from 'requrl';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import sessionDriver from 'unstorage/drivers/memory';
import * as argon2 from 'argon2';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "session": {
      "api": {
        "isEnabled": true,
        "methods": [
          "patch",
          "delete",
          "get",
          "post"
        ],
        "basePath": "/api/session"
      }
    },
    "GITHUB_CLIENT_ID": "",
    "TWITCH_CLIENT_ID": "",
    "auth": {
      "isEnabled": true,
      "origin": "",
      "basePath": "/api/auth",
      "trustHost": false,
      "enableSessionRefreshPeriodically": false,
      "enableSessionRefreshOnWindowFocus": true,
      "enableGlobalAppMiddleware": true,
      "defaultProvider": "",
      "addDefaultCallbackUrl": true,
      "globalMiddlewareOptions": {
        "allow404WithoutAuth": true,
        "addDefaultCallbackUrl": true
      }
    }
  },
  "GITHUB_CLIENT_SECRET": "",
  "TWITCH_CLIENT_SECRET": "",
  "API_ROUTE_SECRET": "",
  "auth": {
    "isEnabled": true,
    "origin": "",
    "basePath": "/api/auth",
    "trustHost": false,
    "enableSessionRefreshPeriodically": false,
    "enableSessionRefreshOnWindowFocus": true,
    "enableGlobalAppMiddleware": true,
    "defaultProvider": "",
    "addDefaultCallbackUrl": true,
    "globalMiddlewareOptions": {
      "allow404WithoutAuth": true,
      "addDefaultCallbackUrl": true
    },
    "isOriginSet": false
  },
  "session": {
    "isEnabled": true,
    "session": {
      "expiryInSeconds": 600,
      "idLength": 64,
      "storePrefix": "sessions",
      "cookieSameSite": "lax",
      "cookieSecure": true,
      "cookieHttpOnly": true,
      "storageOptions": {
        "driver": "memory",
        "options": {}
      },
      "domain": false,
      "ipPinning": false,
      "rolling": false
    },
    "api": {
      "isEnabled": true,
      "methods": [
        "patch",
        "delete",
        "get",
        "post"
      ],
      "basePath": "/api/session"
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage$1 = createStorage({});

storage$1.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

let preparedAuthHandler;
let usedSecret;
const SUPPORTED_ACTIONS = ["providers", "session", "csrf", "signin", "signout", "callback", "verify-request", "error", "_log"];
const ERROR_MESSAGES = {
  NO_SECRET: "AUTH_NO_SECRET: No `secret` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development",
  NO_ORIGIN: "AUTH_NO_ORIGIN: No `origin` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development"
};
const readBodyForNext = async (event) => {
  let body;
  if (isMethod(event, "PATCH") || isMethod(event, "POST") || isMethod(event, "PUT") || isMethod(event, "DELETE")) {
    body = await readBody(event);
  }
  return body;
};
const parseActionAndProvider = ({ context }) => {
  const params = context.params?._?.split("/");
  if (!params || ![1, 2].includes(params.length)) {
    throw createError({ statusCode: 400, statusMessage: `Invalid path used for auth-endpoint. Supply either one path parameter (e.g., \`/api/auth/session\`) or two (e.g., \`/api/auth/signin/github\` after the base path (in previous examples base path was: \`/api/auth/\`. Received \`${params}\`` });
  }
  const [unvalidatedAction, providerId] = params;
  const action = SUPPORTED_ACTIONS.find((action2) => action2 === unvalidatedAction);
  if (!action) {
    throw createError({ statusCode: 400, statusMessage: `Called endpoint with unsupported action ${unvalidatedAction}. Only the following actions are supported: ${SUPPORTED_ACTIONS.join(", ")}` });
  }
  return { action, providerId };
};
const getServerOrigin = (event) => {
  const envOrigin = process.env.AUTH_ORIGIN;
  if (envOrigin) {
    return envOrigin;
  }
  const runtimeConfigOrigin = useRuntimeConfig().auth.origin;
  if (runtimeConfigOrigin) {
    return runtimeConfigOrigin;
  }
  if (event && "production" !== "production") {
    return getURL(event.node.req);
  }
  throw new Error(ERROR_MESSAGES.NO_ORIGIN);
};
const detectHost = (event, { trusted, basePath }) => {
  if (trusted) {
    const forwardedValue = getURL(event.node.req);
    if (forwardedValue) {
      return Array.isArray(forwardedValue) ? forwardedValue[0] : forwardedValue;
    }
  }
  let origin;
  try {
    origin = getServerOrigin(event);
  } catch (error) {
    return void 0;
  }
  return joinURL(origin, basePath);
};
const NuxtAuthHandler = (nuxtAuthOptions) => {
  usedSecret = nuxtAuthOptions?.secret;
  if (!usedSecret) {
    {
      throw new Error(ERROR_MESSAGES.NO_SECRET);
    }
  }
  const options = defu$1(nuxtAuthOptions, {
    secret: usedSecret,
    logger: void 0,
    providers: [],
    trustHost: useRuntimeConfig().auth.trustHost
  });
  const getInternalNextAuthRequestData = async (event) => {
    const nextRequest = {
      host: detectHost(event, { trusted: useRuntimeConfig().auth.trustHost, basePath: useRuntimeConfig().auth.basePath }),
      body: void 0,
      cookies: parseCookies(event),
      query: void 0,
      headers: getHeaders(event),
      method: getMethod(event),
      providerId: void 0,
      error: void 0
    };
    if (event.context.checkSessionOnNonAuthRequest === true) {
      return {
        ...nextRequest,
        method: "GET",
        action: "session"
      };
    }
    const query = getQuery$1(event);
    const { action, providerId } = parseActionAndProvider(event);
    const error = query.error;
    if (Array.isArray(error)) {
      throw createError({ statusCode: 400, statusMessage: "Error query parameter can only appear once" });
    }
    const body = await readBodyForNext(event);
    return {
      ...nextRequest,
      body,
      query,
      action,
      providerId,
      error: String(error) || void 0
    };
  };
  const handler = eventHandler(async (event) => {
    const { res } = event.node;
    const nextRequest = await getInternalNextAuthRequestData(event);
    const nextResult = await AuthHandler({
      req: nextRequest,
      options
    });
    if (nextResult.status) {
      res.statusCode = nextResult.status;
    }
    nextResult.cookies?.forEach((cookie) => setCookie(event, cookie.name, cookie.value, cookie.options));
    nextResult.headers?.forEach((header) => appendHeader(event, header.key, header.value));
    if (!nextResult.redirect) {
      return nextResult.body;
    }
    if (nextRequest.body?.json) {
      return { url: nextResult.redirect };
    }
    return sendRedirect(event, nextResult.redirect);
  });
  if (preparedAuthHandler) {
    console.warn("You setup the auth handler for a second time - this is likely undesired. Make sure that you only call `NuxtAuthHandler( ... )` once");
  }
  preparedAuthHandler = handler;
  return handler;
};
const getToken = ({ event, secureCookie, secret, ...rest }) => getToken$1({
  // @ts-expect-error As our request is not a real next-auth request, we pass down only what's required for the method, as per code from https://github.com/nextauthjs/next-auth/blob/8387c78e3fef13350d8a8c6102caeeb05c70a650/packages/next-auth/src/jwt/index.ts#L68
  req: {
    cookies: parseCookies(event),
    headers: getHeaders(event)
  },
  // see https://github.com/nextauthjs/next-auth/blob/8387c78e3fef13350d8a8c6102caeeb05c70a650/packages/next-auth/src/jwt/index.ts#L73
  secureCookie: secureCookie || getServerOrigin(event).startsWith("https://"),
  secret: secret || usedSecret,
  ...rest
});

function defineNitroPlugin(def) {
  return def;
}
const _eZKsaLdEYk = defineNitroPlugin(() => {
  try {
    getServerOrigin();
  } catch (error) {
    {
      throw error;
    }
  }
});

const plugins = [
  _eZKsaLdEYk
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-08-18T19:50:19.406Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/entry.82b23e14.js": {
    "type": "application/javascript",
    "etag": "\"260a3-SVEct+g/RPnyF2mFIwJe8tWt+u4\"",
    "mtime": "2023-08-18T19:50:19.406Z",
    "size": 155811,
    "path": "../public/_nuxt/entry.82b23e14.js"
  },
  "/_nuxt/error-404.4a856261.js": {
    "type": "application/javascript",
    "etag": "\"8ad-uGXYa3WCXtjazubvUO8ypR//bok\"",
    "mtime": "2023-08-18T19:50:19.406Z",
    "size": 2221,
    "path": "../public/_nuxt/error-404.4a856261.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-08-18T19:50:19.406Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-08-18T19:50:19.406Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/error-500.e3a17274.js": {
    "type": "application/javascript",
    "etag": "\"756-KjJaF3TnUsD6l1EsXritdi022jM\"",
    "mtime": "2023-08-18T19:50:19.406Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.e3a17274.js"
  },
  "/_nuxt/fetch.591a2b80.js": {
    "type": "application/javascript",
    "etag": "\"2da9-fW6+VcvF3+N2ZWn7zUl/eez4GUE\"",
    "mtime": "2023-08-18T19:50:19.402Z",
    "size": 11689,
    "path": "../public/_nuxt/fetch.591a2b80.js"
  },
  "/_nuxt/index.10131520.js": {
    "type": "application/javascript",
    "etag": "\"af-LsJPYz26aldHoi874PjxpkxBEYU\"",
    "mtime": "2023-08-18T19:50:19.402Z",
    "size": 175,
    "path": "../public/_nuxt/index.10131520.js"
  },
  "/_nuxt/login.ff3809c0.js": {
    "type": "application/javascript",
    "etag": "\"f39-5YlM6NzfhrxUvtGytwrOt9etD94\"",
    "mtime": "2023-08-18T19:50:19.402Z",
    "size": 3897,
    "path": "../public/_nuxt/login.ff3809c0.js"
  },
  "/_nuxt/protected.2e68f928.js": {
    "type": "application/javascript",
    "etag": "\"184-p+tKPBSU3e10RJIpycfMuH7YF6k\"",
    "mtime": "2023-08-18T19:50:19.402Z",
    "size": 388,
    "path": "../public/_nuxt/protected.2e68f928.js"
  },
  "/_nuxt/public.7fd27b83.js": {
    "type": "application/javascript",
    "etag": "\"ad-G9bmSNcwk4zAEGBgzOFmfTZf1sc\"",
    "mtime": "2023-08-18T19:50:19.402Z",
    "size": 173,
    "path": "../public/_nuxt/public.7fd27b83.js"
  },
  "/_nuxt/token.e65186a1.js": {
    "type": "application/javascript",
    "etag": "\"16b-9U75QrBCTKAOKTSHxhuhx6FieWM\"",
    "mtime": "2023-08-18T19:50:19.402Z",
    "size": 363,
    "path": "../public/_nuxt/token.e65186a1.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

let prisma;
const _33caVx = eventHandler((event) => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  event.context.prisma = prisma;
});

const sessionConfig = useRuntimeConfig().session.session;
const driver = sessionDriver(sessionConfig.storageOptions.options);
const storage = createStorage({ driver }).mount(sessionConfig.storePrefix, driver);
const sessionStorage = prefixStorage(storage, sessionConfig.storePrefix);

const getStorageSession = (sessionId) => sessionStorage.getItem(sessionId);
const setStorageSession = (sessionId, session) => sessionStorage.setItem(sessionId, session);
const dropStorageSession = (sessionId) => sessionStorage.removeItem(sessionId);

class IpMismatch extends Error {
  constructor(message = "User IP doesn't match the one in session") {
    super(message);
  }
}
class IpMissingFromSession extends Error {
  constructor(message = "No IP in session even though ipPinning is enabled") {
    super(message);
  }
}
class SessionExpired extends Error {
  constructor(message = "Session expired") {
    super(message);
  }
}

const argon2Options = {
  type: argon2.argon2id,
  hashLength: 60
};
const hashIpAddress = (ip) => !ip ? Promise.resolve(void 0) : argon2.hash(ip, argon2Options);
const ipAddressesMatch = (ip, ipHash) => !ip && !ipHash ? Promise.resolve(false) : argon2.verify(ipHash, ip, argon2Options);
const extractIpFromHeader = (header) => {
  if (Array.isArray(header)) {
    return header[0].split(",")[0];
  }
  if (typeof header === "string") {
    return header.split(",")[0];
  }
  return void 0;
};
const getRequestIpAddress = ({ req }) => {
  const sessionOptions = useRuntimeConfig().session.session;
  const headerName = sessionOptions.ipPinning?.headerName;
  if (typeof sessionOptions.ipPinning === "object" && "headerName" in sessionOptions.ipPinning.headerName) {
    return extractIpFromHeader(req.headers[headerName.toLowerCase()]);
  }
  return req.socket.remoteAddress;
};
const getHashedIpAddress = (event) => {
  return hashIpAddress(getRequestIpAddress(event));
};
const processSessionIp = async (event, session) => {
  const hashedIP = session.ip;
  if (!hashedIP) {
    throw new IpMissingFromSession();
  }
  const requestIP = getRequestIpAddress(event);
  const matches = await ipAddressesMatch(requestIP, hashedIP);
  if (!matches) {
    throw new IpMismatch();
  }
};

const SESSION_COOKIE_NAME = "sessionId";
const safeSetCookie = (event, name, value, createdAt) => {
  const sessionOptions = useRuntimeConfig().session.session;
  const expirationDate = sessionOptions.expiryInSeconds !== false ? new Date(createdAt.getTime() + sessionOptions.expiryInSeconds * 1e3) : void 0;
  setCookie(event, name, value, {
    expires: expirationDate,
    secure: sessionOptions.cookieSecure,
    httpOnly: sessionOptions.cookieHttpOnly,
    sameSite: sessionOptions.cookieSameSite,
    domain: sessionOptions.domain || void 0
  });
};
const checkSessionExpirationTime = (session, sessionExpiryInSeconds) => {
  const now = dayjs();
  if (now.diff(dayjs(session.createdAt), "seconds") > sessionExpiryInSeconds) {
    throw new SessionExpired();
  }
};
const getCurrentSessionId = (event) => {
  const sessionIdRequest = parseCookies(event).sessionId;
  const sessionIdContext = event.context.sessionId;
  if (sessionIdContext && sessionIdRequest && sessionIdContext !== sessionIdRequest) {
    return null;
  }
  return sessionIdRequest || sessionIdContext || null;
};
const deleteSession = async (event) => {
  const currentSessionId = getCurrentSessionId(event);
  if (currentSessionId) {
    await dropStorageSession(currentSessionId);
  }
  deleteCookie(event, SESSION_COOKIE_NAME);
};
const newSession = async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const sessionOptions = runtimeConfig.session.session;
  const now = new Date();
  const sessionId = nanoid(sessionOptions.idLength);
  safeSetCookie(event, SESSION_COOKIE_NAME, sessionId, now);
  const session = {
    id: sessionId,
    createdAt: now,
    ip: sessionOptions.ipPinning ? await getHashedIpAddress(event) : void 0
  };
  await setStorageSession(sessionId, session);
  return session;
};
const getSession = async (event) => {
  const existingSessionId = getCurrentSessionId(event);
  if (!existingSessionId) {
    return null;
  }
  const session = await getStorageSession(existingSessionId);
  if (!isSession(session)) {
    return null;
  }
  const runtimeConfig = useRuntimeConfig();
  const sessionOptions = runtimeConfig.session.session;
  const sessionExpiryInSeconds = sessionOptions.expiryInSeconds;
  try {
    if (sessionExpiryInSeconds !== false) {
      checkSessionExpirationTime(session, sessionExpiryInSeconds);
    }
    if (sessionOptions.ipPinning) {
      await processSessionIp(event, session);
    }
  } catch {
    await deleteSession(event);
    return null;
  }
  return session;
};
const updateSessionExpirationDate = (session, event) => {
  const now = new Date();
  safeSetCookie(event, SESSION_COOKIE_NAME, session.id, now);
  return { ...session, createdAt: now };
};
function isSession(shape) {
  return typeof shape === "object" && !!shape && "id" in shape && "createdAt" in shape;
}
const ensureSession = async (event) => {
  const sessionOptions = useRuntimeConfig().session.session;
  let session = await getSession(event);
  if (!session) {
    session = await newSession(event);
  } else if (sessionOptions.rolling) {
    session = updateSessionExpirationDate(session, event);
  }
  event.context.sessionId = session.id;
  event.context.session = session;
  return session;
};
const _5ev2Lr = eventHandler(async (event) => {
  await ensureSession(event);
  event.res.on("finish", async () => {
    const session = await getSession(event);
    if (!session) {
      return;
    }
    await setStorageSession(session.id, event.context.session);
  });
});

const checkIfObjectAndContainsIllegalKeys = (shape) => {
  if (typeof shape !== "object" || !shape) {
    return false;
  }
  return !!["id", "createdAt", "ip"].find((key) => Object.prototype.hasOwnProperty.call(shape, key));
};
const _i9ucmk = eventHandler(async (event) => {
  const body = await readBody(event);
  if (checkIfObjectAndContainsIllegalKeys(body)) {
    throw createError({ statusCode: 400, message: "Trying to pass invalid data to session, likely an object with `id` or `createdAt` fields or a non-object" });
  }
  event.context.session = {
    ...event.context.session,
    ...body
  };
  return event.context.session;
});

const _VsgxCZ = eventHandler(async (event) => {
  await deleteSession(event);
  return null;
});

const _kEvMo0 = eventHandler((event) => event.context.session);

const _t0mlfS = eventHandler(async (event) => {
  const body = await readBody(event);
  if (checkIfObjectAndContainsIllegalKeys(body)) {
    throw createError({ statusCode: 400, message: "Trying to pass invalid data to session, likely an object with `id` or `createdAt` fields or a non-object" });
  }
  event.context.session = {
    ...body,
    id: event.context.session.id,
    createdAt: event.context.session.createdAt,
    ip: event.context.session.ip
  };
  return event.context.session;
});

const _lazy_6SwldL = () => import('../_..._.mjs');
const _lazy_59NyxH = () => import('../me.post.mjs');
const _lazy_7lOuwb = () => import('../token.get.mjs');
const _lazy_qszFjo = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _33caVx, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/**', handler: _lazy_6SwldL, lazy: true, middleware: false, method: undefined },
  { route: '/api/me', handler: _lazy_59NyxH, lazy: true, middleware: false, method: "post" },
  { route: '/api/token', handler: _lazy_7lOuwb, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_qszFjo, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _5ev2Lr, lazy: false, middleware: true, method: undefined },
  { route: '/api/session', handler: _i9ucmk, lazy: false, middleware: false, method: "patch" },
  { route: '/api/session', handler: _VsgxCZ, lazy: false, middleware: false, method: "delete" },
  { route: '/api/session', handler: _kEvMo0, lazy: false, middleware: false, method: "get" },
  { route: '/api/session', handler: _t0mlfS, lazy: false, middleware: false, method: "post" },
  { route: '/**', handler: _lazy_qszFjo, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { NuxtAuthHandler as N, useNitroApp as a, getRouteRules as b, getToken as g, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
