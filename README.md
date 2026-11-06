# 🌌 JHANAVI.EXE — THE DEVELOPER UNIVERSE

> **An interactive, futuristic operating system developer portfolio engineered for the AWS Student Builder Challenge: Build Your Tech Superpower.**

[![AWS Student Builder Challenge](https://img.shields.io/badge/AWS%20Student%20Builder-Challenge%20Entry-FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![AWS Amplify Ready](https://img.shields.io/badge/AWS%20Amplify-Hosting%20Ready-FF9900?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 👩‍💻 Project Overview

- **Owner**: **Jhanavi Shukla**
- **Education**: Second-Year B.Tech in Computer Science & Engineering, **Ramdeobaba University, Nagpur, India**
- **Pillars**: Aspiring AI & Backend Engineer | DSA Problem Solver | AWS Student Builder
- **Motto**: *"Curious mind. Constantly building. Always evolving."*

**JHANAVI.EXE** reimagines the developer portfolio as a high-performance, futuristic cyber-operating system interface. Instead of a flat, traditional static resume, visitors step into an interactive personal universe complete with boot sequences, draggable floating desktop windows, a simulated developer command terminal, realistic skill exploration matrices, and a signature **"Discover Your Developer Superpower"** interactive experience.

---

## 📸 Visual Previews & Screenshots

```
┌────────────────────────────────────────────────────────────────────────┐
│  BIOS 2.5 // CORE_LOADER                                     [ - + x ] │
├────────────────────────────────────────────────────────────────────────┤
│  > JHANAVI.EXE                                                         │
│  [KERNEL] Initializing memory registers & graphics core...             │
│  [UNIVERSE] INITIALIZING DEVELOPER UNIVERSE...                         │
│  [OK] SYSTEM READY. LAUNCHING WORKSPACE...                             │
│  [==========================================================] 100%     │
└────────────────────────────────────────────────────────────────────────┘
```

> *Tip: After launching locally, replace the ASCII representation with screenshots of your running JHANAVI.EXE interface in the `public/screenshots/` directory.*

---

## 🚀 Key Features & OS Applications

### 1. ⚡ Boot Sequence & Hero Landing
- **System Boot Sequence**: Realistic BIOS/OS loader with progress bar and an instant skip feature.
- **Hero Screen**: JHANAVI.EXE branding, authentic introduction, CSS-generated spinning cyber-core, and centralized GitHub/LinkedIn profile connections.

### 2. 🪟 Futuristic Windowed Desktop
- **7 Native `.exe` Applications**:
  1. `About.exe` — Student background at Ramdeobaba University, backend focus, AI curiosity, and engineering values.
  2. `Skills.exe` — Categorized technical stack (Programming, Frontend, Backend & AI, CS Fundamentals, Cloud) with realistic "Active" and "Exploring" tags — **no fabricated percentage bars**.
  3. `Projects.exe` — Featured projects with pure CSS/SVG visual mockups (**zero broken external images**), technology badges, interactive inspection modals, and configurable repository links:
     - **QR Code Generator** (HTML5, Modern CSS, Vanilla JS)
     - **Nexcent Landing Page** (Semantic HTML5, CSS Grid & Flexbox)
     - **DSA Tracker & AI Skills Roadmap** (Vite, React, LocalStorage)
  4. `Achievements.exe` — Milestone timeline: **Smart India Hackathon (SIH) Internal Round Qualifier**, LeetCode algorithmic progression, CodeChef practice, and active participation in the **AWS Student Builder Group**.
  5. `Superpower.exe` — **Signature Creative Feature** for the AWS Student Builder Challenge. An interactive developer personality scanner generating 5 distinct archetypes with sound synthesis, celebration confetti, and native Web Share API with clipboard fallback.
  6. `Terminal.exe` — Simulated Unix-like developer shell supporting `help`, `about`, `skills`, `projects`, `achievements`, `github`, `contact`, `superpower`, `clear`, `date`, `whoami`, with command history navigation (Up/Down arrow keys).
  7. `Contact.exe` — Communication channels with direct mailto generation and one-click copy buttons.
- **Desktop Window Manager**: Draggable header bars, minimize, maximize/restore, close, active window focus elevation, and keyboard accessibility (`Escape` to close).
- **Persistent Taskbar**: Start menu launcher, active window tabs, real-time digital clock, and Web Audio synthesizer toggle.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies Used |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) (Functional Components, Hooks, Context-free modular state) |
| **Tooling & Bundler** | [Vite 6](https://vitejs.dev/) (Ultra-fast HMR, Rollup manual chunking) |
| **Design & UI** | Modern CSS (CSS Custom Properties, Glassmorphism, CSS Grid, Flexbox, Animations) |
| **Icons** | [Lucide React](https://lucide.react.dev/) (Clean, modern cyber icon set) |
| **FX & Audio** | Native HTML5 Canvas Starfield, Canvas-Confetti, Synthesized Web Audio API |
| **Cloud Target** | **AWS Amplify Hosting** (Continuous GitHub integration, CDN distribution, SSL) |

### Clean Project Directory Structure

```
jhanavi-developer-universe/
├── amplify.yml                      # AWS Amplify automated CI/CD build specification
├── index.html                       # Entry HTML with custom SVG favicon and SEO metadata
├── package.json                     # Dependency manifests and scripts
├── vite.config.js                   # Vite bundling config with manual chunk optimization
├── public/
│   ├── favicon.svg                  # Custom J.EXE hexagonal cyber favicon
│   └── robots.txt                   # Search crawler directives
└── src/
    ├── main.jsx                     # React entry point
    ├── App.jsx                      # Master controller (Boot -> Hero -> Desktop state)
    ├── index.css                    # Design system (Variables, Glassmorphism, Window styling)
    ├── data/
    │   └── portfolioData.js         # 🌟 Centralized profile configuration file
    ├── hooks/
    │   └── useSoundEffects.js       # Synthesized Web Audio sound effects (Muteable)
    ├── components/
    │   ├── AmbientBackground.jsx    # Canvas-driven starfield and floating ambient orbs
    │   ├── BootSequence.jsx         # BIOS bootloader with progress bar & skip
    │   ├── HeroScreen.jsx           # Landing screen with cyber visual core & CTA
    │   ├── Desktop.jsx              # Desktop dashboard layout & window coordinator
    │   ├── DesktopIcon.jsx          # Desktop shortcut icon with status badges
    │   ├── WindowFrame.jsx          # Reusable draggable floating window wrapper
    │   ├── Taskbar.jsx              # Bottom system taskbar, clock & quick launcher
    │   └── QuickLaunchMenu.jsx      # Start menu application drawer
    └── sections/
        ├── AboutApp.jsx             # About.exe application
        ├── SkillsApp.jsx            # Skills.exe application
        ├── ProjectsApp.jsx          # Projects.exe showcase with inspection dialog
        ├── AchievementsApp.jsx      # Achievements.exe milestone timeline
        ├── SuperpowerApp.jsx        # Superpower.exe signature scanner
        ├── TerminalApp.jsx          # Terminal.exe simulated developer command shell
        └── ContactApp.jsx           # Contact.exe communication hub
```

---

## ⚙️ Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (tested on v24.x)
- **npm**: v9.0.0 or later

### 2. Clone & Install
```bash
# Navigate to the project directory
cd jhanavi-developer-universe

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Create Production Build
```bash
npm run build
```
Generates an optimized static distribution in the `dist/` directory ready for deployment.

---

## ☁️ Deploying to AWS Amplify Hosting

This application is purpose-built for **AWS Amplify Hosting** via GitHub.

### Step 1: Push Code to Your GitHub Repository
1. Initialize git and commit your files (when ready):
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of JHANAVI.EXE developer universe"
   ```
2. Create a repository on your GitHub account (e.g. `jhanavi-developer-universe`).
3. Connect your local repository and push:
   ```bash
   git remote add origin https://github.com/jhanavishukla/jhanavi-developer-universe.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect AWS Amplify
1. Log in to the [AWS Management Console](https://console.aws.amazon.com/).
2. In the search bar, type and navigate to **AWS Amplify**.
3. Click **Deploy an app** (or **Host web app**).
4. Choose **GitHub** as your Git repository provider and authorize AWS Amplify to access your GitHub account.
5. Select your repository `jhanavi-developer-universe` and branch `main`.

### Step 3: Confirm Build Settings
AWS Amplify automatically detects `amplify.yml` included in the root of this repository:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci --cache .npm --prefer-offline || npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - .npm/**/*
      - node_modules/**/*
```

### Step 4: Deploy & Verify
1. Click **Save and deploy**.
2. AWS Amplify will provision an isolated container, install dependencies, run `npm run build`, and distribute the generated `dist/` bundle to AWS's global Content Delivery Network (CloudFront).
3. Once the build completes, AWS Amplify gives you an SSL-secured live URL (e.g., `https://main.d1234abcd.amplifyapp.com`).

---

## 📝 How to Update Personal Details (Centralized Data)

All personal details, URLs, and achievements are centralized in a single file:
👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

To personalize the portfolio with your real URLs:
1. Open `src/data/portfolioData.js`.
2. Locate `personalProfile.socialLinks`:
   ```javascript
   socialLinks: {
     github: {
       url: "https://github.com/your-username", // Enter your real GitHub URL
       username: "@your-username",
       isConfigured: true // Set to true
     },
     linkedin: {
       url: "https://linkedin.com/in/your-username", // Enter your real LinkedIn URL
       username: "Jhanavi Shukla",
       isConfigured: true // Set to true
     },
     email: {
       address: "your.real.email@example.com", // Enter your real email
       isConfigured: true // Set to true
     }
   }
   ```
3. Update project repository URLs and live demo links under `projectsShowcase`.
4. Run `npm run build` to re-verify.

---

## 🔒 Security & Best Practices

- **Zero API Keys in Client Code**: No secrets or credentials are embedded.
- **No Mock APIs or Broken Links**: All links clearly reflect configuration states; all previews use self-contained CSS visuals.
- **Accessibility**: Includes keyboard navigation (`Escape`, `Enter`, `Tab`), visible focus outlines, and `prefers-reduced-motion` media queries.
- **Performance**: Optimized bundle splitting via Rollup chunks (React vendor, Lucide icons, and application core).

---

## 📜 License & Credits

Created by **Jhanavi Shukla** for the **AWS Student Builder Challenge: Build Your Tech Superpower**.
Licensed under the [MIT License](LICENSE).

