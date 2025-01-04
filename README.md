# Next.js 15 Environment Variable Access Error

This repository demonstrates a common error encountered in Next.js 15 applications when attempting to access environment variables within page components that lack data fetching methods like `getStaticProps` or `getServerSideProps`.

## Problem

When accessing environment variables directly in a component like `pages/about.js`, without employing data fetching methods, Next.js throws an error because the variable is not readily available in the client-side rendering context.

## Solution

The solution involves using `getStaticProps` or `getServerSideProps` to fetch data, including environment variables, during the build process (static) or at request time (server-side).  This ensures the environment variables are available to the component when rendered.

## Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Observe the error.

## Resolution

The `solution` branch demonstrates the correct approach using `getStaticProps`.