export const getURL = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return process.env.VERCEL_URL; // SSR should use vercel url

  return `http://localhost:${process.env.PORT}`; // dev SSR should use localhost
};
