const packageName = "@tahahameed23/built-with";
const cdnUrl =
    "https://unpkg.com/@tahahameed23/built-with@0.0.1/dist/cdn/badge.js";

function svelteAttribute(name, value) {
    return `  ${name}=${JSON.stringify(value)}`;
}

function htmlAttribute(name, value) {
    return `  ${name}=${JSON.stringify(String(value))}`;
}

function hasValidHref(options, hrefError) {
    return !hrefError && typeof options.href === "string" && options.href.length > 0;
}

export function buildSvelteSnippet(options, hrefError = false) {
    const fontWeight = Number(options.fontWeight);
    const lines = [
        "<script>",
        `  import { Badge } from ${JSON.stringify(packageName)};`,
        "<" + "/script>",
        "",
        "<Badge",
        svelteAttribute("builtWith", options.builtWith),
        svelteAttribute("by", options.by),
        svelteAttribute("text", options.text),
        `  showWith={${Boolean(options.showWith)}}`,
        svelteAttribute("position", options.position),
        svelteAttribute("theme", options.theme),
    ];

    if (options.background) {
        lines.push(svelteAttribute("background", options.background));
    }
    if (options.color) {
        lines.push(svelteAttribute("color", options.color));
    }

    lines.push(
        svelteAttribute("fontFamily", options.fontFamily),
        svelteAttribute("fontSize", options.fontSize),
        `  fontWeight={${Number.isFinite(fontWeight) ? fontWeight : JSON.stringify(options.fontWeight)}}`,
    );

    if (hasValidHref(options, hrefError)) {
        lines.push(svelteAttribute("href", options.href));
    }

    lines.push(`  zIndex={${Number(options.zIndex) || 9999}}`, "/>");
    return lines.join("\n");
}

export function buildReactSnippet(options, hrefError = false) {
    const lines = [
        'import { useEffect } from "react";',
        `import { mountBadge } from ${JSON.stringify(`${packageName}/vanilla`)};`,
        "",
        "export function BuiltWithBadge() {",
        "  useEffect(() => {",
        "    const badge = mountBadge({",
        `      builtWith: ${JSON.stringify(options.builtWith)},`,
        `      by: ${JSON.stringify(options.by)},`,
        `      text: ${JSON.stringify(options.text)},`,
        `      showWith: ${Boolean(options.showWith)},`,
        `      position: ${JSON.stringify(options.position)},`,
        `      theme: ${JSON.stringify(options.theme)},`,
    ];

    if (options.background) {
        lines.push(`      background: ${JSON.stringify(options.background)},`);
    }
    if (options.color) {
        lines.push(`      color: ${JSON.stringify(options.color)},`);
    }

    lines.push(
        `      fontFamily: ${JSON.stringify(options.fontFamily)},`,
        `      fontSize: ${JSON.stringify(options.fontSize)},`,
        `      fontWeight: ${JSON.stringify(options.fontWeight)},`,
    );

    if (hasValidHref(options, hrefError)) {
        lines.push(`      href: ${JSON.stringify(options.href)},`);
    }

    lines.push(
        `      zIndex: ${Number(options.zIndex) || 9999},`,
        "    });",
        "",
        "    return () => badge.destroy();",
        "  }, []);",
        "",
        "  return null;",
        "}",
    );

    return lines.join("\n");
}

export function buildCdnSnippet(options, hrefError = false) {
    const lines = [
        "<script",
        `  src=${JSON.stringify(cdnUrl)}`,
        htmlAttribute("data-builtwith", options.builtWith),
        htmlAttribute("data-by", options.by),
        htmlAttribute("data-text", options.text),
        htmlAttribute("data-show-with", Boolean(options.showWith)),
        htmlAttribute("data-position", options.position),
        htmlAttribute("data-theme", options.theme),
    ];

    if (options.background) {
        lines.push(htmlAttribute("data-bg", options.background));
    }
    if (options.color) {
        lines.push(htmlAttribute("data-color", options.color));
    }

    lines.push(
        htmlAttribute("data-font-family", options.fontFamily),
        htmlAttribute("data-font-size", options.fontSize),
        htmlAttribute("data-font-weight", options.fontWeight),
    );

    if (hasValidHref(options, hrefError)) {
        lines.push(htmlAttribute("data-href", options.href));
    }

    lines.push(htmlAttribute("data-z-index", Number(options.zIndex) || 9999));
    lines.push("></" + "script>");
    return lines.join("\n");
}
