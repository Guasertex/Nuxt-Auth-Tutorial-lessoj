import { withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-61ac2fca.mjs';
import { e as useRequestHeaders } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import 'ohash';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'defu';
import 'requrl';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'next-auth/core';
import 'next-auth/jwt';
import 'node:fs';
import 'node:url';
import 'pathe';
import '@prisma/client';
import 'nanoid';
import 'dayjs';
import 'unstorage/drivers/memory';
import 'argon2';
import 'http-graceful-shutdown';

const _sfc_main = {
  __name: "token",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const headers = useRequestHeaders(["cookie"]);
    const { data: token } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/token", { headers }, "$uHtx0Gb6vl")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<pre${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(token) || "no token present, are you logged in?")}</pre>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/token.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=token-5fba1a1d.mjs.map
