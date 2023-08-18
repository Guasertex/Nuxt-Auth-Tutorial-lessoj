import { d as __nuxt_component_0$1, b as useAuth, _ as _export_sfc } from '../server.mjs';
import { mergeProps, useSSRContext, withAsyncContext, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-61ac2fca.mjs';
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

const _sfc_main$3 = {
  __name: "ProviderLogin",
  __ssrInlineRender: true,
  props: {
    providerName: String
  },
  setup(__props) {
    useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "flex items-center border border-gray-500 px-4 py-2 rounded-lg text-gray-500 text-sm font-medium hover:text-black hover:bg-gray-100" }, _attrs))}> Log in with ${ssrInterpolate(__props.providerName)}</button>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProviderLogin.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<form${ssrRenderAttrs(mergeProps({
    class: "space-y-4 md:space-y-6",
    action: "#"
  }, _attrs))}><div><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label><input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"></div><div><label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label><input type="password" name="password" id="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></div><div class="flex items-center justify-between"><div class="flex items-start"><div class="flex items-center h-5"><input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"></div><div class="ml-3 text-sm"><label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label></div></div><a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a></div><button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Sign in </button><p class="text-sm font-light text-gray-500 dark:text-gray-400"> Don\u2019t have an\xA0account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a></p></form>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: providers } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/auth/providers", "$ABNRyb1YFZ")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0$1;
      const _component_ProviderLogin = __nuxt_component_1;
      const _component_LoginForm = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full h-auto" }, _attrs))}><div class="container flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">`);
      _push(ssrRenderComponent(_component_Logo, { class: "mb-6" }, null, _parent));
      _push(`<div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"><div class="p-6 space-y-4 md:space-y-6 sm:p-8"><h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Welcome back </h1><div class="flex justify-between"><!--[-->`);
      ssrRenderList(unref(providers), (provider) => {
        _push(ssrRenderComponent(_component_ProviderLogin, {
          key: provider.id,
          "provider-name": provider.name
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex items-center"><div class="bg-gray-500 h-[.125rem] w-full"></div><p class="mx-8 text-medium text-gray-500">or</p><div class="bg-gray-500 h-[.125rem] w-full"></div></div>`);
      _push(ssrRenderComponent(_component_LoginForm, null, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Login = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Login, mergeProps({ class: "w-full h-auto" }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-14b088f5.mjs.map
