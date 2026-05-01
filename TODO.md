# Fix: Projects Collection Empty Error

## Steps
- [x] Step 1: Fix `Banner.astro` — Add null check for `latestProject` to prevent crash

- [x] Step 2: Fix `content.config.ts` — Remove `id` from schema, change `z.date()` to `z.coerce.date()`, fix `z` import

- [x] Step 3: Clear `.astro/` cache — Force Content Layer regeneration

- [ ] Step 4: Test — Run `npm run dev` and verify projects load correctly
