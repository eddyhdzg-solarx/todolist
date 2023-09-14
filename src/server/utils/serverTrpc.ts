import { appRouter } from "../api/root";
import { createTRPCContext } from "../api/trpc";

export function serverTrpc() {
  const ctx = createTRPCContext();
  const caller = appRouter.createCaller(ctx);
  return caller;
}
