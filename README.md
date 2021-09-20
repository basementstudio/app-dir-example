# next-typescript

![cover image](https://github.com/basementstudio/next-typescript/raw/master/public/og.png 'We Make Cool Sh*t That Performs')

The objective of this boilerplate is to set up everything the developer will need (in terms of configuration) to start a next + typescript project. Eslint, prettier and husky are configured to work independent of the user's IDE configuration (as long as it's vscode).

## Featured Aspects of the Stack

- Typescript
- NextJS

## Things to Note

- It comes with Inter (it's better to host fonts here rather than getting them from google fonts). Remove it if you are not going to use it.
- Pages, components, etc... are located under `/src`. If you are changing this, be sure to also update `tsconfig.json`'s `baseUrl`.

## Get Started

1. Install yarn:

   ```
   npm install -g yarn
   ```

2. Install the dependencies with:

   ```
   yarn
   ```

3. Start developing and watch for code changes:

   ```
   yarn dev
   ```

4. Add project specific data to `src/lib/constants`

---

If you found you needed to make extra config to make this work better, feel free to submit a pr suggesting your changes. Our focus is for you to get up and running with the least steps and burden as possible.

---

Let's go 🚀
