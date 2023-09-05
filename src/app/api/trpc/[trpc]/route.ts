import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
// import { experimental_revalidateEndpoint} from "@trpc/next/app-dir/server";
// import { unstable_cache} from 'next/cache';
import { appRouter, createTRPCContext } from "~/server";

// export const runtime = "edge";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: createTRPCContext,
  });
};

export { handler as GET, handler as POST };
