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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Credentials section

The home page includes a filterable credentials section at `#credentials`.
Update `src/data/credentials.ts` to add or change earned badges. This is a
curated snapshot of the public profiles, not an automatic feed. Badge artwork
loads from Credly and Microsoft Learn, with an icon fallback if unavailable.

The snapshot checked on 6 October 2026 contains five Credly badges and the
22 module badges and three learning-path trophies visible on the Microsoft
profile. Microsoft's profile summary reports 23 badges, but only 22 module
records were publicly visible. The supplied Microsoft print link reported an
unavailable achievement, so links use the working public profile instead.
Microsoft module completions are labelled separately from certifications.

The original Skyscanner/Forage certificate and its preview are in
`public/credentials/`. Add future certificate PDFs and previews there.
