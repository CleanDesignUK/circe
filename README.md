# CIRCE

CIRCE is a personal food and workout diary. Type a meal in English or Indonesian, review the matched portions and save it in one go. The first visit shows a labelled sample day. The first saved entry or profile opens a clean diary.

## Using the app

Open **My profile** to enter adult measurements, usual activity, weight goal and daily movement minutes, or choose a custom calorie target. **Quick meal log** recognises a mixed list of foods and quantities. Check each serving and use **Change match** or **Enter label** to correct it. Food entries show the source, preparation and available nutrients. Tap a calendar date to log or edit that day. Log a workout to fill the movement knot.

The bundled food catalogue includes 132 items with English and Indonesian aliases. Selected UK, Indonesian and international brands have source-specific portions. Restaurant dishes without published nutritional values are labelled as estimates. On-demand international packaged-food search uses Open Food Facts (ODbL). Coverage and regional formulations vary. Product imagery is illustrative.

Authenticated diaries sync to per-user Cloudflare D1 records. The browser retains a local copy and queues changes while disconnected. Preview sessions without a hosted identity use device storage. Sample entries are virtual and never written to the database. No personal meals or measurements are bundled in the repository.

## Local development

Requires Node 22.13+ and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. UI assets and food recognition are in `public/`. Server routes are in `app/api/`. The Sites host supplies the authenticated user headers. Deploy behind the equivalent trusted identity boundary if self-hosting.

```sh
node scripts/check-tracker.mjs
npm run build
```

To initialise local authenticated storage after building, use the generated Wrangler config.

```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_greedy_young_avengers.sql
```

See each individual food entry for its nutrition provenance. Inter Variable is bundled under the SIL Open Font Licence in `public/assets/inter-license.txt`.
