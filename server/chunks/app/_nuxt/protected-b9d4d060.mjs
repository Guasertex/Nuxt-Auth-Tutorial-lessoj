import { b as useAuth } from '../server.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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
import 'ohash';
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
  __name: "protected",
  __ssrInlineRender: true,
  setup(__props) {
    const { data } = useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold">Hi! I&#39;m protected.</h1><pre>${ssrInterpolate(unref(data))}</pre>`);
      if ((_a = unref(data)) == null ? void 0 : _a.subscribed) {
        _push(`<h2>Thanks for subscribing!</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/protected.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=protected-b9d4d060.mjs.map
