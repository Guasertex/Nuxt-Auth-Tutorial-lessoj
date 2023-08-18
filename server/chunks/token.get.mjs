import { eventHandler } from 'h3';
import { g as getToken } from './nitro/node-server.mjs';
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

const token_get = eventHandler((event) => getToken({ event }));

export { token_get as default };
//# sourceMappingURL=token.get.mjs.map
