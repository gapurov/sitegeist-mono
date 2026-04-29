# Sitegeist Monorepo

Vite+ workspace for Sitegeist and the local packages it develops against.

## Structure

- `apps/sitegeist` - browser extension from `badlogic/sitegeist`
- `apps/sitegeist-site` - marketing site from `badlogic/sitegeist/site`
- `packages/mini-lit` - local `@mariozechner/mini-lit`
- `packages/pi-mono/packages/*` - local Pi packages used by Sitegeist

## Development

- Install dependencies:

```bash
vp install
```

- Start the extension watcher:

```bash
vp run dev
```

- Start extension, site, and dependency watchers:

```bash
vp run dev:all
```

- Check and build:

```bash
vp run ready
```

Use `vp add --workspace --filter <package> <dependency>` for local workspace links. Do not add `mini-lit` or `pi-mono` packages as sibling `file:../...` dependencies.
