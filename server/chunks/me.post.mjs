import { eventHandler, readBody, getQuery, createError } from 'h3';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
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
import '@prisma/client';
import 'nanoid';
import 'dayjs';
import 'unstorage/drivers/memory';
import 'argon2';
import 'http-graceful-shutdown';

const me_post = eventHandler(async (event) => {
  const body = await readBody(event);
  const query = await getQuery(event);
  const runtimeConfig = useRuntimeConfig();
  if (query.API_ROUTE_SECRET !== runtimeConfig.API_ROUTE_SECRET) {
    throw createError({
      statusCode: 401,
      statusMessage: "You are not authorized to call this API."
    });
  }
  const account = await event.context.prisma.account.findFirst({
    where: {
      user: {
        email: body.email
      }
    }
  });
  return account;
});

export { me_post as default };
//# sourceMappingURL=me.post.mjs.map
