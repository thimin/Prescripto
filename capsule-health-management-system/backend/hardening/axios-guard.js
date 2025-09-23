// axios-guard.js
import axios from "axios";
const DEV_ALLOW_LOCAL = process.env.DEV_ALLOW_LOCAL === "true";

axios.defaults.maxRedirects = 0;
axios.defaults.timeout = 10_000;

axios.interceptors.request.use((cfg) => {
    const base = process.env.AXIOS_BASE || undefined;
    const u = new URL(cfg.url, cfg.baseURL || base);

    // allow http ONLY for localhost in dev; otherwise require https
    const isLocal =
        ["localhost", "127.0.0.1", "::1"].includes(u.hostname);

    if (!(DEV_ALLOW_LOCAL && isLocal && u.protocol === "http:")) {
        if (u.protocol !== "https:") {
        throw new Error("Blocked non-HTTPS request");
        }
    }

    // host allowlist (if you set AXIOS_SAFE_HOSTS)
    const safe = new Set(
        (process.env.AXIOS_SAFE_HOSTS || "")
        .split(",")
        .map(s => s.trim())
        .filter(Boolean)
    );
    if (safe.size && !safe.has(u.hostname)) {
        throw new Error(`Blocked host: ${u.hostname}`);
    }

    cfg.maxRedirects = 0;
    return cfg;
});
