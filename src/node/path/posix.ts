// Copyright (c) 2017-2022 Cloudflare, Inc.
// Licensed under the Apache 2.0 license found in the LICENSE file or at:
//     https://opensource.org/licenses/Apache-2.0
//
/* eslint-disable @typescript-eslint/unbound-method */
import { posix, win32 } from 'node-internal:internal_path';
const {
  basename,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  matchesGlob,
  normalize,
  parse,
  relative,
  resolve,
  toNamespacedPath,
  delimiter,
  sep,
} = posix;
export {
  basename,
  dirname,
  extname,
  format,
  isAbsolute,
  join,
  matchesGlob,
  normalize,
  parse,
  relative,
  resolve,
  toNamespacedPath,
  delimiter,
  posix,
  sep,
  win32,
};
export default posix;
