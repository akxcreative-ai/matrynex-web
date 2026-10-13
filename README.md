# MATRYNEX Electronics — Website

**Tagline:** *"Intelligence in Every Layer."*

Official website and engineering portal for **MATRYNEX Electronics** — featuring an R&D Project Lab, searchable electronic components catalog with affiliate-link support, technical engineering guides, and brand documentation.

---

## 1. Local Development

### Prerequisites
- Node.js 18+ (tested with Node 20/24)
- npm

### Run Locally
```bash
cd matrynex-web
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

### Production Build Verification
```bash
npm run build
npm run start
```

---

## 2. Project Structure

- `app/` — Next.js App Router pages:
  - `/` — Home page (Hero core animation, Featured Projects, Capabilities, Featured Components, Guides, About, Contact CTA)
  - `/store` — Searchable, filterable, sortable Electronic Components Catalog
  - `/store/[slug]` — Individual Component Detail page with specs, datasheet link, and supplier link
  - `/projects` — Project Lab showcase (`PowerSense v1`, `IoT Telemetry System`, `Embedded Controller Suite`)
  - `/projects/[slug]` — Detailed engineering project breakdown
  - `/guides` — Technical Guides index
  - `/guides/[slug]` — Full technical article view
  - `/about` — Brand mission, philosophy, and R&D focus
  - `/contact` — Validated contact form and configuration placeholders
  - `/legal/privacy`, `/legal/terms`, `/legal/affiliate-disclosure` — Editable starter legal pages
- `components/` — Reusable layout (`Navbar`, `Footer`, `Logo`) and page sections
- `lib/data/` — Centralized TypeScript data files (`products.ts`, `projects.ts`, `guides.ts`)

---

## 3. Replacing Placeholders Before Publishing

1. **Affiliate & Supplier Links (`lib/data/products.ts`):**
   - Update `externalUrl` and optional `affiliateUrl` on each product item.
   - Once you verify live prices with suppliers, update `price` and set `priceVerified: true`.
2. **Contact Email (`app/contact/page.tsx` & `components/layout/Footer.tsx`):**
   - Replace `[YOUR-EMAIL@DOMAIN.COM]` with your real operational email address.
3. **Social Media Links (`components/layout/Footer.tsx` & `app/contact/page.tsx`):**
   - Replace `#github-placeholder`, `#twitter-placeholder`, `#linkedin-placeholder`, and `#youtube-placeholder` with your official profile URLs.
4. **Legal Pages (`app/legal/*`):**
   - Review the starter text in Privacy Policy, Terms & Conditions, and Affiliate Disclosure and update `[DATE — update before publishing]`.

---

## 4. Deploying to Vercel & Connecting a Custom Domain

1. Push the `matrynex-web` folder to a GitHub/GitLab/Bitbucket repository.
2. Log in to [Vercel](https://vercel.com) and click **Add New → Project**.
3. Import your repository (set **Root Directory** to `matrynex-web` if pushing the parent repo).
4. Keep the default Next.js build settings (`next build`) and click **Deploy**.
5. **Custom Domain:**
   - In your Vercel project dashboard, go to **Settings → Domains**.
   - Enter your domain (e.g., `matrynex.com`) and follow the DNS instructions to point your `A` record (`76.76.21.21`) and `CNAME` (`cname.vercel-dns.com`) at your registrar.
   - Update `metadataBase` in `app/layout.tsx` to match your production domain.
