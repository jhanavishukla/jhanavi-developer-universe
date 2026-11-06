import puppeteer from 'puppeteer-core';
import path from 'path';

async function testHeroScroll() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();

  const viewports = [
    { name: '1440x900', w: 1440, h: 900 },
    { name: '768x1024', w: 768, h: 1024 },
    { name: '390x844', w: 390, h: 844 }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.w, height: vp.h });
    await page.goto('http://localhost:5173/');
    await (await page.waitForSelector('.boot-skip-btn')).click();
    await new Promise(r => setTimeout(r, 600));

    // Scroll to the bottom of .hero-container
    await page.evaluate(() => {
      const container = document.querySelector('.hero-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    });
    await new Promise(r => setTimeout(r, 400));

    // Inspect coordinates after scrolling to bottom
    const check = await page.evaluate(() => {
      const pinkCard = document.querySelector('.hero-content-card div[style*="236, 72, 153"]');
      const badges = document.querySelector('.hero-content-card > div:last-child');
      const pinkRect = pinkCard ? pinkCard.getBoundingClientRect() : null;
      const badgesRect = badges ? badges.getBoundingClientRect() : null;
      const windowH = window.innerHeight;

      return {
        pinkTop: pinkRect ? pinkRect.top : 0,
        pinkBottom: pinkRect ? pinkRect.bottom : 0,
        pinkFullyVisible: pinkRect ? pinkRect.top >= 0 && pinkRect.bottom <= windowH : false,
        badgesTop: badgesRect ? badgesRect.top : 0,
        badgesBottom: badgesRect ? badgesRect.bottom : 0,
        badgesFullyVisible: badgesRect ? badgesRect.bottom <= windowH : false,
        windowH
      };
    });

    console.log(`Viewport ${vp.name} after scroll:`, check);
    await page.screenshot({ path: `audit-screenshots/hero-scrolled-${vp.name}.png` });
  }

  await browser.close();
}

testHeroScroll().catch(console.error);
