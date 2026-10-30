# Maryem Essam — THE SOCIAL EDIT
## Premium Personal Portfolio Website

An editorial-inspired personal brand portfolio website designed for **Maryem Essam**, Social Media Specialist and Moderator. Built with **Astro**, **TypeScript**, and modern semantic CSS.

---

## 🎨 Creative Concept & Visual Identity

- **Main Tagline**: *"I MAKE PEOPLE STOP & LOOK."*
- **Supporting Statement**: *"Creative content. Meaningful conversations. Better brand connections."*
- **Art Direction**: Boutique creative agency combined with contemporary magazine layout. Warm paper background (`#F6F0E6`), ink black typography (`#171717`), electric tangerine accents (`#F45B35`), soft sage secondary sections (`#D9E5D1`), and signal yellow highlights (`#F5C94A`).
- **Typography**: Space Grotesk (headings), DM Sans (body & UI), Playfair Display (editorial italic emphasis).

---

## 🚀 Quick Start (Run Locally)

Make sure you have Node.js (v20+) and npm installed.

```bash
# 1. Navigate to the project directory
cd C:\Users\Admin\.gemini\antigravity\scratch\maryem-essam-portfolio

# 2. Install dependencies (already installed during setup)
npm install

# 3. Start development server
npm run dev
```

Open your browser at `http://localhost:4321`.

---

## 📦 Production Build

```bash
# Generate static HTML, CSS, and assets in the dist/ folder
npm run build

# Preview the static build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

The project includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Deployment Steps:

1. Create a new repository on GitHub (e.g. `the-social-edit` or `maryem-essam-portfolio`).
2. Add your GitHub remote and push:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow will automatically build and publish the site.

---

## ✏️ Editing Portfolio Information

All personal details, services, sample work, credentials, and FAQs are centralized in:

📂 `src/data/portfolio.ts`

The site features a bespoke typographic and graphic identity system centered around Maryem's personal brand "THE SOCIAL EDIT", eliminating the need for generic stock or placeholder photos. All content can be tailored directly in `src/data/portfolio.ts`.
