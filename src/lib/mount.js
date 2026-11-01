import { normalizeHref } from "./validate-href.js";
import { resolveBadgeTheme } from "./badge-theme.js";

const positions = new Set([
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
]);

const styleId = "built-with-badge-styles";

const styles = `
.built-with-badge {
    position: fixed;
    z-index: var(--built-with-z-index, 9999);
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 10px;
    border-radius: 6px;
    background: var(--built-with-bg, #333);
    color: var(--built-with-color, #fff);
    font: var(--built-with-font-weight, 500) var(--built-with-font-size, 12px)/1.4 var(--built-with-font-family, system-ui, sans-serif);
    text-decoration: none;
    box-shadow: 0 2px 8px rgb(0 0 0 / 18%);
}
.built-with-badge--top-left { top: 10px; left: 10px; }
.built-with-badge--top-right { top: 10px; right: 10px; }
.built-with-badge--bottom-left { bottom: 10px; left: 10px; }
.built-with-badge--bottom-right { right: 10px; bottom: 10px; }
.built-with-badge:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
}
`;

function installStyles() {
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = styles;
    (document.head || document.documentElement).append(style);
}

function normalizeOptions(options) {
    if (!options || typeof options !== "object" || Array.isArray(options)) {
        throw new TypeError("Badge options must be an object.");
    }

    const requestedPosition = options.position ?? "bottom-right";
    const theme = resolveBadgeTheme(options.theme);

    return {
        builtWith: String(options.builtWith ?? "⚡"),
        by: String(options.by ?? "someone"),
        text: String(options.text ?? "Built with"),
        background: String(options.background ?? theme.background),
        color: String(options.color ?? theme.color),
        position: positions.has(requestedPosition) ? requestedPosition : "bottom-right",
        href: normalizeHref(options.href),
        zIndex: Number.isFinite(options.zIndex) ? options.zIndex : 9999,
        fontFamily: String(options.fontFamily ?? "system-ui, sans-serif"),
        fontSize: String(options.fontSize ?? "12px"),
        fontWeight: String(options.fontWeight ?? "500"),
    };
}

/**
 * Mount a customizable attribution badge in the current document.
 * @param {import("./mount.js").BadgeOptions} [options]
 * @returns {import("./mount.js").BadgeHandle}
 */
export function mountBadge(options = {}) {
    if (typeof document === "undefined") {
        throw new Error("mountBadge can only be used in a browser.");
    }

    const badgeOptions = normalizeOptions(options);
    let element;
    let destroyed = false;

    const mount = () => {
        if (destroyed) return;

        installStyles();
        element = document.createElement(badgeOptions.href ? "a" : "div");
        element.className = `built-with-badge built-with-badge--${badgeOptions.position}`;
        element.setAttribute(
            "aria-label",
            `${badgeOptions.text} ${badgeOptions.builtWith} by ${badgeOptions.by}`,
        );
        if (badgeOptions.href) element.setAttribute("href", badgeOptions.href);
        element.style.setProperty("--built-with-bg", badgeOptions.background);
        element.style.setProperty("--built-with-color", badgeOptions.color);
        element.style.setProperty("--built-with-z-index", String(badgeOptions.zIndex));
        element.style.setProperty("--built-with-font-family", badgeOptions.fontFamily);
        element.style.setProperty("--built-with-font-size", badgeOptions.fontSize);
        element.style.setProperty("--built-with-font-weight", badgeOptions.fontWeight);

        const label = document.createElement("span");
        label.textContent = badgeOptions.text;
        const builtWith = document.createElement("strong");
        builtWith.textContent = badgeOptions.builtWith;
        const by = document.createElement("span");
        by.append("by ");
        const author = document.createElement("strong");
        author.textContent = badgeOptions.by;
        by.append(author);

        element.append(label, builtWith, by);
        document.body.append(element);
    };

    if (document.body) {
        mount();
    } else {
        document.addEventListener("DOMContentLoaded", mount, { once: true });
    }

    return {
        destroy() {
            destroyed = true;
            document.removeEventListener("DOMContentLoaded", mount);
            element?.remove();
        },
    };
}
