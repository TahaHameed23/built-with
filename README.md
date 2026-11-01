# Built With Badge

Add a small, customizable "Built with / by" badge to a website. Use the Svelte component, the framework-free npm API, or a single CDN script.

## Install

```sh
npm install built-with
```

### Svelte

```svelte
<script>
    import { Badge } from "built-with";
</script>

<Badge
    builtWith="Svelte"
    by="Your name"
    text="Built"
    showWith={true}
    position="bottom-right"
    theme="purple"
    fontFamily="Georgia, serif"
    fontSize="13px"
    href="https://example.com"
/>
```

`showWith` controls whether `" with"` is added to the `text` label (default: `true`). If the label already ends in `"with"`, it is not duplicated. Set `showWith={false}` to omit it. `href` is optional and accepts HTTP(S) URLs or relative URLs. The badge supports `top-left`, `top-right`, `bottom-left`, and `bottom-right` positions. Choose a built-in `theme` (`dark`, `light`, `blue`, `purple`, `green`, `orange`, `pink`, or `slate`) instead of entering color codes. You can also use any CSS color name such as `"tomato"`, or a CSS variable such as `"var(--brand-color)"`. Explicit `background` and `color` values override the selected theme.

Customize typography with `fontFamily`, `fontSize`, and `fontWeight`. For example, `fontFamily: "Georgia, serif"` or `fontFamily: "inherit"` works without adding a font dependency.

### Vanilla JavaScript

```js
import { mountBadge } from "built-with/vanilla";

const badge = mountBadge({
    builtWith: "Svelte",
    by: "Your name",
    text: "Built",
    showWith: false,
    position: "bottom-right",
    theme: "blue",
    fontFamily: "Arial, sans-serif",
    fontSize: "13px",
    href: "https://example.com",
});

// Remove it when it is no longer needed.
badge.destroy();
```

`mountBadge` can also be used before `document.body` exists. It mounts when the DOM is ready. Calling `destroy()` before then cancels the pending mount.

### CDN script

Add this script near the end of `<body>`. It adds the badge automatically; no framework or stylesheet is required.

```html
<script
    src="https://cdn.jsdelivr.net/npm/built-with@0.0.1/dist/cdn/badge.js"
    data-builtwith="Svelte"
    data-by="Your name"
    data-text="Built"
    data-show-with="false"
    data-position="bottom-right"
    data-theme="green"
    data-font-family="Arial, sans-serif"
    data-font-size="13px"
    data-href="https://example.com"
></script>
```

The script also works in `<head>`. Use the latest published version in the URL, and prefer pinning a specific version in production.

| Option       | CDN attribute      | Default                 |
| ------------ | ------------------ | ----------------------- |
| `builtWith`  | `data-builtwith`   | `⚡`                    |
| `by`         | `data-by`          | `someone`               |
| `text`       | `data-text`        | `Built with`            |
| `showWith`   | `data-show-with`   | `true`                  |
| `position`   | `data-position`    | `bottom-right`          |
| `theme`      | `data-theme`       | `dark`                  |
| `background` | `data-bg`          | theme default           |
| `color`      | `data-color`       | theme default           |
| `fontFamily` | `data-font-family` | `system-ui, sans-serif` |
| `fontSize`   | `data-font-size`   | `12px`                  |
| `fontWeight` | `data-font-weight` | `500`                   |
| `href`       | `data-href`        | none                    |

Only HTTP(S) and relative links are accepted for `href`. Unsupported positions fall back to `bottom-right`; unsupported themes use `dark`. CSS named colors and variables can also be passed through `background` and `color` when you want a custom color without hexadecimal notation.

## Build and publish

```sh
npm run release:check
npm login
npm run release:publish
```

`npm run release:check` runs `npm pack --dry-run`, which builds the package and lets you review the exact files before publishing. `npm run release:publish` publishes the package; npm runs the package preparation and validation hooks automatically.

Before the first release, confirm the `built-with` name is available on npm and update the package version as needed. The package is MIT-licensed; see [LICENSE](./LICENSE).
