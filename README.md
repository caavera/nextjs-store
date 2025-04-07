# NextJS E-Commerce Store

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js 15"/>
  <img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass"/>
  <img src="https://img.shields.io/badge/Shopify-API-7AB55C?style=for-the-badge&logo=shopify" alt="Shopify API"/>
  <img src="https://img.shields.io/badge/Edge-Computing-orange?style=for-the-badge" alt="Edge Computing"/>
</div>

<p align="center">A modern e-commerce platform built with Next.js 15, featuring server components, edge computing, and integration with Shopify's API.</p>

## 🚀 Live Demo

<div align="center">
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/View_Demo-Vercel-black?style=for-the-badge&logo=vercel" alt="Live Demo on Vercel"/>
  </a>
</div>

## ✨ Features

- **Fast Page Loads** - Leveraging Next.js's built-in performance optimizations
- **Responsive Design** - Mobile-first UI that works on all devices
- **Server Components** - Utilizing Next.js 15's server component architecture
- **Edge Computing** - Reduced latency with edge functions
- **Dynamic Product Catalog** - Connected to Shopify's robust API
- **Cart & Checkout** - Seamless shopping experience
- **Type Safety** - Built with TypeScript for improved developer experience

## 🛠️ Technologies

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Sass/SCSS
- **E-commerce Backend**: Shopify API
- **Performance**: Edge Computing
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## 🚦 Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/nextjs-store.git
cd nextjs-store
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your Shopify API credentials.

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
nextjs-store/
├── src/                 # Source directory
│   ├── app/             # Next.js App Router pages
│   │   ├── (home)/      # Home page route group
│   │   ├── api/         # API endpoints
│   │   ├── login/       # Login page
│   │   ├── my-account/  # User account pages
│   │   ├── product/     # Product detail pages
│   │   ├── signup/      # Signup page
│   │   ├── store/       # Store pages
│   │   ├── error.tsx    # Error boundary
│   │   ├── layout.tsx   # Root layout
│   │   └── not-found.tsx # 404 page
│   ├── actions/         # Server actions
│   ├── components/      # Reusable UI components
│   ├── config/          # App configuration
│   ├── graphql/         # GraphQL queries and mutations
│   ├── hooks/           # Custom React hooks
│   ├── middleware.ts    # Next.js middleware
│   ├── sass/            # Global SCSS styles
│   ├── services/        # API services
│   └── utils/           # Utility functions
├── public/              # Static assets
├── .env.example         # Environment variables template
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── types.d.ts           # Global type definitions
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">
  Built as a learning project to explore Next.js 15 features.
</p>
