This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Remove Boilerplate

in globals.css remove all code after directives

page.tsx

function HomePage() {
return <h1 className='text-3xl'>HomePage</h1>;
}

export default HomePage;
layout.tsx
export const metadata: Metadata = {
title: 'Tindahan',
description: 'A nifty store built with Next.js',
};

Create Pages
about

admin

cart

favorites

orders

products

reviews

new file - pageName/page.tsx

function AboutPage() {
return <div>AboutPage</div>;
}
export default AboutPage;
