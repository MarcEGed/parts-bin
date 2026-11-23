# Parts Bin

Track your electronics parts. Everything stays on your own device. There's no account and no server, and it works offline.

## Put it online (GitHub Pages, free, about 5 minutes)

1. Go to github.com/new, name the repo `parts-bin`, set it to Public, and create it.
2. Click **uploading an existing file** and drag in every file from this folder (not the folder itself). Commit.
3. Open **Settings → Pages**. Under *Build and deployment*, pick **Deploy from a branch**, then branch `main` and folder `/ (root)`. Save.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/parts-bin/`. Send that link to your friends.

Any static host works the same way, for example Netlify or Cloudflare Pages. It must be served over HTTPS for the offline app to work.

## Installing it (tell your friends)

- **iPhone / iPad (Safari):** Share → Add to Home Screen. This matters: Safari clears website data after 7 days without a visit, but not for home-screen apps.
- **Android (Chrome):** menu → Install app, or the "install app" link at the bottom of Parts Bin.
- **Desktop Chrome / Edge:** the install icon in the address bar, or "install app" at the bottom.

Each person's parts are saved only in their own browser. Nobody else, including whoever hosts the site, can see them.

## Keeping data safe

- Two copies are saved on every change, each with a checksum, and checked every time the app opens. A damaged copy is set aside and the good one is used.
- Up to 10 snapshots (daily, every 20 changes, and before every import, replace, restore or remove-all). Restore them from **history**.
- **backup → save backup (.json)** makes a file you can keep anywhere and import on any device.
- On desktop Chrome/Edge, **backup → turn on auto-backup** writes every change to a file you pick. Pick one inside Dropbox, Google Drive or iCloud Drive and you have an off-device copy automatically.

Clearing the browser's site data deletes the bin, so keep a backup file.

## Updating the site

Replace `index.html` and `sw.js` with the new versions. Open copies show "A new version is ready" and update when the person taps it. Their parts are not touched.

If you edit `index.html` by hand, also change the `VERSION` line at the top of `sw.js`. Otherwise installed copies keep serving the old cached page.
