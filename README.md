# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Steps to create an app like this one:
1. Create T3 app with pnpm: `pnpm create t3-app@latest`
2. Init Prisma: `pnpm prisma init`
3. Create Prisma schema: `pnpm prisma migrate dev --name init`
4. Create Prisma client: `pnpm prisma generate`
5. Push Prisma schema to database: `pnpm prisma db push`
6. Other libraries we use: 
   - Headless UI: `pnpm add @headlessui/react`
   - React Hook Form: `pnpm add react-hook-form`
   - Lodash: `pnpm add lodash @types/lodash`
7. To get `'@/components'` etc, working, add to "compilerOptions" in tsconfig.json:
```json
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
```

### Prisma
- You need to add Models to the `schema.prisma` file for each of your tables.
- Each time you update the models, you need to run `pnpm prisma migrate dev` to update the database.

### NextAuth.js
- You need to add Providers to the `pages/api/auth/[...nextauth].ts` file for each of your authentication providers.
- You need to add the `NEXTAUTH_URL` environment variable to your `.env.local` and `vercel.json` files .
- 