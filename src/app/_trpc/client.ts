import { AppRouter } from "@/trpc";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});
