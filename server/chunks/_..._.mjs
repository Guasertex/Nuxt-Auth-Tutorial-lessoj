import GithubProvider from 'next-auth/providers/github';
import TwitchProvider from 'next-auth/providers/twitch';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { N as NuxtAuthHandler, u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'h3';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'next-auth/core';
import 'next-auth/jwt';
import 'requrl';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'nanoid';
import 'dayjs';
import 'unstorage/drivers/memory';
import 'argon2';
import 'http-graceful-shutdown';

let runtimeConfig = useRuntimeConfig();
const prisma = new PrismaClient();
async function getMe(session) {
  var _a;
  return await $fetch("/api/me", {
    method: "POST",
    query: {
      API_ROUTE_SECRET: runtimeConfig.API_ROUTE_SECRET
    },
    body: {
      email: (_a = session == null ? void 0 : session.user) == null ? void 0 : _a.email
    }
  });
}
const _____ = NuxtAuthHandler({
  secret: `${runtimeConfig.API_ROUTE_SECRET}`,
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: "/login"
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: async ({ session, token }) => {
      const me = await getMe(session);
      session.subscribed = me == null ? void 0 : me.subscribed;
      return Promise.resolve(session);
    }
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.public.PROVIDER_GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.PROVIDER_GITHUB_CLIENT_SECRET
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    TwitchProvider.default({
      clientId: runtimeConfig.public.PROVIDER_TWITCH_CLIENT_ID,
      clientSecret: runtimeConfig.PROVIDER_TWITCH_CLIENT_SECRET
    })
  ]
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
