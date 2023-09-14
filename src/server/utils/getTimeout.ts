export async function getTimeout(ms = 3000) {
  const waitPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done!");
    }, ms);
  });

  return await waitPromise;
}
