/**
 * Fitopia Landing — Real App Screenshot Generator
 *
 * Usage:
 *   1. Ensure Fitopia React App is running on http://localhost:3000
 *      (or set FITOPIA_APP_URL)
 *   2. npm run generate:screenshots
 *
 * Captures desktop + mobile viewports for all key screens.
 * Injects JWT for protected routes.
 */

import { chromium, type Browser, type Page, type BrowserContext } from "playwright";
import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "screenshots");
const APP_URL = process.env.FITOPIA_APP_URL || "http://localhost:3000";
const GYM_ID = process.env.FITOPIA_GYM_ID || "1";

function loadTokens(): { access: string; refresh: string } | null {
  if (process.env.FITOPIA_ACCESS_TOKEN && process.env.FITOPIA_REFRESH_TOKEN) {
    return {
      access: process.env.FITOPIA_ACCESS_TOKEN,
      refresh: process.env.FITOPIA_REFRESH_TOKEN,
    };
  }
  const tokenFile = join(__dirname, ".tokens.json");
  if (existsSync(tokenFile)) {
    return JSON.parse(readFileSync(tokenFile, "utf-8"));
  }
  return null;
}

const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 390, height: 844 },
} as const;

interface ScreenDef {
  name: string;
  path: string;
  protected?: boolean;
  waitFor?: string;
  delay?: number;
  fullPage?: boolean;
}

const SCREENS: ScreenDef[] = [
  { name: "welcome", path: "/welcome", waitFor: "body", delay: 800 },
  { name: "login", path: "/login", waitFor: "body", delay: 600 },
  { name: "register", path: "/register", waitFor: "body", delay: 600 },
  { name: "offline", path: "/offline", waitFor: "body", delay: 400 },
  { name: "home", path: "/home", protected: true, waitFor: "body", delay: 1500 },
  { name: "all-gyms", path: "/gym/all", protected: true, waitFor: "body", delay: 1200 },
  { name: "gym-map", path: "/gym-map", protected: true, waitFor: "body", delay: 2000 },
  { name: "gym-detail", path: `/gym/${GYM_ID}`, protected: true, waitFor: "body", delay: 1500 },
  { name: "profile", path: "/profile", protected: true, waitFor: "body", delay: 1000 },
  { name: "subscriptions", path: "/subscriptions", protected: true, waitFor: "body", delay: 1000 },
  { name: "subscription-history", path: "/subscriptions/history", protected: true, waitFor: "body", delay: 1000 },
  { name: "payment", path: "/subscriptions/payment", protected: true, waitFor: "body", delay: 1000 },
  { name: "tokens", path: "/gym-access/tokens", protected: true, waitFor: "body", delay: 1000 },
];

async function injectAuth(context: BrowserContext, tokens: { access: string; refresh: string }) {
  await context.addInitScript(
    ({ access, refresh }) => {
      localStorage.setItem("access", access);
      localStorage.setItem("fitopia_auth_token", access);
      localStorage.setItem("fitopia_access_token", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("fitopia_refresh_token", refresh);
      localStorage.setItem("fitopia_remember_me", "1");
    },
    tokens
  );
}

async function captureScreen(
  page: Page,
  screen: ScreenDef,
  viewport: keyof typeof VIEWPORTS,
  outDir: string
) {
  const url = `${APP_URL}${screen.path}`;
  console.log(`  → [${viewport}] ${screen.name} (${url})`);

  await page.setViewportSize(VIEWPORTS[viewport]);
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 }).catch(() =>
    page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 })
  );

  if (screen.waitFor) {
    await page.waitForSelector(screen.waitFor, { timeout: 10000 }).catch(() => {});
  }
  if (screen.delay) {
    await page.waitForTimeout(screen.delay);
  }

  await page.evaluate(() => {
    document.querySelectorAll("[data-offline], .offline-indicator, .update-prompt").forEach((el) => {
      (el as HTMLElement).style.display = "none";
    });
  }).catch(() => {});

  const suffix = viewport === "mobile" ? "-mobile" : "";
  const filePath = join(outDir, `${screen.name}${suffix}.png`);

  await page.screenshot({
    path: filePath,
    fullPage: screen.fullPage ?? false,
    type: "png",
  });

  const webpPath = join(outDir, `${screen.name}${suffix}.webp`);
  try {
    const sharp = (await import("sharp")).default;
    await sharp(filePath).webp({ quality: 82, effort: 4 }).toFile(webpPath);
    const { unlinkSync } = await import("fs");
    unlinkSync(filePath);
    console.log(`    saved ${screen.name}${suffix}.webp`);
  } catch {
    const { copyFileSync } = await import("fs");
    copyFileSync(filePath, webpPath.replace(".webp", ".png"));
    console.log(`    saved ${screen.name}${suffix}.png (webp conversion unavailable)`);
  }
}

async function ensureAppRunning(): Promise<boolean> {
  try {
    const res = await fetch(APP_URL, { method: "HEAD", signal: AbortSignal.timeout(3000) });
    return res.ok || res.status < 500;
  } catch {
    return false;
  }
}

async function main() {
  console.log("Fitopia Screenshot Generator\n");
  console.log(`App URL: ${APP_URL}`);
  console.log(`Output:  ${OUT_DIR}\n`);

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const running = await ensureAppRunning();
  if (!running) {
    console.error(
      `❌ Fitopia app is not reachable at ${APP_URL}\n` +
        `   Start it with: cd fitopia-react-app && npm run dev\n` +
        `   Or set FITOPIA_APP_URL`
    );
    process.exit(1);
  }
  console.log("✓ App is reachable\n");

  const tokens = loadTokens();
  if (!tokens) {
    console.warn(
      "⚠ No auth tokens found. Protected routes may redirect to /welcome.\n" +
        "  Set FITOPIA_ACCESS_TOKEN + FITOPIA_REFRESH_TOKEN or create scripts/.tokens.json\n"
    );
  } else {
    console.log("✓ Auth tokens loaded\n");
  }

  const browser: Browser = await chromium.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--no-sandbox"],
  });

  try {
    const publicCtx = await browser.newContext({
      locale: "fa-IR",
      colorScheme: "dark",
      deviceScaleFactor: 2,
    });
    const publicPage = await publicCtx.newPage();

    const authCtx = await browser.newContext({
      locale: "fa-IR",
      colorScheme: "dark",
      deviceScaleFactor: 2,
    });
    if (tokens) await injectAuth(authCtx, tokens);
    const authPage = await authCtx.newPage();

    for (const screen of SCREENS) {
      const page = screen.protected ? authPage : publicPage;
      for (const vp of ["mobile", "desktop"] as const) {
        try {
          await captureScreen(page, screen, vp, OUT_DIR);
        } catch (err) {
          console.error(`  ✗ Failed ${screen.name} [${vp}]:`, (err as Error).message);
        }
      }
    }

    await publicCtx.close();
    await authCtx.close();
  } finally {
    await browser.close();
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    screens: SCREENS.map((s) => s.name),
    viewports: Object.keys(VIEWPORTS),
  };
  writeFileSync(join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));

  console.log("\n✓ Screenshot generation complete.");
  console.log(`  Files in ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
