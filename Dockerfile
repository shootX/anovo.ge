# პირველი ეტაპი - დამოკიდებულებების დაყენება და ბილდი
FROM node:20-alpine AS builder

WORKDIR /app

# კეშირების გაუმჯობესებისთვის ჯერ package.json-ის კოპირება
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# პროექტის დანარჩენი ფაილების კოპირება
COPY . .

# აპლიკაციის ბილდი
RUN pnpm build

# მეორე ეტაპი - მხოლოდ მუშაობისთვის საჭირო ფაილების კოპირება
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# საჭირო ფაილების კოპირება
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

# მხოლოდ პროდაქშენისთვის საჭირო დამოკიდებულებების დაყენება
RUN npm install -g pnpm && pnpm install --prod

# ლიმიტირებული უფლებების მქონე მომხმარებლის შექმნა
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

USER nextjs

# აპლიკაციის გაშვება 3000 პორტზე
EXPOSE 3000

# აპლიკაციის გაშვება
CMD ["pnpm", "start"] 