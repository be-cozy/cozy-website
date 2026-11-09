// ヒーローに置く2つのサイトの画面を撮り直す。
// 使い方: npx -p playwright node tools/capture-hero.cjs （初回は npx playwright install chromium も必要）
// 撮った PNG は sips などで幅 900px の JPEG にして assets/hero/ に置く。
const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  for (const [name, url] of [['kodomokutsu', 'https://kodomokutsu.com/'], ['diggy', 'https://diggy.jp/']]) {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `assets/hero/${name}.png` });
  }
  await browser.close();
})();
