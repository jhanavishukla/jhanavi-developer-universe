import puppeteer from 'puppeteer-core';

async function inspectHero() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();

  for (const dim of [{w: 1440, h: 900}, {w: 1366, h: 768}, {w: 768, h: 1024}, {w: 390, h: 844}, {w: 360, h: 740}]) {
    await page.setViewport({ width: dim.w, height: dim.h });
    await page.goto('http://localhost:5173/');
    await (await page.waitForSelector('.boot-skip-btn')).click();
    await new Promise(r => setTimeout(r, 600));

    const info = await page.evaluate(() => {
      const heroContainer = document.querySelector('.hero-container');
      const card = document.querySelector('.hero-content-card');
      const pinkCard = document.querySelector('.hero-content-card div[style*="236, 72, 153"]');
      const badges = document.querySelector('.hero-content-card div:last-child');

      const cardRect = card ? card.getBoundingClientRect() : null;
      const pinkRect = pinkCard ? pinkCard.getBoundingClientRect() : null;
      const badgesRect = badges ? badges.getBoundingClientRect() : null;

      return {
        containerClientHeight: heroContainer ? heroContainer.clientHeight : 0,
        containerScrollHeight: heroContainer ? heroContainer.scrollHeight : 0,
        containerScrollTop: heroContainer ? heroContainer.scrollTop : 0,
        cardTop: cardRect ? cardRect.top : 0,
        cardBottom: cardRect ? cardRect.bottom : 0,
        cardHeight: cardRect ? cardRect.height : 0,
        pinkBottom: pinkRect ? pinkRect.bottom : 0,
        badgesBottom: badgesRect ? badgesRect.bottom : 0,
        windowHeight: window.innerHeight,
        isClipped: cardRect ? cardRect.bottom > window.innerHeight : false
      };
    });
    console.log(`Viewport ${dim.w}x${dim.h}:`, info);
  }
  await browser.close();
}

inspectHero().catch(console.error);
