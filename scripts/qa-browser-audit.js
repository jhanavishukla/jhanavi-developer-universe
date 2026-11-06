import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const TARGET_URL = 'http://localhost:5173/';
const SCREENSHOTS_DIR = path.resolve('audit-screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

async function runAudit() {
  console.log('🚀 Starting End-to-End Browser Automation QA Audit...');
  console.log(`Chrome executable: ${CHROME_PATH}`);
  console.log(`Target URL: ${TARGET_URL}`);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleLogs = [];
  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', msg => {
    const text = msg.text();
    consoleLogs.push({ type: msg.type(), text });
    if (msg.type() === 'error') {
      consoleErrors.push(text);
      console.error(`[Browser Console Error]: ${text}`);
    }
  });

  page.on('pageerror', err => {
    pageErrors.push(err.toString());
    console.error(`[Browser Page Error]: ${err.toString()}`);
  });

  // ==========================================
  // TEST 1: INITIAL LOAD & BOOT SEQUENCE
  // ==========================================
  console.log('\n--- TEST 1: Initial Page Load & Boot Sequence ---');
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  const title = await page.title();
  console.log(`Page Title: "${title}"`);

  // Verify boot sequence exists
  const bootScreen = await page.$('.boot-screen');
  console.log(`Boot screen detected: ${!!bootScreen}`);

  // Take screenshot of boot sequence
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '01-boot-sequence.png') });

  // Test skipping or waiting for boot sequence
  const skipBtn = await page.$('.boot-skip-btn');
  if (skipBtn) {
    console.log('Clicking "Skip Boot Sequence" button...');
    await skipBtn.click();
  }
  await new Promise(r => setTimeout(r, 600));

  // ==========================================
  // TEST 2: HERO SCREEN VISUALS & ACTIONS
  // ==========================================
  console.log('\n--- TEST 2: Hero Screen Visuals & Actions ---');
  const heroCard = await page.$('.hero-content-card');
  console.log(`Hero screen card detected: ${!!heroCard}`);

  const heroTitle = await page.$eval('.hero-title-glitch', el => el.textContent);
  console.log(`Hero title rendered: "${heroTitle}"`);

  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '02-hero-screen.png') });

  // Test "Explore My Universe" CTA button
  const exploreBtn = await page.$('.hero-primary-btn');
  console.log(`Clicking "Explore My Universe" button...`);
  await exploreBtn.click();
  await new Promise(r => setTimeout(r, 600));

  // ==========================================
  // TEST 3: DESKTOP OS INTERFACE & ICONS
  // ==========================================
  console.log('\n--- TEST 3: Desktop OS Dashboard ---');
  const desktopWorkspace = await page.$('.desktop-workspace');
  console.log(`Desktop workspace detected: ${!!desktopWorkspace}`);

  const desktopIcons = await page.$$('.desktop-icon-item');
  console.log(`Number of desktop icon shortcuts: ${desktopIcons.length}`);

  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '03-desktop-main.png') });

  // About.exe should be open by default on entry
  const aboutWindow = await page.$('.window-frame');
  console.log(`Initial window opened: ${!!aboutWindow}`);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '04-about-app.png') });

  // Close about window via close button
  const closeBtn = await page.$('.traffic-close');
  if (closeBtn) {
    console.log('Closing About.exe window...');
    await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // ==========================================
  // TEST 4: SKILLS.EXE & CATEGORY FILTERS
  // ==========================================
  console.log('\n--- TEST 4: Skills.exe Application ---');
  // Open Skills.exe by finding desktop icon
  await page.evaluate(() => {
    const icons = Array.from(document.querySelectorAll('.desktop-icon-item'));
    const skillsIcon = icons.find(i => i.textContent.includes('Skills.exe'));
    if (skillsIcon) skillsIcon.click();
  });
  await new Promise(r => setTimeout(r, 500));

  const skillsWindow = await page.$('.skills-container');
  console.log(`Skills container rendered: ${!!skillsWindow}`);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '05-skills-app.png') });

  // Test filter buttons
  console.log('Testing Skills filter tabs...');
  const filterBtns = await page.$$('.skills-container button');
  if (filterBtns.length > 1) {
    await filterBtns[1].click(); // Click first specific category
    await new Promise(r => setTimeout(r, 300));
    await filterBtns[0].click(); // Click 'All'
    await new Promise(r => setTimeout(r, 300));
  }

  // Close skills window
  const closeBtnSkills = await page.$('.traffic-close');
  if (closeBtnSkills) await closeBtnSkills.click();
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 5: PROJECTS.EXE & MODAL INSPECTOR
  // ==========================================
  console.log('\n--- TEST 5: Projects.exe Application ---');
  await page.evaluate(() => {
    const icons = Array.from(document.querySelectorAll('.desktop-icon-item'));
    const projectsIcon = icons.find(i => i.textContent.includes('Projects.exe'));
    if (projectsIcon) projectsIcon.click();
  });
  await new Promise(r => setTimeout(r, 500));

  const projectCards = await page.$$('.project-card');
  console.log(`Rendered project cards: ${projectCards.length}`);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '06-projects-app.png') });

  // Test opening inspect details modal on first project
  console.log('Opening project details modal...');
  const inspectBtns = await page.$$('.project-details-content button[title="Inspect Architectural Details"]');
  if (inspectBtns.length > 0) {
    await inspectBtns[0].click();
    await new Promise(r => setTimeout(r, 500));
    const modalDialog = await page.$('div[role="dialog"][aria-modal="true"]');
    console.log(`Project modal dialog visible: ${!!modalDialog}`);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '07-projects-modal.png') });

    // Test closing modal via Escape key
    console.log('Testing modal close via Escape key...');
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 400));
  }

  // Close projects window
  const closeBtnProj = await page.$('.traffic-close');
  if (closeBtnProj) await closeBtnProj.click();
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 6: ACHIEVEMENTS.EXE
  // ==========================================
  console.log('\n--- TEST 6: Achievements.exe Application ---');
  await page.evaluate(() => {
    const icons = Array.from(document.querySelectorAll('.desktop-icon-item'));
    const achIcon = icons.find(i => i.textContent.includes('Achievements.exe'));
    if (achIcon) achIcon.click();
  });
  await new Promise(r => setTimeout(r, 500));

  const achNodes = await page.$$('.achievement-node');
  console.log(`Achievements nodes rendered: ${achNodes.length}`);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '08-achievements-app.png') });

  const closeBtnAch = await page.$('.traffic-close');
  if (closeBtnAch) await closeBtnAch.click();
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 7: SUPERPOWER.EXE (SIGNATURE FEATURE)
  // ==========================================
  console.log('\n--- TEST 7: Superpower.exe Signature Feature ---');
  await page.evaluate(() => {
    const icons = Array.from(document.querySelectorAll('.desktop-icon-item'));
    const spIcon = icons.find(i => i.textContent.includes('Superpower.exe'));
    if (spIcon) spIcon.click();
  });
  await new Promise(r => setTimeout(r, 500));

  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '09-superpower-initial.png') });

  // Click "Initiate Superpower Scan"
  const scanBtn = await page.$('.superpower-scan-btn');
  console.log(`Initiating Superpower scan button: ${!!scanBtn}`);
  if (scanBtn) {
    await scanBtn.click();
    console.log('Waiting for scanning animation & confetti reveal...');
    await new Promise(r => setTimeout(r, 2000)); // Wait for 1.4s scan + reveal
  }

  const resultCard = await page.$('.superpower-result-card');
  console.log(`Superpower result card rendered: ${!!resultCard}`);
  if (resultCard) {
    const resultTitle = await page.$eval('.superpower-result-title', el => el.textContent);
    console.log(`Unlocked Superpower: "${resultTitle}"`);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '10-superpower-revealed.png') });

    // Test Share / Copy button
    console.log('Testing share / copy button...');
    const shareBtn = await page.$('.superpower-action-btn:nth-child(2)');
    if (shareBtn) {
      await shareBtn.click();
      await new Promise(r => setTimeout(r, 400));
      const toast = await page.$('.toast-notification');
      console.log(`Toast notification popped on share/copy: ${!!toast}`);
    }

    // Test Scan Again (Replay)
    console.log('Testing Scan Again (Replay) button...');
    const replayBtn = await page.$('.superpower-action-btn:nth-child(1)');
    if (replayBtn) {
      await replayBtn.click();
      await new Promise(r => setTimeout(r, 1800));
      const newTitle = await page.$eval('.superpower-result-title', el => el.textContent);
      console.log(`New Superpower after replay: "${newTitle}"`);
    }
  }

  const closeBtnSp = await page.$('.traffic-close');
  if (closeBtnSp) await closeBtnSp.click();
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 8: TERMINAL.EXE
  // ==========================================
  console.log('\n--- TEST 8: Terminal.exe Interactive Commands ---');
  await page.evaluate(() => {
    const icons = Array.from(document.querySelectorAll('.desktop-icon-item'));
    const termIcon = icons.find(i => i.textContent.includes('Terminal.exe'));
    if (termIcon) termIcon.click();
  });
  await new Promise(r => setTimeout(r, 500));

  const termInput = await page.$('.terminal-text-input');
  console.log(`Terminal input field detected: ${!!termInput}`);

  const testCommands = ['help', 'about', 'skills', 'projects', 'achievements', 'ls', 'pwd', 'matrix', 'unknowncmd'];

  for (const cmd of testCommands) {
    await termInput.click({ clickCount: 3 });
    await termInput.type(cmd);
    await page.keyboard.press('Enter');
    await new Promise(r => setTimeout(r, 150));
  }

  // Test Up arrow history
  await page.keyboard.press('ArrowUp');
  const historyCmd = await page.$eval('.terminal-text-input', el => el.value);
  console.log(`ArrowUp command history retrieved: "${historyCmd}"`);

  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '11-terminal-app.png') });

  const closeBtnTerm = await page.$('.traffic-close');
  if (closeBtnTerm) await closeBtnTerm.click();
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 9: CONTACT.EXE
  // ==========================================
  console.log('\n--- TEST 9: Contact.exe Application ---');
  await page.evaluate(() => {
    const icons = Array.from(document.querySelectorAll('.desktop-icon-item'));
    const contactIcon = icons.find(i => i.textContent.includes('Contact.exe'));
    if (contactIcon) contactIcon.click();
  });
  await new Promise(r => setTimeout(r, 500));

  const contactCards = await page.$$('.contact-channel-card');
  console.log(`Contact channel cards: ${contactCards.length}`);
  await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '12-contact-app.png') });

  // Test copy email button
  const copyEmailBtn = await page.$('.contact-channel-card button');
  if (copyEmailBtn) {
    await copyEmailBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const toast = await page.$('.toast-notification');
    console.log(`Toast confirmed email copied: ${!!toast}`);
  }

  const closeBtnContact = await page.$('.traffic-close');
  if (closeBtnContact) await closeBtnContact.click();
  await new Promise(r => setTimeout(r, 400));

  // ==========================================
  // TEST 10: QUICK LAUNCH (START) MENU
  // ==========================================
  console.log('\n--- TEST 10: Quick Launch (Start) Menu ---');
  const startBtn = await page.$('.taskbar-start-btn');
  if (startBtn) {
    await startBtn.click();
    await new Promise(r => setTimeout(r, 300));
    const startMenu = await page.$('.quick-launch-menu');
    console.log(`Start menu open: ${!!startMenu}`);
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, '13-quick-menu.png') });
    await startBtn.click(); // Close
    await new Promise(r => setTimeout(r, 300));
  }

  // ==========================================
  // TEST 11: RESPONSIVE VIEWPORT TESTING
  // ==========================================
  console.log('\n--- TEST 11: Responsive Viewport Testing ---');
  const viewports = [
    { name: '1440-desktop', width: 1440, height: 900 },
    { name: '1280-laptop', width: 1280, height: 800 },
    { name: '768-tablet', width: 768, height: 1024 },
    { name: '390-mobile', width: 390, height: 844 },
    { name: '360-small-mobile', width: 360, height: 740 }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 400));

    // Check for horizontal overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    console.log(`Viewport ${vp.name} (${vp.width}x${vp.height}) - Horizontal Scroll: ${hasHorizontalScroll}`);

    // Take screenshot of desktop at this viewport
    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, `responsive-${vp.name}-desktop.png`) });

    // Open About.exe to check window scaling on mobile
    await page.evaluate(() => {
      const icons = Array.from(document.querySelectorAll('.desktop-icon-item'));
      const aboutIcon = icons.find(i => i.textContent.includes('About.exe'));
      if (aboutIcon) aboutIcon.click();
    });
    await new Promise(r => setTimeout(r, 400));

    await page.screenshot({ path: path.join(SCREENSHOTS_DIR, `responsive-${vp.name}-window.png`) });

    // Close window
    const closeBtn = await page.$('.traffic-close');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 300));
  }

  await browser.close();

  console.log('\n==========================================');
  console.log('QA AUDIT SUMMARY');
  console.log(`Total Console Errors: ${consoleErrors.length}`);
  console.log(`Total Page Errors: ${pageErrors.length}`);
  console.log('Screenshots saved in audit-screenshots/');
  console.log('==========================================');

  return {
    consoleErrors,
    pageErrors,
    screenshotsCount: fs.readdirSync(SCREENSHOTS_DIR).length
  };
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});

