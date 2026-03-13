// Copyright (c) 2024 Cloudflare, Inc.
// Licensed under the Apache 2.0 license found in the LICENSE file or at:
//     https://opensource.org/licenses/Apache-2.0

import { WorkerEntrypoint, RpcTarget } from 'cloudflare:workers';

function base64ToBlob(base64, mimeType) {
  const binaryString = atob(base64); // Decode Base64
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new Blob([bytes], { type: mimeType });
}

const SUPPORTED_FORMATS = [
  {
    extension: '.md',
    mimeType: 'text/markdown',
  },
  {
    extension: '.png',
    mimeType: 'image/png',
  },
];

/** RPC target returned by toMarkdown() */
class ToMarkdownInstance extends RpcTarget {
  async transform(files, options) {
    const input = Array.isArray(files) ? files : [files];
    const result = [];

    for (const file of input) {
      if (file.name === 'headers.md') {
        const headers = { 'content-type': 'application/json' };
        if (options?.extraHeaders) {
          Object.assign(headers, options.extraHeaders);
        }
        result.push({
          name: file.name,
          mimeType: file.blob.type,
          format: 'markdown',
          tokens: 0,
          data: headers,
        });
      } else {
        const text = await file.blob.text();
        result.push({
          name: file.name,
          mimeType: file.blob.type,
          format: 'markdown',
          tokens: 0,
          data: text,
        });
      }
    }

    if (Array.isArray(files)) return result;
    return result[0];
  }

  async supported() {
    return SUPPORTED_FORMATS;
  }
}

/** WorkerEntrypoint that supports both fetch (legacy) and RPC paths */
export class ServiceEntrypoint extends WorkerEntrypoint {
  toMarkdown() {
    return new ToMarkdownInstance();
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/to-everything/markdown/transformer') {
      const body = await request.json();
      const decoder = new TextDecoder('utf-8');

      const result = [];

      for (const file of body.files) {
        if (file.name === 'headers.md') {
          const newHeaders = new Headers(request.headers);
          newHeaders.delete('content-length');
          result.push({
            name: file.name,
            mimeType: file.mimeType,
            format: 'markdown',
            tokens: 0,
            data: Object.fromEntries(newHeaders.entries()),
          });
        } else {
          const fileblob = await base64ToBlob(file.data, file.mimeType);
          const arr = await fileblob.arrayBuffer();
          result.push({
            name: file.name,
            mimeType: file.mimeType,
            format: 'markdown',
            tokens: 0,
            data: decoder.decode(arr),
          });
        }
      }

      return Response.json({
        success: true,
        result: result,
      });
    }

    if (url.pathname === '/to-everything/markdown/supported') {
      return Response.json({
        success: true,
        result: SUPPORTED_FORMATS,
      });
    }
  }
}

export default {
  async fetch(request, env, ctx) {
    const entrypoint = new ServiceEntrypoint(ctx, env);
    return entrypoint.fetch(request);
  },
};
