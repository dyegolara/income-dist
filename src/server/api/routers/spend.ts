import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const spendRouter = createTRPCRouter({
  add: protectedProcedure
    .input(z.object({ amount: z.number() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.amount}`,
      };
    }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.spend.findMany();
  }),
});
