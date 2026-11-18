# CIRCE

CIRCE is a personal food and workout diary. Type a meal in English or Indonesian, review the matched portions and save it in one go. The first visit shows a labelled sample day. The first saved entry or profile opens a clean diary.

## Live app

[CIRCE on GitHub Pages](https://cleandesignuk.github.io/circe/) is the standalone edition. The repository uses GitHub Actions as its Pages publishing source. Each push to `main` tests the tracker, creates a static build with `node scripts/build-pages.mjs`, and publishes the resulting `out/pages` folder. All app assets use relative URLs.

The Pages edition saves personal data in the current browser. Use **My profile → Export diary** and **Import diary** to carry records across devices or a domain change.

## Using the app

Open **My profile** to enter adult measurements, usual activity, weight goal and daily movement minutes, or choose a custom calorie target. **Quick meal log** recognises a mixed list of foods and quantities. Check each serving and use **Change match** or **Enter label** to correct it. Food entries show the source, preparation and available nutrients. Enter a numerical goal weight in kilograms. Save weigh-ins to track the distance to your goal. Tap a calendar date to see that day’s shield knot and log or edit workouts. Log a workout to fill the movement knot.

The tracker combines a curated bilingual food and restaurant catalogue with a separate local index of UK and Indonesian packaged products. See `public/packaged-index-LICENCE.txt` for attribution and reuse terms. The recipe estimator combines ingredients, portions and added cooking oil, and can retain an ingredient list inside parentheses as one drink or dish. Selected UK, Indonesian and international brands have source-specific portions. Restaurant dishes without published nutritional values are labelled as estimates. On-demand international packaged-food search uses Open Food Facts (ODbL). Coverage and regional formulations vary. Product imagery is illustrative.

The optional server-backed edition’s authenticated diaries sync to per-user Cloudflare D1 records. The browser retains a local copy and queues changes while disconnected. Preview sessions without a hosted identity use device storage. Sample entries are virtual and never written to the database. No personal meals or measurements are bundled in the repository.

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
