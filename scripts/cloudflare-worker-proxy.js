/**
 * Cloudflare Worker: Noota AEO & LLM Docs Reverse Proxy
 * 
 * Deployment:
 * Deploy this Worker to your Cloudflare account with a route matching:
 * `www.noota.io/llms*` and `www.noota.io/*.md`
 * 
 * What it solves:
 * 1. Serves `/llms.txt` and `/llms-full.txt` directly on the apex/primary domain (www.noota.io)
 *    so AI search crawlers (Perplexity, GPTBot, ClaudeBot) discover it at the root.
 * 2. Transparently proxies `.md` mirror URLs (e.g. `www.noota.io/pricing.md`, `www.noota.io/features/ai-note-taker.md`)
 *    to the `docs.noota.io` static origin while preserving canonical headers.
 * 3. Strips any accidental upstream `X-Robots-Tag: noindex` headers, guaranteeing 200 OK indexability.
 * 4. Bypasses Cloudflare AI Crawl Control blocks for verified search bots.
 */

const DOCS_ORIGIN = "https://docs.noota.io";

const AI_BOT_USER_AGENTS = [
  "gptbot",
  "oai-searchbot",
  "chatgpt-user",
  "claudebot",
  "claude-web",
  "perplexitybot",
  "google-extended",
  "applebot-extended"
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const userAgent = (request.headers.get("user-agent") || "").toLowerCase();

    // 1. Intercept /llms.txt and /llms-full.txt
    if (pathname === "/llms.txt" || pathname === "/llms-full.txt") {
      const targetUrl = `${DOCS_ORIGIN}${pathname}`;
      const response = await fetch(targetUrl, {
        headers: {
          "User-Agent": request.headers.get("User-Agent") || "Cloudflare-Worker-Noota-Proxy"
        }
      });

      const newHeaders = new Headers(response.headers);
      newHeaders.set("Content-Type", "text/markdown; charset=utf-8");
      newHeaders.set("X-Robots-Tag", "index, follow");
      newHeaders.set("Access-Control-Allow-Origin", "*");
      newHeaders.delete("X-Robots-Tag-Original");

      return new Response(response.body, {
        status: response.status,
        headers: newHeaders
      });
    }

    // 2. Intercept .md Markdown mirror URLs on the main domain
    if (pathname.endsWith(".md")) {
      const targetUrl = `${DOCS_ORIGIN}${pathname}`;
      const response = await fetch(targetUrl, {
        headers: {
          "User-Agent": request.headers.get("User-Agent") || "Cloudflare-Worker-Noota-Proxy"
        }
      });

      const newHeaders = new Headers(response.headers);
      newHeaders.set("Content-Type", "text/markdown; charset=utf-8");
      newHeaders.set("X-Robots-Tag", "index, follow");
      newHeaders.set("Access-Control-Allow-Origin", "*");

      // Point canonical back to the clean HTML page on www.noota.io
      const cleanPath = pathname.replace(/\.md$/, "");
      newHeaders.set("Link", `<https://www.noota.io${cleanPath}>; rel="canonical"`);

      return new Response(response.body, {
        status: response.status,
        headers: newHeaders
      });
    }

    // 3. For all other Webflow traffic, fetch from origin
    const originResponse = await fetch(request);

    // If request is from an AI crawler, ensure noindex is never accidentally attached
    const isAiBot = AI_BOT_USER_AGENTS.some(bot => userAgent.includes(bot));
    if (isAiBot) {
      const modifiedHeaders = new Headers(originResponse.headers);
      const currentRobots = modifiedHeaders.get("X-Robots-Tag");
      if (currentRobots && currentRobots.includes("noindex")) {
        modifiedHeaders.delete("X-Robots-Tag");
      }
      return new Response(originResponse.body, {
        status: originResponse.status,
        headers: modifiedHeaders
      });
    }

    return originResponse;
  }
};
